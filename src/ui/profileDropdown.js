import React, { useState } from 'react';
import adminImg from '../assets/images/user.jpg';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Perform sign-out logic here

        // After sign-out, navigate to the home route
        navigate('/');
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
                        <li><a href="#"><i className='fa fa-user'></i>&nbsp;Profile</a></li>
                        <li><a onClick={handleSignOut}><i className='fa fa-sign-out'></i>&nbsp;Sign Out</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProfileDropdown;
