"use client";
import { createTheme } from "@mui/material/styles";

const brand = {
  main: "#7c3aed",
  dark: "#6d28d9",
  darker: "#5b21b6",
  light: "#a78bfa",
  lighter: "#c4b5fd",
  subtle: "#ddd6fe",
  bg: "#ede9fe",
  overlay: "rgba(124, 58, 237, 0.06)",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.main,
      dark: brand.dark,
      light: brand.light,
      contrastText: "#ffffff",
    },
    secondary: { main: "#d97706" },
    background: { default: "#f9fafb", paper: "#ffffff" },
    text: { primary: "#111827", secondary: "#374151" },
    divider: "#e5e7eb",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Geist", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#111827",
          boxShadow: "none",
          borderBottom: "1px solid #e5e7eb",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "1px solid #e5e7eb",
          boxShadow: "8px 0 40px rgba(0, 0, 0, 0.04)",
        },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: "1px solid #e5e7eb",
          borderRadius: 14,
          boxShadow: "0 1px 4px rgba(11, 6, 19, 0.04)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: { outlined: { borderColor: "#e5e7eb" } },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10 },
        contained: {
          "&.MuiButton-containedPrimary": {
            background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
            boxShadow: "0 3px 10px rgba(124, 58, 237, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #6d28d9, #5b21b6)",
              boxShadow: "0 4px 12px rgba(124, 58, 237, 0.35)",
            },
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: "2px 8px",
          color: "#374151",
          transition: "background-color 0.15s ease, color 0.15s ease",
          "& .MuiListItemIcon-root": {
            color: "#6b7280",
            minWidth: 40,
            transition: "color 0.15s ease",
          },
          "&:hover": {
            backgroundColor: brand.overlay,
            color: brand.main,
            "& .MuiListItemIcon-root": { color: brand.main },
          },
          "&.Mui-selected": {
            backgroundColor: brand.bg,
            color: brand.main,
            "& .MuiListItemIcon-root": { color: brand.main },
            "& .MuiListItemText-primary": { fontWeight: 600 },
            "&:hover": { backgroundColor: brand.subtle },
          },
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        hover: {
          "&:hover": { backgroundColor: brand.overlay + " !important" },
        },
      },
    },

    MuiDialog: {
      styleOverrides: { paper: { borderRadius: 16 } },
    },
  },
});

export default theme;