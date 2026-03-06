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
  subtitle = null,
  rightButtonLink = "#",
  leftButtonLink = "#",
  rightButtonLinkTarget = "_self",
  leftButtonLinkTarget = "_self",
}) => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerInner}>
        <h2
          className={styles.title}
          // data-aos="zoom-in-up"
          // data-aos-duration="1000"
          // data-aos-once="true"
        >
          {title}
        </h2>
        {subtitle && (
          <h3
            className={styles.subtitle}
            // data-aos="zoom-in-up"
            // data-aos-duration="1000"
            // data-aos-once="true"
          >
            {subtitle}
          </h3>
        )}

        <p
          className={styles.description}
          // data-aos="zoom-in-up"
          // data-aos-duration="1000"
          // data-aos-once="true"
        >
          {description}
        </p>
        {showButtons && (
          <div className={styles.buttonContainer}>
            <ul>
              {leftButtonWrap && (
                <li>
                  <Link
                    href={leftButtonLink}
                    className={styles.leftButton}
                    // data-aos="zoom-in-up"
                    // data-aos-duration="1000"
                    // data-aos-once="true"
                    target={leftButtonLinkTarget}
                  >
                    {leftButton} <TiArrowRightOutline size={20} />
                  </Link>
                </li>
              )}
              {rightButtonWrap && (
                <li>
                  <Link
                    href={rightButtonLink}
                    className={styles.rightButton}
                    // data-aos="zoom-in-up"
                    // data-aos-duration="1000"
                    // data-aos-once="true"
                    target={rightButtonLinkTarget}
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
