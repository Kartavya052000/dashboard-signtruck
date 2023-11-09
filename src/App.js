import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import DashboardHeader from "./components/dashboardHeader";
import DashboardFooter from "./components/dashboardFooter";
import DashboardSidebar from "./components/dashboardSideBar";
import Dashboard from "./dashboard";
import Users from "./pages/users";
import Bookings from "./pages/bookings";
import Login from "./pages/login";

function App() {
  return (
    <div className='App'>
      <section className='wrapper'>
        <main>
            <Router>
              <DashboardSidebar />
              <section className='content'>
                <DashboardHeader />
                <Routes>
                  <Route exact path='/' element={<Dashboard />} />
                  <Route exact path='users' element={<Users />} />
                  <Route exact path='bookings' element={<Bookings />} />
                </Routes>
                <DashboardFooter />
              </section>
            </Router>
        </main>
      </section>
    </div>
  );
}

export default App;
