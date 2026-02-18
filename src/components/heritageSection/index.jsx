import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
// import heroImage from "@/assets/front/images/outdoor/hero-3.webp";
import Image from "next/image";

import heritageImg from "@/assets/front/images/hero-2.jpg";
import { useTranslation } from "next-i18next";



const HeritageSection = () => {
  const { t } = useTranslation("common");
  const contentData = [
  {
    title: t('aboutusHeritageTitle1'),
    description: t('aboutusHeritageDescription1'),
  },
  {
    title: t('aboutusHeritageTitle2'),
    description: t('aboutusHeritageDescription2'),
  },
  {
    title: t('aboutusHeritageTitle3'),
    description: t('aboutusHeritageDescription3'),
  }
];
  return (
    <section className={styles.heritageSection}>
      <Container>
        <Row className="align-items-center g-lg-5 g-4">
          {/* Left Image */}
          <Col lg={6} className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={heritageImg.src}
                alt="BBQ Pod Heritage"
                className={styles.image}
                width={1365}
                height={768}
                priority
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            {contentData.map((item, index) => (
              <div key={index} className={styles.contentBlock}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeritageSection;
