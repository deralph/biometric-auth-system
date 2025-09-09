import React from "react";

type Props = {
  onLogin: () => void;
};

const HeroSection: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center text-center text-white px-4 max-w-4xl mx-auto">
      {/* Logo */}
      <img
        src="/aaua_logo.png"
        alt="University Logo"
        className="w-24 h-24 mb-6"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
        Welcome To The Biometric Authentication Portal Secure, Reliable, <br />
        Smart Verification For Exams & Clearance.
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-8">
        This platform provides a secure, biometric-based system for student registration and identity verification.
        Designed to eliminate impersonation, streamline clearance, and secure electronic examinations with fingerprint authentication.
      </p>

      {/* Login Button */}
      <button
        onClick={onLogin}
        className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-10 w-[200px] rounded-xl shadow-md"
      >
        LOGIN
      </button>
    </div>
  );
};

export default HeroSection;
