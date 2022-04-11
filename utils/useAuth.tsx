import { useContext } from "react";
import { IAuthContext } from "../types";
import { AuthContext } from "./AuthContext";

export const useAuth = (): IAuthContext => useContext(AuthContext);
