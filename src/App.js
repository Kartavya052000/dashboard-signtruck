import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardHeader from "./components/dashboardHeader";
import DashboardFooter from "./components/dashboardFooter";
import DashboardSidebar from "./components/dashboardSideBar";
import Dashboard from "./dashboard";
import Users from "./users";
import Booking from "./booking";
import Navigation from "./navigation";
import Contact from "./contact";
import FormComponentsControl from "./pages/formcompcontrol";
import Login from "./pages/login";
import Guest from "./guest";
import BookingDetails from './bookingdetails';


function App() {

  const loginacess = window.location.pathname;
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </Router>
      {loginacess !='/'?
       <div className='wrapper'>
       <main>
           <Router>
             <DashboardSidebar />
             <section className='content'>
               <DashboardHeader />
               <div className="dash_innerWrapper">
                 <Routes>
                   <Route exact path='/dashboard' element={<Dashboard />} />
                   <Route exact path='/users' element={<Users />} />
                   <Route exact path='/bookings' element={<Booking />} />
                   <Route exact path='/navigation' element={<Navigation />} />
                   <Route exact path='/contact' element={<Contact />} />
                   <Route exact path='/form-control' element={<FormComponentsControl />} />
                   <Route exact path='/guest' element={<Guest />} />
                   <Route exact path='/booking-details' element={< BookingDetails/>} />
                 </Routes>
               </div>
               <DashboardFooter />
             </section>
           </Router>
       </main>
     </div>:(
      <></>
     )}
     
    </div>
  );
}

export default App;
