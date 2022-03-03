import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';

const Home = () => {
  return (
    <div className='homeContainer'>
      <HorizontalNav/>
      <VerticalNav/>
      <div className='userLink'>
        <Link to={`/Profil`}> <div className='avatar color1'><h3>Karl</h3></div></Link>
        <Link to={`/Profil`}> <div className='avatar'><h3>Cécilia</h3></div> </Link>
      </div>
      
    </div>
  );
};

export default Home;