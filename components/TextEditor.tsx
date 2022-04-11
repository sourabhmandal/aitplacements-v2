import React from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import HorizontalRuleExt from "@tiptap/extension-horizontal-rule";
import HardBreak from "@tiptap/extension-hard-break";
import History from "@tiptap/extension-history";

import { Box, DialogTitle, IconButton, Paper } from "@mui/material";
import {
  Code,
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  TextFields,
  FormatListNumbered,
  FormatQuote,
  HorizontalRule,
  Undo,
  Redo,
  FormatListBulleted,
} from "@mui/icons-material";
import css from "../styles/texteditor.module.css";

function TextEditor() {
  const editor: Editor | null = useEditor({
    extensions: [
      Blockquote,
      Bold,
      Italic,
      BulletList,
      OrderedList,
      ListItem,
      Strike,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      HorizontalRuleExt,
      History,
      Document,
      Paragraph,
      Text,
      HardBreak,
    ],
    content: "<p>Example Text</p>",
    autofocus: true,
    editable: true,
    injectCSS: false,
  });
  return (
    <>
      <Box border={1} borderColor="#aaa" borderRadius={1}>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className={css.markdownbody} />
      </Box>
    </>
  );
}

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }
  return (
    <Box display={"flex"} flexWrap="wrap">
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FormatBold />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FormatItalic />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FormatStrikethrough />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <TextFields />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        H1
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        H2
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        H3
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        H4
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        H5
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        H6
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FormatListBulleted />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FormatListNumbered />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <FormatQuote />
      </IconButton>
      <IconButton
        size="small"
        disableFocusRipple
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <HorizontalRule />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().setHardBreak().run()}>
        Br
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().undo().run()}>
        <Undo />
      </IconButton>
      <IconButton onClick={() => editor.chain().focus().redo().run()}>
        <Redo />
      </IconButton>
    </Box>
  );
};
export default TextEditor;
