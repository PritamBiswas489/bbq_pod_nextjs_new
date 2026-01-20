import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight, FaStar } from "react-icons/fa";
import styles from "./index.module.scss";
import heroImage from "@/assets/front/images/hero-2.webp";
import Link from "next/link";

const YourGarden = () => {
  return (
    <div
      className={styles.quoteBanner}
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={12}>
            <div className={styles.quoteBannerInner}>
              <h2
                data-aos="flip-left"
                data-aos-duration="5000"
                data-aos-once="true"
              >
                Ready to Transform Your Garden?
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                Get a personalised quote in under 2 minutes — no obligation from
                our expert team.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <span
                  className={styles.processQuote}
                  data-aos="zoom-in-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <FaArrowRight style={{ fontSize: "1rem" }} /> 2-Minute Quote
                  Process
                </span>
                <span
                  className={styles.processQuote}
                  data-aos="zoom-in-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <FaStar style={{ fontSize: "1rem" }} /> No Obligation Quote
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  marginBottom: "3rem",
                }}
              >
                <Link
                  href={"#"}
                  className={styles.personalisedQuoteBtn}
                  data-aos="zoom-in-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  Get My Personalised Quote <FaArrowRight />
                </Link>
                <Link
                  href={"#"}
                  className={styles.configuratorBtn}
                  data-aos="zoom-in-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  Try the Configurator <FaStar />
                </Link>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  opacity: 0.9,
                  marginBottom: 0,
                }}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                Join 100+ satisfied UK families who transformed their gardens
                with BBQ Pods
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YourGarden;
