"use client";

import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button,
} from "@mui/material";
import { useAppDispatch } from "@/store/hooks";
import { removeCattle } from "@/store/cattleSlice";
import { Cattle } from "@/lib/types";

interface Props {
  cattle: Cattle | null;
  onClose: () => void;
}

export default function DeleteConfirmDialog({ cattle, onClose }: Props) {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    if (cattle) dispatch(removeCattle(cattle.id));
    onClose();
  };

  return (
    <Dialog open={!!cattle} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Ochirishni tasdiqlang</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <strong>{cattle?.tagId}</strong> raqamli chorvani ochirmoqchimisiz?
          Bu amalni ortga qaytarib bolmaydi.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose}>Bekor qilish</Button>
        <Button color="error" variant="contained" onClick={handleDelete}>Ochirish</Button>
      </DialogActions>
    </Dialog>
  );
}