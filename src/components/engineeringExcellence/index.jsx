import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";

 
const EngineeringExcellence = ({headingOne, descriptionTwo, specifications }) => {
  return (
    <section className={styles.section}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title={headingOne}
          subtitle={descriptionTwo}
        />
        <Row>
          {specifications.map((feature, index) => (
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
