import React, { createContext } from "react";

interface AppContextProps {
  // State management properties here
}

export const AppContext = createContext<AppContextProps>(null);