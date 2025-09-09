import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'
import { IoFingerPrintOutline } from "react-icons/io5";

const Input: React.FC<any> = ({ label, className, ...props }) => (
  <label className="block text-xs text-gray-600 w-full">
    <div className="mb-2 font-medium">{label}</div>
    <input className={`w-full border border-gray-200 rounded-full px-4 py-3 text-sm outline-none ${className}`} {...props} />
  </label>
)

const ThumbCard: React.FC<{ title: string; onScan?: ()=>void }> = ({ title, onScan }) => {
  return (
    <div className="border-2 border-green-600/30 rounded-xl p-6 flex flex-col items-center gap-4 w-full max-w-xs">
      <div className="text-sm text-gray-700">{title}</div>
      <div className="w-28 h-28 text-6xl  flex items-center justify-center">
       <IoFingerPrintOutline /> </div>
      <button onClick={onScan} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full">Scan thumb</button>
    </div>
  )
}

const Verification: React.FC = () => {
  const [matric, setMatric] = useState('')
  const navigate=useNavigate()

  const checkDetails = () => {
    alert('Check details — replace with real verification logic')
    navigate('/verify-student')
  }

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-6">VERIFICATION</h2>

     <Header register/>
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h3 className="text-lg font-semibold mb-6">Verify Student</h3>

        <div className="max-w-2xl">
          <Input label="MATRIC NUMBER" placeholder="Enter matric number" value={matric} onChange={(e:{target:any})=>setMatric(e.target.value)} />
          <div className="border-t border-gray-300 my-6" />

          <h4 className="text-md font-semibold mb-2">Fingerprint Capture Section</h4>
          <p className="text-sm text-gray-500 mb-6">Scan both the student's right and left thumbs using the fingerprint scanner, these prints will be used for secure identity verification during exams.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ThumbCard title="Place left thumb here" onScan={()=>alert('scanning left thumb')} />
            <ThumbCard title="Place right thumb here" onScan={()=>alert('scanning right thumb')} />
          </div>

          <div className="flex justify-center mt-10">
            <button onClick={checkDetails} className="bg-blue-500 text-white px-8 py-3 rounded-full">Check Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verification


