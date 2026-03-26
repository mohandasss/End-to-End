import React from "react";
import { Button, Title } from "@mantine/core";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}  />
        <Route path="/sucessfull" element={<SuccessPage/>}  />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
};

export default App;
