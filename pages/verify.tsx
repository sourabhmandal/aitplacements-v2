import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import aitlogo from "../assets/aitlogo.gif";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BACKEND_ROUTES, FRONTEND_ROUTES } from "./api/routes";
import toast, { Toaster } from "react-hot-toast";

function VerifyEmail() {
  const router = useRouter();
  useEffect(() => {
    const invite = router.query.invite?.toString()!;

    async function verifyuser() {
      console.log("HERE");
      if (!invite) return "";
      console.log(invite);
      if (typeof window == undefined) return { data: { message: "server" } };
      const resp = await fetch(BACKEND_ROUTES.VERIFY, {
        method: "POST",
        body: JSON.stringify({
          invite: invite,
        }),
      });
      const data = await resp.json();
      if (data.message) {
        toast.success(data.message);
        router.push(FRONTEND_ROUTES.DASHBOARD);
      }
      if (data.error) toast.error(data.error);
    }

    //console.log(invite);
    verifyuser();
  }, [router]);

  return (
    <div>
      <Toaster />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          margin={"auto"}
        >
          <a className="inline-block mb-6" href="#">
            <Image width={60} height={60} src={aitlogo} alt="" />
          </a>

          <Typography
            variant="h3"
            className="mb-4 text-2xl md:text-3xl font-bold"
          >
            Verifying Your Email
          </Typography>
          <Typography
            variant="h5"
            className="mb-4 text-2xl md:text-3xl font-bold"
          >
            please wait...
          </Typography>
        </Box>
      </main>
    </div>
  );
}

export default VerifyEmail;
