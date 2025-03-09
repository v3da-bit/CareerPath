import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isCompressed, setIsCompressed] = useState(false);

  const toggleSidebar = () => {
    setIsCompressed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isCompressed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
