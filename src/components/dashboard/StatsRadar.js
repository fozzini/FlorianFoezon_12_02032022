import React, { useContext } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { savedUser } from '../../pages/Profil';
import { dataContext } from '../../utils/services/ApiContext';

const StatsRadar = () => {
  const {PERFORMANCE} = useContext(dataContext);
  const currentUserPerformance = {PERFORMANCE}.PERFORMANCE.USER_PERFORMANCE[savedUser()];
  currentUserPerformance.data.map((e,index)=> Object.assign(currentUserPerformance.data[index], {kind: currentUserPerformance.kind[index+1]}));
  return (
    <div className='StatsRadar'>
    <ResponsiveContainer width='100%' >
      <RadarChart outerRadius="60%" data={currentUserPerformance.data} >
      <PolarGrid radialLines={false}/>
        <PolarAngleAxis dataKey="kind" stroke="#ffffff" fill="#ffffff" tickLine={false} />
        <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default StatsRadar;