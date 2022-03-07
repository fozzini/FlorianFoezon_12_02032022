import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, CartesianAxis } from 'recharts';

const Activity = (props) => {

  return (
    <ResponsiveContainer width='100%' height={200}>
      <BarChart
        width={300}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: -5,
          left: 15,
          bottom: 5,
        }}
      >
        <CartesianAxis axisLine={false}/>
        <CartesianGrid vertical={false} strokeDasharray="3 1" />
        <XAxis tickLine={false} dataKey="index"/>
        <YAxis tickLine={false} axisLine={false} orientation="right" tickCount={3}/>
        <Tooltip  />
        <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activity;