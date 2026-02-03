import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { FiAward, FiUsers, FiCalendar, FiArrowRight } from "react-icons/fi";
import styles from "./index.module.scss";

import heroImage from "@/assets/front/images/outdoor/hero-3.webp";
import Link from "next/link";

const stats = [
  {
    icon: <FiAward />,
    value: "30+",
    label: "Years of Excellence",
  },
  {
    icon: <FiUsers />,
    value: "100+",
    label: "Happy UK Families",
  },
  {
    icon: <FiCalendar />,
    value: "1995",
    label: "Established",
  },
];

const CraftedBy = () => {
  return (
    <section className={styles.crafted}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={6} xs={12}>
            <span
              className={styles.badge}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Est. 1995
            </span>

            <h2
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Crafted by <span>Commercial Awnings</span>
            </h2>

            <h4
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              30 Years of Outdoor Innovation
            </h4>

            <p
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Since 1995, Commercial Awnings Limited has been at the forefront
              of outdoor living innovation across the UK. Our BBQ Pods represent
              three decades of engineering expertise, premium craftsmanship, and
              an unwavering commitment to quality.
            </p>

            <div className={styles.stats}>
              {stats.map((item, index) => (
                <div
                  className={styles.statBox}
                  key={index}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div
                    className={styles.icon}
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {item.icon}
                  </div>
                  <strong
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {item.value}
                  </strong>
                  <span
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={"#"}
              className={styles.cta}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Meet Our Team <FiArrowRight />
            </Link>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} xs={12}>
            <div
              className={styles.imageWrap}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Image
                src={heroImage.src}
                alt="Outdoor Kitchen"
                // fill
                className={styles.image}
                // priority
                width={636}
                height={440}
              />

              <div className={styles.tag}>
                UK <br /> nationwide <br /> installation
              </div>
            </div>
          </Col>
        </Row>

        {/* QUOTE */}
        <div
          className={styles.quote}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p>
            “Every BBQ pod we create is a testament to British engineering
            excellence and a commitment to outdoor living that lasts a
            lifetime.”
          </p>
          <span>— Commercial Awnings Limited Team</span>
        </div>
      </Container>
    </section>
  );
};

export default CraftedBy;
