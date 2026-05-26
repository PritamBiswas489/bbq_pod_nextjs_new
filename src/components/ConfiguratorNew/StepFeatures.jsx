import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

import hero1 from "@/assets/front/images/features/rgb-lighting.webp";
import hero2 from "@/assets/front/images/features/optional-feature-05.webp";
import hero3 from "@/assets/front/images/features/fish-pond-aquarium.webp";
import hero4 from "@/assets/front/images/features/optional-feature-04.webp";
import hero5 from "@/assets/front/images/features/optional-feature-03.webp";

import icon1 from "@/assets/front/images/features/1.svg";
import icon2 from "@/assets/front/images/features/2.svg";
import icon3 from "@/assets/front/images/features/3.svg";

const countertops = [
  {
    id: "rgb-lighting",
    title: "Multi-Color RGB Lighting",
    subtitle:
      "SS-Features multi-color lighting mode and monochrome atmosphere mode, adding dynamic flair to your evening entertainment",
    icon: icon1.src,
    img: hero1.src,
  },
  {
    id: "watering-system",
    title: "30m Garden Watering System",
    subtitle:
      "Equipped with garden tool storage, watering tools, flower pruning set, and 30-meter hose with booster-regulated sprinkler",
    icon: icon2.src,
    img: hero2.src,
  },
  {
    id: "fish-pond",
    title: "Ecological Fish Pond Feature",
    subtitle:
      "Beautifully integrated self-sustaining fish pond with variety of green plants and flowers, enhancing natural garden feel",
    icon: icon3.src,
    img: hero3.src,
  },
  {
    id: "tool-storage",
    title: "Garden Tool Storage",
    subtitle:
      "Dedicated storage cabinet for gardening tools and outdoor equipment with organized compartments and hose reel",
    icon: icon3.src,
    img: hero4.src,
  },
  {
    id: "plant-shelving",
    title: "Plant Display Shelving",
    subtitle:
      "Integrated shelving system with water feature for displaying plants, herbs, and decorative greenery",
    icon: icon3.src,
    img: hero5.src,
  },
];

const StepFeatures = ({ value, onChange }) => {
  return (
    <>
      <div className={styles.stepHeader}>
        <h2>Select Countertop</h2>
        <p>Choose a durable and stylish worktop for your BBQ pod</p>
      </div>

      <div className={styles.divider}>
        <h5>Stainless Steel</h5>

        <div className={styles.cardGrid}>
          {countertops.map((item) => (
            <div
              key={item.id}
              className={`${styles.imageCard}  ${styles.largeCard} ${
                value === item.id ? styles.selected : ""
              }`}
              onClick={() => onChange(item.id)}
            >
              <Image src={item.img} alt={item.title} width={400} height={260} />

              <div className={styles.cardInfo}>
                <div className={styles.iconImg}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                  />
                </div>

                <div className={styles.cardLabel}>{item.title}</div>
                <div className={styles.codeLabel}>{item.subtitle}</div>
              </div>

              {value === item.id && (
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

export default StepFeatures;
