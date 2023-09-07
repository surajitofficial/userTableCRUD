import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Button,
  IconButton, // Import IconButton
} from '@mui/material';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery
import AddUserForm from './AddUserForm';
import EditUserDialog from './EditUserDialog';
import DeleteUserDialog from './DeleteUserDialog';
import EditIcon from '@mui/icons-material/Edit'; // Import the edit icon
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

// Import localStorage functions
import { saveUsers, loadUsers } from '../localStorage';

const UserTable = () => {
  const [users, setUsers] = useState(loadUsers()); // Load users from localStorage
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    // Save users to localStorage whenever it changes
    saveUsers(users);
  }, [users]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setIsDeleteDialogOpen(true);
  };

  return (
    <Paper
      style={{
        margin: '20px auto',
        padding: '20px',
        maxWidth: isSmallScreen ? '100%' : '1200px',
      }}
    >
      <Grid container spacing={isSmallScreen ? 1 : 2}>
        <Grid item xs={12} md={4}>
            <AddUserForm addUser={(user) => setUsers([...users, user])} />
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" component="div" align="center">
              User Management
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? users.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : users
                  ).map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.firstName}</TableCell>
                      <TableCell>{user.lastName}</TableCell>
                      <TableCell>{user.age}</TableCell>
                      <TableCell>{user.gender}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          onClick={() => handleEditClick(index)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          onClick={() => handleDeleteClick(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
        <EditUserDialog
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          user={users[editIndex]}
          onSave={(editedUser) => {
            const updatedUsers = [...users];
            updatedUsers[editIndex] = editedUser;
            setUsers(updatedUsers);
            setIsEditDialogOpen(false);
          }}
        />
        <DeleteUserDialog
          open={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          user={users[deleteIndex]}
          onDelete={() => {
            const updatedUsers = [...users];
            updatedUsers.splice(deleteIndex, 1);
            setUsers(updatedUsers);
            setIsDeleteDialogOpen(false);
          }}
        />
      </Grid>
    </Paper>
  );
};

export default UserTable;
