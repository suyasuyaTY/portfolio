import React from "react";
import { Box, Typography } from "@mui/material";
import Title from "../../common/Title/Title";
import { ProfileInfo } from "@/component/common/Profile/ProfileInfo";

type profileDetailsProps = {
  title: string;
  descriptions: string;
};

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
        marginX: {
          lg: "10rem",
        },
        marginTop: "96px",
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
      <Box sx={{ margin: "2rem" }}>{profileSections}</Box>
    </Box>
  );
}

function ProfileDetails(props: profileDetailsProps) {
  return (
    <Box>
      <Box
        component="div"
        sx={{
          marginY: 1,
        }}
      >
        <Title>{props.title}</Title>
        <Typography>{props.descriptions}</Typography>
      </Box>
    </Box>
  );
}
