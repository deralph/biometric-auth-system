
import React, { useState } from 'react'
import Header from '../components/Header'
import { MdPhotoCamera } from "react-icons/md";
import { IoFingerPrintOutline } from "react-icons/io5";


export const Input: React.FC<any> = ({ label, className, ...props }) => (
  <label className="block text-xs text-gray-600">
    <div className="mb-2 font-medium">{label}</div>
    <input className={`w-full border border-gray-200 rounded-full px-4 py-3 text-sm outline-none ${className}`} {...props} />
  </label>
)

const Select: React.FC<any> = ({ label, children, className, ...props }) => (
  <label className="block text-xs text-gray-600">
    <div className="mb-2 font-medium">{label}</div>
    <div className={`relative`}> 
      <select className={`w-full border border-gray-200 rounded-full px-4 py-3 text-sm outline-none appearance-none ${className}`} {...props}>
        {children}
      </select>
      <span className="absolute right-4 top-3 text-gray-400">▾</span>
    </div>
  </label>
)

const Registration: React.FC = () => {
  const [form, setForm] = useState({ name:'', matric:'', department:'', level:'100', gender:'M'})

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev=> ({...prev, [e.target.name]: e.target.value}))
  }

  const save = () => {
    alert('Save called — replace with API call')
  }

  const reset = () => setForm({ name:'', matric:'', department:'', level:'100', gender:'M'})

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-6">REGISTRATION</h2>

       <Header register/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
          <h3 className="text-lg font-semibold mb-6">Register New Student</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input label="NAME" name="name" value={form.name} onChange={onChange} placeholder="Enter name" />
              <div className="h-6" />
              <Input label="MATRIC NUMBER" name="matric" value={form.matric} onChange={onChange} placeholder="Enter matric number" />
              <div className="h-6" />
              <Select label="DEPARTMENT" name="department" value={form.department} onChange={onChange}>
                <option value="">Select Department</option>
                <option>Computer Science</option>
                <option>Biology</option>
                <option>Mathematics</option>
              </Select>
            </div>

            <div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Select label="LEVEL" name="level" value={form.level} onChange={onChange}>
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                  </Select>
                </div>

                <div className="w-1/2">
                  <Select label="GENDER" name="gender" value={form.gender} onChange={onChange}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </Select>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">Note: fill all fields correctly.</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-6">Capture Student Passport Photo</h3>
          <div className="w-40 h-40 rounded-lg border-2 border-dashed flex items-center justify-center mb-4">
         <div className="border-4 text-4xl p-4 rounded-[18px]">
          <MdPhotoCamera />
          </div>
          </div>
          <p className="text-xs text-gray-500 text-center">"Take a clear front-facing photo of the student. This will be used for identification during exams."</p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full">Capture Photo</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold mb-2">Fingerprint Capture Section</h3>
        <p className="text-sm text-gray-500 mb-6">Scan both the student's right and left thumbs using the fingerprint scanner, these prints will be used for secure identity verification during exams.</p>

        <div className="flex gap-6">
          {["Place left thumb here","Place right thumb here"].map((t, i) => (
            <div key={i} className="border-2 border-[#00715D] rounded-xl p-6 flex flex-col items-center gap-4">
              <div className="text-sm text-gray-600">{t}</div>
              <div className="w-28 h-28 rounded-lg flex items-center justify-center text-6xl">
                <IoFingerPrintOutline />
                </div>
              <button className="mt-2 bg-blue-500 text-white px-10 py-2 rounded-[12px]">Scan thumb</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-6 justify-center mb-12">
        <button onClick={save} className="bg-blue-500 text-white px-10 py-3 rounded-[12px]">Save Record</button>
        <button onClick={reset} className="bg-orange-500 text-white px-10 py-3 rounded-[12px]">Reset Form</button>
      </div>
    </div>
  )
}

export default Registration

