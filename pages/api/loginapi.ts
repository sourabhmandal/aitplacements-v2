// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/db";
import jwt from "jsonwebtoken";
import { Users } from "@prisma/client";
import { ErrorResp, IToken } from "../../types";
import { generateToken } from "../../utils/_auth/_tokens";
import { FRONTEND_ROUTES } from "./routes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IToken | ErrorResp>
) {
  try {
    const { email, pass } = JSON.parse(req.body);
    const user: Users | null = await prisma.users.findFirst({
      where: {
        email: email,
        password: pass,
      },
    });
    if (user?.email == email) {
      const { accessToken } = generateToken(
        user?.email || "",
        user?.role || "",
        user?.verified || false
      );
      res.send({ accessToken });
    } else {
      res.status(500).json({ error: "login credentials are incorrect" });
    }
  } catch (err) {
    res.status(500).json({ error: "" });
  }
}
