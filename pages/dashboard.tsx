import { Router, SearchRounded, VisibilityOff } from "@mui/icons-material";
import { Cookies, useCookies } from "react-cookie";

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Notice from "../components/noticelist";
import ProfileCard from "../components/ProfileCard";
import { BACKEND_ROUTES } from "./api/routes";
import { useRouter } from "next/router";
import { Users } from "@prisma/client";
import Noticemodal from "../components/noticemodal";

function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Users>();
  const [openCreateNotice, setopenCreateNotice] = useState(false);
  useEffect(() => {
    // router.push(FRONTEND_ROUTES.LOGIN);
    (async () => {
      const resp = await fetch(BACKEND_ROUTES.GET_USER, { method: "GET" });
      const data = await resp.json();
      setUser(data.data);
    })();
    return () => {};
  }, [router]);

  return (
    <Layout>
      {user?.role == "STUDENT" ? (
        <Noticemodal
          isOpen={openCreateNotice}
          setIsOpen={setopenCreateNotice}
        />
      ) : (
        <></>
      )}
      <Typography variant="h4" sx={{ margin: 5 }}>
        Welcome, {user?.firstName}
      </Typography>
      <Paper elevation={2} variant="elevation" sx={{ margin: 5, padding: 1 }}>
        <Box display="flex" sx={{ width: "100%" }} gap={1}>
          <Box sx={{ width: "100%" }} gap={1}>
            {/* Search box and buttons */}
            <Box
              sx={{ width: "100%" }}
              display="flex"
              flexDirection="row"
              alignContent="center"
              justifyContent="space-evenly"
              gap={1}
            >
              <FormControl sx={{ width: 510 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-search">
                  search
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-search"
                  type={"text"}
                  value=""
                  onChange={() => {}}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle search visibility"
                        onClick={() => {}}
                        onMouseDown={() => {}}
                        edge="end"
                      >
                        <SearchRounded />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="search"
                />
              </FormControl>
              <Button onClick={() => setopenCreateNotice(true)}>
                Create Notice
              </Button>
              <Button>Registered Students</Button>
              <Button>Study Resources</Button>
            </Box>
            <Notice />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ padding: 2 }}
            >
              <Pagination count={10} color="primary" />
            </Box>
          </Box>

          <Box
            sx={{ width: "50%" }}
            display="flex"
            justifyItems="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <ProfileCard
              title={"Create Notice"}
              subtitle={"Publish Notice anytime"}
            >
              <Link passHref href="/registered-student">
                <Button>Study Resource</Button>
              </Link>
            </ProfileCard>
          </Box>
        </Box>
      </Paper>
    </Layout>
  );
}
export default Dashboard;
