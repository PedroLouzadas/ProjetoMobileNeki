import React,{ createContext, useEffect, useState } from "react";
export const ContextLoginUser = createContext({});

export const ContextLogin = ({children}) => {
    const [usuarioCON, setUsuarioCON] = useState("");

  return (
    <ContextLoginUser.Provider
      value={{
        usuarioCON,
        setUsuarioCON,
      }}>
      {children}
    </ContextLoginUser.Provider>
  );
}