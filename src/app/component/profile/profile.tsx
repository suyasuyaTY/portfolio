import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

type Props = {
  title: string;
  descriptions: string;
};

function ProfileDetails(props: Props) {
  return (
    <Box>
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
  );
}

export default function Profile() {
  const profileDetails: Props[] = [
    { title: "名前", descriptions: "suyasuya_TY" },
    { title: "所属", descriptions: "東京工業大学工学院情報通信系" },
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
        marginTop: 1,
        marginX: {
          xs: 10,
          sm: 0,
        },
      }}
    >
      <Grid container spacing={{ xs: 0, sm: 2 }} columns={{ xs: 6, sm: 12 }}>
        <Grid item xs={0} sm={1} />
        <Grid
          item
          xs={6}
          sm={3}
          sx={{
            margin: "16px",
            padding: "16px",
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
          xs={6}
          sm={5}
          sx={{
            margin: {
              xs: "0px",
              sm: "16px",
            },
            padding: "0px",
          }}
        >
          {profileSections}
        </Grid>
      </Grid>
    </Box>
  );
}
