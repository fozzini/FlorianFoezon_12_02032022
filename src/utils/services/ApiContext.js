import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { USER_ACTIVITY, USER_MAIN_DATA, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../datas/Datas';
/**
* Defines methods to get datas and share into differents components
*
* @param dataContext create the context
* @param dataSource get information from local storage to know where to get datas
*
*/
export const dataContext = createContext("")
export const dataSource = () => parseInt(localStorage.getItem("api"));



const ApiContext = ({ children }) => {
  /**
    * fetch datas depending from the choosen source. 
    * Used to create data arrays and feed components.
    *
    * @param dataArrays arrays from Api or mock
    * @param fetch fetch datas from apis
    * @return arrays - arrays to feed components in the context
  */
  const [MAIN_DATA, setMAIN_DATA] = useState({USER_MAIN_DATA}.USER_MAIN_DATA);
  const [ACTIVITY, setACTIVITY] = useState({USER_ACTIVITY}.USER_ACTIVITY);
  const [AVERAGE_SESSIONS, setAVERAGE_SESSIONS] = useState({USER_AVERAGE_SESSIONS}.USER_AVERAGE_SESSIONS);
  const [PERFORMANCE, setPERFORMANCE] = useState({USER_PERFORMANCE}.USER_PERFORMANCE);
  
  useEffect(() => {
    console.log("avant", dataSource());
    if (dataSource()===1) {
      console.log("après", dataSource());
      Promise.all([12,18].map(id => axios
        .get(`http://localhost:3000/user/${id}`)
        .then(resp => resp.data.data)
        )).then(resp => setMAIN_DATA(resp))
        
      Promise.all([12,18].map(id => axios
        .get(`http://localhost:3000/user/${id}/activity`)
        .then(resp => resp.data.data)
        )).then(resp => setACTIVITY(resp))
          
      Promise.all([12,18].map(id => axios
        .get(`http://localhost:3000/user/${id}/average-sessions`)
        .then(resp => resp.data.data)
        )).then(resp => setAVERAGE_SESSIONS(resp))
            
      Promise.all([12,18].map(id => axios
        .get(`http://localhost:3000/user/${id}/performance`)
        .then(resp => resp.data.data)
        )).then(resp => setPERFORMANCE(resp))
    }
  }, [setMAIN_DATA, setACTIVITY, setAVERAGE_SESSIONS, setPERFORMANCE ]);
            
  return (
    <div>
      <dataContext.Provider value={{ MAIN_DATA, ACTIVITY, AVERAGE_SESSIONS, PERFORMANCE }}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default ApiContext;