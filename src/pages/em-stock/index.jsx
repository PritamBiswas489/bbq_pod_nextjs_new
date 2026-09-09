import React from "react";
import { useState } from "react";
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
 

 
import { pageURLS } from "@/utils/getPageUrls";
import { products } from "@/utils/exteriorInteriorFinish";
 
import InStockProducts from "@/components/instockproducts";
import PrimeModalDemoButton from "@/components/primeModal/demoButton";
import PrimeModal from "@/components/primeModal";

export default function InStock() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const router = useRouter();
  const currentLocale = router.locale;
  console.log("Current locale:", currentLocale);

  const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
  console.log("Current URL:", currentUrl);
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = pageURLS[currentLocale]?.enStock || `/${currentLocale}${router.asPath}`;

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
          badgeText={''}
          title={''}
          subtitle={t('Available_Pods')}
          description1={t('Available_Pods_Description')}
          description2={t('Available_Pods_Details')}
          description3={t('Available_Pods_Instruction')}
          backgroundImage={hero1.src}
          links={[]}
        />
        <InStockProducts openModal={() => setOpen(true)} setModalContent={setModalContent} />
        {/* Demo button for Prime Modal - remove or move as needed */}
      
        
        
       
        <ModelConfiguratorBanner
          title={t("in_stock_Looking_For_Different_Configuration")}
          description={t("in_stock_Design_Your_Own")}
          leftButtonWrap={false}
          rightButton={t("in_stock_Open_Configurator")}
          showButtons={true}
          rightButtonLink={pageURLS[currentLocale]?.configurator}
          leftButtonLink={"#"}
          rightButtonLinkTarget="_blank"
          leftButtonLinkTarget="_blank"
        />
      </Layout>
         <PrimeModal open={open} onClose={() => setOpen(false)} modalContent={modalContent} />
     
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
