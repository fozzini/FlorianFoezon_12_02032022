import React, { useContext } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, Rectangle, YAxis } from 'recharts';
import { dataContext } from '../../utils/services/ApiContext';
import { savedUser } from '../../pages/Profil';

const Average = () => {
  const days=["L","M","M","J","V","S","D"];
  const {USER_AVERAGE_SESSIONS} = useContext(dataContext);
  const currentUserAverageSessions = {USER_AVERAGE_SESSIONS}.USER_AVERAGE_SESSIONS[savedUser()];
  const averageSessions = currentUserAverageSessions.sessions;
  
  const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x, y } = points[0];
    return (
      <Rectangle
        margin={{bottom: 0}}
        fill="#E60000"
        stroke="#E60000"
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };
  return (
  <div className='average'>
    <h3>Durée moyenne des<br/>sessions</h3>
    <div className='days'>
      <span>L</span>
      <span>M</span>
      <span>M</span>
      <span>J</span>
      <span>V</span>
      <span>S</span>
      <span>D</span>
    </div>
    <ResponsiveContainer width='100%' >
      <LineChart data={averageSessions} margin={{top:0,right: 0,left: -60,bottom: 0}} >
        <YAxis tickLine={false} axisLine={false} tick={false} domain={['dataMin - 10', 'dataMax + 10']}/>
        <Tooltip 
          cursor={<CustomCursor />}
          contentStyle={{border:"none",padding:0}}
          itemStyle={{ color: "black",backgroundColor: "white",padding:5}}
          formatter={(value) => [value +" min"]}
          labelFormatter={() => ``}
        />  
        <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} legendType="cross" activeDot={{ stroke: 'white',strokeOpacity:"0.4", strokeWidth: 10, r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Average;