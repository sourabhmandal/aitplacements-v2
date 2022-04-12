// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";
import { decodeJWT } from "../../../utils/_auth/_jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const access = req.cookies["accessToken"]?.toString()!;
  if (!access) res.status(403).json({ error: "unauthorized access" });
  const decoded = decodeJWT(access);
  try {
    const user = await prisma.users.findFirst({
      where: {
        id: decoded.id,
      },
    });
    res.status(200).json({ message: "success", data: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "fail to fetch user" });
  }
}
