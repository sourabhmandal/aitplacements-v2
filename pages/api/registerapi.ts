import { Users } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/db";
import { generateToken } from "../../utils/_auth/_tokens";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    firstName,
    lastName,
    email,
    selectedBranch,
    selectedYear,
    regNo,
    password,
  } = JSON.parse(req.body);

  console.log(
    firstName,
    lastName,
    email,
    selectedBranch,
    selectedYear,
    regNo,
    password
  );

  try {
    const data = await prisma.users.create({
      data: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        role: "STUDENT",
        verified: false,
        details: "hello",
      },
      select: {
        email: true,
        role: true,
        verified: true,
      },
    });

    if (data.email == email) {
      const { accessToken } = generateToken(
        data.email || "",
        data.role || "",
        data.verified || false
      );

      //TODO: use node mailer
      res.send({ accessToken });
    } else {
      res.status(500).json({ error: "unable to register user" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
