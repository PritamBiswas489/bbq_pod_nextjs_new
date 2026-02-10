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

export default function Products() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;
  console.log("Current locale:", currentLocale);

  const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
  console.log("Current URL:", currentUrl);
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>{t("productsPageTitle")}</title>
        <meta name="description" content={t("productsPageDescription")} />
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
        <TitleHeader
          whyChoose={[]}
          title={t("customizeYourPodTitle")}
          subtitle={t("customizeYourPodSubtitle")}
        />
        <ExteriorProductPage
          title={t("exteriorPodFrameTitle")}
          subtitle={t("exteriorPodFrameSubtitle")}
          imageRef={REF001}
          imageReftwo={null}
          items={[
            {
              colorName: "ATHENS WHITE",
              modelName: "SP00321",
              image: null,
            },
            {
              colorName: "MEDIUM GRAY",
              modelName: "SP00071",
              image: null,
            },
            {
              colorName: "PURPLE GRAY",
              modelName: "CP63203SF",
              image: null,
            },
            {
              colorName: "BLACK SAND",
              modelName: "SP00368",
              image: null,
            },
          ]}
        />
        <ExteriorProductPage
          title={t("interiorCabinetColoursTitle")}
          subtitle={t("interiorCabinetColoursSubtitle")}
          imageRef={REF002}
          imageReftwo={null}
          items={[
            {
              colorName: "BEIGE MATTE",
              modelName: "CY0011",
              image: null,
            },
            {
              colorName: "STARRY SILVER",
              modelName: "CPJ103",
              image: null,
            },
            {
              colorName: "KHAKI GRAY",
              modelName: "FTE1014898T",
              image: null,
            },
            {
              colorName: "MORANDI GRAY",
              modelName: "CY0037",
              image: null,
            },
            {
              colorName: "LIGHT GRAY",
              modelName: "SP00598",
              image: null,
            },
            {
              colorName: "SILVER GRAY",
              modelName: "CP61773SF",
              image: null,
            },
            {
              colorName: "TRAFFIC GRAY",
              modelName: "FTE101554",
              image: null,
            },
            {
              colorName: "GRAY FLASH",
              modelName: "SP00111",
              image: null,
            },
            {
              colorName: "LIGHT GREEN",
              modelName: "CY35109",
              image: null,
            },
            {
              colorName: "RETRO GREEN",
              modelName: "CY0047",
              image: null,
            },
            {
              colorName: "OLIVE GREEN",
              modelName: "CP71732C",
              image: null,
            },
            {
              colorName: "LAKE GREEN",
              modelName: "JXBD0089",
              image: null,
            },
          ]}
        />
        <ExteriorProductPage
          title={t("interiorCabinetsWoodTitle")}
          subtitle={t("interiorCabinetsWoodSubtitle")}
          imageRef={null}
          imageReftwo={null}
          items={[
            {
              colorName: "CAMEL GRAY",
              modelName: "CP63195S + JC-8193Y-2",
              image: null,
            },
            {
              colorName: "KHAKI WOOD",
              modelName: "XGHY-P2412 + XCH-PS9015",
              image: null,
            },
            {
              colorName: "BLACK WALNUT",
              modelName: "CP24938SF + JT4K9015-3",
              image: null,
            },
            {
              colorName: "CHERRY BLOSSOM",
              modelName: "M243556P + JR-H1823",
              image: null,
            },
          ]}
        />
        <ExteriorProductPage
          title={t("countertopStainlessSteelTitle")}
          subtitle={t("countertopStainlessSteelSubtitle")}
          imageRef={REF003}
          imageReftwo={REF004}
          items={[
            {
              colorName: "TREE BARK",
              modelName: null,
              image: require('@/assets/front/images/ss-tree-bark.jpg'),
            },
            {
              colorName: "RHINO SKIN",
              modelName: null,
              image: require('@/assets/front/images/ss-rhino-skin.jpg'),
            },
          ]}
        />
        <ExteriorProductPage
          title={t("countertopSinteredStoneTitle")}
          subtitle={t("countertopSinteredStoneSubtitle")}
          imageRef={REF005}
          imageReftwo={null}
          items={[
            {
              colorName: "CALACATTA WHITE",
              modelName: null,
              image: null,
            },
            {
              colorName: "CAVE STONE BEIGE",
              modelName: null,
              image: null,
            },
            {
              colorName: "BOSNIA GREY",
              modelName: null,
              image: null,
            },
            {
              colorName: "SPANISH BLACK AND WHITE ROOT",
              modelName: null,
              image: null,
            },
          ]}
        />
        <ModelConfiguratorBanner
          title="Still unsure which model is right for you?"
          leftButtonWrap={false}
          rightButton="Get Expert Advice"
          showButtons={true}
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
