import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

const UserRow = ({ user, onEdit, onDelete }) => {
  return (
    <TableRow>
      <TableCell>{user.firstName}</TableCell>
      <TableCell>{user.lastName}</TableCell>
      <TableCell>{user.age}</TableCell>
      <TableCell>{user.gender}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.address}</TableCell>
      <TableCell>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete}>Delete</Button>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
