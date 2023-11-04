import Image from 'next/image'
import styles from '@/styles/page.module.css'
import my_icon from "/public/profile.jpg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.about_me}>
        <h2>Profile</h2>
        <div className={styles.my_icon}>
          <Image src={my_icon} alt="my_icon is ikachan" />
        </div>
        <div className={styles.my_profile}>
          <h5>
            名前
          </h5>
          <div>
            suyasuya_TY
          </div>
          <h5>
            所属
          </h5>
          <div>
            東京工業大学 工学院 情報通信系
          </div>
          <h5>
            サークル
          </h5>
          <div>
            Titech App Project
          </div>
        </div>
      </div>
    </main>
  )
}
