"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { makeStore, type AppStore } from "@/store";
import { hydrate } from "@/store/cattleSlice";
import { loadCattle, saveCattle } from "@/store/localStorage";
import theme from "@/theme/theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) storeRef.current = makeStore();
  const store = storeRef.current;

  useEffect(() => {
    // 1) localStorage'da ma'lumot bo'lsa — tiklaymiz, bo'lmasa seed'ni saqlaymiz
    const persisted = loadCattle();
    if (persisted) store.dispatch(hydrate(persisted));
    else saveCattle(store.getState().cattle.items);

    // 2) har bir o'zgarishda localStorage'ga yozamiz
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