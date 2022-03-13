
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

import ApiContext from "./utils/services/ApiContext";

const App = () => {
  
  return (
    <BrowserRouter>
    <ApiContext>
    
     <Routes>
       <Route path='/' element={< Home />}/>
       <Route path='/Profil' element={<Profil/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
     
     </ApiContext>
    </BrowserRouter>
  );
};

export default App;
