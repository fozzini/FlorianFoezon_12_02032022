import React, { useContext } from 'react';
import { savedUser } from '../../pages/Profil.js';
import { dataContext } from '../../utils/services/ApiContext.js'
/**
* create Header component
*
* @param {MAIN_DATA} consume datas from context
* @return html - Header react component with recharts graphs
*/
const Header = () => {
  const {MAIN_DATA} = useContext(dataContext);
  const currentUserMainData = {MAIN_DATA}.MAIN_DATA[savedUser()];
  const userInfos = currentUserMainData.userInfos;
  return (
    <div>
      <div className='header'>
          <div className='title'>
            <h2>Bonjour</h2>
            <h2 className='firstname'>{userInfos.firstName}</h2>
          </div>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
    </div>
  );
};

export default Header;