"use client";

import {
  Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, IconButton, Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cattle } from "@/lib/types";
import { genderLabel } from "@/lib/constants";
import { formatAge, formatDate } from "@/lib/format";
import StatusChip from "./StatusChip";

interface Props {
  items: Cattle[];
  onEdit: (c: Cattle) => void;
  onDelete: (c: Cattle) => void;
}

export default function CattleTable({ items, onEdit, onDelete }: Props) {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tag</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Breed</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Birth date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((c) => (
            <TableRow key={c.id} hover>
              <TableCell sx={{ fontWeight: 600 }}>{c.tagId}</TableCell>
              <TableCell>{c.name || "—"}</TableCell>
              <TableCell>{c.breed}</TableCell>
              <TableCell>{genderLabel(c.gender)}</TableCell>
              <TableCell>{formatAge(c.dateOfBirth)}</TableCell>
              <TableCell>{formatDate(c.dateOfBirth)}</TableCell>
              <TableCell><StatusChip status={c.status} /></TableCell>
              <TableCell align="right">
                <Tooltip title="Edit">
                  <IconButton size="small" onClick={() => onEdit(c)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton size="small" color="error" onClick={() => onDelete(c)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}