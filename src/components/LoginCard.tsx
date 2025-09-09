import React from "react";
import LoginForm from "./LoginForm";

import { useNavigate } from "react-router-dom";

const LoginCard: React.FC = () => {

    const navigate = useNavigate();


const handleLogin = (username: string, password: string) => {
    console.log("Demo Login:", { username, password });
    navigate("/onboarding");
    // Replace with real API call later
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-3xl">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <img
          src="/authPics.png"
          alt="Security"
          className="w-full h-full object-contain p-6"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-lg font-bold text-center mb-2">LOGIN</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Authorized staff only. Please enter your credentials to access the
          website.
        </p>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginCard;
