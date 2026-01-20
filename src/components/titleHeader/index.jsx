// components/TitleHeader.jsx
import React from "react";
import styles from "./index.module.scss";

const TitleHeader = ({ whyChoose, title, subtitle }) => {
  return (
    <div className={styles.titleHeader}>
      <p
        className={styles.whyChoose}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {whyChoose}
      </p>
      <h1
        className={styles.title}
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-once="true"
      >
        {title}
      </h1>
      <p
        className={styles.subtitle}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default TitleHeader;
