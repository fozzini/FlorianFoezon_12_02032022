import React, { useState } from 'react';
import { createContext } from 'react';

/**
* Defines methods to get datas and share into differents components
*
* @param dataContext create the context
*/
export const dataContext = createContext("")

const ApiContext = ({ children }) => {
  /** 
    * data used to feed components.
    * @param data categories
    * @return arrays - arrays to feed components in the context
  */
  const [MAIN_DATA, setMAIN_DATA] = useState();
  const [ACTIVITY, setACTIVITY] = useState();
  const [AVERAGE_SESSIONS, setAVERAGE_SESSIONS] = useState();
  const [PERFORMANCE, setPERFORMANCE] = useState();
  return (
    <div>
      <dataContext.Provider value={{ MAIN_DATA, ACTIVITY, AVERAGE_SESSIONS, PERFORMANCE,
      setMAIN_DATA, setACTIVITY, setAVERAGE_SESSIONS, setPERFORMANCE }}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default ApiContext;