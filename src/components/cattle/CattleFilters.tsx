"use client";

import { Box, MenuItem, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CattleStatus, Gender } from "@/lib/types";
import { STATUSES, GENDERS } from "@/lib/constants";

export interface Filters {
  search: string;
  status: CattleStatus | "all";
  gender: Gender | "all";
}

interface Props {
  filters: Filters;
  onChange: (f: Filters) => void;
}

export default function CattleFilters({ filters, onChange }: Props) {
  return (
    <Box sx={{ display: "grid", gap: 1, gridTemplateColumns: { xs: "1fr", sm: "2fr 1fr 1fr" } }}>
      <TextField
        size="small"
        placeholder="Tag, ism yoki zot bo'yicha qidirish"
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextField
        size="small" select label="Status"
        value={filters.status}
        onChange={(e) => onChange({ ...filters, status: e.target.value as Filters["status"] })}
      >
        <MenuItem value="all">Barchasi</MenuItem>
        {STATUSES.map((s) => <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>)}
      </TextField>
      <TextField
        size="small" select label="Jins"
        value={filters.gender}
        onChange={(e) => onChange({ ...filters, gender: e.target.value as Filters["gender"] })}
      >
        <MenuItem value="all">Barchasi</MenuItem>
        {GENDERS.map((g) => <MenuItem key={g.value} value={g.value}>{g.label}</MenuItem>)}
      </TextField>
    </Box>
  );
}