import React, { useContext } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Text } from 'recharts';
import { savedUser } from '../../pages/Profil';
import { dataContext } from '../../utils/services/ApiContext';
import { PERFORMANCE_FORMATTER } from '../../utils/services/DataFormatter';

const StatsRadar = () => {
/**
* create statsradar component
* @param currentUserPerformance.data.map set datas for recharts
* @param {PERFORMANCE} consume datas from context
* @return html - statsRadar react component with recharts graphs
*/
  const {PERFORMANCE} = useContext(dataContext);
  const currentUserPerformance = {PERFORMANCE}.PERFORMANCE[savedUser()];
  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 15}
        x={x + (x - cx) / 7}
      >
        {payload.value}
      </Text>
    );
  }
  
  return (
    <div className='StatsRadar'>
    <ResponsiveContainer width='100%' >
      <RadarChart outerRadius="80%" data={PERFORMANCE_FORMATTER(currentUserPerformance)} >
      <PolarGrid radialLines={false}/>
        <PolarAngleAxis  textAnchor='middle' dataKey="kind" tick={props => renderPolarAngleAxis(props)} stroke="#ffffff" fill="#ffffff" tickLine={false} />
        <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default StatsRadar;