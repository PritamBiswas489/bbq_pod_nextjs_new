import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";

const QualityFeatureCard = ({ icon, title, description, footerText }) => {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className={styles.card}>
              {/* ICON */}
              <div className={styles.iconWrap}>
                <Image src={icon} alt={title} width={36} height={36} />
              </div>

              {/* CONTENT */}
              <h2 className={styles.title}>{title}</h2>

              <p className={styles.description}>{description}</p>

              {footerText && <p className={styles.footerText}>{footerText}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QualityFeatureCard;
