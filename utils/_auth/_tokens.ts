import { IToken } from "../../types";
import jwt from "jsonwebtoken";

export function generateToken(
  email: string,
  role: string,
  verified: boolean
): IToken {
  const privateKey: string = process.env.JWT_SECRET || "";
  const accessToken = jwt.sign(
    {
      email: email,
      verified: verified,
      role: role,
    },
    privateKey,
    {
      expiresIn: "15 days",
      algorithm: "HS256",
    }
  );
  return {
    accessToken,
  };
}
