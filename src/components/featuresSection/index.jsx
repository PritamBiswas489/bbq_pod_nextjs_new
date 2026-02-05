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
    icon: <IoPersonOutline className={styles.svgIcon} />,
    color: "primary",
    title: "Premium Construction",
    description:
      "Designed for long-term outdoor use, with 6-layer insulated door panels and stainless-steel construction. Commercial-grade materials deliver strength, durability and reliable performance for decades.",
  },
  {
    icon: <FaTruck className={styles.svgIcon} />,
    color: "primary",
    title: "Specialist Outdoor Kitchens",
    description:
      "BBQ Pod Spain focuses exclusively on premium outdoor kitchens, combining carefully selected manufacturing partners with hands-on project management to deliver exceptional results from order to installation",
  },
  {
    icon: <IoHammerOutline className={styles.svgIcon} />,
    color: "primary",
    title: "Spain-Wide Delivery",
    description:
      "Fully assembled delivery and professional installation across mainland Spain. No DIY required, your BBQ Pod arrives ready to use, typically around 16 weeks from deposit.",
  },
  {
    icon: <IoColorPaletteOutline className={styles.svgIcon} />,
    color: "primary",
    title: "Professional Grade",
    description:
      "High-performance appliances including grills, integrated refrigeration and sealed, weather-resistant electronics. Specified for continuous outdoor use and built to professional kitchen standards.",
  },
  {
    icon: <IoCloudOutline className={styles.svgIcon} />,
    color: "primary",
    title: "Fully Customisable",
    description:
      "Select from 4 powder-coated exterior colours, 20 interior finishes and a choice of worktop options. Configure a BBQ Pod that fits seamlessly into your outdoor space.",
  },
  {
    icon: <IoCloudOutline className={styles.svgIcon} />,
    color: "primary",
    title: "Built for the Spanish Climate",
    description:
      "Designed to handle sun, heat, dust and rain, our BBQ Pods remain clean and protected when closed. Open the pod and enjoy shaded, comfortable outdoor cooking throughout the year.",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <Container>
        <TitleHeader
          whyChoose="Why choose BBQ Pods Spain?"
          title="A New Standard for Outdoor Cooking"
          subtitle="Designed for life outdoors in Spain, our BBQ Pods are permanent, fully integrated outdoor kitchens - not temporary garden structures. Built with commercial-grade materials to handle sun, heat and year-round use, every pod is supported locally and protected by comprehensive manufacturer warranties."
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
