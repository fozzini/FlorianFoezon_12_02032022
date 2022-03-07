import { useContext } from 'react';
import { MainDataContext } from '../utils/services/ApiContextMainData';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';
import Nutrition from '../components/dashboard/Nutrition';
import Header from '../components/dashboard/Header';
import Oval_grey from '../assets/Oval_grey.svg';
import Oval_red from '../assets/Oval_red.svg';
import energy from '../assets/energy.svg';
import chicken from '../assets/chicken.svg';
import apple from '../assets/apple.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import Activity from '../components/dashboard/Activity';
import { ActivityContext } from '../utils/services/ApiContextActivity';
import Score from '../components/dashboard/Score';
import Scope from '../components/dashboard/scope';
import Average from '../components/dashboard/Average';

const Profil = () => {
  const savedUser = parseInt(localStorage.getItem("user"));
  const {USER_MAIN_DATA} = useContext(MainDataContext);
  const {USER_ACTIVITY} = useContext(ActivityContext);
  const currentUserActivity = {USER_ACTIVITY}.USER_ACTIVITY[savedUser];
  const currentUserMainData = {USER_MAIN_DATA}.USER_MAIN_DATA[savedUser];
  const userInfos = currentUserMainData.userInfos;
  const score = currentUserMainData.score;
  const keydata = currentUserMainData.keyData ;
  const sessions = currentUserActivity.sessions;
 
  return (
    <div className='profilContainer'>
      <HorizontalNav/>
      <VerticalNav/>
      <div className='dashboard'>
        <Header firstName={userInfos.firstName} key={userInfos.firstName}/>
        <div className='section'>
          <div className='stats'>

            <div className='activity'>
              <div className="activityHeader">
                <h3 className='headerTitle'>Activité quotidienne</h3>
                <div className="activityLegend">
                  <div className="element"><img src={Oval_grey} alt="rond gris"/><h3>Poids(kg)</h3></div>
                  <div className="element"><img src={Oval_red} alt="rond rouge"/><h3>Calories brulées(kCal)</h3></div>
                </div>
              </div>
              <Activity data={sessions}/>
            </div>

            <div className='charts'>
              <div className='average'>
                <h3>Durée moyenne des sessions</h3>
                <Average/>
              </div>
              <div className='scope'>
                <Scope/>
              </div>
              <div className='score'>
                <h2>Score</h2>
                <Score />
              </div>
            </div>
            
          </div>
          <div className='nutrition'>
            <Nutrition element={keydata.calorieCount} elementUnit="kCal" text="Calories"
            icon={energy} classname="IconeContainer colorLighten-1" key={energy}/>
            <Nutrition element={keydata.proteinCount} elementUnit="g" text="Protéines"
            icon={chicken} classname="IconeContainer colorLighten-2" key={chicken}/>
            <Nutrition element={keydata.carbohydrateCount} elementUnit="g" text="Glucides"
            icon={apple} classname="IconeContainer colorLighten-3" key={apple}/>
            <Nutrition element={keydata.lipidCount} elementUnit="g" text="Lipides"
            icon={cheeseburger} classname="IconeContainer colorLighten-4" key={cheeseburger}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;