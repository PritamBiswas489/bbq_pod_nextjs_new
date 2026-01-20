// components/CounterSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";

const countersData = [
  {
    number: "6",
    label: "Layer Door Panels",
  },
  {
    number: "100%",
    label: "Stainless Steel",
  },
  {
    number: "16",
    label: "Weeks Delivery",
  },
  {
    number: "5",
    label: "Premium Models",
  },
];

const CounterSection = () => {
  return (
    <section className={styles.counterSection}>
      <Container>
        <Row>
          {countersData.map((counter, index) => (
            <Col key={index} xs={6} sm={3}>
              <div className={styles.counterItem}>
                <div
                  className={styles.number}
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-center"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                  data-aos-once="true"
                >
                  {counter.number}
                </div>
                <div
                  className={styles.label}
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-center"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  {counter.label}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CounterSection;
