"use client";
import { Chip } from "@mui/material";
import { CattleStatus } from "@/lib/types";
import { statusMeta } from "@/lib/constants";

export default function StatusChip({ status }: { status: CattleStatus }) {
  const meta = statusMeta(status);
  return <Chip size="small" label={meta.label} color={meta.color} variant="outlined" />;
}