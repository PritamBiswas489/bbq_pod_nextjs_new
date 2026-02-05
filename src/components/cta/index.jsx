import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import styles from "./index.module.scss";
import Link from "next/link";

const Cta = () => {
  return (
    <div className={styles.wrapper}>
      <Container fluid className={styles.container}>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={10} lg={9}>
            <h2
              className={styles.title}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Need Further Information?
            </h2>
            <p
              className={styles.subtitle}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Speak with our team for personalised advice on selecting the right
              BBQ Pod for your home.
            </p>
            <div
              className={styles.buttons}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Link href={"#"} className={styles.callButton}>
                <SlEnvolope className={styles.icon} /> Email us
              </Link>
              {/* <Link href={"#"} className={styles.quoteButton}>
                Request Quote <FaArrowRight className={styles.icon} />
              </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta;
