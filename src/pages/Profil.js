import { useContext } from 'react';
import { MainDataContext } from '../utils/services/ApiContextMainData';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';

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
          <div>
            <div className='activity'></div>
            <div className='charts'></div>
          </div>
          <div className='nutrition'></div>
        </div>
      </div>
    </div>
  );
};

export default Profil;