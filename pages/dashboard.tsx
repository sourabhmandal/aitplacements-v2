import { SearchRounded, VisibilityOff } from "@mui/icons-material";
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
} from "@mui/material";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/navbar";
import Notice from "../components/noticelist";
import OptionsCard from "../components/OptionsCard";

function Dashboard() {
  return (
    <Layout>
      <Paper elevation={2} variant="elevation" sx={{ margin: 5, padding: 1 }}>
        <Box display="flex" sx={{ width: "100%" }} gap={1}>
          <Box sx={{ width: "100%" }} gap={1}>
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
            sx={{ width: "30%" }}
            display="flex"
            justifyItems="center"
            alignItems="center"
            flexDirection="column"
            gap={1}
          >
            <OptionsCard
              title={"Create Notice"}
              subtitle={"Publish Notice anytime"}
            >
              <Link passHref href="/registered-student">
                <Button>Create Notice</Button>
              </Link>
            </OptionsCard>
            <OptionsCard
              title={"Create Notice"}
              subtitle={"Publish Notice anytime"}
            >
              <Link passHref href="/registered-student">
                <Button>Registered Students</Button>
              </Link>
            </OptionsCard>
            <OptionsCard
              title={"Create Notice"}
              subtitle={"Publish Notice anytime"}
            >
              <Link passHref href="/registered-student">
                <Button>Study Resource</Button>
              </Link>
            </OptionsCard>
          </Box>
        </Box>
      </Paper>
    </Layout>
  );
}

export default Dashboard;
