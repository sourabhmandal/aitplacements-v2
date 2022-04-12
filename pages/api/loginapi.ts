// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/db";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import { ErrorResp, IToken } from "../../types";
import { generateToken } from "../../utils/_auth/_tokens";
import { FRONTEND_ROUTES } from "./routes";
import { serialize } from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string } | ErrorResp>
) {
  try {
    const { email, pass } = JSON.parse(req.body);
    const user = await prisma.users.findFirst({
      where: {
        email: email,
        password: pass,
      },
      select: {
        id: true,
        email: true,
        verified: true,
        role: true,
      },
    });
    if (user?.email == email) {
      const { serializedcookie } = generateToken(
        user?.id || "",
        user?.role || "",
        user?.verified || false
      );
      res.setHeader("set-cookie", serializedcookie);
      res.send({ message: "logged in" });
    } else {
      res.status(500).json({ error: "login credentials are incorrect" });
    }
  } catch (err) {
    res.status(500).json({ error: "" });
  }
}
