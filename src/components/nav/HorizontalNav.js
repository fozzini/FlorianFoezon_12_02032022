import React from 'react';
import group from "../../assets/group.svg"

const HorizontalNav = () => {
  return (
    <div className='horizontalNavContainer'>
      <div className='logo'><img src={group} alt="logo"/></div>
      <div className='text text-color'><h3>SportSee</h3></div>
      <div className='text'><h3>Acceuil</h3></div>
      <div className='text'><h3>Profil</h3></div>
      <div className='text'><h3>Réglage</h3></div>
      <div className='text'><h3>Communauté</h3></div>
    </div>
  );
};
export default HorizontalNav;