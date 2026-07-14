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
import floorImage from "@/assets/front/images/horizon_270/Image_2.jpg";
import DoorAccess from "@/components/doorAccess";



import bannerImage from "@/assets/front/images/horizon_270/Image.jpg";
import dimensionsClosed from "@/assets/front/images/horizon_270/Image_5.jpg";
import dimensionsOpen from "@/assets/front/images/horizon_270/Image_6.jpg";
import specs from "@/assets/front/images/horizon_270/Image_8.jpg";
import { pageURLS } from "@/utils/getPageUrls";
 
 

const PrimeProductDetails = () => {
  const { t } = useTranslation("common");
  const PRODUCT_DETAILS = {
    productName: t("workhorizon270ProductName"),
    productHeading: t("workhorizon270ProductHeading"),
    bannerItem: [
      {
        icon: "fa-solid fa-medal",
        text: t("workhorizon270BannerItemOne"),
      },
      {
        icon: "fa-solid fa-truck-fast",
        text: t("workhorizon270BannerItemTwo"),
      },
      {
        icon: "fa-solid fa-umbrella-beach",
        text: t("workhorizon270BannerItemThree"),
      },
       {
        icon: "fa-solid fa-tv",
        text: t("workhorizon270BannerItemFour"),
      },
    ],
    bannerBg: bannerImage,
    bannerImage: bannerImage,
    secondProductImage: bannerImage,
    descriptionOne: t("workhorizon270DescriptionOne"),
    descriptionTwo: t("workhorizon270DescriptionTwo"),
    buttonOneText: t("workhorizon270ButtonOneText"),
    headingOne: t("workhorizon270HeadingOne"),
    headingOneDescription: t("workhorizon270HeadingOneDescription"),
    specifications: [
      t("workhorizon270SpecificationOne"),
      t("workhorizon270SpecificationTwo"),
      t("workhorizon270SpecificationThree"),
      t("workhorizon270SpecificationFour"),
      t("workhorizon270SpecificationFive"),
      t("workhorizon270SpecificationSix"),
      t("workhorizon270SpecificationSeven"),
      t("workhorizon270SpecificationEight"),
      t("workhorizon270SpecificationNine"),
      t("workhorizon270SpecificationTen"),
      t("workhorizon270SpecificationEleven"),
      t("workhorizon270SpecificationTwelve"),
      t("workhorizon270SpecificationThirteen"),
      t("workhorizon270SpecificationFourteen"),
      t("workhorizon270SpecificationFifteen"),
    ],
    headingTwo: t("workhorizon270HeadingTwo"),
    pointText: t("workhorizon270PointText"),
    pointOneHeading: t("workhorizon270PointOneHeading"),
    pointOneDescription: t("workhorizon270PointOneDescription"),
    pointTwoHeading: t("workhorizon270PointTwoHeading"),
    pointTwoDescription: t("workhorizon270PointTwoDescription"),
    pointTwoDescriptionTwo: t("workhorizon270PointTwoDescriptionTwo"),
    dimensionHeading: t("workhorizon270DimensionHeading"),
    dimentionImages: [
      {
        src: dimensionsOpen.src, // Replace with actual full image path
        thumb: dimensionsOpen.src, // Replace with actual thumbnail path
        label: t("workhorizon270DimensionFullyExtended"),
      },
      {
        src: dimensionsClosed.src, // Replace with actual full image path
        thumb: dimensionsClosed.src, // Replace with actual thumbnail path
        label: t("workhorizon270DimensionCompactClosed"),
      },
    ],
    techinicalheading: t("workhorizon270TechnicalHeading"),
    technicalDescription: t("workhorizon270TechnicalDescription"),
    technicalOverViewImage: specs,
    technicalItems: {
      Overall_Dimensions: {
        heading: t("workhorizon270OverallDimensionsHeading"),
        items: [
          {
            heading: t("workhorizon270OverallDimensionsWidth"),
            value: t("workhorizon270OverallDimensionsWidthValue"),
          },
          {
            heading: t("workhorizon270OverallDimensionsDepthClosed"),
            value: t("workhorizon270OverallDimensionsDepthClosedValue"),
          },
          {
            heading: t("workhorizon270OverallDimensionsDepthOpen"),
            value: t("workhorizon270OverallDimensionsDepthOpenValue"),
          },
          {
            heading: t("workhorizon270OverallDimensionsHeightClosed"),
            value: t("workhorizon270OverallDimensionsHeightClosedValue"),
          },
          {
            heading: t("workhorizon270OverallDimensionsHeightOpen"),
            value: t("workhorizon270OverallDimensionsHeightOpenValue"),
          },
          {
            heading: t("workhorizon270OverallDimensionsRoofWidth"),
            value: t("workhorizon270OverallDimensionsRoofWidthValue"),
          },
        ],
      },
      Weight: {
        heading: t("workhorizon270WeightHeading"),
        items: [
          {
            heading: t("workhorizon270TotalWeight"),
            value: t("workhorizon270TotalWeightValue"),
          },
        ],
      },
      Construction_Materials: {
        heading: t("workhorizon270ConstructionMaterialsHeading"),
        items: [
          t("workhorizon270ConstructionMaterialsOne"),
          t("workhorizon270ConstructionMaterialsTwo"),
          t("workhorizon270ConstructionMaterialsThree"),
          t("workhorizon270ConstructionMaterialsFour"),
          t("workhorizon270ConstructionMaterialsFive"),
        ],
      },
      Front_Door_System: {
        heading: t("workhorizon270AutomaticRoofSystemHeading"),
        items: [
          t("workhorizon270AutomaticRoofSystemOne"),
          t("workhorizon270AutomaticRoofSystemTwo"),
          t("workhorizon270AutomaticRoofSystemThree"),
          t("workhorizon270AutomaticRoofSystemFour"),
          t("workhorizon270AutomaticRoofSystemFive"),
        ],
      },
      Cooking_Appliances: {
        heading: t("workhorizon270CookingAppliancesHeading"),
        items: [
          t("workhorizon270CookingAppliancesOne"),
          t("workhorizon270CookingAppliancesTwo"),
          t("workhorizon270CookingAppliancesThree"),
          t("workhorizon270CookingAppliancesFour"),
          t("workhorizon270CookingAppliancesFive"),
          t("workhorizon270CookingAppliancesSix"),
        ],
      },
      Lighting_Electrical: {
        heading: t("workhorizon270LightingElectricalHeading"),
        items: [
          t("workhorizon270LightingElectricalOne"),
          t("workhorizon270LightingElectricalTwo"),
          t("workhorizon270LightingElectricalThree"),
          t("workhorizon270LightingElectricalFour"),
          t("workhorizon270LightingElectricalFive"),
        ],
      },

      Finish_Options: {
        heading: t("workhorizon270FinishOptionsHeading"),
        items: [
          t("workhorizon270FinishOptionsOne"),
          t("workhorizon270FinishOptionsTwo"),
          t("workhorizon270FinishOptionsThree"),
        ],
      },
      Warranty: {
        heading: t("workhorizon270WarrantyHeading"),
        items: [t("workhorizon270WarrantyOne"), t("workhorizon270WarrantyTwo")],
      },
    },
    headingThree: t("workhorizon270HeadingThree"),
    descriptionThree: t("workhorizon270DescriptionThree"),
    descriptionFour: t("workhorizon270DescriptionFour"),
    buttonThreeText: t("workhorizon270ButtonThreeText"),
    buttonFourText: t("workhorizon270ButtonFourText"),
    headingTechnicalOverview: t("workhorizon270HeadingTechnicalOverview"),
    descriptionTechnicalOverview: t("workhorizon270DescriptionTechnicalOverview"),
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

   let metatitle = "Horizon 270 | BBQ Pod Spain";
               let metaDescription = "The Horizon 270 — a spacious outdoor kitchen combining premium materials with functional design.";
               let ogTitle =  "Horizon 270 | BBQ Pod Spain";
               let ogDescription = "The Horizon 270 — a spacious outdoor kitchen combining premium materials with functional design.";
               const ogImage = bannerImage.src;
  
  
     if(currentLocale === "es"){
        metatitle = "Horizon 270 | BBQ Pod Spain";
        metaDescription = "El Horizon 270 combina espacio, funcionalidad y diseño premium para una cocina exterior completa.";
        ogTitle = "Horizon 270 | BBQ Pod Spain"; 
        ogDescription = "El Horizon 270 combina espacio, funcionalidad y diseño premium para una cocina exterior completa.";
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
