import React from "react";
import Head from "next/head";
import style from "../about/index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import InnerBanner from "@/components/innerBanner";
import hero1 from "@/assets/front/images/hero-1.webp";
import CompanyTimeline from "@/components/companyTimeline";
import TitleHeader from "@/components/titleHeader";
import HeritageSection from "@/components/heritageSection";
import BenefitsGrid from "@/components/benefitsGrid";
import OperationsSection from "@/components/operationsSection";
import podImage from "@/assets/front/images/ops.jpg";
import QualityFeatureCard from "@/components/qualityFeatureCard";
import shieldIcon from "@/assets/front/images/difference/1.svg";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";
 

const About = () => {
  const { t } = useTranslation("common");
   const router = useRouter();
    const currentLocale = router.locale;
    console.log("Current locale:", currentLocale);
     const pageUrls = pageURLS[currentLocale];
  
    const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
    console.log("Current URL:", currentUrl);
    React.useEffect(() => {
      if (!router.query.locale && currentLocale) {
        const newUrl = pageURLS[currentLocale]?.about || `/${currentLocale}${router.asPath}`;
  
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>{t("aboutusHeroTitle")}</title>
        <meta name="description" content={t("aboutusHeroDescription1")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <InnerBanner
          
          title={t('aboutusHeroTitle')}
          subtitle={t('aboutusHeroSubtitle')}
          description1={t('aboutusHeroDescription1')}
          description2={[]}
          links={[
            {
              label: t('aboutusRequestQuoteLink'),
              href:pageUrls.configurator,
              className: "primaryLink",
            },
            {
              label: t('aboutusExplorePodsLink'),
              href: pageUrls.products,
              className: "secondaryLink",
            },
          ]}
          backgroundImage={hero1.src}
        />
        <div className={style.companyTimeline}>
          <TitleHeader
            whyChoose={[]}
            title={t('aboutusTimelineTitle')}
            subtitle={t('aboutusTimelineSubtitle')}
            subtitle2={t('aboutusTimelineSubtitle2')}
          />
          <CompanyTimeline />
        </div>
        <HeritageSection />
        <div className={style.benefitsSection}>
          <TitleHeader
            whyChoose={t('aboutusWhyChooseLabel')}
            title={t('aboutusBenefitsTitle')}
            subtitle={t('aboutusBenefitsSubtitle')}
          />
          <BenefitsGrid />
        </div>

        <OperationsSection
          badgeText=""
          title={t('aboutusOperationsTitle')}
          titleHighlight={t('aboutusOperationsTitleHighlight')}
          description={t('aboutusOperationsDescription')}
          description2={t('aboutusOperationsDescription2')}
          image={podImage}
          features={[
            {
              title: t('aboutusFeature1Title'),
              text: t('aboutusFeature1Text'),
            },
            {
              title: t('aboutusFeature2Title'),
              text: t('aboutusFeature2Text'),
            },
            {
              title: t('aboutusFeature3Title'),
              text: t('aboutusFeature3Text'),
            },
          ]}
          address={{
            title: t('aboutusAddressTitle'),
            text: t('aboutusAddressText'),
          }}
        />

         
      </Layout>
    </>
  );
};

export default About;

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
