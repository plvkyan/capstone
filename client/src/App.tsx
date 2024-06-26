import './App.css'
import { Dashboard } from './admin/admin-dashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentsPage from './admin/payments/admin-payments';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Login from './login/Login';
import { Settings } from './Settings';
import AdminReservations from './admin/reservations/admin-reservations';
import AdminFacilities from './admin/reservations/admin-facilities';

function App() {

  console.log(window.location.pathname);

  return (
    <>

      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">

        <Sidebar />

        <div className="flex flex-col overflow-x-auto">

          <Navbar />



            <Routes>

              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/payments" element={<PaymentsPage />} />
              <Route path="/reservations" element={<AdminReservations />} />
              <Route path="/reservations/facilities" element={<AdminFacilities />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />} />

            </Routes>




        </div>

      </div>



    </>
  )
}



export default App;