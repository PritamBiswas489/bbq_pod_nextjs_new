// components/FeaturesSection.jsx
import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";

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
    title: "Premium Construction",
    description:
      "Designed for long-term outdoor use, with 6-layer insulated door panels and stainless-steel construction. Commercial-grade materials deliver strength, durability and reliable performance for decades.",
  },
  {
    image: icon2,
    color: "primary",
    title: "Specialist Outdoor Kitchens",
    description:
      "BBQ Pod Spain focuses exclusively on premium outdoor kitchens, combining carefully selected manufacturing partners with hands-on project management to deliver exceptional results from order to installation",
  },
  {
    image: icon3,
    color: "primary",
    title: "Spain-Wide Delivery",
    description:
      "Fully assembled delivery and professional installation across mainland Spain. No DIY required, your BBQ Pod arrives ready to use, typically around 16 weeks from deposit.",
  },
  {
    image: icon4,
    color: "primary",
    title: "Professional Grade",
    description:
      "High-performance appliances including grills, integrated refrigeration and sealed, weather-resistant electronics. Specified for continuous outdoor use and built to professional kitchen standards.",
  },
  {
    image: icon5,
    color: "primary",
    title: "Fully Customisable",
    description:
      "Select from 4 powder-coated exterior colours, 20 interior finishes and a choice of worktop options. Configure a BBQ Pod that fits seamlessly into your outdoor space.",
  },
  {
    image: icon6,
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
          whyChoose={[]}
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
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={60}
                    height={60}
                  />
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
