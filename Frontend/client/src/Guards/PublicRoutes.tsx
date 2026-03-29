import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../store/store";

const PublicRoutes = () => {
  const [auth, setauth] = useState(false);
  const { username, password } = useAuthContext();

  if (username && password) {
    setauth(true);
  }

  return auth ? <Navigate to="/sucessfull" replace />  : <Outlet />   ;
};

export default PublicRoutes;
