import React from 'react';
import vnav1 from '../../assets/vnav1.svg';
import vnav2 from '../../assets/vnav2.svg';
import vnav3 from '../../assets/vnav3.svg';
import vnav4 from '../../assets/vnav4.svg';

const VerticalNav = () => {
/**
* create vertical component
*
* @return html - vertical component
*/
  return (
    <div className='verticalNavContainer'>
      <div className='sportsIcones'>
        <div className='vnavimg'><img src={vnav1} alt="vnav1"/></div>
        <div className='vnavimg'><img src={vnav2} alt="vnav2"/></div>
        <div className='vnavimg'><img src={vnav3} alt="vnav3"/></div>
        <div className='vnavimg'><img src={vnav4} alt="vnav4"/></div>
      </div>
      <h3>Copiryght, SportSee 2020</h3>
    </div>
    
  );
};

export default VerticalNav;