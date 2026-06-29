"use client";

import { Box, Typography } from "@mui/material";
import Dashboard from "@/components/dashboard/Dashboard";

export default function HomePage() {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 0 }} gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        Fermangizning umumiy holati
      </Typography>
      <Dashboard />
    </Box>
  );
}