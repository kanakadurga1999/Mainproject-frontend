// StudentDashboard.js

import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Paper } from '@mui/material';

const batches = [
  'KKEM March CSA',
  'KKEM March DSA',
  'KKEM March MLAI',
  'KKEM March FSD',
  'KKEM March ST',
];

const StudentDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    dob: '',
    batch: '',
    gender: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here.
    // For now, just set formSubmitted to true.
    setFormSubmitted(true);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Student Dashboard
        </Typography>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="DOB"
                  fullWidth
                  required
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleChange('dob', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Batch Name</InputLabel>
                  <Select
                    value={formData.batch}
                    onChange={(e) => handleChange('batch', e.target.value)}
                    required
                  >
                    {batches.map((batch) => (
                      <MenuItem key={batch} value={batch}>
                        {batch}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    value={formData.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    required
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Typography variant="h6">
            Form submitted successfully. You cannot edit the form anymore.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default StudentDashboard;
