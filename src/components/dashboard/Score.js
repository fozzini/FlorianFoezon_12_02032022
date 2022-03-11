import React from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';
const data = [
  { value: 100 },
  { value: 12 },
];

const Score = () => {
  
  return (                    
    <div className='score'>
      <h2>Score</h2>
      <div className='scoreCenter'>
        <h4>12%</h4>
        <h5>de votre <br/>objectif</h5>
      </div>
      <ResponsiveContainer width='100%' >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="90%"
            outerRadius="100%"
            fill="#FF0000"
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            cornerRadius={5}
            >
            <Cell
            key="test"
            fill="#ffffff"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;