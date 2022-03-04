
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import ApiContextMainData from "./utils/services/ApiContextMainData";

const App = () => {
  return (
    <BrowserRouter>
    <ApiContextMainData>
     <Routes>
       <Route path='/' element={< Home />}/>
       <Route path='/Profil' element={<Profil/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
     </ApiContextMainData>
    </BrowserRouter>
  );
};

export default App;
