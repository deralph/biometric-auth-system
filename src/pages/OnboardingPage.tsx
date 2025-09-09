import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/onboarding-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center">
        <HeroSection onLogin={handleLoginClick} />
      </div>
      
      <p className="absolute w-full font-bold text-center bottom-0 bg-white p-1">2025 © Powered by Adekunle Ajasin University AKungba ICTAC</p>
    </div>
  );
};

export default OnboardingPage;
