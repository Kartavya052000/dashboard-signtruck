import {React} from 'react';
import ProfileDropdown from '../ui/profileDropdown';

const DashboardHeader = () => {
    return(
        <>
            <div className="user-info">
                <div className="blank_container"></div>
                {/* <div className="icon-container">
                    <i className="fa fa-bell nav-icon"></i>
                    <i className="fa fa-envelope nav-icon"></i>
                </div> */}
                <ProfileDropdown />
            </div>
        </>
    )
}
export default DashboardHeader;