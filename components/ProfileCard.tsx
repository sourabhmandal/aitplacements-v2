import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ProfileCard({ title, subtitle, children }: any) {
  return (
    <Paper
      elevation={2}
      variant="elevation"
      sx={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Paper>
  );
}

export default ProfileCard;
