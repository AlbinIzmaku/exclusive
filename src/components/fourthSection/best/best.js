import styles from "@/styles/fourthSectionS/best.module.css";
import SectionName from "@/components/sectionName/sectionName";

export default function Best() {
  return (
    <section className={styles.section}>
      <SectionName title="This Month" subtitle="Best Selling" />
      <div>
        <button className={styles.buttonStyle}>View All</button>
      </div>
    </section>
  );
}
