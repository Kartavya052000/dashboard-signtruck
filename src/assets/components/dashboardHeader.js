import {React} from 'react';
import adminImg from '../images/user.jpg';

const DashboardHeader = () => {
    return(
        <>
            <div className="user-info">
                <div className="blank_container"></div>
                <div className="icon-container">
                    <i className="fa fa-bell nav-icon"></i>
                    <i className="fa fa-envelope nav-icon"></i>
                </div>
                <h4>Kelsey Miller</h4>
                <img src={adminImg} alt="Admin" />
            </div>
        </>
    )
}
export default DashboardHeader;