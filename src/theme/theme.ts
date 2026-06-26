"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2e7d32" }, // qishloq xo'jaligi yashili
    secondary: { main: "#6d4c41" },
    background: { default: "#f6f8f6" },
  },
  shape: { borderRadius: 12 },
  typography: { h5: { fontWeight: 700 }, h6: { fontWeight: 600 } },
});

export default theme;