import { useState, useEffect } from 'react'
import Axios from 'axios';



export default function Navigation() {
    // const [nav, setNav] = useState([]); // Declare and initialize state within the function component
    const [navbar, SetNavbar] = useState({
        nav1: "",
        nav2: "",
        nav3: "",
        nav4: "",
        nav5: "",
        nav6: "",
    })
    useEffect(() => {
        // Define the API endpoint URL
        const apiUrl = 'http://localhost:4000/get-navbar';
        // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/get-navbar';
        Axios.get(apiUrl)
            .then((response) => {
                // Handle the successful response and update the state with the data
                // setNav(response.data.nav);
                const { nav1, nav2, nav3, nav4, nav5, nav6 } = response.data.nav[0];
                SetNavbar({
                    nav1: nav1 || "",
                    nav2: nav2 || "",
                    nav3: nav3 || "",
                    nav4: nav4 || "",
                    nav5: nav5 || "",
                    nav6: nav6 || "",
                });
                console.log(navbar, "NAV");
            })
            .catch((error) => {
                // Handle errors, e.g., show an error message
                console.error('Error fetching data:', error);
            });


        // Make a GET request to fetch data

    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const apiUrl = 'http://localhost:4000/update-navbar';
            // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/update-navba';
            // Then, send the formData with axios
            const response = await Axios.post(apiUrl, navbar, {

            });

            const { success, message } = response.data;
            if (success) {

                //   handleSuccess(message);
                setTimeout(() => {
                    // navigate("/");
                }, 1000);
            } else {
                console.log(response.data, "SSSS");
                // alert(message);
                //   handleError(message);
            }

        } catch (error) {
            //   handleError();

            console.error('API request failed', error);
        }
    };
    return (
        <>
            <div className='sec_ttl'>
                <h2>Navigation Menu</h2>
            </div>
            <div className='nav_sec'>
                <div className='cst_card'>
                    <div className='cst_cardBody'>
                        <ul>
                            <li> <input
                                type="text"
                                value={navbar.nav1}
                                required
                                onChange={(event) =>
                                    SetNavbar((prevNavbar) => ({ ...prevNavbar, nav1: event.target.value }))
                                }
                            /></li>
                            <li> <input
                                type="text"
                                value={navbar.nav2}
                                required
                                onChange={(event) =>
                                    SetNavbar((prevNavbar) => ({ ...prevNavbar, nav2: event.target.value }))
                                }
                            /></li>
                            <li> <input
                                type="text"
                                value={navbar.nav3}
                                required
                                onChange={(event) =>
                                    SetNavbar((prevNavbar) => ({ ...prevNavbar, nav3: event.target.value }))
                                }
                            /></li>
                            <li> <input
                                type="text"
                                value={navbar.nav4}
                                required
                                onChange={(event) =>
                                    SetNavbar((prevNavbar) => ({ ...prevNavbar, nav4: event.target.value }))
                                }
                            /></li>
                            <li> <input
                                type="text"
                                value={navbar.nav5}
                                required
                                onChange={(event) =>
                                    SetNavbar((prevNavbar) => ({ ...prevNavbar, nav5: event.target.value }))
                                }
                            /></li>
                            <li> <input
                                type="text"
                                value={navbar.nav6}
                                required
                                onChange={(event) =>
                                    SetNavbar((prevNavbar) => ({ ...prevNavbar, nav6: event.target.value }))
                                }
                            /></li>

                            <li><button type="submit" className='btn btn_success' onClick={handleSubmit}>Save</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}