import { useState,useEffect } from 'react'
import Axios from 'axios';



export default function Navigation() {
    const [nav, setNav] = useState([]); // Declare and initialize state within the function component

    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:4000/get-navbar';
        // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-navbar';
        Axios.get(apiUrl)
        .then((response) => {
          // Handle the successful response and update the state with the data
          setNav(response.data.nav);
          console.log(nav,"NAV")
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message
          console.error('Error fetching data:', error);
        });
        
    
        // Make a GET request to fetch data
       
      }, [])
    return(
        <>
          <div className='sec_ttl'>
            <h2>Navigation Menu</h2>
          </div>
          <div className='nav_sec'>
            <div className='cst_card'>
              <div className='cst_cardBody'>
                <ul>
                  <li><input type="text" placeholder='Home' /></li>
                  <li><input type="text" placeholder='Faq' /></li>
                  <li><input type="text" placeholder='Clients' /></li>
                  <li><input type="text" placeholder='Contact Us' /></li>
                  <li><input type="text" placeholder='Prospectus' /></li>
                  <li><input type="text" placeholder='Booking' /></li>
                  <li><button type="submit" className='btn btn_success'>Save</button></li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
}