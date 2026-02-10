import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFire } from "react-icons/fa";
import styles from "./index.module.scss";
import heroImage from "@/assets/front/images/coming-soon.png";
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from "../../next-i18next.config"; 
const ComingSoon = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const currentLocale = router.locale
  console.log('Current locale:', currentLocale)

  const currentUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${router.asPath}`
    console.log('Current URL:', currentUrl)
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = `/${currentLocale}${router.asPath}`;
         
        window.history.replaceState(null, '', newUrl);
      }
    }, [router, currentLocale]);

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
                <FaFire className={styles.flame} /> {t('comingSoonTitle')}{" "}
                <FaFire className={styles.flame} />
              </h1>
              <h2 className={styles.subtitle}>{t('welcome')}</h2>
              <p className={styles.description}>
                {t('comingSoonDescription')}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  const defaultLocale = nextI18NextConfig.i18n.defaultLocale;
  const localeToUse = locale || defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(localeToUse, ['common'], nextI18NextConfig)),
    },
  };
}

export default ComingSoon;
