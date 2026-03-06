import React from "react";
import Image from "next/image";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import { Col, Container, Row } from "react-bootstrap";
 
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import EngineeringExcellence from "@/components/engineeringExcellence";
import DimensionsSection from "@/components/dimensionsSection";
import TechnicalSpecifications from "@/components/technicalSpecifications";
// import WhatIncluded from "@/components/whatIncluded";
import SingleImage from "@/components/singleImg";
import TitleHeader from "@/components/titleHeader";
import ModelConfiguratorBanner from "@/components/modelConfiguratorBanner";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import Head from "next/head";
import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import dmhero1 from "@/assets/front/images/dimensions-open.webp";
import dmhero1Big from "@/assets/front/images/dimensions-open-big.webp";
import dmhero2 from "@/assets/front/images/dimensions-closed.jpg";
import dmhero2Big from "@/assets/front/images/dimensions-closed-big.jpg";
import technical1 from "@/assets/front/images/specs.jpg";
import floorImage from "@/assets/front/images/flrr.png";
import bannerBg from "@/assets/front/images/core-ban.jpg";
import DoorAccess from "@/components/doorAccess";


import bannerImage from "@/assets/front/images/aeroImages/bannerImage.jpg";
import dimensionsClosed from "@/assets/front/images/aeroImages/dimensions-closed.jpg";
import dimensionsOpen from "@/assets/front/images/aeroImages/dimensions-open.jpg";
import specs from "@/assets/front/images/aeroImages/specs.jpg";
import { pageURLS } from "@/utils/getPageUrls";
 
 
 

