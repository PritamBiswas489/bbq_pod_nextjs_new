import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./index.module.scss";

/* ICONS */
import icon1 from "@/assets/front/images/difference/1.svg";
import icon2 from "@/assets/front/images/difference/2.svg";
import icon3 from "@/assets/front/images/difference/3.svg";
import icon4 from "@/assets/front/images/difference/4.svg";
import icon5 from "@/assets/front/images/difference/5.svg";
import icon6 from "@/assets/front/images/difference/6.svg";

/* DATA (LOOP MAP) */
const benefitsData = [
  {
    icon: icon1,
    title: "Commercial-Grade Quality",
    description:
      "Premium construction with manufacturer warranties. Built with the same exacting standards as our commercial awnings.",
  },
  {
    icon: icon2,
    title: "30+ Years Expertise",
    description:
      "Over three decades of engineering excellence in hand-made commercial awnings, now perfected in outdoor kitchen pods.",
  },
  {
    icon: icon3,
    title: "UK-Based Operations",
    description:
      "Every pod delivered from our Swindon facility with rigorous UK quality control. Professional installation guaranteed.",
  },
  {
    icon: icon4,
    title: "100% Assembled Delivery",
    description:
      "No DIY required. Your pod arrives fully built, inspected, and ready for immediate installation.",
  },
  {
    icon: icon5,
    title: "UK-Wide Installation",
    description:
      "Professional installation service across the entire United Kingdom. From Scotland to Cornwall.",
  },
  {
    icon: icon6,
    title: "Premium Materials",
    description:
      "Built to the same exacting standards as our commercial awnings. Premium materials throughout.",
  },
];

const BenefitsGrid = () => {
  return (
    <section className={styles.benefitsSection}>
      <Container>
        <Row>
          {benefitsData.map((item, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                </div>

                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenefitsGrid;
