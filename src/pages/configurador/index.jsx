"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Configurator from "@/components/Configurator/Configurator";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import Layout from "@/section/layout";
import Head from "next/head";
import { pageURLS } from "@/utils/getPageUrls";
import {products} from "@/utils/exteriorInteriorFinish"; 
 

export default function ConfiguratorPage() {
  const { t } = useTranslation('common');
   const router = useRouter();
    const currentLocale = router.locale;
    console.log("Current locale:", currentLocale);
  
    const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
    console.log("Current URL:", currentUrl);
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = pageURLS[currentLocale]?.configurator || `/${currentLocale}${router.asPath}`;
  
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);

       let metatitle = "Configurador BBQ Pod | Diseña tu Cocina Exterior";
    let metaDescription = "Diseña tu BBQ Pod perfecta con nuestro configurador. Elige modelo, acabados y configuración.";
    let ogTitle =  "Configurador BBQ Pod | Diseña tu Cocina Exterior";
    let ogDescription = "Diseña tu BBQ Pod perfecta con nuestro configurador. Elige modelo, acabados y configuración.";
    const ogImage = products.filter((d)=>d.nameKey === "pinnacleProductName")[0].image;
  return (
    <>
    <Head>
        <title>{metatitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main style={{ minHeight: "100vh" }}>
          {/* PAGE HERO */}
          <section
            style={{
              background: "#141414",
              color: "#fff",
              padding: "80px 0",
              textAlign: "center",
            }}
          >
            <Container>
              <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
                {t('design_your_bbq_pod')}
              </h1>
              <p style={{ color: "#ccc", maxWidth: "680px", margin: "0 auto" }}>
                {t('follow_the_steps')}
              </p>
              <p style={{ color: "#ccc", maxWidth: "680px", margin: "0 auto" }}>
                {t('no_payment_required')}
              </p>
            </Container>
          </section>

          {/* CONFIGURATOR */}
          <section style={{ padding: "80px 0" }}>
            <Container>
              <Row>
                <Col>
                  <Configurator />
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const defaultLocale = nextI18NextConfig.i18n.defaultLocale;
  const localeToUse = locale || defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(
        localeToUse,
        ["common"],
        nextI18NextConfig,
      )),
    },
  };
}
