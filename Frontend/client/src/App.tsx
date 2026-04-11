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
import AuthLayout from "./layout/AuthLayout";
import LoginForm from "./pages/Login/LoginForm";
import ForgotPasswordForm from "./pages/ForgotPassword/ForgotPasswordForm";
import Home from "./pages/Home/Home";

// import { Home } from "lucide-react";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/forgot-Password" element={<ForgotPasswordForm />} />
            
          </Route>

          {/* Layout wraps ALL pages */}
          <Route element={<AppLayout />}>
            {/* Public Routes */}
            {/* <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
            </Route> */}
            <Route index element={<Home />} />

            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
              {/* <Route path="/successful" element={<SuccessPage />} />
              <Route path="/authenticated" element={<AuthenticatedPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/booking" element={<BookingForm />} />

              <Route path="/appointment-list" element={<AppointmentList />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
