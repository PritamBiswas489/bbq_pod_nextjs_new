import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import styles from "./index.module.scss";

const Cta = () => {
  return (
    <div className={styles.wrapper}>
      <Container fluid className={styles.container}>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={10} lg={9}>
            <h2
              className={styles.title}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Still Have Questions?
            </h2>
            <p
              className={styles.subtitle}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Our team at Commercial Awnings is here to help. Get in touch for
              expert advice on choosing the perfect BBQ pod for your garden.
            </p>
            <div
              className={styles.buttons}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <Button variant="danger" className={styles.callButton}>
                <FaPhoneAlt className={styles.icon} /> Call 0808 225 0045
              </Button>
              <Button variant="secondary" className={styles.quoteButton}>
                Request Quote <FaArrowRight className={styles.icon} />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta;
