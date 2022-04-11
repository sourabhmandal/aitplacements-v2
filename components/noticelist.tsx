import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
  Chip,
  Box,
  Paper,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CustomListItem from "./CustomListItem";
import Noticemodal from "./noticemodal";

function NoticeBoard() {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  const notice = [1, 2, 3, 4, 55, 6, 8];
  return (
    <Paper variant="outlined" sx={{ width: "100%", mt: 1 }}>
      <Noticemodal isOpen={isOpen} setIsOpen={setIsOpen} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {notice.map((n, idx) => (
          <CustomListItem
            title={"Brunch Tommorow evening?"}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {` — I'll be in your neighborhood doing errands this…`}
              </React.Fragment>
            }
            image="https://picsum.photos/200"
            noticelength={notice.length}
            setIsOpen={setIsOpen}
            key={idx}
            uniqueKey={idx}
            tag="placement"
          />
        ))}
      </List>
    </Paper>
  );
}

export default NoticeBoard;
