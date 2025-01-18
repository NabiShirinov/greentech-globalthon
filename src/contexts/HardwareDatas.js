import React, { createContext, useContext, useState } from 'react';

const HardwareDatasContext = createContext();
export const useHardwareDatasContext = () => useContext(HardwareDatasContext);
export const HardwareDatasProvider = ({ children }) => {
  const [initialDatas, setInitialDatas] = useState({}); 
  const [isConnected, setisConnected] = useState(false)
  return (
    <HardwareDatasContext.Provider value={{ initialDatas, setInitialDatas,isConnected,setisConnected }}>
      {children}
    </HardwareDatasContext.Provider>
  );
};

