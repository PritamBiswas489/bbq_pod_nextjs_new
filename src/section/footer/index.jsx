import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFire,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import logo from "@/assets/front/images/logo.png";
import styles from "./index.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.statsWrapper}>
          <Row className={styles.statsSection}>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>Built for Spain</span>
                <span className={styles.statLabel}>Mediterranean design</span>
              </div>
            </Col>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>Up to 16 Weeks</span>
                <span className={styles.statLabel}>Order to install</span>
              </div>
            </Col>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>Spain-Wide</span>
                <span className={styles.statLabel}>Delivery & install</span>
              </div>
            </Col>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>Fully Assembled</span>
                <span className={styles.statLabel}>Ready to use</span>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="align-items-start justify-content-between">
          <Col md={3} className={styles.logoSection}>
            <div className={styles.logo}>
              <Image src={logo} alt="logo" width={893} height={137} priority />
            </div>
            {/* <p className={styles.description}>
              Permanent, fully integrated outdoor kitchens designed for life
              outdoors in Spain. Built with commercial-grade materials and
              tailored to how you cook, host and live.
            </p> */}
          </Col>
          <Col md={2} xs={6} className={styles.menuSection}>
            <h5>Our Products</h5>
            <ul>
              <li>
                <a href="#">Core</a>
              </li>
              <li>
                <a href="#">Prime</a>
              </li>
              <li>
                <a href="#">Apex</a>
              </li>
              <li>
                <a href="#">Pinnacle</a>
              </li>
              <li>
                <a href="#">Aero</a>
              </li>
            </ul>
          </Col>
          <Col md={2} xs={6} className={styles.menuSection}>
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Brochure</a>
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
                <FaMapMarkerAlt /> Alhaurín de la Torre, Málaga
              </li>
              <li>
                <FaEnvelope /> sales@bbqpodspain.com
              </li>
              <li>
                <FaPhoneAlt /> +34 672 021 437
              </li>
              <li>
                <FaClock /> Mon - Sat: 9:00–17:00
                <br />
                Visits by appointment only
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
            <p>&copy; 2026 BBQ Pod Spain SL. All rights reserved.</p>
            <p>B24971665</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
