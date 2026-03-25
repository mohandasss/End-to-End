import { TextInput, PasswordInput } from "@mantine/core";
import { useState } from "react";
import { Button } from "@mantine/core";
const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const user = {
    email: "Mohanop@gmail.com",
    password: "12345678",
  };

  const handlelogin = () => {
    if (!email || !password) {
      console.log("please fill form the");
    }
    if (email != user.email || password != user.password) {
      console.log("Login UNsucessfull");
    }

    if (email === user.email && password === user.password) {
      console.log("Login sucessfull");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[400px] bg-white shadow-md rounded-xl p-6">
        <div className="space-y-4">
          <TextInput
            value={email}
            size="sm"
            radius="md"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Enter your email"
          />

          <PasswordInput
            value={password}
            size="sm"
            radius="md"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            placeholder="Enter your password"
          />
          <div className="flex justify-end">
            <Button onClick={handlelogin} radius="md">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
