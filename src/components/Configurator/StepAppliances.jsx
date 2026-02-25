import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Image from "next/image";

import hero1 from "@/assets/front/images/36bbq-grill.jpg";
import hero2 from "@/assets/front/images/21glass-door.jpg";
import hero3 from "@/assets/front/images/21glass-door.jpg";
import hero4 from "@/assets/front/images/21glass-door.jpg";
import hero5 from "@/assets/front/images/21glass-door.jpg";
import hero6 from "@/assets/front/images/32smart-tv.jpg";
import hero7 from "@/assets/front/images/audio-system.png";
import hero8 from "@/assets/front/images/range-hood.jpg";
import hero9 from "@/assets/front/images/trash-can.jpg";

const countertops = [
  {
    id: "grill-36",
    title: '36"BBQ Grill',
    img: hero1.src,
  },
];

const countertops2 = [
  {
    id: "fridge-21-glass",
    title: '21" Refrigerator',
    code: "Glass Door",
    img: hero2.src,
  },
  {
    id: "fridge-21-steel",
    title: '21" Refrigerator',
    code: "Stainless Steel Door",
    img: hero3.src,
  },
  {
    id: "fridge-24-glass",
    title: '24" Refrigerator',
    code: "Glass Door",
    img: hero4.src,
  },
  {
    id: "fridge-24-steel",
    title: '24" Refrigerator',
    code: "Stainless Steel Door",
    img: hero5.src,
  },
];

const countertops3 = [
  {
    id: "tv-42",
    title: '42" Smart Television',
    img: hero6.src,
  },
];

const countertops4 = [
  {
    id: "audio-system",
    title: "4Built-in Audio System",
    code: "Wireless Bluetooth, Premium Sound",
    img: hero7.src,
  },
];

const countertops5 = [
  {
    id: "range-hood-36",
    title: '36" Range Hood',
    img: hero8.src,
  },
];

const countertops6 = [
  {
    id: "trash-can",
    title: "Built-in Trash Can",
    code: "Optional",
    img: hero9.src,
  },
];

const StepAppliances = ({ value, onChange }) => {
  return (
    <>
      <div className="">
        <div className={styles.stepHeader}>
          <h2>Select Your Appliances</h2>
          <p>
            Choose commercial-grade appliances to complete your outdoor kitchen
          </p>
        </div>

        {/* BBQ Grill */}
        <div className={styles.divider}>
          <div className={styles.dividerTitle}>
            <h5>
              Stainless Steel BBQ Grill{" "}
              <span className={styles.reqired}>REQUIRED</span>
              <span className={styles.fixed}>
                <FiLock /> FIXED FOR a-max
              </span>
            </h5>
            <p>The a-max model comes with a fixed grill size as specified</p>
          </div>

          <div className={styles.grid}>
            {countertops.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                />
                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
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

        {/* Refrigerator */}
        <div className={styles.divider}>
          <div className={styles.dividerTitle}>
            <h5>
              Refrigerator <span className={styles.optional}>OPTIONAL</span>
            </h5>
          </div>

          <div className={styles.grid}>
            {countertops2.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                />

                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
                  <div className={styles.codeLabel}>{item.code}</div>
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

        {/* Rest of sections updated same way */}

        <div className={styles.divider}>
          <div className={styles.dividerTitle}>
            <h5>
              Television <span className={styles.optional}>OPTIONAL</span>
            </h5>
            <p>Smart TV for entertainment</p>
          </div>

          <div className={styles.grid}>
            {countertops3.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                />
                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
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

        <div className={styles.divider}>
          <div className={styles.dividerTitle}>
            <h5>
              Built-in Audio System{" "}
              <span className={styles.optional}>OPTIONAL</span>
            </h5>
            <p>Wireless Bluetooth, Premium Sound</p>
          </div>

          <div className={styles.grid}>
            {countertops4.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                  className={styles.padImg}
                />

                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
                  <div className={styles.codeLabel}>{item.code}</div>
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

        <div className={styles.divider}>
          <div className={styles.dividerTitle}>
            <h5>
              Range Hood <span className={styles.optional}>OPTIONAL</span>
            </h5>
          </div>

          <div className={styles.grid}>
            {countertops5.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                />
                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
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

        <div className={styles.divider}>
          <div className={styles.dividerTitle}>
            <h5>
              Trash Can <span className={styles.optional}>OPTIONAL</span>
            </h5>
          </div>

          <div className={styles.grid}>
            {countertops6.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={260}
                />

                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
                  <div className={styles.codeLabel}>{item.code}</div>
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
      </div>
    </>
  );
};

export default StepAppliances;
