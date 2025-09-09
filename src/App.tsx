import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import Verification from './pages/Verification'
import VerifyStudents from './pages/VerifyStudents'
import LoginPage from './pages/LoginPage'
import OnboardingPage from './pages/OnboardingPage'
import Sidebar from './components/Sidebar'
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

const AppShell: React.FC = () => {
  const location = useLocation();
  const hideSidebar = ["/login", "/onboarding"].includes(location.pathname);

  return (
    <div className="min-h-screen flex">
      {!hideSidebar && <Sidebar />}
      <main className={`${!hideSidebar ? "ml-60" : "w-full"} flex-1 min-h-screen bg-gray-50`}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verify-student" element={<VerifyStudents />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
