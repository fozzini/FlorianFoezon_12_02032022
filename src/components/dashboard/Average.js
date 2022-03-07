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
      uv: 0,
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
      uv: 60,
      pv: 4300,
      amt: 2100,
    },
  ];
    
  return (
  <ResponsiveContainer width='100%' >
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianAxis axisLine={false} vertical={false} />
      <CartesianGrid vertical={false} horizontal={false} />
      <XAxis  tickLine={false} axisLine={false} stroke="#ffffff" dataKey="name" />
      <YAxis hide={true} />
      <Tooltip />
      
      <Line type="monotone" dataKey="uv" stroke="#ffffff" dot={false} activeDot={{ stroke: 'white', strokeWidth: 2, r: 5 }}  />
    </LineChart>
  </ResponsiveContainer>
  );
};

export default Average;