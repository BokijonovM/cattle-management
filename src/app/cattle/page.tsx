"use client";

import { useMemo, useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "@/store/hooks";
import { Cattle } from "@/lib/types";
import CattleFilters, { Filters } from "@/components/cattle/CattleFilters";
import CattleTable from "@/components/cattle/CattleTable";
import CattleCardList from "@/components/cattle/CattleCardList";
import CattleFormDialog from "@/components/cattle/CattleFormDialog";
import DeleteConfirmDialog from "@/components/cattle/DeleteConfirmDialog";

const emptyFilters: Filters = { search: "", status: "all", gender: "all" };

export default function CattlePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const cattle = useAppSelector((s) => s.cattle.items);

  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Cattle | null>(null);
  const [deleting, setDeleting] = useState<Cattle | null>(null);

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return cattle.filter((c) => {
      const matchesSearch =
        !q ||
        c.tagId.toLowerCase().includes(q) ||
        (c.name?.toLowerCase().includes(q) ?? false) ||
        c.breed.toLowerCase().includes(q);
      const matchesStatus = filters.status === "all" || c.status === filters.status;
      const matchesGender = filters.gender === "all" || c.gender === filters.gender;
      return matchesSearch && matchesStatus && matchesGender;
    });
  }, [cattle, filters]);

  const handleAdd = () => { setEditing(null); setFormOpen(true); };
  const handleEdit = (c: Cattle) => { setEditing(c); setFormOpen(true); };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2, mb: 1 }}>
        <Box>
          <Typography variant="h5" sx={{ mb: 0 }}>
            Chorva royxati
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jami {cattle.length} ta hayvon
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd}>
          Yangi qoshish
        </Button>
      </Box>

      <CattleFilters filters={filters} onChange={setFilters} />

      <Box sx={{ mt: 1 }}>
        {filtered.length === 0 ? (
          <Box sx={{ py: 8, textAlign: "center", color: "text.secondary" }}>
            <Typography>Hech narsa topilmadi.</Typography>
          </Box>
        ) : isMobile ? (
          <CattleCardList items={filtered} onEdit={handleEdit} onDelete={setDeleting} />
        ) : (
          <CattleTable items={filtered} onEdit={handleEdit} onDelete={setDeleting} />
        )}
      </Box>

      <CattleFormDialog open={formOpen} editing={editing} onClose={() => setFormOpen(false)} />
      <DeleteConfirmDialog cattle={deleting} onClose={() => setDeleting(null)} />
    </Box>
  );
}