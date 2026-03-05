import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./index.module.scss";

const OperationsSection = ({
  badgeText,
  title,
  titleHighlight,
  description,
   description2,
  image,
  features = [], // ✅ default prevents map crash
  address,
}) => {
  return (
    <section className={styles.operationsSection}>
      <Container>
        <Row className="align-items-center g-lg-5 g-3">
          {/* LEFT CONTENT */}
          <Col lg={6}>
            {badgeText && <span className={styles.badge}>{badgeText}</span>}

            <h2 className={styles.heading}>
              {title} <span>{titleHighlight}</span>
            </h2>

            {description && <p className={styles.description}>{description}</p>}
            {description2 && <p className={styles.description}>{description2}</p>}

            {/* FEATURES */}
            <ul className={styles.featureList}>
              {features.map((item, index) => (
                <li key={index} className={styles.featureItem}>
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  ) : (
                    <FaCheckCircle className={styles.icon} />
                  )}

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* ADDRESS */}
            {address && (
              <div className={styles.address}>
                <FaMapMarkerAlt />
                <div>
                  <strong>{address.title}</strong>
                  <p>{address.text}</p>
                </div>
              </div>
            )}
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className={styles.imageWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3199.9934559657186!2d-4.547184325726158!3d36.67465837476888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fabf776f41ab%3A0xd85d1f580e5b4413!2sC.%20Do%C3%B1a%20Carmen%2C%2015%2C%2029130%20Alhaur%C3%ADn%20de%20la%20Torre%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2sin!4v1772724265756!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OperationsSection;
