import React from "react";
import Hedder from "@/component/base/Hedder";
import type { Metadata } from "next";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "suyasuya_TY",
  description: "suyasuya_TY's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body>
        <Hedder />
        <Box
          component="main"
          sx={{ marginTop: "96px", marginX: { lg: "10rem" } }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
