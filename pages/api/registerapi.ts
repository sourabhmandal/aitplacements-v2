import { Users } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../utils/db";
import { generateInviteHash, generateToken } from "../../utils/_auth/_tokens";
import nodemailer from "nodemailer";
import { FRONTEND_ROUTES } from "./routes";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "LOGIN",
    user: "placement.aitpune@gmail.com",
    pass: "xZYx5R4mWVbyJr",
  },
});

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
        id: true,
        firstName: true,
        email: true,
        role: true,
        verified: true,
      },
    });

    if (data.email == email) {
      //TODO: use node mailer
      const hash = generateInviteHash(data.id);
      const url = `${FRONTEND_ROUTES.VERIFY}?invite=${hash}`;
      let mailOptions = {
        to: data.email,
        from: `AIT PLACEMENT BOT <placement.aitpune@gmail.com>`,
        subject: "Please Verify Your Email Address",
        html: `Hello ${data.firstName},
          <br/>Thank You for registering on AIT Placement Portal.
          <br/>Please Click on the link to verify your email.
          <br/><br/>
          <a href=${url}>Click here to verify</a>
          <br/><br/>Note : Verification Link only valid for 48 hours`,
      };

      // create reusable transporter object using the default SMTP transport

      transporter.sendMail(mailOptions, (err, res) => {
        if (err) console.log("Message Not Sent", err);
        else {
          console.log("Message sent : %s", res.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(res));
        }
      });
      res.send({ message: "verification email sent" });
    } else {
      res.status(500).json({ error: "unable to register user" });
    }
  } catch (err) {
    //@ts-ignore
    if (err.code == "P2002")
      return res.status(500).json({ error: "user already registered" });
    res.status(500).json({ error: "unable to send email" });
  }
}
