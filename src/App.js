
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";

import Home from "./pages/Home";
import Profil from "./pages/Profil";


const App = () => {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={< Home />}/>
       <Route path='/Profil' element={<Profil/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
