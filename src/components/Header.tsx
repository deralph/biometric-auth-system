import React from 'react'
import { stats } from '../data'
import StatCard from './StatCard'
import { UserPlus } from 'lucide-react'
import { FaUserAlt } from "react-icons/fa";
import { HiUserGroup,HiUsers } from "react-icons/hi";

const Header: React.FC<{register?:boolean}> = ({register}) => {
return (
<header className="mb-6">
 <div className="">
{!register &&<div className="my-8">
<h1 className="text-2xl font-bold">DASHBOARD</h1>
<p className="text-xs text-gray-500 mt-1">Welcome [ADMIN]</p>
</div>
}

<div className="flex px-[10%] bg-gray-100 py-6 justify-between gap-4">
<StatCard title="TOTAL REGISTRATIONS" value={String(stats.totalRegistrations)} Icon={<FaUserAlt/>} color="yellow" />
<StatCard title="TOTAL VERIFICATION" value={String(stats.totalVerification)} Icon={<HiUsers/>} color="blue" />
<StatCard title="TOTAL STUDENTS" value={String(stats.totalStudents)} Icon={<HiUserGroup />} color="green" last/>
</div>
</div>
</header>
)
}


export default Header