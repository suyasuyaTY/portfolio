import React from "react";
import { AppBar, Box, Toolbar, Button, Avatar } from "@mui/material";
import MenuList from "@/component/hedder/MenuList";

type navItem = {
  name: string;
  url: string;
};

export default function Hedder() {
  const navItems: navItem[] = [
    {
      name: "ホーム",
      url: "/",
    },
    {
      name: "作ったもの",
      url: "/Working",
    },
    {
      name: "書いたもの",
      url: "/Articles",
    },
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
