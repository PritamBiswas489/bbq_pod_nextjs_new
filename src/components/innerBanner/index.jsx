import React from "react";
import styles from "./index.module.scss";

import hero1 from "@/assets/front/images/hero-1.webp";
import Link from "next/link";

import { TiArrowRightOutline } from "react-icons/ti";

const InnerBanner = ({
  badgeText,
  title,
  subtitle,
  description1,
  description2,
  backgroundImage,
  links = [
    { label: "Request Your Quote", href: "#", className: "primaryLink" },
    { label: "View All Models", href: "#", className: "secondaryLink" },
  ],
}) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={`container py-4 text-white position-relative ${styles.content}`}
      >
        <div className={styles.badge} data-aos="flip-up" data-aos-once="true">
          {badgeText}
        </div>
        <h1 data-aos="zoom-in" data-aos-once="true">
          {title} <span className={styles.subtitle}>{subtitle}</span>
        </h1>
        <p className="lead mb-2" data-aos="zoom-in" data-aos-once="true">
          {description1}
        </p>
        <p className="lead" data-aos="zoom-in" data-aos-once="true">
          {description2}
        </p>
        {links.length > 0 && (
          <ul className={styles.linkList}>
            {links.map(({ label, href, className }) => (
              <li
                key={label}
                className={styles[className]}
                data-aos="zoom-in"
                data-aos-once="true"
              >
                <Link href={href}>
                  {label} <TiArrowRightOutline className="ms-1" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InnerBanner;
