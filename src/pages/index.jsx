// export default function Home() {
//   return (
//     <>
//       <div>gdfgdf</div>
//     </>
//   );
// }

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFire } from "react-icons/fa";
import styles from "./index.module.scss";
import heroImage from "@/assets/front/images/coming-soon.png";

const ComingSoon = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.overlay}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className={styles.title}>
                <FaFire className={styles.flame} /> BBQ POD SPAIN{" "}
                <FaFire className={styles.flame} />
              </h1>
              <h2 className={styles.subtitle}>Coming Soon</h2>
              <p className={styles.description}>
                We're working hard to bring you something amazing. Stay tuned!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ComingSoon;