const AeroProductDetails = () => {
  const { t } = useTranslation("common");
   const PRODUCT_DETAILS = {
        productName: t("workaeroProductName"),
        productHeading: t("workaeroProductHeading"),
        bannerItem: [
          {
            icon: "fa-solid fa-medal",
            text: t("workaeroBannerItemOne"),
          },
          {
            icon: "fa-solid fa-truck-fast",
            text: t("workaeroBannerItemTwo"),
          },
          {
            icon: "fa-solid fa-umbrella-beach",
            text: t("workaeroBannerItemThree"),
          },
          
        ],
        bannerBg: bannerImage,
        bannerImage: bannerImage,
        secondProductImage: bannerImage,
        descriptionOne: t("workaeroDescriptionOne"),
        descriptionTwo: t("workaeroDescriptionTwo"),
        buttonOneText: t("workaeroButtonOneText"),
        headingOne: t("workaeroHeadingOne"),
        headingOneDescription: t("workaeroHeadingOneDescription"),
        specifications: [
          t("workaeroSpecificationOne"),
          t("workaeroSpecificationTwo"),
          t("workaeroSpecificationThree"),
          t("workaeroSpecificationFour"),
          t("workaeroSpecificationFive"),
          t("workaeroSpecificationSix"),
          t("workaeroSpecificationSeven"),
          t("workaeroSpecificationEight"),
          t("workaeroSpecificationNine"),
          t("workaeroSpecificationTen"),
          t("workaeroSpecificationEleven"),
          t("workaeroSpecificationTwelve"),
          t("workaeroSpecificationThirteen"),
          t("workaeroSpecificationFourteen"),
        ],
        headingTwo: t("workaeroHeadingTwo"),
        pointText: t("workaeroPointText"),
        pointOneHeading: t("workaeroPointOneHeading"),
        pointOneDescription: t("workaeroPointOneDescription"),
        pointTwoHeading: t("workaeroPointTwoHeading"),
        pointTwoDescription: t("workaeroPointTwoDescription"),
        pointTwoDescriptionTwo: t("workaeroPointTwoDescriptionTwo"),
        dimensionHeading: t("workaeroDimensionHeading"),
        dimentionImages: [
          {
            src: dimensionsOpen.src, // Replace with actual full image path
            thumb: dimensionsOpen.src, // Replace with actual thumbnail path
            label: t("workaeroDimensionFullyExtended"),
          },
          {
            src: dimensionsClosed.src, // Replace with actual full image path
            thumb: dimensionsClosed.src, // Replace with actual thumbnail path
            label: t("workaeroDimensionCompactClosed"),
          },
        ],
        techinicalheading: t("workaeroTechnicalHeading"),
        technicalDescription: t("workaeroTechnicalDescription"),
        technicalOverViewImage: specs,
        technicalItems: {
          Overall_Dimensions: {
            heading: t("workaeroOverallDimensionsHeading"),
            items: [
              {
                heading: t("workaeroOverallDimensionsWidth"),
                value: t("workaeroOverallDimensionsWidthValue"),
              },
              {
                heading: t("workaeroOverallDimensionsDepthClosed"),
                value: t("workaeroOverallDimensionsDepthClosedValue"),
              },
              {
                heading: t("workaeroOverallDimensionsDepthOpen"),
                value: t("workaeroOverallDimensionsDepthOpenValue"),
              },
              {
                heading: t("workaeroOverallDimensionsHeightClosed"),
                value: t("workaeroOverallDimensionsHeightClosedValue"),
              },
            ],
          },
          Weight: {
            heading: t("workaeroWeightHeading"),
            items: [
              {
                heading: t("workaeroTotalWeight"),
                value: t("workaeroTotalWeightValue"),
              },
            ],
          },
          Construction_Materials: {
            heading: t("workaeroConstructionMaterialsHeading"),
            items: [
              t("workaeroConstructionMaterialsOne"),
              t("workaeroConstructionMaterialsTwo"),
              t("workaeroConstructionMaterialsThree"),
              t("workaeroConstructionMaterialsFour"),
            ],
          },
          Front_Door_System: {
            heading: t("workaeroFrontDoorSystemHeading"),
            items: [
              t("workaeroFrontDoorSystemOne"),
              t("workaeroFrontDoorSystemTwo"),
            ],
          },
          Cooking_Appliances: {
            heading: t("workaeroCookingAppliancesHeading"),
            items: [
              t("workaeroCookingAppliancesOne"),
              t("workaeroCookingAppliancesTwo"),
              t("workaeroCookingAppliancesThree"),
              
            ],
          },
          Lighting_Electrical: {
            heading: t("workaeroLightingElectricalHeading"),
            items: [
              t("workaeroLightingElectricalOne"),
              t("workaeroLightingElectricalTwo"),
              t("workaeroLightingElectricalThree"),
              t("workaeroLightingElectricalFour"),
            ],
          },
    
          Finish_Options: {
            heading: t("workaeroFinishOptionsHeading"),
            items: [
              t("workaeroFinishOptionsOne"),
              t("workaeroFinishOptionsTwo"),
              t("workaeroFinishOptionsThree"),
            ],
          },
          Warranty: {
            heading: t("workaeroWarrantyHeading"),
            items: [t("workaeroWarrantyOne"), t("workaeroWarrantyTwo")],
          },
        },
        headingThree: t("workaeroHeadingThree"),
        descriptionThree: t("workaeroDescriptionThree"),
        descriptionFour: t("workaeroDescriptionFour"),
        buttonThreeText: t("workaeroButtonThreeText"),
        buttonFourText: t("workaeroButtonFourText"),
        headingTechnicalOverview: t("workaeroHeadingTechnicalOverview"),
        descriptionTechnicalOverview: t("workaeroDescriptionTechnicalOverview"),
      };
  const router = useRouter();
  const currentLocale = router.locale;
  const pageUrls = pageURLS[currentLocale] || pageURLS["en"]; // Fallback to English if current locale is not found
  console.log("Current locale:", currentLocale);

  const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
  console.log("Current URL:", currentUrl);
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

   let metatitle = "Aero Pod | BBQ Pod Spain";
             let metaDescription = "The Aero Pod — a sleek and modern outdoor kitchen with a distinctive contemporary design.";
             let ogTitle =  "Aero Pod | BBQ Pod Spain";
             let ogDescription = "The Aero Pod — a sleek and modern outdoor kitchen with a distinctive contemporary design.";
             const ogImage = bannerImage.src;


  // ...existing code...
   if(currentLocale === "es"){
      metatitle = "Aero Pod | BBQ Pod Spain";
      metaDescription = "El Aero Pod — una cocina exterior elegante y moderna con un diseño contemporáneo distintivo.";
      ogTitle = "Aero Pod | BBQ Pod Spain"; 
      ogDescription = "El Aero Pod — una cocina exterior elegante y moderna con un diseño contemporáneo distintivo.";
   }
 

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
        {/* <section className={style.banner}> */}
        <section
          className={style.banner}
          style={{
            backgroundImage: `url(${PRODUCT_DETAILS.bannerBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className={style.bannerContent}>
                  <h1
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    {PRODUCT_DETAILS.productName}
                  </h1>

                  <h3
                    data-aos="fade-right"
                    data-aos-duration="2500"
                    data-aos-once="true"
                  >
                    {PRODUCT_DETAILS.productHeading}
                  </h3>

                  <p
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                    dangerouslySetInnerHTML={{
                      __html: PRODUCT_DETAILS.descriptionOne.replace(
                        /\n/g,
                        "<br />",
                      ),
                    }}
                  ></p>

                  <p
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-once="true"
                    dangerouslySetInnerHTML={{
                      __html: PRODUCT_DETAILS.descriptionTwo.replace(
                        /\n/g,
                        "<br />",
                      ),
                    }}
                  ></p>

                  <div className={style.features}>
                    {" "}
                    <ul>
                      {" "}
                      {PRODUCT_DETAILS.bannerItem.map((item, index) => (
                        <li key={index}>
                          {" "}
                          <i className={item.icon} /> {item.text}{" "}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={style.actions}>
                    <ul>
                      <li>
                        <Link
                          href={pageUrls.configurator}
                          className={style.callBtn}
                          data-aos="zoom-out"
                          data-aos-duration="2500"
                          data-aos-once="true"
                        >
                          {PRODUCT_DETAILS.buttonOneText}{" "}
                          <TiArrowRightOutline />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div
                  className={style.bannerImage}
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <Image
                    src={PRODUCT_DETAILS.bannerImage}
                    alt="Landscape"
                    width={600}
                    height={450}
                    className={style.banImgmage}
                    priority
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.topSingleImg}>
          <Container>
            <Row className="align-items-center">
              <Col lg={12}>
                <SingleImage img={PRODUCT_DETAILS.secondProductImage} />
              </Col>
            </Row>
          </Container>
        </section>
        <EngineeringExcellence
          headingOne={PRODUCT_DETAILS.headingOne}
          descriptionTwo={PRODUCT_DETAILS.descriptionTwo}
          specifications={PRODUCT_DETAILS.specifications}
        />
        
        <DimensionsSection
          title={PRODUCT_DETAILS.dimensionHeading}
          images={PRODUCT_DETAILS.dimentionImages}
        />
        <TechnicalSpecifications
          title={PRODUCT_DETAILS.techinicalheading}
          subtitle={PRODUCT_DETAILS.technicalDescription}
          technicalItems={PRODUCT_DETAILS.technicalItems}
        />
        <section className={style.BottomSingleImg}>
          <TitleHeader
            whyChoose={[]}
            title={PRODUCT_DETAILS.headingTechnicalOverview}
            subtitle={PRODUCT_DETAILS.descriptionTechnicalOverview}
          />
          <Container>
            <Row className="align-items-center">
              <Col lg={12}>
                <SingleImage img={PRODUCT_DETAILS.technicalOverViewImage} />
              </Col>
            </Row>
          </Container>
        </section>
        <ModelConfiguratorBanner
          title={PRODUCT_DETAILS.headingThree}
          subtitle={PRODUCT_DETAILS.descriptionThree}
          description={PRODUCT_DETAILS.descriptionFour}
          leftButton={PRODUCT_DETAILS.buttonThreeText}
          rightButton={PRODUCT_DETAILS.buttonFourText}
          showButtons={true}
          rightButtonLink={pageUrls.products}
          leftButtonLink={pageUrls.configurator}
        />{" "}
      </Layout>
    </>
  );
};

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

export default AeroProductDetails;
