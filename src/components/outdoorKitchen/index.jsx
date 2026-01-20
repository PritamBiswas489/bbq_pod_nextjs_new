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
        { text: "Save £1,000", variant: "success", position: "left" },
        { text: "Most Popular", variant: "danger", position: "right" },
      ],
      name: "A-Mini",
      description: "Compact Lux for Every Garden",
      oldPrice: [{ text: "£9,999" }, { text: "10%" }],
      price: "From £8,999",
      features: [
        'Professional 30" gas grill with three burners',
        "Integrated 2 drinks cooler",
        "LED ambient lighting system",
      ],
      image: hero1.src,
    },
    {
      badges: [
        { text: "SAVE £1,600", variant: "success", position: "left" },
        // { text: "10% off", variant: "success-subtle", position: "right" },
      ],
      name: "A-Plus",
      description: "Entertainment Elevated",
      oldPrice: [{ text: "£15,999" }, { text: "10%" }],
      price: "From £14,399",
      features: [
        'Professional 30" gas grill',
        "Range hood extract",
        '32" weatherproof TV',
      ],
      image: hero2.src,
    },
    {
      badges: [
        { text: "SAVE £1,800", variant: "success", position: "left" },
        { text: "Premium Choice", variant: "danger", position: "right" },
      ],
      name: "A-Max",
      description: "Maximum Luxury",
      oldPrice: [{ text: "£17,999" }, { text: "10%" }],
      price: "From £16,199",
      features: [
        'Massive 36" professional gas grill',
        'Larger 42" integrated TV',
        'Stunning 42" waterproof TV',
      ],
      image: hero3.src,
    },
    {
      badges: [
        { text: "SAVE £1,900", variant: "success", position: "left" },
        // { text: "Premium Choice", variant: "danger", position: "right" },
      ],
      name: "A-Ultra",
      description: "For Those Who Take Grilling Seriously",
      oldPrice: [{ text: "£22,332" }, { text: "10%" }],
      price: "From £20,099",
      features: [
        'Colossal 46" professional gas grill',
        "Maximum counter workspace",
        '24" integrated fridge',
      ],
      image: hero4.src,
    },
    {
      badges: [
        { text: "SAVE £1,600", variant: "success", position: "left" },
        { text: "New Design", variant: "danger", position: "right" },
      ],
      name: "A-Pro",
      description: "All-Weather Luxury with Motorised Awning",
      oldPrice: [{ text: "£17,110" }, { text: "10%" }],
      price: "From £15,399",
      features: [
        "Motorised retractable awning",
        "Wider 1200mm design",
        "Professional gas grill system",
      ],
      image: hero5.src,
    },
  ];

  return (
    <section className={styles.outdoorKitchens}>
      <Container>
        <TitleHeader
          whyChoose="5 PREMIUM MODELS"
          title="Choose Your Perfect Outdoor Kitchen"
          subtitle="From compact garden solutions to professional-grade outdoor kitchens, each model is engineered with commercial-grade materials including stainless steel construction and premium appliances."
        />
        <Row className={`g-4 justify-content-center ${styles.productGrid}`}>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card
                className={`h-100 ${styles.productCard}`}
                data-aos="zoom-in-up"
                data-aos-anchor-placement="zoom-in-up"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                {product.badges?.map((badge, bIndex) => (
                  <Badge
                    key={bIndex}
                    bg={badge.variant}
                    className={`position-absolute top-0 ${
                      badge.position === "left" ? "start-0" : "end-0"
                    } m-2 ${styles.badgeCustom}`}
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
                  <Card.Subtitle
                    className={`mb-2 text-muted ${styles.cardSubtitle}`}
                  >
                    {product.description}
                  </Card.Subtitle>
                  <div className={`text-danger fw-bold ${styles.cardPrice}`}>
                    {product.oldPrice && (
                      <div className="small d-flex align-items-center mb-1">
                        <del className={`me-2 ${styles.textMuted}`}>
                          {product.oldPrice[0].text}
                        </del>
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
                        <FiCheckCircle className="text-danger me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className={`p-0 text-danger ${styles.viewDetails}`}
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
