import { ArrowLeftFromLine } from "lucide-react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  const [open, setopen] = useState(true);
  console.log("=====>?>> ", open);
  return (
    <div className=" max-h-full mx-auto flex  ">
      <div
        className={`bg-red-500 transition-all duration-300 h-screen flex p-4 justify-between text-white ${open ? "w-64" : "w-16"}  `}
      >
        <h1 className={`${!open ? "hidden" : ""}`}>Sidebar</h1>
        <ArrowLeftFromLine
          className={`cursor-pointer bg-white text-black p-2 rounded-full ${
            !open ? "rotate-180" : ""
          }`}
          onClick={() => setopen(!open)}
        />
      </div>
      <div className="flex-1  bg-blue-800">
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
