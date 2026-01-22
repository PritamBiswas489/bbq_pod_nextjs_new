// components/InteriorFinishesBanner.js

import { Container, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import styles from "./index.module.scss";
import Link from "next/link";

const InteriorFinishesBanner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Container className={styles.content}>
        <h2
          className={styles.title}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Plus 15 Interior Finishes
        </h2>
        <p
          className={styles.subtitle}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Choose from powder-coated colours, wood grain effects, or premium
          sintered stone interiors to create a truly bespoke outdoor kitchen.
        </p>
        <Link
          href="#"
          className={styles.button}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Explore Full Configurator <FaArrowRight />
        </Link>
      </Container>
    </div>
  );
};

export default InteriorFinishesBanner;
