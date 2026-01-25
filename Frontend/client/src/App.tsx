import React from "react";
import { Button, Title } from "@mantine/core";
const App = () => {
  const message =
    "Welcome to your React application with Mantine and Express backend!";
  return (
    <div>
      <Title order={2}>React + Mantine + Express</Title>
      <p>{message}</p>
      <Button mt="md">Mantine Button</Button>
    </div>
  );
};

export default App;
