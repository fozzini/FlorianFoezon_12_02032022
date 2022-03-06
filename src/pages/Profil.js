import { useContext } from 'react';
import { MainDataContext } from '../utils/services/ApiContextMainData';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';
import Oval_grey from '../assets/Oval_grey.svg';
import Oval_red from '../assets/Oval_red.svg';

const Profil = () => {
  const savedUser = parseInt(localStorage.getItem("user"));
  const {USER_MAIN_DATA} = useContext(MainDataContext);
  const currentUserMainData = {USER_MAIN_DATA}.USER_MAIN_DATA[savedUser];
  const userInfos = currentUserMainData.userInfos;
  console.log(userInfos)

  return (
    <div className='profilContainer'>
      <HorizontalNav/>
      <VerticalNav/>
      <div className='dashboard'>
        <div className='header'>
          <div className='title'>
            <h2>Bonjour</h2>
            <h2 className='firstname'>{userInfos.firstName}</h2>
          </div>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
        <div className='section'>
          <div className='stats'>
            <div className='activity'>
              <div className="activityHeader">
                <h3>Activité quotidienne</h3>
                <div className="activityLegend">
                  <div className="element"><img src={Oval_grey} alt="rond gris"/><h3>Poids(kg)</h3></div>
                  <div className="element"><img src={Oval_red} alt="rond rouge"/><h3>Calories brulées(kCal)</h3></div>
                </div>
              </div>

            </div>
            <div className='charts'>
              <div className='average'></div>
              <div className='scope'></div>
              <div className='score'></div>
            </div>
          </div>
          <div className='nutrition'>
            <div className="nutrients marginBottom">
              <div className="IconeContainer">
                <span className="iconeNutrients"></span>
              </div>
              <div className='nutrientText'>
                <h2></h2>
                <h3></h3>
              </div>
            </div>
            <div className="nutrients marginBottom">
              <div className="IconeContainer">
                <span className="iconeNutrients"></span>
              </div>
              <div className='nutrientText'>
                <h2></h2>
                <h3></h3>
              </div>
            </div>
            <div className="nutrients marginBottom">
              <div className="IconeContainer">
                <span className="iconeNutrients"></span>
              </div>
              <div className='nutrientText'>
                <h2></h2>
                <h3></h3>
              </div>
            </div>
            <div className="nutrients">
              <div className="IconeContainer">
                <span className="iconeNutrients"></span>
              </div>
              <div className='nutrientText'>
                <h2></h2>
                <h3></h3>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;