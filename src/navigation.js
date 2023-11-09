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
        <h1>Navigation</h1>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        </>
    )
}