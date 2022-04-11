import React, { useState, createContext, FC, useEffect } from "react";
import { IAuthContext, IChildren } from "../types";

export const AuthContext = createContext<IAuthContext>({
  accessToken: "",
  refreshToken: "",
  setaccessToken: null,
  setrefreshToken: null,
});

const AuthContextProvider: FC<IChildren> = ({ children }) => {
  const [accessToken, setaccessToken] = useState<string>("");
  const [refreshToken, setrefreshToken] = useState<string>("");
  useEffect(() => {
    const access: string = localStorage.getItem("access") || "";
    const refresh: string = localStorage.getItem("refresh") || "";
    setaccessToken(access);
    setrefreshToken(refresh);
    return () => {};
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, refreshToken, setaccessToken, setrefreshToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
