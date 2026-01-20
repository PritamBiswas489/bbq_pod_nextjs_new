// components/ModelConfiguratorBanner.js

import React from "react";
import styles from "./index.module.scss";

const ModelConfiguratorBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h2
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          data-aos-once="true"
        >
          Not Sure Which Model Is Right for You?
        </h2>
        <p
          className={styles.description}
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          data-aos-once="true"
        >
          Use our interactive configurator to explore features, compare models,
          and visualise your perfect outdoor kitchen. Get a personalised quote
          in minutes.
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-once="true"
          >
            Try Configurator &gt;
          </button>
          <button
            className={styles.button}
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            data-aos-once="true"
          >
            Compare All Models
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModelConfiguratorBanner;
