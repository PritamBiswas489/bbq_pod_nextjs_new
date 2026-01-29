import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";

const SingleImage = () => {
  return (
    <div>
      <div className={styles.singleImage}>
        <Image alt="" src={hero1.src} height={300} width={600} />
      </div>
    </div>
  );
};

export default SingleImage;
