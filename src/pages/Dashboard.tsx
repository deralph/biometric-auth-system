import React from 'react'
import Header from '../components/Header'
import BarChart from '../components/BarChart'
import DonutChart from '../components/DonutChart'
import StudentsTable from '../components/StudentTable'
import { barChartData, donutData, students } from '../data'

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex">

      <main className="flex-1 p-6 md:p-10">
        <Header />

        <div className="flex justify-between gap-8">
          <div className="basis-1/2">
            <BarChart data={barChartData} />
          </div>

          <div className="basis-1/2">
            <DonutChart verified={donutData.verified} registered={donutData.registered} />
          </div>
        </div>

        <StudentsTable students={students} />
      </main>
    </div>
  )
}

export default Dashboard
