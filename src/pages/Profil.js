import { useContext } from 'react';
import { MainDataContext } from '../utils/services/ApiContextMainData';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';

const Profil = () => {
  const savedUser = parseInt(localStorage.getItem("user"));
  const {USER_MAIN_DATA} = useContext(MainDataContext);
  const usersData = Object.values({USER_MAIN_DATA})[0];
  return (
    <div>
      <HorizontalNav/>
      <VerticalNav/>
      <h1>Welcome, {savedUser}</h1>
    </div>
  );
};

export default Profil;