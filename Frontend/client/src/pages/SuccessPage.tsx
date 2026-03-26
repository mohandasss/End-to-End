import { CheckCircle, ArrowRight, Home, Settings } from "lucide-react";
import { Button } from "@mantine/core";
import { useAuthContext } from "../store/store";
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
  const navigate = useNavigate();
  const { setuser, password, username } = useAuthContext();

  const handleLogout = () => {
    setuser("", "");
    if (!password && !username) {
      console.log("they logged out  ");
      navigate("/login");
    }
    const state = useAuthContext.getState();
    console.log("state after logout ====>>>> ", state);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        {/* Animated Icon Container */}
        <div className="mb-6 flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Login Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome back. We've missed you! You’re now being redirected to your
          dashboard.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => (window.location.href = "/dashboard")}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            Go to Dashboard <ArrowRight size={18} />
          </button>

          <div className="flex gap-3">
            <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2 text-sm">
              <Home size={16} /> Home
            </button>
            <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center gap-2 text-sm">
              <Settings size={16} /> Profile
            </button>
          </div>
        </div>
        <Button onClick={handleLogout} variant="subtle">
          Logout
        </Button>

        {/* Footer info */}
        <p className="mt-8 text-xs text-gray-400">
          Not you?{" "}
          <a href="/logout" className="text-indigo-500 hover:underline">
            Sign out
          </a>
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
