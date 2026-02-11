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
}) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.exteriorColours}>
      <TitleHeader whyChoose={[]} title={title} subtitle={subtitle} />

      <Container className={styles.container}>
        <div className="d-flex flex-wrap align-items-center">
          {/* ✅ IMAGE WRAPPER */}
          <div className={styles.imgWrap}>
            {/* 🔹 First Image */}
            {imageRef && (
              <div className={styles.imageBox}>
                <Image
                  src={imageRef}
                  alt="Product Image One"
                  width={1000}
                  height={800}
                />
              </div>
            )}

            {/* 🔹 Second Image */}
            {imageReftwo && (
              <div className={styles.imageBox}>
                <Image
                  src={imageReftwo}
                  alt="Product Image Two"
                  width={800}
                  height={600}
                />
              </div>
            )}
          </div>

          {/* ✅ COLOR GRID */}
          <div className={styles.colorGrid}>
            {items.map((item, index) => (
              <div
                key={index}
                className={styles.swatchWrapper}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Link href="#" className={styles.swatchLink}>
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.colorName}
                      width={300}
                      height={300}
                      style={{ borderRadius: "20px" }}
                    />
                  )}

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
