import { Typography, Grid } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import React from "react";
import { SvgIcon } from "@mui/material";
import Twitter from "public/icon/twitter.svg";
import GitHub from "public/icon/github.svg";
import Zenn from "public/icon/zenn.svg";
import Note from "public/icon/note.svg";

type ioProps = {
  platform: string;
};

type Props = {
  platform: string;
  name: string;
  url: string;
};

export function LinkInfo({ platform, name, url }: Props) {
  return (
    <MuiLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      color="inherit"
    >
      <Grid
        container
        sx={{
          width: {
            xs: "40%",
            md: "100%",
          },
        }}
      >
        <Grid item xs={2}>
          <IconSelector platform={platform} />
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{ fontWeight: "bold" }}>{platform}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>{name}</Typography>
        </Grid>
      </Grid>
    </MuiLink>
  );
}

function Platform({ platform }: ioProps) {
  if (platform === "Twitter") {
    return <Twitter />;
  } else if (platform === "GitHub") {
    return <GitHub />;
  } else if (platform === "Zenn") {
    return <Zenn />;
  } else if (platform === "note") {
    return <Note />;
  } else {
    return null;
  }
}

function IconSelector({ platform }: ioProps) {
  return (
    <SvgIcon>
      <Platform platform={platform} />
    </SvgIcon>
  );
}
