import React, { createElement, Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { ProfileInfo } from "@/component/common/Profile/ProfileInfo";
import { markdownToReact } from "@/component/libs/markdown-to-react";
import path from "path";
import process from "process";
import fs from "fs";

export default async function Profile() {
  const readmeFullPath = path.join(
    process.cwd(),
    "src/component/posts/readme",
    "README.md"
  );
  const mdContent = fs.readFileSync(readmeFullPath, "utf8");

  const reactContent = await markdownToReact(mdContent);
  return (
    <Box
      component="main"
      sx={{
        marginX: {
          lg: "10rem",
        },
        marginTop: "96px",
        display: {
          xs: "block",
          md: "flex",
        },
        justifyContent: {
          xs: "center",
          md: "flex-start",
        },
      }}
    >
      <ProfileInfo />
      <Box sx={{ marginX: "2rem" }}>{reactContent}</Box>
    </Box>
  );
}
