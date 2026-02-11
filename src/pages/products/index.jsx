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

import bg1 from "@/assets/front/images/image-shade/athens-white.webp";
import bg2 from "@/assets/front/images/image-shade/medium-gray.webp";
import bg3 from "@/assets/front/images/image-shade/purple-gray.webp";
import bg4 from "@/assets/front/images/image-shade/black-sand.webp";

import bg5 from "@/assets/front/images/image-shade/beige-matte.webp";
import bg6 from "@/assets/front/images/image-shade/starry-silver.webp";
import bg7 from "@/assets/front/images/image-shade/khaki-gray.webp";
import bg8 from "@/assets/front/images/image-shade/morandi-gray.webp";
import bg9 from "@/assets/front/images/image-shade/light-gray.webp";
import bg10 from "@/assets/front/images/image-shade/silver-gray.webp";
import bg11 from "@/assets/front/images/image-shade/traffic-gray.webp";
import bg12 from "@/assets/front/images/image-shade/gray-flash.webp";
import bg13 from "@/assets/front/images/image-shade/light-green.webp";
import bg14 from "@/assets/front/images/image-shade/retro-green.webp";
import bg15 from "@/assets/front/images/image-shade/olive-green.webp";
import bg16 from "@/assets/front/images/image-shade/lake-green.webp";

import bg17 from "@/assets/front/images/image-shade/camel-gray.webp";
import bg18 from "@/assets/front/images/image-shade/khaki-wood.webp";
import bg19 from "@/assets/front/images/image-shade/black-walnut.webp";
import bg20 from "@/assets/front/images/image-shade/cherry-blossom.webp";

import bg21 from "@/assets/front/images/image-shade/tree-bark.webp";
import bg22 from "@/assets/front/images/image-shade/rhino-skin.webp";

import bg23 from "@/assets/front/images/image-shade/calacatta-white.webp";
import bg24 from "@/assets/front/images/image-shade/cave-stone-beige.webp";
import bg25 from "@/assets/front/images/image-shade/bosnia-gray.webp";
import bg26 from "@/assets/front/images/image-shade/spanish-black-and-whitw-root.webp";

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
              image: bg1,
            },
            {
              colorName: "MEDIUM GRAY",
              modelName: "SP00071",
              image: bg2,
            },
            {
              colorName: "PURPLE GRAY",
              modelName: "CP63203SF",
              image: bg3,
            },
            {
              colorName: "BLACK SAND",
              modelName: "SP00368",
              image: bg4,
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
              image: bg5,
            },
            {
              colorName: "STARRY SILVER",
              modelName: "CPJ103",
              image: bg6,
            },
            {
              colorName: "KHAKI GRAY",
              modelName: "FTE1014898T",
              image: bg7,
            },
            {
              colorName: "MORANDI GRAY",
              modelName: "CY0037",
              image: bg8,
            },
            {
              colorName: "LIGHT GRAY",
              modelName: "SP00598",
              image: bg9,
            },
            {
              colorName: "SILVER GRAY",
              modelName: "CP61773SF",
              image: bg10,
            },
            {
              colorName: "TRAFFIC GRAY",
              modelName: "FTE101554",
              image: bg11,
            },
            {
              colorName: "GRAY FLASH",
              modelName: "SP00111",
              image: bg12,
            },
            {
              colorName: "LIGHT GREEN",
              modelName: "CY35109",
              image: bg13,
            },
            {
              colorName: "RETRO GREEN",
              modelName: "CY0047",
              image: bg14,
            },
            {
              colorName: "OLIVE GREEN",
              modelName: "CP71732C",
              image: bg15,
            },
            {
              colorName: "LAKE GREEN",
              modelName: "JXBD0089",
              image: bg16,
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
              image: bg17,
            },
            {
              colorName: "KHAKI WOOD",
              modelName: "XGHY-P2412 + XCH-PS9015",
              image: bg18,
            },
            {
              colorName: "BLACK WALNUT",
              modelName: "CP24938SF + JT4K9015-3",
              image: bg19,
            },
            {
              colorName: "CHERRY BLOSSOM",
              modelName: "M243556P + JR-H1823",
              image: bg20,
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
              image: bg21,
            },
            {
              colorName: "RHINO SKIN",
              modelName: null,
              image: bg22,
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
              image: bg23,
            },
            {
              colorName: "CAVE STONE BEIGE",
              modelName: null,
              image: bg24,
            },
            {
              colorName: "BOSNIA GREY",
              modelName: null,
              image: bg25,
            },
            {
              colorName: "SPANISH BLACK AND WHITE ROOT",
              modelName: null,
              image: bg26,
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
