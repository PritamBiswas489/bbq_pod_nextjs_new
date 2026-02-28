import Image from "next/image";
import styles from "./index.module.scss";

import hero1 from "@/assets/front/images/image-shade/tree-bark.webp";
import hero2 from "@/assets/front/images/image-shade/rhino-skin.webp";
import hero3 from "@/assets/front/images/image-shade/aurora-white.webp";
import hero4 from "@/assets/front/images/image-shade/stone-saint-blanc.webp";
import hero5 from "@/assets/front/images/image-shade/garda-belly-gold.webp";
import hero6 from "@/assets/front/images/image-shade/marsha-gray.webp";
import hero7 from "@/assets/front/images/image-shade/marsha-brown.webp";
import hero8 from "@/assets/front/images/image-shade/titanium-blue.webp";
import hero9 from "@/assets/front/images/image-shade/saronlan.webp";

// import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";
// import hero5 from "@/assets/front/images/outdoor/hero-5.webp";

import { countertopStainlessSteelTitle, countertopSinteredStoneTitle  } from "@/utils/exteriorInteriorFinish";

import { FaCheck } from "react-icons/fa";

const countertops = [
  {
    title: "Texture: Tree Bark",
    code: "SS-A01",
    img: hero1.src,
  },
  {
    title: "Texture: Rhino Skin",
    code: "SS-A01",
    img: hero2.src,
  },
];
const countertops2 = [
  {
    title: "Aurora White",
    code: "CSS-A01",
    img: hero3.src,
  },
  {
    title: "Saint Blanc Belly White",
    code: "CSS-A02",
    img: hero4.src,
  },
  {
    title: "Garda Belly Gold",
    code: "CSS-A03",
    img: hero5.src,
  },
  {
    title: "Marsha Gray",
    code: "CSS-A05",
    img: hero6.src,
  },
  {
    title: "Marsha Brown",
    code: "CSS-A06",
    img: hero7.src,
  },
  {
    title: "Titanium Blue",
    code: "CSS-A07",
    img: hero8.src,
  },
  {
    title: "Saronlan",
    code: "CSS-A08",
    img: hero9.src,
  },
];
const StepCountertop = ({ value, onChange }) => {
  return (
    <>
      <div className={styles.stepHeader}>
        <h2>Worktop Selection</h2>
        <p>Select your preferred worktop material and colour.</p>
      </div>
      <div className={styles.divider}>
        <h5>Stainless Steel</h5>
        <div className={styles.cardGrid}>
          {countertopStainlessSteelTitle.map((item) => (
            <div
              key={item.title}
              className={`${styles.imageCard} ${
                value === item.modelName ? styles.selected : ""
              }`}
              onClick={() => onChange(item.modelName)}
            >
              <Image src={item.image} alt={item.colorName} width={400} height={260} />
              <div className={styles.cardInfo}>
                <div className={styles.cardLabel}>{item.colorName}</div>
               
              </div>
              {value === item.modelName && (
                <div className={styles.check}>
                  <FaCheck />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.divider}>
        <h5>Sintered Stone +400€ (REMEMBER add to price amount)</h5>
        <div className={styles.cardGrid}>
          {countertopSinteredStoneTitle.map((item) => (
            <div
              key={item.title}
              className={`${styles.imageCard} ${
                value === item.modelName ? styles.selected : ""
              }`}
              onClick={() => onChange(item.modelName)}
            >
              <Image src={item.image} alt={item.colorName} width={400} height={260} />
              <div className={styles.cardInfo}>
                <div className={styles.cardLabel}>{item.colorName}</div>
                
              </div>
              {value === item.modelName && (
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
export default StepCountertop;
