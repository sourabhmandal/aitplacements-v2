// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const serializedcookie = serialize("accessToken", "", {
    domain: "localhost",
    sameSite: "lax",
    secure: false,
    expires: new Date(),
  });
  console.log(serializedcookie);
  res.setHeader("set-cookie", serializedcookie);
  res.status(200).json({ name: "John Doe" });
}
