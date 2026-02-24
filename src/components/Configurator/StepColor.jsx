import React from "react";
import styles from "./index.module.scss";
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
];

const StepColor = ({ value, onChange }) => {
  return (
    <div className="">
      <div className={styles.stepHeader}>
        <h2>Choose Your Exterior Color</h2>
        <p>Select from 10 premium powder-coated finishes</p>
      </div>
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
  );
};

export default StepColor;
