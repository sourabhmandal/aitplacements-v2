import { Box } from "@mui/material";
import React from "react";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}

export default Layout;
