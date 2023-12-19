import { useState, useEffect } from 'react'
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
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';
import Swal from 'sweetalert2';

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
  const [exportdata, setexportdata] = useState([]); // Declare and initialize state within the function component
  const [cookies, setCookie, removeCookie] = useCookies(['admintoken']);
  const token = cookies['admintoken'];
  useEffect(() => {
    getBookingData()
  }, [])
  const getBookingData = () => {
    // Define the API endpoint URL
    // const apiUrl = 'http://localhost:4000/get-bookings';
    const apiUrl = 'https://signtruckapi.signtruck.ca/get-bookings';
    Axios.get(apiUrl)
      .then((response) => {
        // Handle the successful response and update the state with the data
        setBookingData(response.data.bookings);
        const keys = Object.keys(response.data.bookings[0]);
        let y = bookingdata.map(({ _id, __v, ...rest }) => rest);

        let x = convertToCSV(bookingdata)
        console.log(x, "XXXX")

      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error fetching data:', error);
      });
  }
  const showSuccessAlert = (icon,mess) => {
    Swal.fire({
      icon: icon,
      title: mess,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      showConfirmButton: false,
      timer: 2000, // Adjust the time the alert stays visible (in milliseconds)
    });
  };
  const BookingDetails = () => {
    window.location.href = '/booking-details'
  }
  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]).join(',') + '\n';

    const rows = bookingdata.map((row) =>
      Object.values(row)
        .map((value) => (Array.isArray(value) ? `"${value.join(', ')}"` : `"${value}"`))
        .join(',')
    ).join('\n');

    return headers + rows;
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform your delete action here
        DeleteBooking(id);
      }
    });
  };
  
  const DeleteBooking = (id) => {
    console.log(token,"TOKENNN")
    
    const apiUrl = `http://localhost:4000/bookings/${id}`; // Assuming your delete route is '/bookings/:bookingId'
    Axios.delete(apiUrl, {
      headers: {
          'Authorization': ` ${token}`, // Correct the token format
      },
  })
      .then((response) => {
        // Handle the successful response, for example:
        console.log('Booking deleted successfully');
        getBookingData()
        showSuccessAlert("success","Booking Deleted Successfully")
        // You can perform additional actions here after successful deletion
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        showSuccessAlert("error","Internal Server error")

        console.error('Error deleting booking:', error);
      });
  }

  return (
    <>
      <div className='sec_ttl'>
        <h2>Bookings</h2>
      </div>
      <div className='textRight tableActionBtns'>
        <CsvDownloadButton
          data={bookingdata.map(({ _id, __v, ...rest }) => rest)}
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
              <StyledTableCell align="right">Delete</StyledTableCell>
              {/* <StyledTableCell align="right">Action</StyledTableCell> */}
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
                    // src={`http://localhost:4000/${row.image}`}
                    src={`https://signtruckapi.signtruck.ca/${row.image}`}
                    alt={`Design for ${row.name}`}
                    style={{ width: '50px', height: '50px' }} />
                )}</StyledTableCell>
                <StyledTableCell align="right">       {JSON.parse(row.availablelocation).map((loc, index) => (
                  <span key={loc}>
                    {loc}
                    {index < JSON.parse(row.availablelocation).length - 1 && ','}{' '}
                  </span>
                ))}</StyledTableCell>
                <StyledTableCell align="right">{row.location}</StyledTableCell>
                <StyledTableCell align="right"><button type='button' className='actionBtn btn_info'
                  onClick={() => handleDelete(row._id)}
                ><i className='fa fa-trash'></i></button></StyledTableCell>

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