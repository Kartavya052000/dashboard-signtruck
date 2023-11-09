import { useState,useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from 'axios';
// import { useNavigate } from "react-router-dom";

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Contact() {
 
  const [rows, setRows] = useState([]); // Declare and initialize state within the function component

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:4000/get-contact';
        // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-contact';
        Axios.get(apiUrl)
        .then((response) => {
          // Handle the successful response and update the state with the data
          console.log(response.data,"DATA");
          setRows(response.data.contact);
          
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message
          console.error('Error fetching data:', error);
        });
        
    
        // Make a GET request to fetch data
       
      }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Subject</StyledTableCell>
            <StyledTableCell align="right">Message</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.subject}</StyledTableCell>
              <StyledTableCell align="right">{row.message}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}