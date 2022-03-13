import React, { useContext } from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';
import { savedUser } from '../../pages/Profil';
import { dataContext } from '../../utils/services/ApiContext';

const data = [];

const Score = () => {
  const {MAIN_DATA} = useContext(dataContext);
  const currentUserMainData = {MAIN_DATA}.MAIN_DATA[savedUser()];
  const userScore = currentUserMainData.score;
  Object.assign(currentUserMainData, { value: 100  ,value: userScore*100});
  data.splice(0,2,{ value: 100 } ,{value: userScore*100});
  return (                    
    <div className='score'>
      <h2>Score</h2>
      <div className='scoreCenter'>
        <h4>{data[1].value}%</h4>
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