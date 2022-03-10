import React from 'react';
import { createContext } from 'react';
import { USER_ACTIVITY, USER_MAIN_DATA, USER_PERFORMANCE, USER_AVERAGE_SESSIONS} from '../../datas/Datas';

export const dataContext = createContext()

const ApiContext = ({ children }) => {
  return (
    <div>
      <dataContext.Provider value={{ USER_ACTIVITY, USER_MAIN_DATA, USER_PERFORMANCE, USER_AVERAGE_SESSIONS }}>
        {children}
      </dataContext.Provider>
    </div>
  );
};

export default ApiContext;