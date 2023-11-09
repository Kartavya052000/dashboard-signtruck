import React, {useState} from 'react';
import fit from '../assets/images/fit.png';
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
            fa_icon : "fa-user"
        },
        {
            href: "/bookings",
            title: "Bookings",
            fa_icon : "fa-calendar-check"
        },
        ,
        {
            href: "/bookings",
            title: "Guest Emails",
            fa_icon : "fa-calendar-check"
        } ,
        {
            href: "/contact",
            title: "Contact",
            fa_icon : "fa-calendar-check"
        } ,
        {
            href: "/navigation",
            title: "Navigation",
            fa_icon : "fa-calendar-check"
        }
        ,
        ,
        {
            href: "/form-control",
            title: "Form Control",
            fa_icon : "fa-calendar-check"
        }
        ,
    ];

    const [active, setActive] = useState(false);

    return(
        <>
            <nav className='main-menu'>
                <h1>Admin Logo</h1>
                <img className='logo' src={fit} alt="Admin Logo" />
                <ul>
                    {links.map((item, i) => (
                        <li className={`nav-item ${active == i ?'active' : ''}`}>
                            <b></b>
                            <b></b>
                        <NavLink to={item.href} title={item.title} onClick={() => setActive(i)}
                        ><i className={`fa nav-icon ${item.fa_icon}`}></i><span className="nav-text">{item.title}</span></NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
    export default DashboardSidebar;