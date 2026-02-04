// components/ModelConfiguratorBanner.js

import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";

const ModelConfiguratorBanner = ({
  title,
  description,
  leftButton,
  rightButton,
  showButtons = true,
  leftButtonWrap = true,
  rightButtonWrap = true,
}) => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h2
          className={styles.title}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {title}
        </h2>
        <p
          className={styles.description}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {description}
        </p>
        {showButtons && (
          <div className={styles.buttonContainer}>
            <ul>
              {leftButtonWrap && (
                <li>
                  <Link
                    href="#"
                    className={styles.leftButton}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {leftButton} <TiArrowRightOutline size={20} />
                  </Link>
                </li>
              )}
              {rightButtonWrap && (
                <li>
                  <Link
                    href="#"
                    className={styles.rightButton}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {rightButton} <TiArrowRightOutline size={20} />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModelConfiguratorBanner;
