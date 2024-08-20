import { Button, Container, Grid, Paper, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
    const {id}=useParams();
    console.log(id)
const [updated,setUpdated]=useState([]);
const navigate=useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+id)
        .then((res)=>setUpdated(res.data))
        .catch((err)=>console.log(err))
    },[])
  


    const finalupdate=(e)=>{
        e.preventDefault()
axios.put('http://localhost:3000/users/'+id,updated)
.then((res)=>alert("data is updated"))
navigate('/home')
.catch((err)=>alert('data is not updated'))
    }
  return (


    <>
      <h1>helo</h1>

      <Container maxWidth="sm">
      <Paper elevation={24} sx={{ padding: '2rem', borderRadius: '1rem', marginTop: '2rem' }}>
        <h1>Update Form:</h1>
        <form onSubmit={finalupdate}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={(e) => setUpdated({ ...updated, name: e.target.value })}
                             
                value={updated.name}
                sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='username'
                value={updated.username}
                onChange={(e) => setUpdated({ ...updated, username: e.target.value })}
                
                sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='email'
                value={updated.email}
                onChange={(e) => setUpdated({ ...updated, email: e.target.value })}
                              sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              name='phone'
              value={updated.phone}
                fullWidth
                onChange={(e) => setUpdated({ ...updated, phone: e.target.value })}
                              sx={{ mb: '1rem' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button color="success"
                type='submit'
                variant='contained'
                fullWidth
              >
                <UpdateIcon/> Edit data
              </Button>
            </Grid>
            
          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  )
}

export default Edit
