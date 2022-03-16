
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import HorizontalNav from '../components/nav/HorizontalNav';
import VerticalNav from '../components/nav/VerticalNav';
import { dataContext } from '../utils/services/ApiContext';
import { apiDataToFetch, mockDataToFetch, setData } from '../utils/services/Fetch';



const Home = () => {
/**
* create Home page
*
* @component link - create button to set options and redirect to selected page
* @param setapi, setmock - set  arrays regarding the data source.
* @return html - Home page
*/
const {setMAIN_DATA, setACTIVITY, setAVERAGE_SESSIONS, setPERFORMANCE} = useContext(dataContext);

const setApi = () => {
    setData(apiDataToFetch(), [setMAIN_DATA, setACTIVITY, setAVERAGE_SESSIONS, setPERFORMANCE])
}
const setMock = () => {
  setData(mockDataToFetch(), [setMAIN_DATA, setACTIVITY, setAVERAGE_SESSIONS, setPERFORMANCE])
}


const [dataApi, setDataApi] = useState(true);
const toggleDataApi = () => setDataApi(!dataApi);

  return (
    <div className='homeContainer' onLoad= {() => setMock()}>
      <HorizontalNav/>
      <VerticalNav/>
      <div className='userLink'>
        <Link to={`/Profil`} onClick={() => localStorage.setItem("user", "0")}> <div className='avatar color1'><h3>Karl</h3></div></Link>
        <Link to={`/Profil`} onClick={() => localStorage.setItem("user", "1")}> <div className='avatar'><h3>Cécilia</h3></div> </Link>
      </div>
      <div className='apiLink'>
        <Link to={`/`} onClick={() => {toggleDataApi();dataApi? setApi() : setMock()}}>
          <div className='fetchApi'><h3>{dataApi ? "API":"MOCK" }</h3><h2>{dataApi ? "MOCK setted":"API setted" }</h2></div><div id="apiError"></div> </Link>
      </div>
    </div>
  );
};

export default Home;