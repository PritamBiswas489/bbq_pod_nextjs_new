import React from "react";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
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
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";

const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLocale = router.locale;
  const pageUrls = pageURLS[currentLocale];
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
                < Link href={pageUrls.core}>{t('footerProductCore')}</Link>
              </li>
              <li>
                <Link href={pageUrls.prime}>{t('footerProductPrime')}</Link>
              </li>
              <li>
                <Link href={pageUrls.apex}>{t('footerProductApex')}</Link>
              </li>
              <li>
                <Link href={pageUrls.pinnacle}>{t('footerProductPinnacle')}</Link>
              </li>
              <li>
                <Link href={pageUrls.aero}>{t('footerProductAero')}</Link>
              </li>
            </ul>
          </Col>
          <Col md={2} xs={6} className={styles.menuSection}>
            <h5>{t('footerCompanyHeading')}</h5>
            <ul>
              <li>
                <Link href={pageUrls.about}>{t('footerCompanyAbout')}</Link>
              </li>
              <li>
                <Link href={pageUrls.products}>{t('footerCompanyProducts')}</Link>
              </li>
               <li>
                <Link href={pageUrls.configurator}>{t('headerNavConfigurator')}</Link>
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
                <Link   href={pageUrls.privacyPolicy}>{t('footerPrivacyPolicy')}</Link>
              </li>

               <li>
                <Link href={pageUrls.cookiePolicy}>{t('footerCookiePolicy')}</Link>
              </li>

               <li>
                <Link href={pageUrls.legalNotice}>{t('footerLegalNotice')}</Link>
              </li>
              
              <li>
                <Link href={pageUrls.warranty}>{t('footerWarrantyInfo')}</Link>
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
