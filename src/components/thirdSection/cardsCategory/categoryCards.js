import Camera from "../../../svg/camera";
import Computers from "../../../svg/computers";
import Gaming from "../../../svg/gaming";
import Headphones from "../../../svg/headphones";
import Phones from "../../../svg/phones";
import SmartWatch from "../../../svg/smartWatch";
import CategoryCard from "./categoryCard/categoryCard";

export default function CategoryCards() {
  return (
    <section style={categorySection}>
      <CategoryCard title="Phones">
        <Phones />
      </CategoryCard>
      <CategoryCard title="Computers">
        <Computers />
      </CategoryCard>
      <CategoryCard title="SmartWatch">
        <SmartWatch />
      </CategoryCard>
      <CategoryCard title="Camera">
        <Camera />
      </CategoryCard>
      <CategoryCard title="HeadPhones">
        <Headphones />
      </CategoryCard>
      <CategoryCard title="Gaming">
        <Gaming />
      </CategoryCard>
    </section>
  );
}

const categorySection = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "40px",
};
