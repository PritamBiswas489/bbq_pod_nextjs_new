// components/OutdoorKitchens.jsx
import React from "react";
import { Row, Col, Card, Button, Badge, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";

import { FiCheckCircle } from "react-icons/fi";

import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";
import hero5 from "@/assets/front/images/outdoor/hero-5.webp";

const OutdoorKitchens = () => {
  const products = [
    {
      badges: [
        // { text: "Save £1,000", variant: "save", position: "left" },
        // { text: "Most Popular", variant: "premium", position: "right" },
      ],
      name: "CORE",
      description: "Compact outdoor kitchen",
      // oldPrice: [{ text: "£9,999" }, { text: "10%" }],
      price: "From 12,500 € IVA included",
      features: [
        '30" premium gas BBQ',
        "Fully integrated stainless-steel kitchen",
        "Compact, space-efficient layout",
      ],
      image: hero1.src,
    },
    {
      badges: [
        // { text: "SAVE £1,600", variant: "save", position: "left" },
        // { text: "10% off", variant: "success-subtle", position: "right" },
      ],
      name: "PRIME (Most Popular)",
      description: "Balanced for everyday entertaining",
      // oldPrice: [{ text: "£15,999" }, { text: "10%" }],
      price: "From 15,500 € IVA included",
      features: [
        '30" premium gas BBQ',
        "Integrated outdoor TV",
        "Entertaining-focused layout",
      ],
      image: hero2.src,
    },
    {
      badges: [
        // { text: "SAVE £1,800", variant: "save", position: "left" },
        // { text: "Premium Choice", variant: "premium", position: "right" },
      ],
      name: "APEX",
      description: "More space, more flexibility",
      // oldPrice: [{ text: "£17,999" }, { text: "10%" }],
      price: "More space, more flexibility",
      features: [
        '36" premium gas BBQ',
        "Expanded cooking & prep space",
        "Increased storage capacity",
      ],
      image: hero3.src,
    },
    {
      badges: [
        // { text: "SAVE £1,900", variant: "save", position: "left" },
        // { text: "Premium Choice", variant: "danger", position: "right" },
      ],
      name: "PINNACLE (Premium Choice)",
      description: "Flagship outdoor kitchen",
      // oldPrice: [{ text: "£22,332" }, { text: "10%" }],
      price: "From 20,900 € IVA included",
      features: [
        '46" premium gas BBQ',
        "Full-width kitchen layout",
        "Highest specification finish",
      ],
      image: hero4.src,
    },
    {
      badges: [
        // { text: "SAVE £1,600", variant: "premium", position: "left" },
        // { text: "New Design", variant: "premium", position: "right" },
      ],
      name: "AERO",
      description: "Open-air outdoor cooking",
      // oldPrice: [{ text: "£17,110" }, { text: "10%" }],
      price: "From 16,500 € IVA included",
      features: [
        '36" premium gas BBQ',
        "Open-air configuration",
        "Integrated shading system",
      ],
      image: hero5.src,
    },
  ];

  return (
    <section className={styles.outdoorKitchens}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title="Find the Right BBQ Pod for Your Space"
          subtitle="Whether you’re working with a smaller garden or a larger outdoor area, every model is engineered with commercial-grade materials, stainless-steel construction and high-quality appliances."
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
                  // <Badge
                  //   key={bIndex}
                  //   // bg={badge.variant}
                  //   className={`position-absolute top-0 ${
                  //     badge.position === "left" ? "start-0" : "end-0"
                  //   } m-2 ${styles.badgeCustom}`}
                  // >
                  //   {badge.text}
                  // </Badge>
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
                  alt={product.name}
                  className={styles.cardImage}
                />
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>
                    {product.name}
                  </Card.Title>
                  <Card.Subtitle className={`mb-2 ${styles.cardSubtitle}`}>
                    {product.description}
                  </Card.Subtitle>
                  <div className={`fw-bold ${styles.cardPrice}`}>
                    {product.oldPrice && (
                      <div className="small d-flex align-items-center mb-1">
                        {/* <del className={`me-2 ${styles.textMuted}`}>
                          {product.oldPrice[0].text}
                        </del> */}
                        <Badge bg="success-subtle" className={styles.badgeBg}>
                          {product.oldPrice[1].text}
                        </Badge>
                      </div>
                    )}
                    {product.price}
                  </div>
                  <ul className={`list-unstyled ${styles.featureList}`}>
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className={`mb-1 ${styles.featureItem}`}>
                        <FiCheckCircle className="me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className={`p-0 ${styles.viewDetails}`}
                  >
                    View Details →
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
