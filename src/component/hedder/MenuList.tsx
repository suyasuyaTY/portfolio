"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

type menuListProps = {
  navItems: {
    name: string;
    url: string;
  }[];
};

export default function MenuList(props: menuListProps) {
  const [menuListIsOpen, setMenuListIsOpen] = useState(false);

  const anchorEl = useRef<HTMLButtonElement>(null);

  const handleOpenMenuList = () => {
    setMenuListIsOpen(true);
  };

  const handleCloseMenuList = () => {
    setMenuListIsOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
          color="inherit"
          aria-label="open menu list"
          onClick={handleOpenMenuList}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-List"
          anchorEl={anchorEl.current}
          disableAutoFocusItem={false}
          autoFocus={false}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={menuListIsOpen}
          onClose={handleCloseMenuList}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {props.navItems.map((item, index) => (
            <Link href={item.url} key={index}>
              <MenuItem onClick={handleCloseMenuList}>
                <Typography textAlign="center">{item.name}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
      <Box
        sx={{
          flexGrow: 0.2,
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        {props.navItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <Typography sx={{ maginX: 5 }}>{item.name}</Typography>
          </Link>
        ))}
      </Box>
    </>
  );
}
