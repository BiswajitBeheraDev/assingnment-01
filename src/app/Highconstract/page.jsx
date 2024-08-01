import React, { createContext, useState, useContext } from 'react';

const HighContrastContext = createContext();

export const HighContrastProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);

  return (
    <HighContrastContext.Provider value={{ highContrast, setHighContrast }}>
      {children}
    </HighContrastContext.Provider>
  );
}

export const useHighContrast = () => useContext(HighContrastContext);
