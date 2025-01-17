import { createContext } from "react";
import React from "react";
export const WorkContext = createContext();
const ContextWork = ({ children }) => {
  const a = "nebi";
  return (
    <WorkContext.Provider
      value={{
        a,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};

export default ContextWork;
