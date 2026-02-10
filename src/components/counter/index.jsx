// components/CounterSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import { useTranslation } from 'next-i18next';

const countersData = [
  {
    numberKey: "counter1Number",
    labelKey: "counter1Label",
  },
  {
    numberKey: "counter2Number",
    labelKey: "counter2Label",
  },
  {
    numberKey: "counter3Number",
    labelKey: "counter3Label",
  },
  {
    numberKey: "counter4Number",
    labelKey: "counter4Label",
  },
];

const CounterSection = () => {
  const { t } = useTranslation('common');
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
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  {t(counter.numberKey)}
                </div>
                <div
                  className={styles.label}
                  data-aos="zoom-in"
                  data-aos-anchor-placement="bottom-center"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  {t(counter.labelKey)}
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
