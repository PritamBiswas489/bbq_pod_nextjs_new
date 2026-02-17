import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
// import heroImage from "@/assets/front/images/outdoor/hero-3.webp";
import Image from "next/image";

import heritageImg from "@/assets/front/images/hero-2.jpg";

const contentData = [
  {
    title: "The Commercial Awnings Heritage",
    description:
      "For over 30 years, we've been hand-making and fitting bespoke commercial awnings for homes and businesses across the UK. Our reputation was built on uncompromising quality, innovative engineering, exceptional customer service, and our 5-year guarantee on every awning.",
  },
  {
    title: "Evolution to BBQ Pods",
    description:
      "Recognising the growing demand for premium outdoor living spaces, we applied our 30+ years of expertise to source and deliver something extraordinary: fully-equipped outdoor kitchen pods that combine luxury, functionality, and exceptional quality standards, all backed by our UK-based service excellence.",
  },
  {
    title: "The BBQ Pods UK Promise",
    description:
      "Every pod is delivered from our Swindon facility to the same exacting quality standards that made us industry leaders in commercial awnings. We don't cut corners. We don't compromise. We deliver outdoor kitchen pods that will serve your family for generations.",
  },
];

const HeritageSection = () => {
  return (
    <section className={styles.heritageSection}>
      <Container>
        <Row className="align-items-center g-lg-5 g-4">
          {/* Left Image */}
          <Col lg={6} className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={heritageImg.src}
                alt="BBQ Pod Heritage"
                className={styles.image}
                width={1365}
                height={768}
                priority
              />
            </div>
          </Col>

          {/* Right Content */}
          <Col lg={6}>
            {contentData.map((item, index) => (
              <div key={index} className={styles.contentBlock}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeritageSection;
