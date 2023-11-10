import React, {useState} from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {

    const links = [
        {
            href: "/",
            title: "Home",
            fa_icon : "fa-house"
        },
        {
            href: "/users",
            title: "Users",
            fa_icon : "fa-users"
        },
        {
            href: "/bookings",
            title: "Bookings",
            fa_icon : "fa-folder-open"
        },
        {
            href: "/guest",
            title: "Guest Emails",
            fa_icon : "fa-envelope-circle-check"
        },
        {
            href: "/contact",
            title: "Contact",
            fa_icon : "fa-id-card-clip"
        },
        {
            href: "/navigation",
            title: "Navigation",
            fa_icon : "fa-compass"
        },
        {
            href: "/form-control",
            title: "Form Control",
            fa_icon : "fa-wpforms"
        }
    ];

    const [active, setActive] = useState(false);

    return(
        <>
            <nav className='main-menu'>
                <h1>SIGNTRUCK</h1>
                <img className='logo' src={logo} alt="SignTruck" />
                <ul>
                    {links.map((item, i) => (
                        <li className={`nav-item ${active == i ?'active' : ''}`}>
                            <b></b>
                            <b></b>
                            <NavLink to={item.href} title={item.title} onClick={() => setActive(i)}>
                                <i className={`fa nav-icon ${item.fa_icon}`}></i><span className="nav-text">{item.title}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
    export default DashboardSidebar;