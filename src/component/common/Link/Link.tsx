import { Typography, Grid } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import IconSelector from "./IconSelector";
import React from "react";

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
