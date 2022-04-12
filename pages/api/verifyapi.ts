// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { decode } from "punycode";
import { prisma } from "../../utils/db";
import { decodeJWT, verifyJWT } from "../../utils/_auth/_jwt";
import { generateToken } from "../../utils/_auth/_tokens";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { invite } = JSON.parse(req.body);
  if (verifyJWT(invite)) {
    const decoded = decodeJWT(invite);
    try {
      const updateUser = await prisma.users.update({
        where: {
          id: decoded.id,
        },
        data: {
          verified: true,
        },
        select: {
          id: true,
          role: true,
          verified: true,
        },
      });

      const { serializedcookie } = generateToken(
        updateUser.id,
        updateUser.role,
        updateUser.verified
      );
      res.setHeader("set-cookie", serializedcookie);
      res.status(200).send({ message: "verified successfully. Logging in" });
    } catch (err) {
      res.status(500).json({ error: "User not Present" });
    }
  }
}
