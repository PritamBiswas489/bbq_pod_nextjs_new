import React from "react";
import Head from "next/head";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";
const CookiePolicy = () => {
  const { t } = useTranslation("common");
    const router = useRouter();
    const currentLocale = router.locale;
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = pageURLS[currentLocale]?.cookiePolicy || `/${currentLocale}${router.asPath}`;
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>{t("Cookie Policy")}</title>
        <meta name="description" content={t("CookiePolicy")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>{t("Cookie Policy")}</h1>
            <p className={style.lastUpdated}>Last updated: 5 March 2026</p>
          </div>

          <section className={style.section}>
            <p>This Cookie Policy explains how <strong>BBQ Pod Spain, SL</strong> uses cookies and similar technologies on the website <strong>www.bbqpodspain.com</strong>.</p>
          </section>

          <section className={style.section}>
            <h2>What Are Cookies</h2>
            <p>Cookies are small text files that are stored on your device when you visit a website. They help websites function correctly and allow website owners to understand how visitors interact with their site.</p>
            <p>Cookies may store information such as your browser type, device information, language preferences and pages visited.</p>
          </section>

          <section className={style.section}>
            <h2>Who Is Responsible for This Website</h2>
            <p>This website is operated by:</p>
            <div className={style.address}>
              <p><strong>BBQ Pod Spain, SL</strong><br />
              NIF: B24971665<br />
              CL. Alhaurín de la Sierra, 15<br />
              29120 Alhaurín el Grande<br />
              Málaga<br />
              Spain<br />
              Email: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a><br />
              Website: <a href="https://www.bbqpodspain.com" target="_blank" rel="noopener noreferrer">www.bbqpodspain.com</a></p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Types of Cookies We Use</h2>
            
            <div className={style.cookieCard}>
              <h3>Essential Cookies</h3>
              <p>These cookies are necessary for the proper functioning of the website and cannot be disabled in our systems. They allow basic functions such as page navigation and access to secure areas of the website.</p>
            </div>

            <div className={style.cookieCard}>
              <h3>Analytics Cookies</h3>
              <p>These cookies help us understand how visitors use the website. They allow us to analyse information such as the number of visitors, which pages are visited and how users navigate through the site.</p>
              <p>This information helps us improve the performance and usability of the website.</p>
            </div>

            <div className={style.cookieCard}>
              <h3>Functional Cookies</h3>
              <p>These cookies allow the website to remember user preferences such as language settings or other customisation features.</p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Third Party Cookies</h2>
            <p>Some cookies may be placed by third party services that appear on our pages, such as analytics or website performance tools.</p>
            <p>These third party providers may collect certain technical information including IP address, browser type and interaction with website content.</p>
          </section>

          <section className={style.section}>
            <h2>Managing Cookies</h2>
            <p>When you first visit our website you may be presented with a cookie banner that allows you to accept or configure the use of cookies.</p>
            <p>You can also control or delete cookies through your browser settings.</p>
            <p><strong>Most browsers allow you to:</strong></p>
            <ul className={style.list}>
              <li>View stored cookies</li>
              <li>Delete cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all cookies</li>
            </ul>
            <p><em>Please note that disabling certain cookies may affect the functionality of the website.</em></p>
          </section>

          <section className={style.section}>
            <h2>Changes to This Cookie Policy</h2>
            <p><strong>BBQ Pod Spain, SL</strong> may update this Cookie Policy from time to time in order to reflect legal changes or updates to how cookies are used on the website.</p>
            <p>Any changes will be published on this page.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CookiePolicy;
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