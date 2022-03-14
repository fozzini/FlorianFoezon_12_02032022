import React, { useContext } from 'react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { savedUser } from '../../pages/Profil';
import { dataContext } from '../../utils/services/ApiContext';

const StatsRadar = () => {
/**
* create statsradar component
* @param currentUserPerformance.data.map set datas for recharts
* @param {PERFORMANCE} consume datas from context
* @return html - statsRadar react component with recharts graphs
*/
  const {PERFORMANCE} = useContext(dataContext);
  const currentUserPerformance = {PERFORMANCE}.PERFORMANCE[savedUser()];
  currentUserPerformance.data.map((e,index)=> Object.assign(currentUserPerformance.data[index], {kind: currentUserPerformance.kind[index+1]}));
  return (
    <div className='StatsRadar'>
    <ResponsiveContainer width='100%' >
      <RadarChart outerRadius="47%" data={currentUserPerformance.data} >
      <PolarGrid radialLines={false}/>
        <PolarAngleAxis dataKey="kind" stroke="#ffffff" fill="#ffffff" tickLine={false} />
        <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default StatsRadar;