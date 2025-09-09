import React from "react";
import StudentDetails from "../components/StudentDetails";

import Header from '../components/Header'

const VerifyStudent: React.FC = () => {
  

  const student = {
    name: "IMORU OLAWALE VICTOR",
    department: "COMPUTER SCIENCE",
    matric: "200404056",
    level: "300L",
    gender: "M",
    photo: "https://via.placeholder.com/150",
    fingerprintMatched: true,
  };

  return (
    <div className="flex min-h-screen bg-white shadow-lg">
      {/* Sidebar */}
      {/* <Sidebar active="Verify Student" /> */}

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">STUDENTS DETAILS</h1>
<Header register/>

        {/* Student Details */}
        <StudentDetails student={student} />

        {/* Done Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-blue-600 text-white px-10 py-3 px-12 font-bold rounded-lg shadow hover:bg-blue-700">
            Done
          </button> 
        </div>
      </main>
    </div>
  );
};

export default VerifyStudent;
