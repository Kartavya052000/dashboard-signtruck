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
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
import { getConfig } from '@testing-library/react';

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



export default function Contact() {
  const [cookies, setCookie, removeCookie] = useCookies(['admintoken']);
  const token = cookies['admintoken'];
  const [rows, setRows] = useState([]); // Declare and initialize state within the function component
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
    useEffect(() => {
      GetContact()
       
      }, [])
      const GetContact = () =>{
          // Define the API endpoint URL
        // const apiUrl = 'http://localhost:4000/get-contact';
        // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-contact';
        const apiUrl = 'https://signtruckapi.signtruck.ca/get-contact';


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
      }
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
        
        // const apiUrl = `http://localhost:4000/contacts/${id}`; // Assuming your delete route is '/bookings/:bookingId'
        const apiUrl = `https://signtruckapi.signtruck.ca/contacts/${id}`;

        Axios.delete(apiUrl, {
          headers: {
              'Authorization': ` ${token}`, // Correct the token format
          },
      })
          .then((response) => {
            // Handle the successful response, for example:
            console.log('Booking deleted successfully');
            const { success, message } = response.data;
              handleSuccess(message)
            GetContact()
            // You can perform additional actions here after successful deletion
          })
          .catch((error) => {
            // Handle errors, e.g., show an error message
            console.error('Error deleting booking:', error);
          });
      }
      const handleError = (err) =>{
        showSuccessAlert("error","Internal Server Error")
    
        };
        const handleSuccess = (msg) =>{
            showSuccessAlert("success",msg)
        }
    
  return (
    <>
      <div className='sec_ttl'>
        <h2>Contact</h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Subject</StyledTableCell>
              <StyledTableCell align="right">Message</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              
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
                <StyledTableCell align="right"><button type='button' className='actionBtn btn_info'
                  onClick={() => handleDelete(row._id)}
                ><i className='fa fa-trash'></i></button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}