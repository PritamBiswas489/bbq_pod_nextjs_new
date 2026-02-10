import React from "react";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation('common');
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.statsWrapper}>
          <Row className={styles.statsSection}>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>{t('footerStat1Value')}</span>
                <span className={styles.statLabel}>{t('footerStat1Label')}</span>
              </div>
            </Col>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>{t('footerStat2Value')}</span>
                <span className={styles.statLabel}>{t('footerStat2Label')}</span>
              </div>
            </Col>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>{t('footerStat3Value')}</span>
                <span className={styles.statLabel}>{t('footerStat3Label')}</span>
              </div>
            </Col>
            <Col lg md sm={6} xs={6} className="text-center">
              <div className={styles.stat}>
                <span className={styles.statValue}>{t('footerStat4Value')}</span>
                <span className={styles.statLabel}>{t('footerStat4Label')}</span>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="align-items-start justify-content-between">
          <Col md={3} className={styles.logoSection}>
            <div className={styles.logo}>
              <Image src={logo} alt={t('footerLogoAlt')} width={893} height={137} priority />
            </div>
            {/* <p className={styles.description}>
              Permanent, fully integrated outdoor kitchens designed for life
              outdoors in Spain. Built with commercial-grade materials and
              tailored to how you cook, host and live.
            </p> */}
          </Col>
          <Col md={2} xs={6} className={styles.menuSection}>
            <h5>{t('footerProductsHeading')}</h5>
            <ul>
              <li>
                <a href="#">{t('footerProductCore')}</a>
              </li>
              <li>
                <a href="#">{t('footerProductPrime')}</a>
              </li>
              <li>
                <a href="#">{t('footerProductApex')}</a>
              </li>
              <li>
                <a href="#">{t('footerProductPinnacle')}</a>
              </li>
              <li>
                <a href="#">{t('footerProductAero')}</a>
              </li>
            </ul>
          </Col>
          <Col md={2} xs={6} className={styles.menuSection}>
            <h5>{t('footerCompanyHeading')}</h5>
            <ul>
              <li>
                <a href="#">{t('footerCompanyAbout')}</a>
              </li>
              <li>
                <a href="#">{t('footerCompanyProducts')}</a>
              </li>
              <li>
                <a href="#">{t('footerCompanyBrochure')}</a>
              </li>
              <li>
                <a href="#">{t('footerCompanyContact')}</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className={styles.contactSection}>
            <h5>{t('footerContactHeading')}</h5>
            <ul>
              <li>
                <FaMapMarkerAlt /> {t('footerContactLocation')}
              </li>
              <li>
                <FaEnvelope /> {t('footerContactEmail')}
              </li>
              <li>
                <FaPhoneAlt /> {t('footerContactPhone')}
              </li>
              <li>
                <FaClock /> {t('footerContactHours')}
                <br />
                {t('footerContactAppointment')}
              </li>
            </ul>
          </Col>
        </Row>

        <Row className={styles.bottomSection}>
          <Col className="text-center">
            <ul className={styles.bottomLinks}>
              <li>
                <a href="#">{t('footerPrivacyPolicy')}</a>
              </li>
              <li>
                <a href="#">{t('footerTermsConditions')}</a>
              </li>
              <li>
                <a href="#">{t('footerWarrantyInfo')}</a>
              </li>
            </ul>
            <p>{t('footerCopyright')}</p>
            <p>{t('footerCompanyId')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
