import { CheckBoxTwoTone } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CustomListItem from "../components/CustomListItem";
import Layout from "../components/Layout";

function RegisteredStudent() {
  const student = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Layout>
      <Paper>
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
                secondary={
                  <React.Fragment>
                    <CheckBoxTwoTone
                      fontSize="large"
                      onClick={() => alert("hello")}
                    />
                    <CheckBoxTwoTone
                      fontSize="large"
                      onClick={() => alert("hello")}
                    />
                    <CheckBoxTwoTone
                      fontSize="large"
                      onClick={() => alert("hello")}
                    />
                  </React.Fragment>
                }
                image="https://picsum.photos/200"
                noticelength={student.length}
                key={idx}
                uniqueKey={idx}
                tag="placement"
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
      </Paper>
    </Layout>
  );
}

export default RegisteredStudent;
