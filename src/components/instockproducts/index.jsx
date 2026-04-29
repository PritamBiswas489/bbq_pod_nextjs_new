// components/OutdoorKitchens.jsx
import React from "react";
import { Row, Col, Card, Button, Badge, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import ribbonStyles from "./ribbonBadge.module.scss";
import TitleHeader from "../titleHeader";
import { useTranslation } from "next-i18next";
import Link from "next/link";
 

import { FiCheckCircle } from "react-icons/fi";

import ab1 from "@/assets/front/images/in-stock-images/ab1.jpg";
import ab2 from "@/assets/front/images/in-stock-images/ab2.jpg";
import rs1 from "@/assets/front/images/in-stock-images/rs1.jpg";
import rs2 from "@/assets/front/images/in-stock-images/rs2.jpg";
import rs3 from "@/assets/front/images/in-stock-images/rs3.jpg";
import rs4 from "@/assets/front/images/in-stock-images/rs4.jpg";
import { useRouter } from "next/router";
 

const InStockProducts = ({ openModal, setModalContent }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;

   
  

  const products = [
    {
      badges: [{ text: "Available", variant: "success", position: "right" }],
      nameKey: "Prime",
      descriptionKey: "",
      priceKey: "14,900€",
      featuresKeys: ["in_stock_Black_Sand_Exterior", "in_stock_Black_Sand_Interior", "in_stock_Stainless_Steel_Worktop"],
      image: ab1.src,
      link: '',
      popContent:{
        title: "Prime",
        image: ab1.src,
        price: "14,900€",
        features: {
         "Exterior_Finish": "Black Sand Exterior",
         "Interior_Finish": "Black Sand Interior",
         "Worktop": "Stainless Steel Worktop",
        }
      }
    },
    {
      badges: [{ text: "Available", variant: "success", position: "right" }],
      nameKey: "Prime",
      descriptionKey: "",
      priceKey: "14,900€",
      featuresKeys: ["in_stock_Purple_Grey_Exterior", "in_stock_Black_Walnut_Interior", "in_stock_Spanish_Stone_Worktop"],
      image: ab2.src,
      link: '',
      popContent:{
        title: "Prime",
        image: ab2.src,
        price: "14,900€",
        features: {
         "Exterior_Finish": "in_stock_Purple_Grey_Exterior",
         "Interior_Finish": "in_stock_Black_Walnut_Interior",
         "Worktop": "in_stock_Spanish_Stone_Worktop",
        }
      }
    },
    {
      badges: [{ text: "Reserved", variant: "error", position: "right" }],
      nameKey: "Pinnacle",
      descriptionKey: "",
      priceKey: "18,900€",
      featuresKeys: ["in_stock_Medium_Gray_Exterior", "in_stock_Black_Walnut_Interior", "in_stock_Spanish_Stone_Worktop"],
      image: rs1.src,
      link: '',
    },
    {
      badges: [{ text: "Reserved", variant: "error", position: "right" }],
      nameKey: "Prime",
      descriptionKey: "",
      priceKey: "14,900€",
      featuresKeys: [
        "in_stock_Black_Sand_Exterior",
        "in_stock_Olive_Green_Interior",
        "in_stock_Spanish_Stone_Worktop",
      ],
      image: rs2.src,
      link: '',
    },
    {
      badges: [{ text: "Reserved", variant: "error", position: "right" }],
      nameKey: "Core",
      descriptionKey: "",
      priceKey: "11,900€",
      featuresKeys: ["in_stock_Medium_Gray_Exterior", "Medium Gray Interior", "in_stock_Calacatta_Stone_Worktop"],
      image: rs3.src,
      link: '',
    },
    {
      badges: [{ text: "Reserved", variant: "error", position: "right" }],
      nameKey: "Core",
      descriptionKey: "",
      priceKey: "11,900€",
      featuresKeys: ["in_stock_Athens_White_Exterior", "in_stock_Khaki_Wood_Interior", "in_stock_Stainless_Steel_Worktop"],
      image: rs4.src,
      link: '',
    },
  ];

  return (
    <section className={styles.outdoorKitchens}>
      <Container>
        
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
                  badge.text === "Available" || badge.text === "Reserved" ? (
                    <div
                      key={bIndex}
                      className={ribbonStyles.ribbon}
                    >
                      <span className={ badge.text === "Available" ? ribbonStyles.ribbonTextSuccess : ribbonStyles.ribbonTextErrors}>{t(badge.text)}</span>
                    </div>
                  ) : (
                    <Badge
                      key={bIndex}
                      className={`
                        position-absolute top-0 
                        ${badge.position === "left" ? "start-0" : "end-0"} m-2 
                        ${badge.variant === "success" ? styles.badgeBgSuccess : styles.badgeBgError}
                      `}
                    >
                      {badge.text}
                    </Badge>
                  )
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
                  { product.badges?.some(badge => badge.text === "Available") ?  <Link
                    variant="link"
                    className={`p-0 ${styles.viewDetails}`}
                    onClick={(e)=>{e.preventDefault(); setModalContent(product.popContent); openModal();}}
                    href={'#'}
                  >
                    {t("viewDetailsButton")}
                  </Link> : null}
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InStockProducts;
