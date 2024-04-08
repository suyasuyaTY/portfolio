import styles from '@/styles/Home/Profile.module.css';
import Image from 'next/image';

const imageStyle = {
  borderRadius: '5%',
  border: '1px solid #fff',
};

export function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <div className={styles.icon}>
          <Image src="/myIcon.jpg" alt="myicon" width={180} height={180} style={imageStyle} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>suyasuyaTY</h3>
          <h4>所属</h4>
          <p className={styles.introduction}>東京工業大学情報通信系 (21B)</p>
          <h4>趣味</h4>
          <p className={styles.introduction}>ボカロ / プロセカ / スプラ</p>
          <h4>日替わりコーナー</h4>
          <p className={styles.introduction}>やさしいインターネット</p>
        </div>
      </div>
    </div>
  );
}
