import React from "react";
import Head from "next/head";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";
const PrivacyPolicy = () => {
  const { t } = useTranslation("common");
    const router = useRouter();
    const currentLocale = router.locale;
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = pageURLS[currentLocale]?.privacyPolicy || `/${currentLocale}${router.asPath}`;
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>{t("Privacy Policy")}</title>
        <meta name="description" content={t("Privacy Policy")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>{t("Privacy Policy")}</h1>
            <p className={style.lastUpdated}>Last updated: 5 March 2026</p>
          </div>

          <section className={style.section}>
            <p><strong>BBQ Pod Spain, SL</strong> is committed to protecting your privacy and ensuring that your personal data is handled responsibly and in accordance with the General Data Protection Regulation (GDPR) and applicable Spanish data protection laws.</p>
            <p>This Privacy Policy explains how we collect, use and protect personal data when you visit our website.</p>
          </section>

          <section className={style.section}>
            <h2>Data Controller</h2>
            <p>The data controller responsible for this website is:</p>
            <div className={style.address}>
              <p><strong>BBQ Pod Spain, SL</strong><br />
              CIF: B24971665<br />
              CL. Alhaurín de la Sierra, 15<br />
              29120 Alhaurín el Grande<br />
              Málaga<br />
              Spain<br />
              Email: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a></p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Personal Data We Collect</h2>
            <p>We may collect personal information when you interact with our website, including when you request a brochure, use our BBQ Pod configurator, or contact us.</p>
            <p><strong>The information we may collect includes:</strong></p>
            <ul className={style.list}>
              <li>Name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Language preference</li>
              <li>BBQ Pod configuration selections submitted through our website configurator</li>
              <li>Any information you voluntarily provide through forms or communications with us</li>
            </ul>
            
            <p><strong>We may also automatically collect certain technical information when you visit our website, including:</strong></p>
            <ul className={style.list}>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited and time spent on the website</li>
            </ul>
            <p>This information helps us understand how visitors use the website and helps us improve the functionality, security and performance of our services.</p>
          </section>

          <section className={style.section}>
            <h2>How We Use Your Information</h2>
            <p>We use personal data for the following purposes:</p>
            <ul className={style.list}>
              <li>To send the requested BBQ Pod Spain brochure</li>
              <li>To respond to enquiries or requests for information</li>
              <li>To review BBQ Pod configuration selections submitted through the website</li>
              <li>To contact potential customers regarding product enquiries</li>
              <li>To improve the functionality and security of our website</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>Legal Basis for Processing</h2>
            <p>Under the General Data Protection Regulation (GDPR), the lawful bases we rely on for processing personal data include:</p>
            <ul className={style.list}>
              <li>User consent when submitting forms on the website</li>
              <li>Legitimate interest in responding to enquiries and providing requested information about our products</li>
            </ul>
            <p>Users may withdraw their consent at any time by contacting us.</p>
          </section>

          <section className={style.section}>
            <h2>Data Retention</h2>
            <p>Personal data will only be retained for as long as necessary to fulfil the purposes described in this policy or to comply with legal obligations.</p>
            <p>Where personal data is submitted through enquiries or brochure requests, it may be retained for business and customer service purposes.</p>
          </section>

          <section className={style.section}>
            <h2>Data Sharing</h2>
            <p>We do not sell, rent or trade personal data.</p>
            <p>We may share information with trusted third party service providers who assist us in operating our website and services, such as:</p>
            <ul className={style.list}>
              <li>Website hosting providers</li>
              <li>Email delivery providers</li>
              <li>Website analytics providers</li>
            </ul>
            <p>These providers only process data as necessary to perform their services and are required to maintain appropriate confidentiality and security.</p>
          </section>

          <section className={style.section}>
            <h2>International Data Transfers</h2>
            <p>Some service providers used to operate this website may process data outside the European Economic Area. In such cases, appropriate safeguards are implemented to ensure that personal data remains protected in accordance with GDPR requirements.</p>
          </section>

          <section className={style.section}>
            <h2>Your Data Protection Rights</h2>
            <p>Under GDPR, users have the following rights regarding their personal data:</p>
            <ul className={style.list}>
              <li>Right to access personal data</li>
              <li>Right to request correction of inaccurate data</li>
              <li>Right to request deletion of personal data</li>
              <li>Right to restrict processing</li>
              <li>Right to object to processing</li>
              <li>Right to data portability where applicable</li>
            </ul>
            <p>Requests to exercise these rights can be sent to: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a></p>
            <p>Users also have the right to lodge a complaint with the Spanish Data Protection Authority (Agencia Española de Protección de Datos – AEPD).</p>
          </section>

          <section className={style.section}>
            <h2>Website Security</h2>
            <p>BBQ Pod Spain, SL takes appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse or alteration.</p>
            <p>However, no internet transmission can be guaranteed to be completely secure.</p>
          </section>

          <section className={style.section}>
            <h2>Third Party Links</h2>
            <p>Our website may contain links to third party websites. BBQ Pod Spain, SL is not responsible for the privacy practices or content of those external websites.</p>
          </section>

          <section className={style.section}>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in legal requirements or website functionality.</p>
            <p>Any updates will be posted on this page.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
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