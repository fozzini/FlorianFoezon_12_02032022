import React, { useContext } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { dataContext } from '../../utils/services/ApiContext';
import { savedUser } from '../../pages/Profil';

const Average = () => {
  const days=["L","M","M","J","V","S","D"];
  const {USER_AVERAGE_SESSIONS} = useContext(dataContext);
  const currentUserAverageSessions = {USER_AVERAGE_SESSIONS}.USER_AVERAGE_SESSIONS[savedUser()];
  const averageSessions = currentUserAverageSessions.sessions;
  averageSessions.map((e,index)=> Object.assign(averageSessions[index], {day: days[index]}));
  
  return (
  <div className='average'>
    <h3>Durée moyenne des<br/>sessions</h3>
    <ResponsiveContainer width='100%' >
      <LineChart data={averageSessions} margin={{top: 5,right: 0,left: 0,bottom: 5,}}>
        <XAxis tickLine={false} axisLine={false} stroke="#ffffff" dataKey="day" height={20} padding={{ left: 3, right: 0 }} />
        <Tooltip contentStyle={{border:"none",padding:0}}
            itemStyle={{ color: "black",backgroundColor: "white",padding:5}}
            formatter={(value) => [value +" min"]}
            labelFormatter={() => ``}
            cursor={{color: 'blue'}}/> 
            
        <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} legendType="cross" activeDot={{ stroke: 'white',strokeOpacity:"0.4", strokeWidth: 10, r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Average;