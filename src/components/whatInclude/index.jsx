import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";
import { AiOutlineCar } from "react-icons/ai";

const WhatInclude = () => {
  const features = [
    "Professional gas grill system",
    "Integrated refrigeration",
    "LED lighting package",
    "All installation hardware",
    "Soft-close storage cabinets",
    "6-layer insulated door panels",
    "Powder-coated exterior finish",
    "Lifetime technical support",
  ];

  return (
    <section className={styles.section}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title="What's Included"
          subtitle="Complete specification diagram with all features labeled"
        />

        <Row className={styles.featureRow}>
          {features.map((feature, index) => (
            <Col
              key={index}
              lg={6}
              md={6}
              sm={6}
              xs={12}
              className={styles.featureCol}
            >
              <div className={styles.featureItem}>
                <div className={styles.checkBox}>
                  <FaCheck />
                </div>
                <span>{feature}</span>
              </div>
            </Col>
          ))}
        </Row>

        <div className={styles.installationCard}>
          <span>
            <AiOutlineCar />
          </span>
          <h3>Full Installation Included</h3>
          <p>
            Professional delivery and installation approx. 16 weeks from deposit
            payment. Our team handles everything - positioning, utility
            connections, and final setup. You can start cooking the same day.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhatInclude;
