import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  BsDroplet,
  BsLightbulb,
  BsTools,
  BsFlower1,
  BsBook,
} from "react-icons/bs"; // Assuming react-icons/bs for Bootstrap icons, adjust as needed
import styles from "./index.module.scss";

import { LuLeaf } from "react-icons/lu";

// Images
import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";
import hero5 from "@/assets/front/images/outdoor/hero-5.webp";
import TitleHeader from "../titleHeader";
import Image from "next/image";
import SingleImage from "../singleImg";

const featuresData = [
  {
    imageSrc: hero1.src, // Replace with actual image paths
    icon: <BsLightbulb />,
    title: "Multi-Color RGB Lighting",
    description:
      "Features multi-color mode and monochrome atmosphere mode, adding dynamic flair to your evening entertainment.",
  },
  {
    imageSrc: hero2.src,
    icon: <BsDroplet />,
    title: "30m Garden Watering System",
    description:
      "Equipped with garden tool storage, watering tools, flower pruning set, and 30-meter hose + booster.",
  },
  {
    imageSrc: hero3.src,
    icon: <LuLeaf />,
    title: "Ecological Fish Pond Feature",
    description:
      "Beautifully integrated self-sustaining fish pond with variety of green plants and flowers, enhancing natural garden feel.",
  },
  {
    imageSrc: hero4.src,
    icon: <BsTools />,
    title: "Garden Tool Storage",
    description:
      "Dedicated storage area for gardening tools and equipment with organized compartments and hose reel.",
  },
  {
    imageSrc: hero5.src,
    icon: <BsFlower1 />,
    title: "Plant Display Shelving",
    description:
      "Integrated shelving system with water feature for displaying plants, herbs, decorative greenery.",
  },
  {
    imageSrc: hero3.src,
    icon: <BsBook />,
    title: "Explore Full Catalog",
    description:
      "Download the complete product catalog with all customization options, specifications, and materials.",
    link: "#", // Replace with actual link
    linkText: "View Catalog →",
  },
];

const LifestyleFeatures = ({ features = featuresData }) => {
  return (
    <section className={styles.featuresSection}>
      <Container>
        <TitleHeader
          whyChoose="LIFESTYLE ENHANCEMENTS"
          title="Optional Lifestyle Features"
          subtitle="Enhance your outdoor kitchen with ecological and horticultural features that bring life to your garden"
        />
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card
                className={styles.featureCard}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className={styles.imgWrap}>
                  <Card.Img
                    variant="top"
                    src={feature.imageSrc}
                    className={styles.featureImage}
                  />
                </div>
                <Card.Body className={styles.featureBody}>
                  <div className={styles.iconWrapper}>{feature.icon}</div>
                  <Card.Title className={styles.featureTitle}>
                    {feature.title}
                  </Card.Title>
                  <Card.Text className={styles.featureDescription}>
                    {feature.description}
                  </Card.Text>
                  {feature.link && (
                    <a href={feature.link} className={styles.featureLink}>
                      {feature.linkText}
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div
          className={styles.note}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Custom Add-Ons: These optional features can be added during ordering.
          Contact our team to discuss integrating ecological and lifestyle
          features into your BBQ Pod.
        </div>
      </Container>
    </section>
  );
};

export default LifestyleFeatures;
