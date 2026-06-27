"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { makeStore, type AppStore } from "@/store";
import { hydrate } from "@/store/cattleSlice";
import { loadCattle, saveCattle } from "@/store/localStorage";
import theme from "@/theme/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [store] = useState<AppStore>(() => makeStore());

  useEffect(() => {
    const persisted = loadCattle();
    if (persisted) store.dispatch(hydrate(persisted));
    else saveCattle(store.getState().cattle.items);

    const unsubscribe = store.subscribe(() => {
      saveCattle(store.getState().cattle.items);
    });
    return unsubscribe;
  }, [store]);

  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}