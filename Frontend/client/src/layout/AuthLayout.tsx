import LoginForm from "../pages/Login/LoginForm";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen font-poppins  bg-[#010100] ">
      <div className=" flex flex-col md:flex-row   h-full overflow-hidden ">
        <div className="  hidden md:block absolute left-8 top-0">
          <div className="relative w-full h-full">
            <img
              className=" w-32 h-32   "
              src="https://fountn.design/wp-content/uploads/2026/01/ftn-logo2.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" w-full flex items-center justify-center  md:w-1/2 text-white ">
        <Outlet/>
          {/* <LoginForm /> */}
        </div>
        <div className=" hidden md:block relative  p-4 md:w-1/2 text-white ">
          <h3 className=" absolute bottom-10 left-12 text-4xl text-white ">
            Easily find and save design resources
          </h3>
          <img
            className="object-cover object-top h-full rounded-2xl w-full "
            src="https://fountn.design/wp-content/themes/fountn/assets/images/image-917x1280.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
