import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Cattle, CattleFormValues } from "@/lib/types";
import { seedCattle } from "@/lib/seed";

interface CattleState {
  items: Cattle[];
}

const initialState: CattleState = { items: seedCattle };

const cattleSlice = createSlice({
  name: "cattle",
  initialState,
  reducers: {
    // localStorage'dan holatni tiklash
    hydrate(state, action: PayloadAction<Cattle[]>) {
      state.items = action.payload;
    },
    addCattle: {
      reducer(state, action: PayloadAction<Cattle>) {
        state.items.unshift(action.payload);
      },
      prepare(values: CattleFormValues) {
        const now = new Date().toISOString();
        return {
          payload: { ...values, id: nanoid(), createdAt: now, updatedAt: now } as Cattle,
        };
      },
    },
    updateCattle(
      state,
      action: PayloadAction<{ id: string; values: CattleFormValues }>
    ) {
      const idx = state.items.findIndex((c) => c.id === action.payload.id);
      if (idx !== -1) {
        state.items[idx] = {
          ...state.items[idx],
          ...action.payload.values,
          updatedAt: new Date().toISOString(),
        };
      }
    },
    removeCattle(state, action: PayloadAction<string>) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
});

export const { hydrate, addCattle, updateCattle, removeCattle } =
  cattleSlice.actions;
export default cattleSlice.reducer;