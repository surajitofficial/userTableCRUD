import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles(() => ({
  dialogContent: {
    padding: '1rem', 
  },
  inputField: {
    marginBottom: '1rem', 
    marginTop: '1rem', 
  },
  buttonContainer: {
    display: 'flex',
    // justifyContent: 'space-between', 
    marginTop: '1rem', 
  },
}));

const EditUserDialog = ({ open, onClose, user, onSave }) => {
  const classes = useStyles();

  const [editedUser, setEditedUser] = useState(user || {});

  useEffect(() => {
    // Update editedUser when user changes
    setEditedUser(user || {});
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit User</DialogTitle><br/>
      <DialogContent className={classes.dialogContent}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              className={classes.inputField}
              fullWidth
              label="First Name"
              name="firstName"
              value={editedUser.firstName || ''}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={classes.inputField}
              fullWidth
              label="Last Name"
              name="lastName"
              value={editedUser.lastName || ''}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputField}
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={editedUser.age || ''}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputField}
              fullWidth
              label="Gender"
              name="gender"
              value={editedUser.gender || ''}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputField}
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={editedUser.email || ''}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputField}
              fullWidth
              label="Address"
              name="address"
              multiline
              rows={4}
              value={editedUser.address || ''}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            style={{ marginRight: '1rem' }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserDialog;
