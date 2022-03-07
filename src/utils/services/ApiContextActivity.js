import React from 'react';
import { createContext } from 'react';
import { USER_ACTIVITY} from '../../datas/Datas';

export const ActivityContext = createContext()

const ApiContextActivity = ({ children }) => {
  return (
    <div>
      <ActivityContext.Provider value={{ USER_ACTIVITY }}>
        {children}
      </ActivityContext.Provider>
    </div>
  );
};

export default ApiContextActivity;