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
              <Image
                src={image}
                alt={title}
                width={600}
                height={500}
                priority
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OperationsSection;
