import React from "react";
import { AppBar, Box, Toolbar, Button, Avatar } from "@mui/material";
import MenuList from "@/component/hedder/MenuList";

export default function Hedder() {
  const navItems: string[] = [
    "ホーム",
    "プロフィール",
    "作ったもの",
    "書いたもの",
  ];

  return (
    <AppBar component="nav">
      <Toolbar>
        <Avatar
          alt="my_icon"
          src="/profile.jpg"
          sx={{
            marginRight: "auto",
            width: "3rem",
            height: "3rem",
          }}
        />
        <MenuList navItems={navItems} />
      </Toolbar>
    </AppBar>
  );
}
