import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import styles from "./index.module.scss";
import Link from "next/link";

const FindKitchen = () => {
  return (
    <section className={styles.findKitchen}>
      <Container>
        <Card className={styles.card}>
          <h3>Find Your Perfect Outdoor Kitchen</h3>

          <h5 className="mb-3">Explore Individual Models:</h5>

          <ul
            className={`list-unstyled d-flex flex-wrap mb-4 ${styles.list} ${styles.listPill}`}
          >
            <li className="me-2 mb-2">
              <Button
                variant="outline-light"
                className="rounded-pill px-3 py-1"
                as="a"
                href="#"
              >
                A-Mini <FaChevronRight className={styles.icon} />
              </Button>
            </li>
            <li className="me-2 mb-2">
              <Button
                variant="outline-light"
                className="rounded-pill px-3 py-1"
                as="a"
                href="#"
              >
                A-Plus <FaChevronRight className={styles.icon} />
              </Button>
            </li>
            <li className="me-2 mb-2">
              <Button
                variant="outline-light"
                className="rounded-pill px-3 py-1"
                as="a"
                href="#"
              >
                A-Max <FaChevronRight className={styles.icon} />
              </Button>
            </li>
            <li className="me-2 mb-2">
              <Button
                variant="outline-light"
                className="rounded-pill px-3 py-1"
                as="a"
                href="#"
              >
                A-Ultra <FaChevronRight className={styles.icon} />
              </Button>
            </li>
            <li className="me-2 mb-2">
              <Button
                variant="outline-light"
                className="rounded-pill px-3 py-1"
                as="a"
                href="#"
              >
                A-Pro <FaChevronRight className={styles.icon} />
              </Button>
            </li>
          </ul>

          <h5 className="mb-3">Helpful Resources:</h5>
          <ul
            className={`d-flex flex-wrap align-items-center ${styles.listLink}`}
          >
            <li>
              <Link href={"#"} className={styles.link}>
                Installation Process Guide{" "}
                <FaChevronRight className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.link}>
                Get Personalized Quote{" "}
                <FaChevronRight className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.link}>
                Planning Permission Info{" "}
                <FaChevronRight className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.link}>
                Interactive Configurator{" "}
                <FaChevronRight className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.link}>
                Customer Gallery <FaChevronRight className={styles.icon} />
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.link}>
                About Us <FaChevronRight className={styles.icon} />
              </Link>
            </li>
          </ul>

          <div className={styles.footer}>
            <p>Still unsure which model is right for you?</p>
            <Link href={"#"} className={styles.footerButton}>
              Get Expert Advice <FaChevronRight className={styles.buttonIcon} />
            </Link>
          </div>
        </Card>
        <div style={{ height: "50px" }}></div>
      </Container>
    </section>
  );
};

export default FindKitchen;
