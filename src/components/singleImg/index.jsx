import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";

const SingleImage = ({img}) => {
  return (
    <div>
      <div className={styles.singleImage}>
       {img ? <Image alt="" src={img.src} height={300} width={600} priority /> : <Image alt="" src={hero1.src} height={300} width={600} priority />}
      </div>
    </div>
  );
};

export default SingleImage;
