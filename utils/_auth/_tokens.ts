import { IToken } from "../../types";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export function generateToken(
  id: string,
  role: string,
  verified: boolean
): IToken {
  const privateKey: string = process.env.JWT_SECRET || "";
  const accessToken = jwt.sign(
    {
      id: id,
      verified: verified,
      role: role,
    },
    privateKey,
    {
      expiresIn: "5d",
      algorithm: "HS256",
    }
  );
  const expdate = new Date(new Date().getTime() + 5 * 24 * 3600 * 1000);
  const serializedcookie = serialize("accessToken", accessToken, {
    domain: "localhost",
    expires: expdate,
    httpOnly: true,
    secure: false,
  });
  return {
    accessToken,
    serializedcookie,
  };
}

export function generateInviteHash(id: string): string {
  const privateKey: string = process.env.JWT_SECRET || "";
  const invitehash = jwt.sign(
    {
      id: id,
    },
    privateKey,
    {
      expiresIn: "1 days",
      algorithm: "HS256",
    }
  );
  return invitehash;
}

export function verifyInviteHash() {}