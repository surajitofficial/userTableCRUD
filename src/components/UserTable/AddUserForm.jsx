import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '16px',
    maxWidth: 400,
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
}));

const AddUserForm = ({ addUser }) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    address: '',
    // Add other required fields here and initialize them
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    address: '',
    // Add other error states for the new fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear validation error when the user provides input or corrects input value
    setErrors({ ...errors, [name]: '' });

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    let valid = true;
    const newErrors = { ...errors };

    if (!user.firstName) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    }

    if (!user.lastName) {
      newErrors.lastName = 'Last Name is required';
      valid = false;
    }

    if (!user.age) {
      newErrors.age = 'Age is required';
      valid = false;
    } else if (isNaN(user.age) || user.age <= 0) {
      newErrors.age = 'Invalid Age';
      valid = false;
    }

    if (!user.gender) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }

    if (!user.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      newErrors.email = 'Invalid Email';
      valid = false;
    }

    if (!user.address) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    // Add validation for other required fields here

    if (valid) {
      addUser(user);
      setUser({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: '',
        address: '',
        // Clear values for other required fields
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom component="div" align="center">
        User Details Form
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
          error={!!errors.age}
          helperText={errors.age}
        />
        <FormControl error={!!errors.gender}>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={user.gender}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Address"
          name="address"
          multiline
          rows={4}
          value={user.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
        {/* Add other required fields here */}
        <Button type="submit" variant="contained" color="primary">
          Add User
        </Button>
      </form>
    </Paper>
  );
};

export default AddUserForm;
