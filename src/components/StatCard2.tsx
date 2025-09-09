import React from "react";
import { Users, UserCheck, GraduationCap } from "lucide-react";

type StatsCardProps = {
  label: string;
  value: number;
  icon: "registrations" | "verifications" | "students";
};

const icons = {
  registrations: <Users className="w-6 h-6 text-yellow-500" />,
  verifications: <UserCheck className="w-6 h-6 text-blue-500" />,
  students: <GraduationCap className="w-6 h-6 text-green-500" />,
};

const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl shadow bg-white">
      <div>{icons[icon]}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <h3 className="text-lg font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
