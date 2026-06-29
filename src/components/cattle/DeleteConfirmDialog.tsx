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
      <DialogTitle>Confirm deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the cattle with tag <strong>{cattle?.tagId}</strong>?
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" variant="contained" onClick={handleDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}