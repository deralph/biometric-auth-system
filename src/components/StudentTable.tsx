
import React, { useState } from 'react'
import { students } from '../data'
import {Trash2 } from 'lucide-react'
const levels = ['All Students', '100L','200L','300L','400L']

const StudentsTable: React.FC<{ students: Student[] }> = ({ students }) => {
  const [filter, setFilter] = useState('All Students')

  const filtered = filter === 'All Students' ? students : students.filter(s => s.level === filter)

  return (
    <div className="card mt-6 bg-gray-100 p-6">
      <h3 className="text-sm font-bold mb-4">MANAGE REGISTERED STUDENTS</h3>

      <div className="flex flex-wrap items-center gap-3  pb-4 mb-4">
        {levels.map(l => (
          <button
            key={l}
            onClick={() => setFilter(l)}
            className={`text-xs px-3 py-1 font-bold rounded ${filter === l ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          >{l}</button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl ">
        <div className="grid grid-cols-12 gap-4 bg-[#277EE830] p-3 text-xs font-semibold text-gray-600 font-bold">
          <div className="col-span-1">S/N</div>
          <div className="col-span-4">NAME</div>
          <div className="col-span-2">MATRIC NO</div>
          <div className="col-span-3">DEPARTMENT</div>
          <div className="col-span-1">LEVEL</div>
          <div className="col-span-1">ACTION</div>
        </div>

        <div className="">
          {filtered.map((s, idx) => (
            <div key={s.id} className="grid grid-cols-12 gap-4 p-4 border-2 border-gray-300 mt-4 rounded-md items-center">
              <div className="col-span-1 text-xs text-gray-500">{idx + 1}.</div>
              <div className="col-span-4 text-xs">{s.name}</div>
              <div className="col-span-2 text-xs">{s.matricNo}</div>
              <div className="col-span-3 text-xs">{s.department}</div>
              <div className="col-span-1 text-xs">{s.level}</div>
              <div className="col-span-1 text-xs text-red-600">
                <Trash2 /></div>
            </div>
          ))}
        </div>

        <div className="p-4 flex justify-end">
          <button className="bg-blue-500 text-white px-8 py-2 rounded-md font-boold">View all</button>
        </div>
      </div>
    </div>
  )
}

export default StudentsTable
