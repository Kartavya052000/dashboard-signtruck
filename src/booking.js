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
    backgroundColor: theme.palette.success.light,
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




export default function Booking() {
 
  const [bookingdata, setBookingData] = useState([]); // Declare and initialize state within the function component

    useEffect(() => {
        // Define the API endpoint URL
        // const apiUrl = 'http://localhost:4000/users';
        const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-bookings';
        Axios.get(apiUrl)
        .then((response) => {
          // Handle the successful response and update the state with the data
          console.log(response.data,"DATA");
          setBookingData(response.data.bookings);
          const keys = Object.keys(response.data.bookings[0]);
    
    console.log(keys);
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message
          console.error('Error fetching data:', error);
        });
        
    
        // Make a GET request to fetch data
       
      }, [])
  return (
    <>
      <div className='sec_ttl'>
        <h2>Bookings</h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Website</StyledTableCell>
              <StyledTableCell align="right">Side</StyledTableCell>
              <StyledTableCell align="right">Days</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Have Design</StyledTableCell>
              <StyledTableCell align="right">Design Image</StyledTableCell>
              <StyledTableCell align="right">Available Location</StyledTableCell>
              <StyledTableCell align="right">Preferred Location</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingdata.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.username}</StyledTableCell> */}
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">{row.website}</StyledTableCell>
                <StyledTableCell align="right">{row.truckData}</StyledTableCell>
                <StyledTableCell align="right">{row.day}</StyledTableCell>
                <StyledTableCell align="right">{row.dateRange}</StyledTableCell>
                <StyledTableCell align="right">{row.radioList}</StyledTableCell>
                <StyledTableCell align="right">{row.image}</StyledTableCell>
                <StyledTableCell align="right">{row.preferredLocation}</StyledTableCell>
                <StyledTableCell align="right">{row.location}</StyledTableCell>
                <StyledTableCell align="right"><button type='button' className='actionBtn btn_info'><i className='fa fa-eye'></i></button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}