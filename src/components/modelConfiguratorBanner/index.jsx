// components/ModelConfiguratorBanner.js

import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";

const ModelConfiguratorBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h2
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Not Sure Which Model Is Right for You?
        </h2>
        <p
          className={styles.description}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Use our interactive configurator to explore features, compare models,
          and visualise your perfect outdoor kitchen. Get a personalised quote
          in minutes.
        </p>
        <div className={styles.buttonContainer}>
          <ul>
            <li>
              <Link
                href="#"
                className={styles.button}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Try Configurator <TiArrowRightOutline size={20} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={styles.button}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Compare All Models
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModelConfiguratorBanner;
