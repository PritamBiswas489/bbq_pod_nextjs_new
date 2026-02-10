import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import styles from "./index.module.scss";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Cta = () => {
  const { t } = useTranslation('common');
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
              {t('ctaTitle')}
            </h2>
            <p
              className={styles.subtitle}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {t('ctaSubtitle')}
            </p>
            <div
              className={styles.buttons}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Link href={"#"} className={styles.callButton}>
                <SlEnvolope className={styles.icon} /> {t('ctaEmailButtonText')}
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
