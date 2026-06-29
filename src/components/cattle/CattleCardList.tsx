"use client";

import { Box, Card, CardContent, Typography, IconButton, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cattle } from "@/lib/types";
import { genderLabel } from "@/lib/constants";
import { formatAge } from "@/lib/format";
import StatusChip from "./StatusChip";

interface Props {
  items: Cattle[];
  onEdit: (c: Cattle) => void;
  onDelete: (c: Cattle) => void;
}

export default function CattleCardList({ items, onEdit, onDelete }: Props) {
  return (
    <Stack spacing={1.5}>
      {items.map((c) => (
        <Card key={c.id} variant="outlined">
          <CardContent sx={{ pb: 1.5 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box>
                <Typography sx={{ fontweight: 700 }}>
                  {c.tagId}{c.name ? ` · ${c.name}` : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {c.breed} · {genderLabel(c.gender)} · {formatAge(c.dateOfBirth)}
                </Typography>
              </Box>
              <StatusChip status={c.status} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <IconButton size="small" aria-label="Edit" onClick={() => onEdit(c)}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="error" aria-label="Delete" onClick={() => onDelete(c)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}