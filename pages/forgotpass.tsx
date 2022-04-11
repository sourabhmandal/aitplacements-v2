import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import aitlogo from "../assets/aitlogo.gif";
import Head from "next/head";
import Link from "next/link";

function ForgotPass() {
  return (
    <div>
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
            Recover your account
          </Typography>
          <Grid
            container
            direction="column"
            spacing={2}
            justifyContent="center"
            sx={{ width: 400 }}
          >
            <Grid item>
              <TextField
                fullWidth
                required
                id="standard-required"
                label="Registered Email"
                variant="filled"
              />
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="success"
                size="large"
                fullWidth
              >
                Send Recovery Email
              </Button>
            </Grid>

            <Grid item sx={{ cursor: "pointer" }}>
              <Box sx={{ textAlign: "left" }}>
                Already Have an Account?{" "}
                <Link passHref href="/login">
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700 }}
                    color="slateblue"
                  >
                    Login
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </main>

      <footer></footer>
    </div>
  );
}

export default ForgotPass;
