import { Button, Checkbox, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="w-full  flex flex-col gap-4 py-4 fo max-w-sm mx-auto h-auto">
      <div>
        <h2 className="text-white  text-2xl">Login</h2>
        <h4 className="text-[#3b4c57]">
          Welcome back! Please enter your details.
        </h4>
      </div>

      <div className="text-white mt-4 flex flex-col gap-2">
        <TextInput withAsterisk label="Email" placeholder=" Enter YourEmail" />
        <TextInput
          className="text-white"
          withAsterisk
          label="Password"
          placeholder=" Enter Your Password"
        />
      </div>

      <div className="flex w-full mt-4 items-center gap-4 justify-between">
        <Checkbox
          className="cursor-pointer"
          defaultChecked
          label="Remember for 30 days"
          color="#ffea13"
        />
        <Link to="/forgot-password">
          <h2 className="text-white hover:underline  ">Forgot Password</h2>
        </Link>
      </div>
      <div className="text-black mt-6">
        <Button fullWidth c="#010100" color="#ffea13">
          Log in
        </Button>
      </div>
      <div>
        <Button
          color="#fffefe"
          c="#010100"
          fullWidth
          leftSection={
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/plasticine/100/google-logo.png"
              alt="google-logo"
            />
          }
        >
          Continue With Google
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
