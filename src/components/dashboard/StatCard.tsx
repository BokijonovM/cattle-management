"use client";
import { Card, CardContent, Box, Typography, SvgIconProps } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  label: string;
  value: string | number;
  icon: ReactElement<SvgIconProps>;
  color?: string;
}

export default function StatCard({ label, value, icon, color = "primary.main" }: Props) {
  return (
    <Card>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            width: 48, height: 48, borderRadius: 2, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            bgcolor: color, color: "#fff",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontweight: 700, lineHeight: 1.1 }}>{value}</Typography>
          <Typography variant="body2" color="text.secondary">{label}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}