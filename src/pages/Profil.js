import { useContext } from 'react';
import { dataContext } from '../utils/services/ApiContext';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';
import Nutrition from '../components/dashboard/Nutrition';
import Header from '../components/dashboard/Header';
import energy from '../assets/energy.svg';
import chicken from '../assets/chicken.svg';
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import Activity from '../components/dashboard/Activity';
import Score from '../components/dashboard/Score';
import StatsRadar from '../components/dashboard/StatsRadar';
import Average from '../components/dashboard/Average';

export const savedUser = () => parseInt(localStorage.getItem("user"));

const Profil = () => {
  
  const {USER_MAIN_DATA} = useContext(dataContext);
  const currentUserMainData = {USER_MAIN_DATA}.USER_MAIN_DATA[savedUser()];
  const keydata = currentUserMainData.keyData ;
  
  return (
    <div className='profilContainer'>
      <HorizontalNav/>
      <VerticalNav/>
      <div className='dashboard'>
        <Header />
        <div className='section'>
          <div className='stats'>
            <div className='activity'>
              <Activity/>
            </div>
            <div className='charts'>
              <Average/>
              <StatsRadar/>
              <Score />
            </div>
          </div>
          <div className='nutrition'>
            <Nutrition element={keydata.calorieCount} elementUnit="kCal" text="Calories"
            icon={energy} classname="colorLighten-1" key={energy}/>
            <Nutrition element={keydata.proteinCount} elementUnit="g" text="Protéines"
            icon={chicken} classname="colorLighten-2" key={chicken}/>
            <Nutrition element={keydata.carbohydrateCount} elementUnit="g" text="Glucides"
            icon={apple} classname="colorLighten-3" key={apple}/>
            <Nutrition element={keydata.lipidCount} elementUnit="g" text="Lipides"
            icon={cheeseburger} classname="colorLighten-4" key={cheeseburger}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;