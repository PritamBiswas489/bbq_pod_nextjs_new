import React from "react";
import Head from "next/head";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";

const LegalNotice = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
    const currentLocale = router.locale;
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = pageURLS[currentLocale]?.legalNotice || `/${currentLocale}${router.asPath}`;
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>{t("LEGAL NOTICE")}</title>
        <meta name="description" content={t("LEGAL NOTICE")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>{t("LEGAL NOTICE")}</h1>
            <p className={style.lastUpdated}>Last updated: 5 March 2026</p>
          </div>

          <section className={style.section}>
            <h2>Website Information</h2>
            <p>In accordance with the information requirements set out in Law 34/2002 of Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:</p>
            
            <div className={style.infoGrid}>
              <div className={style.infoItem}>
                <h3>Website Owner</h3>
                <p>BBQ Pod Spain, SL</p>
              </div>
              
              <div className={style.infoItem}>
                <h3>Company Number (NIF)</h3>
                <p>B24971665</p>
              </div>
              
              <div className={style.infoItem}>
                <h3>Contact Email</h3>
                <p><a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a></p>
              </div>
              
              <div className={style.infoItem}>
                <h3>Website</h3>
                <p><a href="https://www.bbqpodspain.com" target="_blank" rel="noopener noreferrer">www.bbqpodspain.com</a></p>
              </div>
            </div>

            <div className={style.address}>
              <h3>Registered Address</h3>
              <p>CL. Alhaurín de la Sierra, 15<br />29120 Alhaurín el Grande<br />Málaga<br />Spain</p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Website Use</h2>
            <p>Accessing and using this website grants the status of user and implies full acceptance of the terms and conditions set out in this Legal Notice.</p>
            <p>Users agree to make appropriate use of the content and services offered on this website and not to use them for illegal activities or activities contrary to applicable law.</p>
          </section>

          <section className={style.section}>
            <h2>Intellectual Property</h2>
            <p>All content on this website, including but not limited to text, images, graphics, logos, designs and software, is the property of BBQ Pod Spain, SL or used with appropriate authorisation.</p>
            <p>Reproduction, distribution or modification of any content without prior written permission from BBQ Pod Spain, SL is strictly prohibited.</p>
          </section>

          <section className={style.section}>
            <h2>Limitation of Liability</h2>
            <p>BBQ Pod Spain, SL is not responsible for any damages or losses resulting from the use of the information contained on this website.</p>
            <p>The company does not guarantee the absence of viruses or other harmful elements that may cause damage to users' computer systems.</p>
          </section>

          <section className={style.section}>
            <h2>External Links</h2>
            <p>This website may contain links to third party websites. BBQ Pod Spain, SL is not responsible for the content or privacy practices of those websites.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default LegalNotice;
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