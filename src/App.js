import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import DashboardHeader from "./assets/components/dashboardHeader";
import DashboardFooter from "./assets/components/dashboardFooter";
import DashboardSidebar from "./assets/components/dashboardSideBar";
import Dashboard from "./dashboard";

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
