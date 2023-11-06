import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

type profileDetailsProps = {
  title: string;
  descriptions: string;
};

function ProfileDetails(props: profileDetailsProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="div"
        sx={{
          width: {
            xs: "12rem",
            sm: "100%",
          },
          marginY: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Typography>
        <Typography>{props.descriptions}</Typography>
      </Box>
    </Box>
  );
}

export default function Profile() {
  const profileDetails: profileDetailsProps[] = [
    { title: "名前", descriptions: "suyasuya_TY" },
    { title: "所属", descriptions: "東京工業大学 情報通信系" },
    { title: "サークル", descriptions: "TitechAppProject" },
  ];

  const profileSections = profileDetails.map((detail, index) => {
    return (
      <ProfileDetails
        title={detail.title}
        descriptions={detail.descriptions}
        key={index}
      />
    );
  });

  return (
    <Box
      component="main"
      sx={{
        marginTop: "64px",
      }}
    >
      <Grid container justifyContent="space-around">
        <Grid item xs={0} sm={1} />
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            padding: "1em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="my_icon"
            src="/profile.jpg"
            sx={{ width: "12rem", height: "12rem" }}
          />
        </Grid>
        <Grid item xs={0} sm={1} />
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            xs: {
              display: "flex",
              flexFlow: "column",
            },
          }}
        >
          {profileSections}
        </Grid>
      </Grid>
    </Box>
  );
}
