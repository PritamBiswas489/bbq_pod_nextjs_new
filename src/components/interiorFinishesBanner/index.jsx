// components/InteriorFinishesBanner.js

import { Container, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import styles from "./index.module.scss";

const InteriorFinishesBanner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Container className={styles.content}>
        <h2
          className={styles.title}
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          Plus 15 Interior Finishes
        </h2>
        <p
          className={styles.subtitle}
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          Choose from powder-coated colours, wood grain effects, or premium
          sintered stone interiors to create a truly bespoke outdoor kitchen.
        </p>
        <Button
          variant="light"
          className={styles.button}
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          Explore Full Configurator <FaArrowRight />
        </Button>
      </Container>
    </div>
  );
};

export default InteriorFinishesBanner;
