import React from 'react'


const colorMap: Record<string, string> = {
yellow: 'bg-yellow-100 text-yellow-600',
blue: 'bg-blue-100 text-blue-600',
green: 'bg-green-100 text-green-600',
}


const StatCard: React.FC<{ title: string; value: string; color?: string;last?: boolean; Icon:any }> = ({ title, value, color = 'blue',last,Icon }) => {
return (
<div className={` ${last?"":"border-r pr-12"}  p-4 flex items-center gap-4 min-w-[160px]`}>
<div className={`p-3 rounded-lg ${colorMap[color] || colorMap.blue}`}> 
    {Icon}
</div>
<div>
<p className="text-xs text-gray-500">{title}</p>
<p className="font-semibold text-lg">{value}</p>
</div>
</div>
)
}


export default StatCard

