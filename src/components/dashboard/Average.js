import React from 'react';
import { CartesianAxis, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Average = () => {
  const data = [
    {
      name: 'L',
      uv: 30,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'M',
      uv: 23,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'M',
      uv: 45,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'J',
      uv: 15,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'V',
      uv: 0,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'S',
      uv: 23,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'D',
      uv: 40,
      pv: 4300,
      amt: 2100,
    },
  ];
    
  return (
    
  <ResponsiveContainer width='100%' >
    <LineChart
     
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis  tickLine={false} axisLine={false} stroke="#ffffff" dataKey="name" height={20} padding={{ left: 3, right: 0 }} />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#ffffff" dot={false} activeDot={{ stroke: 'white', strokeWidth: 2, r: 5 }} />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default Average;