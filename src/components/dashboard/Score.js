import React, { useContext } from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';
import { savedUser } from '../../pages/Profil';
import { dataContext } from '../../utils/services/ApiContext';
import { MAIN_DATA_FORMATTER } from '../../utils/services/DataFormatter';
/**
* @param data create array of two objects from datas to use with Recharts
*/

const Score = () => {
/**
* create score component
* @param {Main-DATA} consume datas from context
* @return html - score react component with recharts graphs
*/
  const {MAIN_DATA} = useContext(dataContext);
  const currentUserMainData = {MAIN_DATA}.MAIN_DATA[savedUser()];

  return (                    
    <div className='score'>
      <h2>Score</h2>
      <div className='scoreCenter'>
        <h4>{MAIN_DATA_FORMATTER(currentUserMainData)[1].value}%</h4>
        <h5>de votre <br/>objectif</h5>
      </div>
      <ResponsiveContainer width='100%' >
        <PieChart>
          <Pie
            data={MAIN_DATA_FORMATTER(currentUserMainData)}
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