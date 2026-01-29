import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";

const defaultFeatures = [
  "Professional 30' gas grill with three burners",
  'Integrated 21" fridge for chilled drinks',
  "LED ambient lighting system",
  "Dual storage cabinets",
  "Stainless steel countertops",
  "Commercial-grade construction",
  "Fully assembled delivery & installation",
  "Choice of 10 exterior colours",
];

const EngineeringExcellence = ({ features = defaultFeatures }) => {
  return (
    <section className={styles.section}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title="Engineering Excellence"
          subtitle="Built to commercial standards with premium materials and precision craftsmanship"
        />
        <Row>
          {features.map((feature, index) => (
            <Col
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={index}
              className="mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className={styles.featureItem}>
                <BsCheckCircleFill className={styles.icon} />
                <span className={styles.text}>{feature}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EngineeringExcellence;
