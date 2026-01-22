import React from "react";
import styles from "./index.module.scss";

import hero1 from "@/assets/front/images/hero-1.webp";

const InnerBanner = ({
  badgeText = "5 PREMIUM MODELS",
  title = "Premium Outdoor Kitchen Pods -",
  subtitle = "Compare All Models",
  description1 = "Discover our handcrafted range of luxury outdoor kitchen pods, engineered for the UK and built to last a lifetime. Each BBQ Pod is constructed from commercial-grade stainless steel with premium materials throughout, offering the perfect balance of design, performance, and durability for your garden or patio.",
  description2 = "Whether you're upgrading your home's outdoor entertaining area or planning a complete garden transformation, our Premium BBQ Pod models provide tailored options. For every lifestyle— from compact luxury to all-weather performance.",
  backgroundImage = hero1.src,
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
        <div className={styles.badge}>{badgeText}</div>
        <h1>
          {title} <span className={styles.subtitle}>{subtitle}</span>
        </h1>
        <p className="lead mb-2">{description1}</p>
        <p className="small">{description2}</p>
      </div>
    </div>
  );
};

export default InnerBanner;
