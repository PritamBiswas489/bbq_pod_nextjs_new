import React from "react";
import style from "./index.module.scss";
import InnerBanner from "@/components/innerBanner";
import hero1 from "@/assets/front/images/hero-1.webp";
import Layout from "@/section/layout";
import OutdoorKitchens from "@/components/outdoorKitchen";
import ModelConfiguratorBanner from "@/components/modelConfiguratorBanner";
import ComparisonTable from "@/components/comparisonTable";
import Faqs from "@/components/faqs";
import FindKitchen from "@/components/findKitchen";
import TitleHeader from "@/components/titleHeader";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import YourGarden from "@/components/yourGarden";
import heroImage from "@/assets/front/images/hero-2.webp";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Head from "next/head";
import ExteriorProductPage from "@/components/exteriorProductPage";

import REF005 from "@/assets/front/images/RefImage/REF005.png";
import REF001 from "@/assets/front/images/RefImage/REF001.png";
import REF002 from "@/assets/front/images/RefImage/REF002.png";
import REF003 from "@/assets/front/images/RefImage/REF003.png";
import REF004 from "@/assets/front/images/RefImage/REF004.png";

import REF001ES from "@/assets/front/images/RefImage/ExteriorInteriroDEMOSPAIN.png";
import REF002ES from "@/assets/front/images/RefImage/CabinetcolourDEMOspanish.png";
import { pageURLS } from "@/utils/getPageUrls";
import { products } from "@/utils/exteriorInteriorFinish";
import { 
  exteriorFinishes, 
  interiorCabinetBlockColours, 
  interiorCabinetsWoodGrainTransfer, 
  countertopSinteredStoneTitle, 
  countertopStainlessSteelTitle 
} from "@/utils/exteriorInteriorFinish";

export default function Products() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;
  console.log("Current locale:", currentLocale);

  const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
  console.log("Current URL:", currentUrl);
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = pageURLS[currentLocale]?.products || `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);


   let metatitle = "BBQ Pod Models | Explore Our Outdoor Kitchens";
   let metaDescription = "Discover the full range of BBQ Pods — Core, Prime, Apex, Aero and Pinnacle. Premium outdoor kitchens built for Spanish outdoor living.";
   let ogTitle =  "BBQ Pod Models | Explore Our Outdoor Kitchens";
   let ogDescription = "Discover the full range of BBQ Pods — Core, Prime, Apex, Aero and Pinnacle. Premium outdoor kitchens built for Spanish outdoor living.";
   const ogImage = products.filter((d)=>d.nameKey === "apexProductName")[0].image;
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
        <InnerBanner
          badgeText={t("productsBadgeText")}
          title={t("productsBannerTitle")}
          subtitle={t("productsBannerSubtitle")}
          description1={t("productsBannerDescription1")}
          description2={t("productsBannerDescription2")}
          backgroundImage={hero1.src}
          links={[]}
        />
        <OutdoorKitchens />
        <YourGarden
          title={t("brochureTitle")}
          description={t("brochureDescription")}
          backgroundImage={heroImage}
          badges={[
            {
              icon: <FaArrowRight />,
              text: t("badge1"),
            },
            { icon: <FaArrowRight />, text: t("badge2") },
            {
              icon: <FaArrowRight />,
              text: t("badge3"),
            },
          ]}
          primaryButton={{
            label: t("primaryButtonLabel"),
            href: "",
          }}
          secondaryButton={{
            label: t("secondaryButtonLabel"),
            href: "",
          }}
          footerText={t("footerText")}
        />
        <ComparisonTable />
        <div id="color-options">
        <TitleHeader
          whyChoose={[]}
          title={t("customizeYourPodTitle")}
          subtitle={t("customizeYourPodSubtitle")}
        />
        <ExteriorProductPage
          title={t("exteriorPodFrameTitle")}
          subtitle={t("exteriorPodFrameSubtitle")}
          imageRef={currentLocale === "es" ? REF001ES : REF001}
          imageReftwo={null}
          items={exteriorFinishes}
        />
        <ExteriorProductPage
          title={t("interiorCabinetColoursTitle")}
          subtitle={t("interiorCabinetColoursSubtitle")}
          imageRef={currentLocale === "es" ? REF002ES : REF002}
          imageReftwo={null}
          items={interiorCabinetBlockColours}
        />
        <ExteriorProductPage
          title={t("interiorCabinetsWoodTitle")}
          subtitle={t("interiorCabinetsWoodSubtitle")}
          imageRef={null}
          imageReftwo={null}
          items={interiorCabinetsWoodGrainTransfer}
        />
        <ExteriorProductPage
          title={t("countertopStainlessSteelTitle")}
          subtitle={t("countertopStainlessSteelSubtitle")}
          imageRef={REF003}
          imageReftwo={REF004}
          gridCols={2}
          items={countertopStainlessSteelTitle}
        />
        <ExteriorProductPage
          title={t("countertopSinteredStoneTitle")}
          subtitle={t("countertopSinteredStoneSubtitle")}
          imageRef={REF005}
          imageReftwo={null}
          items={countertopSinteredStoneTitle}
        />
        </div>
        <ModelConfiguratorBanner
          title={t("StillUnsureWhichModel")}
          leftButtonWrap={false}
          rightButton={t("GetExpertAdvice")}
          showButtons={true}
          rightButtonLink={"mailto:sales@bbqpodspain.com"}
          leftButtonLink={"#"}
          rightButtonLinkTarget="_blank"
          leftButtonLinkTarget="_blank"
        />
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
