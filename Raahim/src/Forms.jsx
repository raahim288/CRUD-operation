import { Button, Container, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add'; 
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Forms = () => {
  const [add, setAdd] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users', add)
      .then((res) => {
        alert("User successfully added");
        navigate('/home');
      })
      .catch((err) => alert("User not successfully added"));
  };

  const handleChangePage = () => {
    navigate('/home');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={24} sx={{ padding: '2rem', borderRadius: '1rem', marginTop: '2rem' }}>
        <h1><u>Fill this form to add the new user:</u></h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setAdd({ ...add, name: e.target.value })}
                label='Name'
                sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setAdd({ ...add, username: e.target.value })}
                label='Username'
                sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setAdd({ ...add, email: e.target.value })}
                label='Email'
                sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setAdd({ ...add, phone: e.target.value })}
                label='Phone'
                sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button color="success"
                type='submit'
                variant='contained'
                fullWidth
              >
                <AddIcon/> Add the User
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button color="success"
                onClick={handleChangePage}
                variant='contained'
                fullWidth
              >
               <CheckBoxIcon/> Previous User
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Forms;
