import { Works } from "@/components/Works/Works";
import styles from "./page.module.css";
import { Profile } from "@/components/Home/Profile";
import { Sectionline } from "@/components/Base/Sectionline";
import { Careers } from "@/components/Careers/Carrers";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <Sectionline title="Works" />
      <Works />
      <Sectionline title="Careers" />
      <Careers />
    </main>
  );
}
