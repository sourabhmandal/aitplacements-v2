import {
  Avatar,
  Box,
  Chip,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Face } from "@mui/icons-material";

type ICustomListItem = {
  title: string;
  secondary: React.ReactNode | string;
  image?: string;
  noticelength: number;
  setIsOpen?: any;
  uniqueKey: number;
  tag: string;
};
function CustomListItem({
  title,
  secondary,
  image,
  noticelength,
  setIsOpen,
  uniqueKey,
  tag,
}: ICustomListItem) {
  return (
    <>
      <ListItem
        sx={{ cursor: "pointer" }}
        alignItems="flex-start"
        key={uniqueKey}
        onClick={() => (setIsOpen ? setIsOpen(true) : null)}
      >
        {image ? (
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={image} />
          </ListItemAvatar>
        ) : (
          <></>
        )}
        <ListItemText
          primary={
            <Box display="flex" alignItems="center">
              <Typography
                sx={{ display: "inline", marginBottom: 1 }}
                component="span"
                variant="inherit"
              >
                {title}
              </Typography>
              {tag ? (
                <Chip
                  icon={<Face />}
                  size="small"
                  label={tag}
                  sx={{ marginBottom: 1, marginLeft: 1 }}
                />
              ) : (
                <></>
              )}
            </Box>
          }
          secondary={secondary}
        />
      </ListItem>
      {uniqueKey == noticelength - 1 ? (
        <></>
      ) : (
        <Divider variant="inset" component="li" />
      )}
    </>
  );
}

export default CustomListItem;
