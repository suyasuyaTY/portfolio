import styles from "@/styles/Home/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { Headline } from "../Base/Headline";

const imageStyle = {
  borderRadius: "5%",
  border: "1px solid #fff",
};

export function Profile() {
  return (
    <div className={styles.wrapper}>
      <Headline
        title="Profile"
        releaseDay="2024/04/20"
        lastUpdateDay="2024/04/20"
      />
      <div className={styles.profile}>
        <div className={styles.icon}>
          <Image
            src="/myIcon.jpg"
            alt="myicon"
            width={180}
            height={180}
            style={imageStyle}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>suyasuyaTY</h3>
          <div className={styles.introduction}>
            東京工業大学情報通信系学部4年です。
            <br />
            研究とWebプログラミングを少し頑張ってます。
          </div>
          <div className={styles.links}>
            <Link href="/about"> もっと知りたい -&gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
