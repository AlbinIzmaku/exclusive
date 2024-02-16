import ArrowsCategory from "./arrowsCategory/arrowsCategory";
import SectionName from "@/components/sectionName/sectionName";

export default function BrowseByCategory() {
  return (
    <section style={sectionStyle}>
      <SectionName title="Categories" subtitle="Browse By Category" />
      <div>
        <ArrowsCategory />
      </div>
    </section>
  );
}

const sectionStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};
