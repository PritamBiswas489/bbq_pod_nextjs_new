// components/TitleHeader.jsx
import React from "react";
import styles from "./index.module.scss";

const TitleHeader = ({ whyChoose, title, subtitle }) => {
  return (
    <div className={styles.titleHeader}>
      <p
        className={styles.whyChoose}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {whyChoose}
      </p>
      <h2
        className={styles.title}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        {title}
      </h2>
      <p
        className={styles.subtitle}
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default TitleHeader;
