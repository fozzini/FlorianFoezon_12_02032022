import React from 'react';
import Oval_grey from '../../assets/Oval_grey.svg';
import Oval_red from '../../assets/Oval_red.svg';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, CartesianAxis } from 'recharts';

const Activity = (props) => {

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
      <BarChart data={props.data} margin={{top: 5,right: -5,left: 15,bottom: 5}}>
        <CartesianAxis axisLine={false}/>
        <CartesianGrid vertical={false} strokeDasharray="3 1" />
        <XAxis tickLine={false} dataKey="index"/>
        <YAxis tickLine={false} dataKey="kilogram" axisLine={false} orientation="right" tickCount={3}/>
<<<<<<< HEAD
        <Tooltip />
=======
        <Tooltip  />
>>>>>>> 4e5987b65ca41042b7227c0422e632187d11622b
        <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Activity;