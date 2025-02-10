import React from "react";

type MainContextValue = {
  // Add your context state properties here
};

export const MainContext = React.createContext<MainContextValue>(null);

export const useMainContext = () => {
  const context = React.useContext(MainContext);

  if (context === null) {
    throw new Error("MainContext must be used within a MainContext.Provider");
  }

  return context;
};