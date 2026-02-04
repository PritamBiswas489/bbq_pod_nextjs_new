// components/ExteriorColours.js

import { Container, Row, Col } from "react-bootstrap";
import { FaPalette } from "react-icons/fa";
import styles from "./index.module.scss";
import Link from "next/link";
import TitleHeader from "../titleHeader";

const colors = [
  {
    name: "Athens White",
    code: "IEPC-A01",
    hex: "#F8F8F8",
    // slug: "athens-white",
  }, // Added slug for dynamic links (adjust as needed)
  {
    name: "Matte Beige",
    code: "IEPC-A02",
    hex: "#D7C4B3",
    // slug: "matte-beige",
  },
  {
    name: "Khaki Grey Sand",
    code: "IEPC-A03",
    hex: "#A39781",
    // slug: "khaki-grey-sand",
  },
  {
    name: "Grey Sparkle",
    code: "IEPC-A04",
    hex: "#6E6E6E",
    // slug: "grey-sparkle",
  },
  {
    name: "Light Medium Grey",
    code: "IEPC-A05",
    hex: "#B4B4B4",
    // slug: "light-medium-grey",
  },
  {
    name: "Silver Grey Sand",
    code: "IEPC-A06",
    hex: "#A8A8A8",
    // slug: "silver-grey-sand",
  },
  {
    name: "Medium Grey Sand",
    code: "IEPC-A07",
    hex: "#7D7D7D",
    // slug: "medium-grey-sand",
  },
  {
    name: "Grey Shimmer",
    code: "IEPC-A08",
    hex: "#5C5C5C",
    // slug: "grey-shimmer",
  },
  {
    name: "Purple-Grey Pine",
    code: "IEPC-A09",
    hex: "#5F5366",
    // slug: "purple-grey-pine",
  },
  {
    name: "Black Sand",
    code: "IEPC-A10",
    hex: "#2C2C2C",
    //  slug: "black-sand"
  },
];

const ExteriorColours = () => {
  return (
    <div className={styles.exteriorColours}>
      <TitleHeader
        whyChoose="Customisation Options"
        title="A Curated Selection"
        subtitle="Explore a handpicked preview of exterior colours, interior finishes, wood transfers and worktop options. Every BBQ Pod is made to order, with further customisation available."
      />
      <Container className={styles.container}>
        <div className={styles.titlesHeader}>
          <div
            className={styles.titleWrapper}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <FaPalette className={styles.icon} />
            <h3 className={styles.title}>Exterior Colours</h3>
          </div>
          <p
            className={styles.subtitle}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Choose from 10 premium powder-coated finishes.
          </p>
        </div>
        <div className={styles.colorGrid}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={styles.swatchWrapper}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {/* <Link href={`/${color.slug}`} className={styles.swatchLink}> */}
              <Link href={`#`} className={styles.swatchLink}>
                <div
                  className={styles.swatch}
                  style={{ backgroundColor: color.hex }}
                />
                <h6>{color.name}</h6>
                <p className={styles.label}>{color.code}</p>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ExteriorColours;
