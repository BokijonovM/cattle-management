import { Cattle } from "@/lib/types";

const KEY = "cattle-management:v1";

export function loadCattle(): Cattle[] | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Cattle[]) : undefined;
  } catch {
    return undefined;
  }
}

export function saveCattle(cattle: Cattle[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(cattle));
  } catch {
    // localStorage to'lgan/bloklangan bo'lsa — jim o'tkazib yuboramiz
  }
}