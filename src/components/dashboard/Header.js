import React, { useContext } from 'react';
import { savedUser } from '../../pages/Profil.js';
import { dataContext } from '../../utils/services/ApiContext.js'

const Header = () => {
  const {USER_MAIN_DATA} = useContext(dataContext);
  const currentUserMainData = {USER_MAIN_DATA}.USER_MAIN_DATA[savedUser()];
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