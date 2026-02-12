// components/ExteriorColours.js

import { Container } from "react-bootstrap";
import styles from "./index.module.scss";
import Link from "next/link";
import TitleHeader from "../titleHeader";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const ExteriorProductPage = ({
  title,
  subtitle,
  imageRef,
  imageReftwo,
  items,
  gridCols = 4, // ✅ default
}) => {
  return (
    <div className={styles.exteriorColours}>
      <TitleHeader whyChoose={[]} title={title} subtitle={subtitle} />

      <Container className={styles.container}>
        <div className="d-flex flex-wrap align-items-center">
          <div className={styles.imgWrap}>
            {imageRef && (
              <div className={styles.imageBox}>
                <Image src={imageRef} alt="" width={1000} height={800} />
              </div>
            )}

            {imageReftwo && (
              <div className={styles.imageBox}>
                <Image src={imageReftwo} alt="" width={800} height={600} />
              </div>
            )}
          </div>

          {/* ✅ Dynamic grid columns */}
          <div
            className={styles.colorGrid}
            style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
          >
            {items.map((item, index) => (
              <div key={index} className={styles.swatchWrapper}>
                <Link href="#" className={styles.swatchLink}>
                  <Image
                    src={item.image}
                    alt={item.colorName}
                    width={160}
                    height={160}
                    style={{ borderRadius: "20px" }}
                  />
                  <h6>{item.colorName}</h6>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExteriorProductPage;
