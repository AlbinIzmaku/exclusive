import Image from "next/image";
import upIcon from "/public/upIcon.svg";
import styles from '@/components/upIcon/upIcon.module.css'

export default function UpIcon() {
  
  return (
    <div className={styles.upIcon}>
      <Image src={upIcon} alt="Up Icon" width={46} height={46} />
    </div>
  );
}
