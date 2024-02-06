'use client'
import { useEffect, useState } from "react";
import styles from '@/components/musicSection/timeAtMusic/timeAtMusic.module.css'

export default function TimeAtMusic() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <div className={styles.clock}>
      <div className={styles.days}>
        <h3>{currentTime.getDay().toString().padStart(2, "0")}</h3>
        <h6>Days</h6>
      </div>
      <div className={styles.hours}>
        <h3>{currentTime.getHours().toString().padStart(2, "0")}</h3>
        <h6>Hours</h6>
      </div>
      <div className={styles.minutes}>
        <h3>{currentTime.getMinutes().toString().padStart(2, '0')}</h3>
        <h6>Minutes</h6>
      </div>
      <div className={styles.seconds} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {/* <h3>{currentTime.getSeconds().toString().padStart(2, '0')}</h3> */}
        <h6>Seconds</h6>
      </div>
    </div>
  );
}
