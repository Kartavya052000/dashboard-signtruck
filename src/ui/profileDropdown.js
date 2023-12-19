import React, { useState } from 'react';
import adminImg from '../assets/images/usericon.png';
import { useNavigate } from 'react-router-dom';
import { Router } from 'react-router-dom';
const ProfileDropdown = () => {
    const [isActive, setActive] = useState(false);

    const handleSignOut = () => {
        // Perform sign-out logic here

        // After sign-out, navigate to the home route
        // navigate('/');
        window.location.href="/"
    };

    return (
        <>
            <div className='profileDropdown'>
                <div className='profile'>
                    <div className='user' onClick={() => setActive(!isActive)}>
                        <h4>Hi, Admin</h4>
                    </div>
                    <div className='imgBox' onClick={() => setActive(!isActive)}>
                        <img src={adminImg} alt="Admin" />
                    </div>
                </div>
                <div className={isActive ? 'menu active' : 'menu'}>
                    <ul>
                        {/* <li><a href="#"><i className='fa fa-user'></i>&nbsp;Profile</a></li> */}
                        <li><a onClick={handleSignOut}><i className='fa fa-sign-out'></i>&nbsp;Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProfileDropdown;
