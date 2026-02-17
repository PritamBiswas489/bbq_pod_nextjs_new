import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";

const timelineData = [
  {
    year: "2005",
    title: "Company Founded",
    description:
      "Commercial Awnings Ltd established in Swindon, specialising in bespoke hand-made commercial awnings.",
  },
  {
    year: "2010s",
    title: "Industry Leader",
    description:
      "Became the UK's trusted name for hand-fitted commercial awnings, serving businesses and homes nationwide.",
  },
  {
    year: "2015",
    title: "Innovation & Expansion",
    description:
      "Invested in advanced manufacturing and R&D, perfecting our hand-making and fitting processes.",
  },
  {
    year: "2020s",
    title: "BBQ Pods Launch",
    description:
      "Leveraging over 30 years of expertise to create the UK's finest outdoor kitchen pods.",
  },
];

const CompanyTimeline = () => {
  return (
    <section className={styles.timelineSection}>
      <Container>
        <Row className="justify-content-center">
          {timelineData.map((item, index) => (
            <Col
              key={index}
              xl={3}
              lg={3}
              md={6}
              sm={12}
              className={styles.timelineCol}
            >
              <div className={styles.timelineCard}>
                <div className={styles.yearCircle}>{item.year}</div>
                <h5 className={styles.title}>{item.title}</h5>
                <p className={styles.description}>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CompanyTimeline;
