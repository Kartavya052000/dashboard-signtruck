import {React} from 'react';
import ProfileDropdown from '../ui/profileDropdown';

const DashboardHeader = () => {
    return(
        <>
            <div className="user-info">
                <div className="blank_container">
                    <div className="icon-container">
                        <a href='https://tollfreeforwarding.com/secure/' target='_blank'><i className="fa fa-phone nav-icon"></i>Phone & Messages</a>
                    </div>
                    {/* <div className="icon-container">
                        <i className="fa fa-bell nav-icon"></i>
                        <i className="fa fa-envelope nav-icon"></i>
                    </div> */}
                </div>
                <ProfileDropdown />
            </div>
        </>
    )
}
export default DashboardHeader;