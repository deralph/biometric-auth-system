import React from "react";
import LoginCard from "../components/LoginCard";

const LoginPage: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/login-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-30" />
      <div className="relative z-10 ">
      
      <LoginCard />
    </div>
    </div>
  );
};

export default LoginPage;
