import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const DeleteUserDialog = ({ open, onClose, user, onDelete }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        {user && (
          <p>
            Are you sure you want to delete the user {user.firstName}{' '}
            {user.lastName}?
          </p>
        )}
        {/* Add other confirmation details here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;
