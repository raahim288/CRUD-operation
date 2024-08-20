import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Tables({ data }) {

  const navigate=useNavigate();

  const onDelete=(id)=>{
axios.delete('http://localhost:3000/users/'+id)
.then((res)=>alert("data is permanently deletd"))
navigate('/')
.catch((err)=>console.log(err))
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name:</StyledTableCell>
            <StyledTableCell align="right">Username:</StyledTableCell>
            <StyledTableCell align="right">Email:</StyledTableCell>
            <StyledTableCell align="right">Phone:</StyledTableCell>
            <StyledTableCell align="right">Edit:</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell component="th" scope="row">
                {e.name}
              </StyledTableCell>
              <StyledTableCell align="right">{e.username}</StyledTableCell>
              <StyledTableCell align="right">{e.email}</StyledTableCell>
              <StyledTableCell align="right">{e.phone}</StyledTableCell>
              <StyledTableCell onClick={()=>navigate(`/Edit/${e.id}`)} align="right" sx={{ cursor: 'pointer' }}>
                <EditIcon />
              </StyledTableCell>
              <StyledTableCell
                onClick={() => onDelete(e.id)}
                align="right"
                sx={{ cursor: 'pointer', color: 'red' }}
              >
                <DeleteIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
