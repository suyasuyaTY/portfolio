import { SvgIcon } from "@mui/material";
import Twitter from "public/icon/twitter.svg";
import GitHub from "public/icon/github.svg";
import Zenn from "public/icon/zenn.svg";
import Note from "public/icon/note.svg";

type Props = {
  platform: string;
};

function Platform({ platform }: Props) {
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

export default function IconSelector({ platform }: Props) {
  return (
    <SvgIcon>
      <Platform platform={platform} />
    </SvgIcon>
  );
}
