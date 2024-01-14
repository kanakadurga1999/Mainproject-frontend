// StudentDashboard.js

import React, { useState ,useEffect} from 'react';
import { Container, Typography, TextField, Button, MenuItem, FormControl, InputLabel, Select, Grid, Paper } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useForm } from './useForm';

const batches = [
  'KKEM March CSA',
  'KKEM March DSA',
  'KKEM March MLAI',
  'KKEM March FSD',
  'KKEM March ST',
];

const StudentDashboard = () => {
  const [value, handleChange] = useForm({
    name: '',
    phoneNumber: '',
    email: '',
    dob: '',
    batch: '',
    gender: '',
  });

  // const [formSubmitted, setFormSubmitted] = useState(false);

  //   const handleChange = (field, value) => {
  //     setFormData({
  //       ...formData,
  //       [field]: value,
  //     });
  //   };

   const navigate = useNavigate();

    const axiosPrivate = useAxiosPrivate();

    useEffect(()=> {
      if(!localStorage.getItem('accessToken')){
        navigate('/')
      }
    },[])

  const submitHandler = async () =>{
    await axiosPrivate.post('/api/v1/dash/students', value)
    .then((response) => {
        toast.success(response.data.message, {position:"top-right"})
        navigate('/dash/students')
    }).catch(error => console.log(error))
  
    
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Grid>
        <Typography variant="h4" gutterBottom>
          Student Dashboard
        </Typography>
        </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  required
                  value={value.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  fullWidth
                  required
                  value={value.phoneNumber}
                  onChange={ handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  required
                  type="email"
                  value={value.email}
                  onChange={ handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="DOB"
                  fullWidth
                  required
                  type="date"
                  value={value.dob}
                  onChange={ handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Batch Name</InputLabel>
                  <Select
                    value={value.batch}
                    onChange={ handleChange}
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
                    value={value.gender}
                    onChange={ handleChange}
                    required
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" onClick={submitHandler}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          
        
          <Typography variant="h6">
            Form submitted successfully. You cannot edit the form anymore.
          </Typography>
        
      </Paper>
    </Container>
  );
};

export default StudentDashboard;
