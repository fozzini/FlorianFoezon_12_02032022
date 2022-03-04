import React from 'react';
import { createContext } from 'react';
import { USER_MAIN_DATA } from '../../datas/Datas';

export const MainDataContext = createContext()

const ApiContextMainData = ({ children }) => {
 
  return (
    <MainDataContext.Provider value={{ USER_MAIN_DATA }}>
      {children}
    </MainDataContext.Provider>
  );
};

export default ApiContextMainData;