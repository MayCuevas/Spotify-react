import React, { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  
  const [IsLoggedIn, setLoginStatus] = useState([false]);

  useEffect(() => {
    let token = localStorage.getItem("auth");
    if (token != undefined) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <LoginContext.Provider value={[IsLoggedIn, setLoginStatus]}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContext;
export { LoginContextProvider };
