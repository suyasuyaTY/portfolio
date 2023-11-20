import { Typography } from "@mui/material";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  );
}
