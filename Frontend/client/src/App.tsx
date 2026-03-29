import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";
import AuthenticatedPage from "./pages/AuthenticatedPage";
import PublicRoutes from "./Guards/PublicRoutes";
import PrivateRoutes from "./Guards/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layout/AppLayout";
import BookingForm from "./pages/BookingForm";
import AppointmentList from "./pages/AppointmentList";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Layout wraps ALL pages */}
          <Route element={<AppLayout />}>
            {/* Public Routes */}
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/successful" element={<SuccessPage />} />
              <Route path="/authenticated" element={<AuthenticatedPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/booking" element={<BookingForm />} />
              
               <Route path="/appointment-list" element={<AppointmentList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
