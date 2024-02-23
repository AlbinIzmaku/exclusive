"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/secondSectionS/time.module.css";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.mainDiv}>
      <div className={styles.secondDiv} suppressHydrationWarning={true}>
        <div>
          <p>Days</p>
          <h1 className={styles.h1}>
            {currentTime.getDay().toString().padStart(2, "0")}
          </h1>
        </div>
        <Image src="/colon.svg" alt="Colon" width={4} height={16} />
        <div>
          <p>Hours</p>
          <h1 className={styles.h1}>
            {currentTime.getHours().toString().padStart(2, "0")}
          </h1>
        </div>
        <Image src="/colon.svg" alt="Colon" width={4} height={16} />
        <div>
          <p>Minutes</p>
          <h1 className={styles.h1}>
            {currentTime.getMinutes().toString().padStart(2, "0")}
          </h1>
        </div>
        <Image src="/colon.svg" alt="Colon" width={4} height={16} />
        <div>
          <p>Seconds</p>
          <h1 className={styles.h1} suppressHydrationWarning>
            {currentTime.getSeconds().toString().padStart(2, "0")}
          </h1>
        </div>
      </div>
    </section>
  );
}
