import React, { useEffect, useState } from 'react';
import Tables from './Tables';
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
     
        const response = await axios.get('http://localhost:3000/users');
        setData(response.data);
   
    };

    fetchData();
  }, []);

const deleted=async (id)=>{
  const confirms=window.confirm('Are you sure you want to delete this data?')

  if(confirms){

    axios.delete(`http://localhost:3000/users/${id}`)
    setData(p=>p.filter(i=>i.id!=id))
  }
}
const Edit=async (id)=>{
  const confirms=window.confirm('Are you sure you want to delete this data?')

  if(confirms){

    axios.put(`http://localhost:3000/users/${id}`)
    setData(p=>p.filter(i=>i.id!=id))
  alert
    navigate('/')
  }
}
  

  const handleAdd = () => {
    navigate('/');
  };

  return (
    <Container>
      <Typography
        variant='h5'
        sx={{ mb: 3, textAlign: 'center', backgroundColor: 'black', color: 'white', py: 2, borderRadius: 1 }}
      >
        Rendering Data Through API Integration with All CRUD Operations
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button
          color='secondary'
          variant='contained'
          onClick={handleAdd}
          sx={{ px: 3, py: 1.5 }}
        >
          <AddIcon /> Add New User
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tables data={data} onDelete={deleted} onEdit={Edit} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
