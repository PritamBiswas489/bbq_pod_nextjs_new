// components/FeaturesSection.jsx
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'next-i18next';

import icon1 from "@/assets/front/images/outdoor-cooking/1.svg";
import icon2 from "@/assets/front/images/outdoor-cooking/2.svg";
import icon3 from "@/assets/front/images/outdoor-cooking/3.svg";
import icon4 from "@/assets/front/images/outdoor-cooking/4.svg";
import icon5 from "@/assets/front/images/outdoor-cooking/5.svg";
import icon6 from "@/assets/front/images/outdoor-cooking/6.svg";

import TitleHeader from "../titleHeader";

const featuresData = [
  {
    image: icon1,
    color: "primary",
    titleKey: "feature1Title",
    descriptionKey: "feature1Description",
  },
  {
    image: icon2,
    color: "primary",
    titleKey: "feature2Title",
    descriptionKey: "feature2Description",
  },
  {
    image: icon3,
    color: "primary",
    titleKey: "feature3Title",
    descriptionKey: "feature3Description",
  },
  {
    image: icon4,
    color: "primary",
    titleKey: "feature4Title",
    descriptionKey: "feature4Description",
  },
  {
    image: icon5,
    color: "primary",
    titleKey: "feature5Title",
    descriptionKey: "feature5Description",
  },
  {
    image: icon6,
    color: "primary",
    titleKey: "feature6Title",
    descriptionKey: "feature6Description",
  },
];

const FeaturesSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className={styles.featuresSection}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title={t('featuresSectionTitle')}
          subtitle={t('featuresSectionSubtitle')}
        />

        <Row className="justify-content-center">
          {featuresData.map((feature, index) => (
            <Col md={4} key={index} className="mb-4">
              <div
                className={styles.card}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div
                  className={`${styles.icon} ${
                    styles[`icon-${feature.color}`]
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={t(feature.titleKey)}
                    width={60}
                    height={60}
                  />
                </div>

                <h2 className={styles.cardTitle}>{t(feature.titleKey)}</h2>
                <p className={styles.cardDescription}>{t(feature.descriptionKey)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
