import SectionName from "@/components/sectionName/sectionName";
import ArrowsExplore from "./arrowsExplore/arrowsExplore";
import styles from "@/styles/sixthSectionS/explore.module.css";

export default function Explore() {
  return (
    <section className={styles.section}>
      <SectionName title="Our Products" subtitle="Explore Our Products" />
      <div>
        <ArrowsExplore />
      </div>
    </section>
  );
}
