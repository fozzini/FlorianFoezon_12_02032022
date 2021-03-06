import React, { useContext } from 'react';
import Oval_grey from '../../assets/Oval_grey.svg';
import Oval_red from '../../assets/Oval_red.svg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dataContext } from '../../utils/services/ApiContext';
import { savedUser } from '../../pages/Profil';
import { ACTIVITY_FORMATTER } from '../../utils/services/DataFormatter';

const Activity = () => {
/**
* create Activity component
* @param {Activity} consume datas from context
* @return html - Activity react component with recharts graphs
*/
  const {ACTIVITY} = useContext(dataContext);
  const userDataSession = {ACTIVITY}.ACTIVITY[savedUser()].sessions;
  
  return (
    <div>
    <div className="activityHeader">
      <h3 className='headerTitle'>Activité quotidienne</h3>
      <div className="activityLegend">
        <div className="element"><img src={Oval_grey} alt="rond gris"/><h3>Poids(kg)</h3></div>
        <div className="element"><img src={Oval_red} alt="rond rouge"/><h3>Calories brulées(kCal)</h3></div>
      </div>
    </div>
    <ResponsiveContainer width='100%' height={200}>
      <BarChart data={ACTIVITY_FORMATTER(userDataSession)} margin={{top: 5,right: -5,left:-30,bottom: -15}} >
        <CartesianGrid vertical={false} strokeDasharray="3 1" />
        <XAxis tickLine={false} dataKey="index"/>
        <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} domain={['dataMin - 1', 'dataMax + 1']} tickCount={4}/>
        <YAxis yAxisId="left" orientation="left" axisLine={false} tickLine={false} tick={false} />
        <Tooltip 
            contentStyle={{backgroundColor: "#E60000", border:"none"}}
            itemStyle={{ color: "white",backgroundColor: "#E60000" }}
            formatter={(value,name) => [value + (name === "kilogram" ? 'kg' : 'kcal')]}
            labelFormatter={() => ``}/>
        <Bar yAxisId="right" dataKey="kilogram"  fill="#E60000" barSize={10} radius={[5, 5, 0, 0]}/>
        <Bar yAxisId="left" dataKey="calories" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} />
        
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Activity;