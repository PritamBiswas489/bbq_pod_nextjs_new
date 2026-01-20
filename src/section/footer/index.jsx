import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFire,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import logo from "@/assets/front/images/logo-w.png";
import styles from "./index.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.statsWrapper}>
          <Row className={styles.statsSection}>
            <Col className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>A+</span>
                <span className={styles.statLabel}>Premium Quality</span>
              </div>
            </Col>
            <Col className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>30+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
            </Col>
            <Col className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>UK</span>
                <span className={styles.statLabel}>Wide Delivery</span>
              </div>
            </Col>
            <Col className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Fully Assembled</span>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="align-items-start justify-content-between">
          <Col md={3} className={styles.logoSection}>
            <div className={styles.logo}>
              <Image src={logo} alt="logo" width={241} height={63} priority />
            </div>
            <p className={styles.description}>
              Transform your garden with luxury BBQ pods built with
              commercial-grade materials. Designed and installed by Commercial
              Awnings Ltd with over 30 years of experience.
            </p>
          </Col>
          <Col md={2} className={styles.menuSection}>
            <h5>Our Products</h5>
            <ul>
              <li>
                <a href="#">A-Mini</a>
              </li>
              <li>
                <a href="#">A-Plus</a>
              </li>
              <li>
                <a href="#">A-Max</a>
              </li>
              <li>
                <a href="#">A-Ultra</a>
              </li>
              <li>
                <a href="#">A-Pro</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className={styles.menuSection}>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Configurator</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className={styles.contactSection}>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <FaPhoneAlt /> 0808 225 0045
              </li>
              <li>
                <FaEnvelope /> info@commercialawning.co.uk
              </li>
              <li>
                <FaMapMarkerAlt /> Unit 2266 Dunbeath Road, Swindon, Wiltshire
                SN2 8EA
              </li>
              <li>
                <FaClock /> Mon-Fri: 9am - 5pm
                <br />
                Sat: By appointment
                <br />
                Sun: Closed
              </li>
            </ul>
          </Col>
        </Row>

        <Row className={styles.bottomSection}>
          <Col className="text-center">
            <ul className={styles.bottomLinks}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Warranty Information</a>
              </li>
            </ul>
            <p>&copy; 2026 Commercial Awnings Limited. All rights reserved.</p>
            <p>
              BBQ Pods is a trading name of Commercial Awnings Limited, a
              company registered in England and Wales.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
