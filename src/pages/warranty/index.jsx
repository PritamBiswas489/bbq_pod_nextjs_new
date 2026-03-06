import React from "react";
import Head from "next/head";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";

const Warranty = () => {
  const { t } = useTranslation("common");
    const router = useRouter();
    const currentLocale = router.locale;
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = pageURLS[currentLocale]?.warranty || `/${currentLocale}${router.asPath}`;
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);

  return (
    <>
      <Head>
        <title>{t("Warranty")}</title>
        <meta name="description" content={t("Warranty")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>{t("Warranty")}</h1>
            <p className={style.lastUpdated}>Last updated: 5 March 2026</p>
          </div>

          <section className={style.section}>
            <p>
              At BBQ Pod Spain we design and build outdoor kitchen pods intended to provide many years
              of cooking, entertaining and outdoor enjoyment.
            </p>
            <p>
              Our products are constructed using durable materials and carefully selected components designed
              for outdoor environments. To support this, we provide warranty coverage on the structural
              elements, exterior finishes and integrated appliances of our BBQ Pods.
            </p>
            <p>
              This page provides an overview of our warranty coverage. Full warranty documentation is provided
              to customers at the time of purchase.
            </p>
          </section>

          <section className={style.section}>
            <h2>Warranty Coverage Overview</h2>

            <div className={style.warrantyCard}>
              <h3>10 Year Structural Warranty</h3>
              <p>
                The main structural frame of the BBQ Pod is covered by a 10 year limited structural warranty.
                This warranty covers defects in materials or workmanship affecting the structural integrity of
                the pod when used under normal residential conditions.
              </p>
              <p><strong>Covered components include:</strong></p>
              <ul className={style.list}>
                <li>Stainless steel structural frame</li>
                <li>Primary cabinet structure</li>
                <li>Structural housing of the BBQ Pod</li>
              </ul>
              <p>
                If a structural defect occurs within the warranty period, BBQ Pod Spain may repair or replace
                the affected component at its discretion.
              </p>
              <p>
                The structural warranty does not cover damage caused by misuse, accidents, improper installation,
                unauthorised modifications or external impact.
              </p>
            </div>

            <div className={style.warrantyCard}>
              <h3>5 Year Exterior Finish Warranty</h3>
              <p>
                The exterior painted and coated surfaces of the BBQ Pod are covered by a 5 year limited warranty
                against manufacturing defects in the applied finish.
              </p>
              <p>
                This warranty covers issues such as peeling or failure of the original factory coating due to
                manufacturing defects.
              </p>
              <p><strong>The warranty does not cover:</strong></p>
              <ul className={style.list}>
                <li>Normal weathering or environmental exposure</li>
                <li>Minor fading or cosmetic changes over time</li>
                <li>Scratches, abrasions or damage caused during use</li>
                <li>Damage caused by improper cleaning products or maintenance</li>
              </ul>
              <p>
                Outdoor products naturally experience cosmetic changes over time due to exposure to sunlight,
                temperature changes and environmental conditions.
              </p>
            </div>

            <div className={style.warrantyCard}>
              <h3>2 Year Appliance Warranty</h3>
              <p>
                Integrated appliances supplied with the BBQ Pod are covered by a 2 year warranty from the date
                of delivery.
              </p>
              <p><strong>This may include appliances such as:</strong></p>
              <ul className={style.list}>
                <li>BBQ grills</li>
                <li>Refrigerators</li>
                <li>Electrical components</li>
                <li>Lighting systems</li>
                <li>Other integrated cooking or refrigeration equipment</li>
              </ul>
              <p>
                Where applicable, appliances may also carry their own manufacturer warranties. Documentation for
                these appliances will be provided with the product.
              </p>
              <p>
                Warranty claims relating to appliances may be handled directly through the appliance manufacturer
                where appropriate.
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Site Preparation</h2>
            <p>
              Customers are responsible for ensuring that the installation location is properly prepared prior
              to delivery.
            </p>
            <p>
              The installation area must provide a stable, level surface capable of supporting the weight of the
              BBQ Pod.
            </p>
            <p>
              Suitable surfaces may include reinforced concrete, structural patios or other appropriate bases.
            </p>
            <p>
              Damage or operational issues resulting from uneven ground, unstable surfaces or insufficient support
              are not covered under warranty.
            </p>
          </section>

          <section className={style.section}>
            <h2>Site Access and Delivery</h2>
            <p>
              BBQ Pods are large outdoor structures and may require specialist delivery equipment depending on the
              site location.
            </p>
            <p>
              Customers are responsible for ensuring that the delivery location provides suitable access for delivery
              vehicles and any necessary lifting equipment.
            </p>
            <p>
              If delivery cannot be completed due to restricted access, unsuitable terrain or other site conditions,
              additional delivery or lifting costs may apply.
            </p>
            <p>
              BBQ Pod Spain cannot be held responsible for delays or additional costs resulting from unsuitable site access.
            </p>
          </section>

          <section className={style.section}>
            <h2>Installation and Utility Connections</h2>
            <p>
              Certain BBQ Pod models may require electrical, gas or water connections depending on the configuration selected.
            </p>
            <p>
              Customers are responsible for ensuring that any required utility connections are installed by qualified
              professionals and comply with local regulations.
            </p>
            <p>
              BBQ Pod Spain is not responsible for faults, damage or performance issues resulting from incorrect installation,
              connection or modification after delivery.
            </p>
          </section>

          <section className={style.section}>
            <h2>Outdoor Environment</h2>
            <p>
              BBQ Pods are designed for outdoor use and will naturally be exposed to weather conditions including sunlight,
              rain, temperature variations and environmental factors.
            </p>
            <p>
              Over time, outdoor exposure may result in natural cosmetic changes such as minor fading, weathering or surface
              marks. These changes are considered normal and are not considered manufacturing defects.
            </p>
          </section>

          <section className={style.section}>
            <h2>Warranty Exclusions</h2>
            <p><strong>The warranty does not cover:</strong></p>
            <ul className={style.list}>
              <li>Damage caused by misuse or neglect</li>
              <li>Unauthorised modifications or alterations</li>
              <li>Normal wear and tear</li>
              <li>Cosmetic changes resulting from environmental exposure</li>
              <li>Damage caused by accidents, fire, flooding or extreme weather events</li>
              <li>Damage caused during customer arranged transport or installation</li>
              <li>Damage resulting from incorrect electrical, gas or water connections</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>Making a Warranty Claim</h2>
            <p>If you believe there is a warranty issue, please contact us with details of the problem.</p>
            <p><strong>Please include:</strong></p>
            <ul className={style.list}>
              <li>Your name and order information</li>
              <li>A description of the issue</li>
              <li>Photographs of the affected area where possible</li>
            </ul>
            <div className={style.address}>
              <p>
                Email: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a>
              </p>
            </div>
            <p>Our team will review the information and advise on the appropriate next steps.</p>
          </section>

          <section className={style.section}>
            <h2>Warranty Limitations</h2>
            <p>
              BBQ Pod Spain reserves the right to repair, replace or supply replacement components where a valid
              warranty claim is confirmed.
            </p>
            <p>Warranty coverage applies to the original purchaser unless otherwise agreed in writing.</p>
            <p>
              BBQ Pod Spain shall not be liable for indirect or consequential losses arising from the use of the product.
            </p>
          </section>

          <section className={style.section}>
            <h2>Full Terms</h2>
            <p>
              Full warranty terms and order conditions are provided to customers at the time of purchase.
            </p>
            <p>
              Payment of a deposit for a BBQ Pod confirms acceptance of the applicable order terms and warranty conditions.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Warranty;

export async function getStaticProps({ locale }) {
  const defaultLocale = nextI18NextConfig.i18n.defaultLocale;
  const localeToUse = locale || defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(localeToUse, ["common"], nextI18NextConfig)),
    },
  };
}