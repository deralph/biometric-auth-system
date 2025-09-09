export type Student = {
id: string
name: string
matricNo: string
department: string
level: string
}


export const stats = {
totalRegistrations: 300,
totalVerification: 200,
totalStudents: 500,
}


export const barChartData = [
{ label: '100', value: 200 },
{ label: '200', value: 400 },
{ label: '300', value: 220 },
{ label: '400', value: 120 },
]


export const donutData = {
verified: 150,
registered: 350,
}


export const students: Student[] = Array.from({ length: 8 }).map((_, i) => ({
id: String(i+1),
name: 'James G. Brown',
matricNo: '200404156',
department: 'Computer Science',
level: ['100L','200L','300L','400L'][i % 4],
}))

