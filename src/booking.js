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
import CsvDownloadButton from 'react-json-to-csv'

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
        // const apiUrl = 'http://localhost:4000/get-bookings';
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
      const BookingDetails = () =>{
        window.location.href ='/booking-details'
      }
  return (
    <>
      <div className='sec_ttl'>
        <h2>Bookings</h2>
      </div>
      <div className='textRight tableActionBtns'>
        <CsvDownloadButton
          data={bookingdata}
          filename="bookingdata.csv" className='btn btn_info btn_sm'>Export CSV</CsvDownloadButton>
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
              {/* <StyledTableCell align="right">Have Design</StyledTableCell> */}
              <StyledTableCell align="right">Design Image</StyledTableCell>
              <StyledTableCell align="right">Available Location</StyledTableCell>
              <StyledTableCell align="right">Preferred Location</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingdata.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell width="50%" component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.username}</StyledTableCell> */}
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.phone}</StyledTableCell>
                <StyledTableCell align="left">{row.website}</StyledTableCell>
                <StyledTableCell align="left">{row.truckData}</StyledTableCell>
                <StyledTableCell align="left">
                  {/* Parse the string to an array and display each day */}
                  {JSON.parse(row.day).map((day, index) => (
        <span key={day}>
            {day}
            {index < JSON.parse(row.day).length - 1 && ','}{' '}
        </span>
    ))}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {/* Format each date in the date range */}
                  {JSON.parse(row.dateRange).map((date, index) => (
        <span key={date}>
            {new Date(date).toLocaleDateString()}
            {index < JSON.parse(row.dateRange).length - 1 && ','}{' '}
        </span>
    ))}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{row.dateRange}</StyledTableCell> */}
                {/* <StyledTableCell align="right">{row.radioList =="B"?"Yes":"No"}</StyledTableCell> */}
                <StyledTableCell align="right"> {row.image && (
                  <img
                    src={`http://localhost:4000/${row.image}`}
                    alt={`Design for ${row.name}`}
                    style={{ width: '50px', height: '50px' }} />
                )}</StyledTableCell>
                <StyledTableCell align="right">{row.preferredLocation}</StyledTableCell>
                <StyledTableCell align="right">{row.location}</StyledTableCell>
                {/* <StyledTableCell align="right"><button type='button' className='actionBtn btn_info' 
    onClick={() => BookingDetails(row.id)}  
    ><i className='fa fa-eye'></i></button></StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}