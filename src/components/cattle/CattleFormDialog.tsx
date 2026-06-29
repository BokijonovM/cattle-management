"use client";

import { useEffect, useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button,
  TextField, MenuItem, Box, Autocomplete, IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "@/store/hooks";
import { addCattle, updateCattle } from "@/store/cattleSlice";
import { Cattle, CattleFormValues, CattleStatus, Gender } from "@/lib/types";
import { BREEDS, GENDERS, STATUSES } from "@/lib/constants";
import { cattleSchema } from "@/lib/schema";

interface Props {
  open: boolean;
  editing: Cattle | null;
  onClose: () => void;
}

interface FormState {
  tagId: string; name: string; breed: string; gender: Gender;
  dateOfBirth: string; status: CattleStatus; weight: string; notes: string;
}

const emptyForm: FormState = {
  tagId: "", name: "", breed: "", gender: "female",
  dateOfBirth: "", status: "healthy", weight: "", notes: "",
};

export default function CattleFormDialog({ open, editing, onClose }: Props) {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!open) return;
    if (editing) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm({
        tagId: editing.tagId,
        name: editing.name ?? "",
        breed: editing.breed,
        gender: editing.gender,
        dateOfBirth: editing.dateOfBirth,
        status: editing.status,
        weight: editing.weight?.toString() ?? "",
        notes: editing.notes ?? "",
      });
    } else {
      setForm(emptyForm);
    }
    setErrors({});
  }, [open, editing]);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = () => {
    const candidate: CattleFormValues = {
      tagId: form.tagId,
      name: form.name || undefined,
      breed: form.breed,
      gender: form.gender,
      dateOfBirth: form.dateOfBirth,
      status: form.status,
      weight: form.weight ? Number(form.weight) : undefined,
      notes: form.notes || undefined,
    };

    const result = cattleSchema.safeParse(candidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (editing) dispatch(updateCattle({ id: editing.id, values: result.data }));
    else dispatch(addCattle(result.data));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {editing ? "Edit cattle" : "Add new cattle"}
        <IconButton onClick={onClose} aria-label="Close" size="small"><CloseIcon /></IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, pt: 1 }}>
          <TextField
            label="Tag ID *"
            value={form.tagId}
            onChange={(e) => setField("tagId", e.target.value)}
            error={!!errors.tagId} helperText={errors.tagId} fullWidth
          />
          <TextField
            label="Name (optional)"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)} fullWidth
          />
          <Autocomplete
            freeSolo
            options={BREEDS}
            value={form.breed}
            onInputChange={(_, v) => setField("breed", v)}
            renderInput={(params) => (
              <TextField {...params} label="Breed *" error={!!errors.breed} helperText={errors.breed} />
            )}
          />
          <TextField
            select label="Gender *"
            value={form.gender}
            onChange={(e) => setField("gender", e.target.value as Gender)} fullWidth
          >
            {GENDERS.map((g) => <MenuItem key={g.value} value={g.value}>{g.label}</MenuItem>)}
          </TextField>
          <TextField
            label="Date of birth *" type="date"
            value={form.dateOfBirth}
            onChange={(e) => setField("dateOfBirth", e.target.value)}
            error={!!errors.dateOfBirth} helperText={errors.dateOfBirth}
            slotProps={{ inputLabel: { shrink: true } }} fullWidth
          />
          <TextField
            select label="Status *"
            value={form.status}
            onChange={(e) => setField("status", e.target.value as CattleStatus)} fullWidth
          >
            {STATUSES.map((s) => <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>)}
          </TextField>
          <TextField
            label="Weight (kg, optional)" type="number"
            value={form.weight}
            onChange={(e) => setField("weight", e.target.value)}
            error={!!errors.weight} helperText={errors.weight} fullWidth
          />
          <Box sx={{ gridColumn: { sm: "1 / -1" } }}>
            <TextField
              label="Notes (optional)"
              value={form.notes}
              onChange={(e) => setField("notes", e.target.value)}
              multiline minRows={2} fullWidth
            />
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {editing ? "Save" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}