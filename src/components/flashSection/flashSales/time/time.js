"use client";

import styles from "@/components/flashSection/flashSales/time/time.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.mainDiv}>
      <div className={styles.secondDiv}>
        <div>
          <p>Days</p>
          <h1 className={styles.h1}>{currentTime.getDay().toString().padStart(2, "0")}</h1>
        </div>
        <Image src="/colon.svg" alt="Colon" width={4} height={16} />
        <div>
          <p>Hours</p>
          <h1 className={styles.h1}>{currentTime.getHours().toString().padStart(2, "0")}</h1>
        </div>
        <Image src="/colon.svg" alt="Colon" width={4} height={16} />
        <div>
          <p>Minutes</p>
          <h1 className={styles.h1}>{currentTime.getMinutes().toString().padStart(2, "0")}</h1>
        </div>
        <Image src="/colon.svg" alt="Colon" width={4} height={16} />
        <div>
          <p>Seconds</p>
          {/* <h1 className={styles.h1}>{currentTime.getSeconds().toString().padStart(2, "0")}</h1> */}
        </div>
      </div>
    </div>
  );
}
