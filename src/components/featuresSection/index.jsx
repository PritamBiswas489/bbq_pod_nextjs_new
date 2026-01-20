// components/FeaturesSection.jsx
import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  IoShieldCheckmarkOutline,
  IoPersonOutline,
  IoHammerOutline,
  IoColorPaletteOutline,
  IoCloudOutline,
} from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import TitleHeader from "../titleHeader";

const featuresData = [
  {
    icon: <IoShieldCheckmarkOutline className={styles.svgIcon} />,
    color: "red",
    title: "Premium Construction",
    description:
      "Designed for longevity with 6-layer insulated door panels and stainless steel construction. Commercial-grade materials ensure decades of reliable service.",
  },
  {
    icon: <IoPersonOutline className={styles.svgIcon} />,
    color: "red",
    title: "30+ Years Expertise",
    description:
      "Delivered and installed by Commercial Awnings Limited, UK specialists in premium outdoor structures for over three decades. Every pod benefits from our extensive experience.",
  },
  {
    icon: <FaTruck className={styles.svgIcon} />,
    color: "blue",
    title: "UK-Wide Delivery",
    description:
      "100% fully assembled delivery and professional installation across the entire UK. No DIY required - your pod arrives ready to use approx. 16 weeks from deposit.",
  },
  {
    icon: <IoHammerOutline className={styles.svgIcon} />,
    color: "green",
    title: "Professional Grade",
    description:
      "Commercial-quality appliances including grills, integrated refrigeration, and weather-resistant electronics. Built to the same standards as commercial kitchens.",
  },
  {
    icon: <IoColorPaletteOutline className={styles.svgIcon} />,
    color: "purple",
    title: "Fully Customisable",
    description:
      "Choose from 10 exterior powder-coated colours, 15 interior finishes, and multiple countertop options. Create a pod that perfectly complements your outdoor space.",
  },
  {
    icon: <IoCloudOutline className={styles.svgIcon} />,
    color: "cyan",
    title: "All-Weather Design",
    description:
      "Designed for the British climate with weatherproof construction, insulated panels, and optional motorised awning. Enjoy outdoor cooking year-round, rain or shine.",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <Container>
        <TitleHeader
          whyChoose="WHY CHOOSE BBQ PODS UK"
          title="Premium Quality, Exceptional Service"
          subtitle="Unlike temporary garden structures, our BBQ pods are designed as permanent outdoor kitchens with commercial-grade construction, UK-based support, and comprehensive manufacturer warranties."
        />
        <Row>
          {featuresData.map((feature, index) => (
            <Col md={4} key={index} className="mb-4">
              <div
                className={styles.card}
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div
                  className={`${styles.icon} ${
                    styles[`icon-${feature.color}`]
                  }`}
                >
                  {feature.icon}
                </div>
                <h2 className={styles.cardTitle}>{feature.title}</h2>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
