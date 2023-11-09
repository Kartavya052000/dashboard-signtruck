import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import DashboardHeader from "./assets/components/dashboardHeader";
import DashboardFooter from "./assets/components/dashboardFooter";
import DashboardSidebar from "./assets/components/dashboardSideBar";
import Dashboard from "./dashboard";
import Users from "./users";
import Booking from "./booking";
import Navigation from "./navigation";
import Contact from "./contact";
import { formlabelControl } from "./formControl";

function App() {
  return (
    <div className='App'>
      <main>
          <Router>
            <DashboardSidebar />
            <section className='content'>
              <DashboardHeader />
              <Routes>
                <Route exact path='/' element={<Dashboard />} />
                <Route exact path='/users' element={<Users />} />
                <Route exact path='/bookings' element={<Booking />} />
                <Route exact path='/navigation' element={<Navigation />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/form-control' element={<formlabelControl />} />
                

                {/* <Route exact path='faq' element={<Faq />} /> */}
              </Routes>
              <DashboardFooter />
            </section>
          </Router>
      </main>
    </div>
  );
}

export default App;
