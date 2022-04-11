import { Box, List, Pagination } from "@mui/material";
import React from "react";
import CustomListItem from "../components/CustomListItem";
import Layout from "../components/Layout";

function Study() {
  const student = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Layout>
      <List
        sx={{
          width: "60%",
          bgcolor: "background.paper",
          marginX: "auto",
          marginTop: 6,
        }}
      >
        {student.map((s, idx) => {
          return (
            <CustomListItem
              title={"Ali Connors"}
              secondary={"jkhr,mrgehre grekjer regjkgreWx`"}
              noticelength={student.length}
              key={idx}
              uniqueKey={idx}
              tag="Algorithm"
            />
          );
        })}
      </List>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 2 }}
      >
        <Pagination count={10} color="primary" />
      </Box>
    </Layout>
  );
}

export default Study;
