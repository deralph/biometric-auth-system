import React from "react";
import { IoFingerPrintOutline } from "react-icons/io5";

type Student = {
  name: string;
  department: string;
  matric: string;
  level: string;
  gender: string;
  photo: string;
  fingerprintMatched: boolean;
};

type Props = {
  student: Student;
};

const StudentDetails: React.FC<Props> = ({ student }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-xl shadow">
      {/* Student Info */}
      <div className="flex flex-col gap-4">
        <div className="p-3 bg-white mt-2 rounded-md">
          <p><span className="font-semibold">NAME:</span> {student.name}</p>
        </div>
        <div className="p-3 bg-white mt-2 rounded-md">
          <p><span className="font-semibold">DEPARTMENT:</span> {student.department}</p>
        </div>
        <div className="p-3 bg-white mt-2 rounded-md">
          <p><span className="font-semibold">MATRIC NUMBER:</span> {student.matric}</p>
        </div>
        <div className="p-3 bg-white mt-2 rounded-md">
          <p><span className="font-semibold">LEVEL:</span> {student.level}</p>
        </div>
        <div className="p-3 bg-white mt-2 rounded-md">
          <p><span className="font-semibold">GENDER:</span> {student.gender}</p>
        </div>
      </div>

      {/* Photo & Fingerprint */}
      <div className="flex flex-col items-center gap-6">
        <img
          src={ "/aaua_logo.png"}
          alt="Student"
          className="w-40 h-40 object-contain rounded-lg "
        />
        <div className="flex flex-col items-center p-4 border rounded-lg px-10 max-w-xs">
          <p className="text-gray-600 mb-2">
            {student.fingerprintMatched ? "fingerprint matched" : "no match"}
          </p>
          <IoFingerPrintOutline className="text-6xl my-6" />
          <button
            className={`w-full py-2 rounded-md font-semibold ${
              student.fingerprintMatched
                ? "bg-green-700 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {student.fingerprintMatched ? "SUCCESSFULLY" : "FAILED"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
