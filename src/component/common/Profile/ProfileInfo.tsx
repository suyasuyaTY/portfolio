import { Typography, Box, Avatar } from "@mui/material";
import { links } from "@/component/const";
import { LinkInfo } from "@/component/common/Link/Link";

export function ProfileInfo() {
  return (
    <Box>
      <DisplayIconAndName />
      <LinkList />
    </Box>
  );
}

function DisplayIconAndName() {
  return (
    <Box
      sx={{
        margin: "2rem",
        display: {
          xs: "flex",
          md: "block",
        },
      }}
    >
      <Avatar
        alt="my_icon"
        src="/profile.jpg"
        sx={{
          width: {
            xs: "6rem",
            md: "16rem",
          },
          height: {
            xs: "6rem",
            md: "16rem",
          },
        }}
      />
      <Box
        sx={{
          marginX: "2rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          TY
        </Typography>
        <Typography>suyasuya_TY</Typography>
      </Box>
    </Box>
  );
}

function LinkList() {
  return (
    <Box
      sx={{
        margin: "2rem",
      }}
    >
      {links.map((info, index) => {
        return (
          <LinkInfo
            key={index}
            platform={info.platform}
            name={info.name}
            url={info.url}
          />
        );
      })}
    </Box>
  );
}
