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
import floorImage from "@/assets/front/images/horizon_220/Image_1.jpg";
import DoorAccess from "@/components/doorAccess";



import bannerImage from "@/assets/front/images/horizon_220/Image.jpg";
import dimensionsClosed from "@/assets/front/images/horizon_220/Image_4.jpg";
import dimensionsOpen from "@/assets/front/images/horizon_220/Image_3.jpg";
import specs from "@/assets/front/images/horizon_220/image_7.jpg";
import { pageURLS } from "@/utils/getPageUrls";
 
 

const PrimeProductDetails = () => {
  const { t } = useTranslation("common");
  const PRODUCT_DETAILS = {
    productName: t("workhorizon220ProductName"),
    productHeading: t("workhorizon220ProductHeading"),
    bannerItem: [
      {
        icon: "fa-solid fa-medal",
        text: t("workhorizon220BannerItemOne"),
      },
      {
        icon: "fa-solid fa-truck-fast",
        text: t("workhorizon220BannerItemTwo"),
      },
      {
        icon: "fa-solid fa-umbrella-beach",
        text: t("workhorizon220BannerItemThree"),
      },
       {
        icon: "fa-solid fa-tv",
        text: t("workhorizon220BannerItemFour"),
      },
    ],
    bannerBg: bannerImage,
    bannerImage: bannerImage,
    secondProductImage: bannerImage,
    descriptionOne: t("workhorizon220DescriptionOne"),
    descriptionTwo: t("workhorizon220DescriptionTwo"),
    buttonOneText: t("workhorizon220ButtonOneText"),
    headingOne: t("workhorizon220HeadingOne"),
    headingOneDescription: t("workhorizon220HeadingOneDescription"),
    specifications: [
      t("workhorizon220SpecificationOne"),
      t("workhorizon220SpecificationTwo"),
      t("workhorizon220SpecificationThree"),
      t("workhorizon220SpecificationFour"),
      t("workhorizon220SpecificationFive"),
      t("workhorizon220SpecificationSix"),
      t("workhorizon220SpecificationSeven"),
      t("workhorizon220SpecificationEight"),
      t("workhorizon220SpecificationNine"),
      t("workhorizon220SpecificationTen"),
      t("workhorizon220SpecificationEleven"),
      t("workhorizon220SpecificationTwelve"),
      t("workhorizon220SpecificationThirteen"),
      t("workhorizon220SpecificationFourteen"),
    ],
    headingTwo: t("workhorizon220HeadingTwo"),
    pointText: t("workhorizon220PointText"),
    pointOneHeading: t("workhorizon220PointOneHeading"),
    pointOneDescription: t("workhorizon220PointOneDescription"),
    pointTwoHeading: t("workhorizon220PointTwoHeading"),
    pointTwoDescription: t("workhorizon220PointTwoDescription"),
    pointTwoDescriptionTwo: t("workhorizon220PointTwoDescriptionTwo"),
    dimensionHeading: t("workhorizon220DimensionHeading"),
    dimentionImages: [
      {
        src: dimensionsOpen.src, // Replace with actual full image path
        thumb: dimensionsOpen.src, // Replace with actual thumbnail path
        label: t("workhorizon220DimensionFullyExtended"),
      },
      {
        src: dimensionsClosed.src, // Replace with actual full image path
        thumb: dimensionsClosed.src, // Replace with actual thumbnail path
        label: t("workhorizon220DimensionCompactClosed"),
      },
    ],
    techinicalheading: t("workhorizon220TechnicalHeading"),
    technicalDescription: t("workhorizon220TechnicalDescription"),
    technicalOverViewImage: specs,
    technicalItems: {
      Overall_Dimensions: {
        heading: t("workhorizon220OverallDimensionsHeading"),
        items: [
          {
            heading: t("workhorizon220OverallDimensionsWidth"),
            value: t("workhorizon220OverallDimensionsWidthValue"),
          },
          {
            heading: t("workhorizon220OverallDimensionsDepthClosed"),
            value: t("workhorizon220OverallDimensionsDepthClosedValue"),
          },
          {
            heading: t("workhorizon220OverallDimensionsDepthOpen"),
            value: t("workhorizon220OverallDimensionsDepthOpenValue"),
          },
          {
            heading: t("workhorizon220OverallDimensionsHeightClosed"),
            value: t("workhorizon220OverallDimensionsHeightClosedValue"),
          },
          {
            heading: t("workhorizon220OverallDimensionsHeightOpen"),
            value: t("workhorizon220OverallDimensionsHeightOpenValue"),
          },
          {
            heading: t("workhorizon220OverallDimensionsMaximumHeight"),
            value: t("workhorizon220OverallDimensionsMaximumHeightValue"),
          },
          // {
          //   heading: t("workhorizon220OverallDimensionsRoofWidth"),
          //   value: t("workhorizon220OverallDimensionsRoofWidthValue"),
          // },
        ],
      },
      Weight: {
        heading: t("workhorizon220WeightHeading"),
        items: [
          {
            heading: t("workhorizon220TotalWeight"),
            value: t("workhorizon220TotalWeightValue"),
          },
        ],
      },
      Construction_Materials: {
        heading: t("workhorizon220ConstructionMaterialsHeading"),
        items: [
          t("workhorizon220ConstructionMaterialsOne"),
          t("workhorizon220ConstructionMaterialsTwo"),
          t("workhorizon220ConstructionMaterialsThree"),
          t("workhorizon220ConstructionMaterialsFour"),
        ],
      },
      Front_Door_System: {
        heading: t("workhorizon220AutomaticRoofSystemHeading"),
        items: [
          t("workhorizon220AutomaticRoofSystemOne"),
          t("workhorizon220AutomaticRoofSystemTwo"),
          t("workhorizon220AutomaticRoofSystemThree"),
          t("workhorizon220AutomaticRoofSystemFour"),
          t("workhorizon220AutomaticRoofSystemFive"),
        ],
      },
      Cooking_Appliances: {
        heading: t("workhorizon220CookingAppliancesHeading"),
        items: [
          t("workhorizon220CookingAppliancesOne"),
          t("workhorizon220CookingAppliancesTwo"),
          t("workhorizon220CookingAppliancesThree"),
           t("workhorizon220CookingAppliancesFour"),
        ],
      },
      Lighting_Electrical: {
        heading: t("workhorizon220LightingElectricalHeading"),
        items: [
          t("workhorizon220LightingElectricalOne"),
          t("workhorizon220LightingElectricalTwo"),
          t("workhorizon220LightingElectricalThree"),
          t("workhorizon220LightingElectricalFour"),
        ],
      },

      Finish_Options: {
        heading: t("workhorizon220FinishOptionsHeading"),
        items: [
          t("workhorizon220FinishOptionsOne"),
          t("workhorizon220FinishOptionsTwo"),
          t("workhorizon220FinishOptionsThree"),
        ],
      },
      Warranty: {
        heading: t("workhorizon220WarrantyHeading"),
        items: [t("workhorizon220WarrantyOne"), t("workhorizon220WarrantyTwo")],
      },
    },
    headingThree: t("workhorizon220HeadingThree"),
    descriptionThree: t("workhorizon220DescriptionThree"),
    descriptionFour: t("workhorizon220DescriptionFour"),
    buttonThreeText: t("workhorizon220ButtonThreeText"),
    buttonFourText: t("workhorizon220ButtonFourText"),
    headingTechnicalOverview: t("workhorizon220HeadingTechnicalOverview"),
    descriptionTechnicalOverview: t("workhorizon220DescriptionTechnicalOverview"),
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

   let metatitle = "Horizon 220 | BBQ Pod Spain";
               let metaDescription = "The Horizon 220 — a spacious outdoor kitchen combining premium materials with functional design.";
               let ogTitle =  "Horizon 220 | BBQ Pod Spain";
               let ogDescription = "The Horizon 220 — a spacious outdoor kitchen combining premium materials with functional design.";
               const ogImage = bannerImage.src;
  
  
     if(currentLocale === "es"){
        metatitle = "Horizon 220 | BBQ Pod Spain";
        metaDescription = "El Horizon 220 combina espacio, funcionalidad y diseño premium para una cocina exterior completa.";
        ogTitle = "Horizon 220 | BBQ Pod Spain"; 
        ogDescription = "El Horizon 220 combina espacio, funcionalidad y diseño premium para una cocina exterior completa.";
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
