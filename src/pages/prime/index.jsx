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
import floorImage from "@/assets/front/images/flrr.png";
import DoorAccess from "@/components/doorAccess";



import bannerImage from "@/assets/front/images/primeImages/bannerImage.jpg";
import dimensionsClosed from "@/assets/front/images/primeImages/dimensions-closed.jpg";
import dimensionsOpen from "@/assets/front/images/primeImages/dimensions-open.jpg";
import specs from "@/assets/front/images/primeImages/specs.jpg";
import { pageURLS } from "@/utils/getPageUrls";
 
 

const PrimeProductDetails = () => {
  const { t } = useTranslation("common");
  const PRODUCT_DETAILS = {
    productName: t("workprimeProductName"),
    productHeading: t("workprimeProductHeading"),
    bannerItem: [
      {
        icon: "fa-solid fa-medal",
        text: t("workprimeBannerItemOne"),
      },
      {
        icon: "fa-solid fa-truck-fast",
        text: t("workprimeBannerItemTwo"),
      },
      {
        icon: "fa-solid fa-umbrella-beach",
        text: t("workprimeBannerItemThree"),
      },
       {
        icon: "fa-solid fa-tv",
        text: t("workprimeBannerItemFour"),
      },
    ],
    bannerBg: bannerImage,
    bannerImage: bannerImage,
    secondProductImage: bannerImage,
    descriptionOne: t("workprimeDescriptionOne"),
    descriptionTwo: t("workprimeDescriptionTwo"),
    buttonOneText: t("workprimeButtonOneText"),
    headingOne: t("workprimeHeadingOne"),
    headingOneDescription: t("workprimeHeadingOneDescription"),
    specifications: [
      t("workprimeSpecificationOne"),
      t("workprimeSpecificationTwo"),
      t("workprimeSpecificationThree"),
      t("workprimeSpecificationFour"),
      t("workprimeSpecificationFive"),
      t("workprimeSpecificationSix"),
      t("workprimeSpecificationSeven"),
      t("workprimeSpecificationEight"),
      t("workprimeSpecificationNine"),
      t("workprimeSpecificationTen"),
      t("workprimeSpecificationEleven"),
      t("workprimeSpecificationTwelve"),
      t("workprimeSpecificationThirteen"),
      t("workprimeSpecificationFourteen"),
    ],
    headingTwo: t("workprimeHeadingTwo"),
    pointText: t("workprimePointText"),
    pointOneHeading: t("workprimePointOneHeading"),
    pointOneDescription: t("workprimePointOneDescription"),
    pointTwoHeading: t("workprimePointTwoHeading"),
    pointTwoDescription: t("workprimePointTwoDescription"),
    pointTwoDescriptionTwo: t("workprimePointTwoDescriptionTwo"),
    dimensionHeading: t("workprimeDimensionHeading"),
    dimentionImages: [
      {
        src: dimensionsOpen.src, // Replace with actual full image path
        thumb: dimensionsOpen.src, // Replace with actual thumbnail path
        label: t("workprimeDimensionFullyExtended"),
      },
      {
        src: dimensionsClosed.src, // Replace with actual full image path
        thumb: dimensionsClosed.src, // Replace with actual thumbnail path
        label: t("workprimeDimensionCompactClosed"),
      },
    ],
    techinicalheading: t("workprimeTechnicalHeading"),
    technicalDescription: t("workprimeTechnicalDescription"),
    technicalOverViewImage: specs,
    technicalItems: {
      Overall_Dimensions: {
        heading: t("workprimeOverallDimensionsHeading"),
        items: [
          {
            heading: t("workprimeOverallDimensionsWidth"),
            value: t("workprimeOverallDimensionsWidthValue"),
          },
          {
            heading: t("workprimeOverallDimensionsDepthClosed"),
            value: t("workprimeOverallDimensionsDepthClosedValue"),
          },
          {
            heading: t("workprimeOverallDimensionsDepthOpen"),
            value: t("workprimeOverallDimensionsDepthOpenValue"),
          },
          {
            heading: t("workprimeOverallDimensionsHeightClosed"),
            value: t("workprimeOverallDimensionsHeightClosedValue"),
          },
        ],
      },
      Weight: {
        heading: t("workprimeWeightHeading"),
        items: [
          {
            heading: t("workprimeTotalWeight"),
            value: t("workprimeTotalWeightValue"),
          },
        ],
      },
      Construction_Materials: {
        heading: t("workprimeConstructionMaterialsHeading"),
        items: [
          t("workprimeConstructionMaterialsOne"),
          t("workprimeConstructionMaterialsTwo"),
          t("workprimeConstructionMaterialsThree"),
          t("workprimeConstructionMaterialsFour"),
        ],
      },
      Front_Door_System: {
        heading: t("workprimeFrontDoorSystemHeading"),
        items: [
          t("workprimeFrontDoorSystemOne"),
          t("workprimeFrontDoorSystemTwo"),
        ],
      },
      Cooking_Appliances: {
        heading: t("workprimeCookingAppliancesHeading"),
        items: [
          t("workprimeCookingAppliancesOne"),
          t("workprimeCookingAppliancesTwo"),
          t("workprimeCookingAppliancesThree"),
           t("workprimeCookingAppliancesFour"),
        ],
      },
      Lighting_Electrical: {
        heading: t("workprimeLightingElectricalHeading"),
        items: [
          t("workprimeLightingElectricalOne"),
          t("workprimeLightingElectricalTwo"),
          t("workprimeLightingElectricalThree"),
          t("workprimeLightingElectricalFour"),
        ],
      },

      Finish_Options: {
        heading: t("workprimeFinishOptionsHeading"),
        items: [
          t("workprimeFinishOptionsOne"),
          t("workprimeFinishOptionsTwo"),
          t("workprimeFinishOptionsThree"),
        ],
      },
      Warranty: {
        heading: t("workprimeWarrantyHeading"),
        items: [t("workprimeWarrantyOne"), t("workprimeWarrantyTwo")],
      },
    },
    headingThree: t("workprimeHeadingThree"),
    descriptionThree: t("workprimeDescriptionThree"),
    descriptionFour: t("workprimeDescriptionFour"),
    buttonThreeText: t("workprimeButtonThreeText"),
    buttonFourText: t("workprimeButtonFourText"),
    headingTechnicalOverview: t("workprimeHeadingTechnicalOverview"),
    descriptionTechnicalOverview: t("workprimeDescriptionTechnicalOverview"),
  };
  const router = useRouter();
  const currentLocale = router.locale;
   const pageUrls = pageURLS[currentLocale] || pageURLS["en"];  
  console.log("Current locale:", currentLocale);

  const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
  console.log("Current URL:", currentUrl);
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

   let metatitle = "Prime Pod | BBQ Pod Spain";
               let metaDescription = "The Prime Pod — a spacious outdoor kitchen combining premium materials with functional design.";
               let ogTitle =  "Prime Pod | BBQ Pod Spain";
               let ogDescription = "The Prime Pod — a spacious outdoor kitchen combining premium materials with functional design.";
               const ogImage = bannerImage.src;
  
  
     if(currentLocale === "es"){
        metatitle = "Prime Pod | BBQ Pod Spain";
        metaDescription = "El Prime Pod combina espacio, funcionalidad y diseño premium para una cocina exterior completa.";
        ogTitle = "Prime Pod | BBQ Pod Spain"; 
        ogDescription = "El Prime Pod combina espacio, funcionalidad y diseño premium para una cocina exterior completa.";
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
        <DoorAccess
          headingTwo={PRODUCT_DETAILS.headingTwo}
          pointText={PRODUCT_DETAILS.pointText}
          pointOneHeading={PRODUCT_DETAILS.pointOneHeading}
          pointOneDescription={PRODUCT_DETAILS.pointOneDescription}
          pointTwoHeading={PRODUCT_DETAILS.pointTwoHeading}
          pointTwoDescription={PRODUCT_DETAILS.pointTwoDescription}
          pointTwoDescriptionTwo={PRODUCT_DETAILS.pointTwoDescriptionTwo}
          floorImage={floorImage}
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

export default PrimeProductDetails;
