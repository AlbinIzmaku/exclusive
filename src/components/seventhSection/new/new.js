import SectionName from "@/components/sectionName/sectionName";

export default function New() {
  return (
    <section style={{ sectionStyle }}>
      <SectionName title="Featured" subtitle="New Arrival" />
    </section>
  );
}

const sectionStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};
