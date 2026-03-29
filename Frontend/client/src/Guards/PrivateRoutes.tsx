import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../store/store";

const PrivateRoutes = () => {
  const { username, password } = useAuthContext();
  const auth = Boolean(username && password);
    console.log("check=>>>>>>>>>"  , auth)
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;