import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";


const App = () => {
  const [accomodationsData, setAccomodationData] = useState([]);
  useEffect(() => {
    axios
      .get(`/projects/Front-End+V2/P9+React+1/logements.json`)
      .then((res) => setAccomodationData(res.data));
  }, []);
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={< Home data={accomodationsData} />}/>
       <Route path='/fiche-logement/:id' element={<FicheLogement data={accomodationsData}/>}/>
       <Route path='/a-propos' element={<Apropos/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
