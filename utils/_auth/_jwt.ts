import jwt_decode from "jwt-decode";

export const decodeJWT = (token: string) => {
  return jwt_decode(token) as { [key: string]: string };
};

export const verifyJWT = (token: string) => {
  try {
    const { exp }: any = jwt_decode(token);
    if (exp < (new Date().getTime() + 1) / 1000) return false;
  } catch (err) {
    return false;
  }
  return true;
};

export const cleanJWT = (token: string) => {
  return token.substring(token.indexOf("=") + 1, token.indexOf(";"));
};
