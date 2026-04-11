import { Button, TextInput } from "@mantine/core";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <div className="w-full  flex flex-col gap-4 py-4 fo max-w-sm mx-auto h-auto">
      <div>
        <h2 className="text-white  text-4xl mb-4">Reset Your Password</h2>
        <h4 className="text-[#3b4c57]">
          Enter the email address you use to sign in to reset your password.
        </h4>
      </div>

      <div className="text-white mt-4 flex flex-col gap-2">
        <TextInput withAsterisk label="Email" placeholder=" Enter YourEmail" />
      </div>

      <div className="text-black mt-6">
        <Button fullWidth c="#010100" color="#ffea13">
          Reset
        </Button>
        <div className="text-black mt-6">
          <Link to="/login">
            <h2 className="text-white hover:underline cursor-pointer text-center">
              Back to Login
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
