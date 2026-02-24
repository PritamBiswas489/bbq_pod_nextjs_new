import Image from "next/image";
import styles from "./index.module.scss";

import hero1 from "@/assets/front/images/image-shade/camel-grey-sand.webp";
import hero2 from "@/assets/front/images/image-shade/khaki-wood.webp";
import hero3 from "@/assets/front/images/image-shade/black-walnut.webp";

import hero4 from "@/assets/front/images/image-shade/titanium-blue.webp";
import hero5 from "@/assets/front/images/image-shade/italian-black-walnut.webp";

import { FaCheck } from "react-icons/fa";

const colors = [
  { name: "Athens White", code: "IEPC-A01", color: "#E9E9E9" },
  { name: "Matte Beige", code: "IEPC-A02", color: "#C7B8A8" },
  { name: "Khaki Grey Sand", code: "IEPC-A03", color: "#8E877A" },
  { name: "Grey Sparkle", code: "IEPC-A04", color: "#6F6F6F" },
  { name: "Light Medium Grey", code: "IEPC-A05", color: "#9A9A9A" },
  { name: "Silver Grey Sand", code: "IEPC-A06", color: "#A8A8A8" },
  { name: "Medium Grey Sand", code: "IEPC-A07", color: "#808080" },
  { name: "Grey Shimmer", code: "IEPC-A08", color: "#7A7A7A" },
  { name: "Purple-Grey Pine", code: "IEPC-A09", color: "#6B5B6E" },
  { name: "Black Sand", code: "IEPC-A10", color: "#2B2B2B" },
  { name: "Olive Green", code: "IEPC-A11", color: "#6B7C5D" },
  { name: "Lake Green Sparkle", code: "IEPC-A12", color: "#4A7C7C" },
];

const interiors = [
  {
    title: "Camel Grey Sand",
    code: "ITP-A01",
    img: hero1.src,
  },
  {
    title: "Khaki Wood Grain",
    code: "ITP-A02",
    img: hero2.src,
  },
  {
    title: "Black Walnut Wood",
    code: "ITP-A03",
    img: hero3.src,
  },
];

const interiors2 = [
  {
    title: "Titanium Blue",
    code: "IST-A01",
    img: hero4.src,
  },
  {
    title: "Italian Black Walnut",
    code: "IST-A02",
    img: hero5.src,
  },
];

// export default function StepInterior({ value, onChange }) {
const StepInterior = ({ value, onChange }) => {
  return (
    <>
      <div className={styles.stepHeader}>
        <h2>Select Interior Finish</h2>
        <p>Choose the interior look that matches your outdoor space</p>
      </div>

      <div className={styles.divider}>
        <h5>Powder-Coated (12 Colors)</h5>
        <div className={styles.grid}>
          {colors.map((c) => (
            <div
              key={c.code}
              className={`${styles.card} ${value === c.code ? styles.active : ""}`}
              onClick={() => onChange(c.code)}
            >
              <div
                className={styles.colorBox}
                style={{ backgroundColor: c.color }}
              >
                {value === c.code && (
                  <div className={styles.check}>
                    <FaCheck />
                  </div>
                )}
              </div>

              <div className={styles.info}>
                <p className={styles.name}>{c.name}</p>
                <span className={styles.code}>{c.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider}>
        <h5>Wood Grain Transfer (3)</h5>
        <div className={styles.cardGrid}>
          {interiors.map((item) => (
            <div
              key={item.title}
              className={`${styles.imageCard} ${
                value === item.title ? styles.selected : ""
              }`}
              onClick={() => onChange(item.title)}
            >
              <Image src={item.img} alt={item.title} width={400} height={260} />
              <div className={styles.cardInfo}>
                <div className={styles.cardLabel}>{item.title}</div>
                <div className={styles.codeLabel}>{item.code}</div>
              </div>

              {value === item.title && (
                <div className={styles.check}>
                  <FaCheck />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider}>
        <h5>Sintered Stone - Cabinets (2)</h5>
        <div className={styles.cardGrid}>
          {interiors2.map((item) => (
            <div
              key={item.title}
              className={`${styles.imageCard} ${
                value === item.title ? styles.selected : ""
              }`}
              onClick={() => onChange(item.title)}
            >
              <Image src={item.img} alt={item.title} width={400} height={260} />
              <div className={styles.cardInfo}>
                <div className={styles.cardLabel}>{item.title}</div>
                <div className={styles.codeLabel}>{item.code}</div>
              </div>

              {value === item.title && (
                <div className={styles.check}>
                  <FaCheck />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default StepInterior;
