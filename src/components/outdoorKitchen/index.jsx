// components/OutdoorKitchens.jsx
import React from "react";
import { Row, Col, Card, Button, Badge, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";
import { useTranslation } from "next-i18next";
 

import { FiCheckCircle } from "react-icons/fi";

import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";
import hero5 from "@/assets/front/images/outdoor/hero-5.webp";
 

const OutdoorKitchens = () => {
  const { t } = useTranslation("common");

  const products = [
    {
      badges: [],
      nameKey: "coreProductName",
      descriptionKey: "coreProductDescription",
      priceKey: "coreProductPrice",
      featuresKeys: ["coreFeature1", "coreFeature2", "coreFeature3"],
      image: hero1.src,
    },
    {
      badges: [],
      nameKey: "primeProductName",
      descriptionKey: "primeProductDescription",
      priceKey: "primeProductPrice",
      featuresKeys: ["primeFeature1", "primeFeature2", "primeFeature3"],
      image: hero2.src,
    },
    {
      badges: [],
      nameKey: "apexProductName",
      descriptionKey: "apexProductDescription",
      priceKey: "apexProductPrice",
      featuresKeys: ["apexFeature1", "apexFeature2", "apexFeature3"],
      image: hero3.src,
    },
    {
      badges: [],
      nameKey: "pinnacleProductName",
      descriptionKey: "pinnacleProductDescription",
      priceKey: "pinnacleProductPrice",
      featuresKeys: [
        "pinnacleFeature1",
        "pinnacleFeature2",
        "pinnacleFeature3",
      ],
      image: hero4.src,
    },
    {
      badges: [],
      nameKey: "aeroProductName",
      descriptionKey: "aeroProductDescription",
      priceKey: "aeroProductPrice",
      featuresKeys: ["aeroFeature1", "aeroFeature2", "aeroFeature3"],
      image: hero5.src,
    },
  ];

  return (
    <section className={styles.outdoorKitchens}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title={t("outdoorKitchensTitle")}
          subtitle={t("outdoorKitchensSubtitle")}
        />
        <Row className={`g-4 justify-content-center ${styles.productGrid}`}>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card
                className={`h-100 ${styles.productCard}`}
                data-aos="zoom-in-up"
                data-aos-anchor-placement="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                {product.badges?.map((badge, bIndex) => (
                  <Badge
                    key={bIndex}
                    className={`
                      position-absolute top-0 
                      ${badge.position === "left" ? "start-0" : "end-0"} m-2 
                      ${styles.badgeCustom} 
                      ${styles[badge.variant]}`}
                  >
                    {badge.text}
                  </Badge>
                ))}
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={t(product.nameKey)}
                  className={styles.cardImage}
                />
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>
                    {t(product.nameKey)}
                  </Card.Title>
                  <Card.Subtitle className={`mb-2 ${styles.cardSubtitle}`}>
                    {t(product.descriptionKey)}
                  </Card.Subtitle>
                  <div className={`fw-bold ${styles.cardPrice}`}>
                    {product.oldPrice && (
                      <div className="small d-flex align-items-center mb-1">
                        <Badge bg="success-subtle" className={styles.badgeBg}>
                          {product.oldPrice[1].text}
                        </Badge>
                      </div>
                    )}
                    {t(product.priceKey)}
                  </div>
                  <ul className={`list-unstyled ${styles.featureList}`}>
                    {product.featuresKeys.map((featureKey, fIndex) => (
                      <li key={fIndex} className={`mb-1 ${styles.featureItem}`}>
                        <FiCheckCircle className="me-2" />
                        {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className={`p-0 ${styles.viewDetails}`}
                  >
                    {t("viewDetailsButton")}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OutdoorKitchens;
