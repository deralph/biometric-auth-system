import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menus = [
    { name: "Admin Dashboard", path: "/dashboard" },
    { name: "Register Student", path: "/register" },
    { name: "Verify Student", path: ["/verification", "/verify-student"] },
  ];

  const isActive = (paths: string | string[]) => {
    if (Array.isArray(paths)) {
      return paths.includes(location.pathname);
    }
    return location.pathname === paths;
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-[#F4F7FE] p-5 flex flex-col shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <img 
       src='/aaua_logo.png'  alt="school logo" className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
         />
        <div>
          <h3 className="font-bold text-gray-800">REGISTRATION</h3>
          <p className="text-xs text-gray-500">Welcome [ADMIN]</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-4">
        {menus.map((item) => (
          <button
            key={item.name}
            onClick={() =>
              navigate(Array.isArray(item.path) ? item.path[0] : item.path)
            }
            className={`text-left py-2 px-4 rounded-lg font-medium transition 
              ${isActive(item.path)
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-blue-100"}`}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
