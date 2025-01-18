import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();
// default light
export const useNotificationContext = () => useContext(NotificationContext);
export const NotificationProvider = ({ children }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false); 
  return (
    <NotificationContext.Provider value={{ isNotificationOpen, setIsNotificationOpen }}>
      {children}
    </NotificationContext.Provider>
  );
};

