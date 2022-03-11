import React, { useContext } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { savedUser } from '../../pages/Profil';
import { dataContext } from '../../utils/services/ApiContext';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const StatsRadar = () => {
  const {USER_ACTIVITY} = useContext(dataContext);
  const currentUserActivity = {USER_ACTIVITY}.USER_ACTIVITY[savedUser()];
  const sessions = currentUserActivity.sessions;
  return (
    <div className='StatsRadar'>
    <ResponsiveContainer width='100%' >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} margin={{top:10,right: 20,left:10,bottom:10}}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#ffffff" fill="#ffffff" tickLine={false} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar name="Mike" dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default StatsRadar;