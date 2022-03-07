import React from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';
const data = [
  { value: 100 },
  { value: 12 },
];

const Score = () => {
  
  return (                    
  <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
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