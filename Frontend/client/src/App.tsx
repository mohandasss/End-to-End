import React from "react";
import { Button, Title } from "@mantine/core";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
const App = () => {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}  />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
};

export default App;
