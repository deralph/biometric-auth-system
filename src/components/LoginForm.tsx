import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import {useNavigate} from 'react-router-dom'
type Props = {
  onSubmit: (username: string, password: string) => void;
};

const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const navigate= useNavigate()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
    navigate('/dashboard')
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {/* Username */}
      <div>
        <label className="text-sm font-medium block mb-1">USERNAME</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium block mb-1">PASSWORD</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-full px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="button"
            className="absolute right-3 top-2.5 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
