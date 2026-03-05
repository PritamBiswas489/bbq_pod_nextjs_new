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
              <div className={styles.counterItem}
                  data-aos="zoom-in-up"
                  data-aos-duration="50"
                  data-aos-once="true"
                  data-aos-offset="0"
                  data-aos-delay={index * 50}
              
              >
                <div
                  className={styles.number}
                 
                >
                  {t(counter.numberKey)}
                </div>
                <div
                  className={styles.label}
                  
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
