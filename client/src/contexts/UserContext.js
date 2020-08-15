// React context API (similar but easier than Redux)
// to avoid prop drilling, called setup data layer, like creating a global variable
import React, { createContext, useContext } from "react";

// This is the data layer
export const UserContext = createContext();

export const useUserValue = () => useContext(UserContext);

// Build the provider
export const UserProvider = ({ children }) => (
  <UserContext.Provider value={useUserValue}>{children}</UserContext.Provider>
);
