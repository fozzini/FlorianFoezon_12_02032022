import React, { useContext } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, Rectangle, YAxis } from 'recharts';
import { dataContext } from '../../utils/services/ApiContext';
import { savedUser } from '../../pages/Profil';
import { PropTypes } from 'prop-types';

const Average = () => {
  
  const {AVERAGE_SESSIONS} = useContext(dataContext);
  console.log(savedUser())
  const currentUserAverageSessions = {AVERAGE_SESSIONS}.AVERAGE_SESSIONS.USER_AVERAGE_SESSIONS[savedUser()];
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
  CustomCursor.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
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