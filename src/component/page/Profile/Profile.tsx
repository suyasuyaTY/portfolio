import React from "react";
import { Box } from "@mui/material";
import { ProfileInfo } from "@/component/page/Profile/ProfileInfo";
import { markdownToReact } from "@/libs/markdown-to-react";
import path from "path";
import process from "process";
import fs from "fs";

export default async function Profile() {
  const readmeFullPath = path.join(
    process.cwd(),
    "public/posts/readme",
    "README.md"
  );
  const mdContent = fs.readFileSync(readmeFullPath, "utf8");

  const reactContent = await markdownToReact(mdContent);
  return (
    <Box
      sx={{
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
