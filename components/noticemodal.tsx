import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Skeleton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef } from "react";
import TextEditor from "./TextEditor";

type INoticeModal = {
  isOpen: boolean;
  setIsOpen: any;
};
function Noticemodal({ isOpen, setIsOpen }: INoticeModal) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        fullWidth
        maxWidth="md"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              height: "100%",
              minHeight: "600px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title">
          Create A Notice
          <TextField size="small" label="title" sx={{ width: "100%" }} />
        </DialogTitle>
        <DialogTitle id="scroll-dialog-title"></DialogTitle>
        <DialogContent
          id="scroll-dialog-description"
          ref={descriptionElementRef}
        >
          <TextEditor />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button autoFocus onClick={() => setIsOpen(false)}>
            Save Draft
          </Button>
          <Button onClick={() => setIsOpen(false)} autoFocus>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Noticemodal;
