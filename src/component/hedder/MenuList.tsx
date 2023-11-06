"use client";
import React, { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

type menuListProps = {
  navItems: string[];
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
          {props.navItems.map((item) => (
            <MenuItem key={item} onClick={handleCloseMenuList}>
              <Typography textAlign="center">{item}</Typography>
            </MenuItem>
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
        {props.navItems.map((item) => (
          <Typography key={item} sx={{ maginX: 5 }}>
            {item}
          </Typography>
        ))}
      </Box>
    </>
  );
}
