
import { Link } from 'react-router-dom';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';
import { dataSource } from '../utils/services/ApiContext';

const Home = () => {
/**
* create Home page
*
* @component link - create button to set options and redirect to selected page
* @return html - Home page
*/
  return (
    <div className='homeContainer'>
      <HorizontalNav/>
      <VerticalNav/>
      <div className='userLink'>
        <Link to={`/Profil`} onClick={() => localStorage.setItem("user", "0")}> <div className='avatar color1'><h3>Karl</h3></div></Link>
        <Link to={`/Profil`} onClick={() => localStorage.setItem("user", "1")}> <div className='avatar'><h3>Cécilia</h3></div> </Link>
      </div>
      <div className='apiLink'>
        <Link to={`/`} onClick={() =>localStorage.setItem("api", "1")}> <div className='fetchApi'><h3>Api</h3></div> </Link>
        <Link to={`/`} onClick={() =>localStorage.setItem("api", "0")}> <div className='fetchApi'><h3>Mock</h3></div> </Link>
      </div>
    </div>
  );
};

export default Home;