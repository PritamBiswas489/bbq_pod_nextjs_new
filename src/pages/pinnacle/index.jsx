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


import bannerImage from "@/assets/front/images/pinnacleImages/hero-1.jpg";
import dimensionsClosed from "@/assets/front/images/pinnacleImages/dimensions-closed.jpg";
import dimensionsOpen from "@/assets/front/images/pinnacleImages/dimensions-open.jpg";
import specs from "@/assets/front/images/pinnacleImages/specs.jpg";
 
 

const PinnacleProductDetails = () => {
  const { t } = useTranslation("common");
  const PRODUCT_DETAILS = {
       productName: t("workpinnacleProductName"),
       productHeading: t("workpinnacleProductHeading"),
       bannerItem: [
         {
           icon: "fa-solid fa-medal",
           text: t("workpinnacleBannerItemOne"),
         },
         {
           icon: "fa-solid fa-truck-fast",
           text: t("workpinnacleBannerItemTwo"),
         },
         {
           icon: "fa-solid fa-umbrella-beach",
           text: t("workpinnacleBannerItemThree"),
         },
          {
           icon: "fa-solid fa-tv",
           text: t("workpinnacleBannerItemFour"),
         },
       ],
       bannerBg: bannerImage,
       bannerImage: bannerImage,
       secondProductImage: bannerImage,
       descriptionOne: t("workpinnacleDescriptionOne"),
       descriptionTwo: t("workpinnacleDescriptionTwo"),
       buttonOneText: t("workpinnacleButtonOneText"),
       headingOne: t("workpinnacleHeadingOne"),
       headingOneDescription: t("workpinnacleHeadingOneDescription"),
       specifications: [
         t("workpinnacleSpecificationOne"),
         t("workpinnacleSpecificationTwo"),
         t("workpinnacleSpecificationThree"),
         t("workpinnacleSpecificationFour"),
         t("workpinnacleSpecificationFive"),
         t("workpinnacleSpecificationSix"),
         t("workpinnacleSpecificationSeven"),
         t("workpinnacleSpecificationEight"),
         t("workpinnacleSpecificationNine"),
         t("workpinnacleSpecificationTen"),
         t("workpinnacleSpecificationEleven"),
         t("workpinnacleSpecificationTwelve"),
         t("workpinnacleSpecificationThirteen"),
         t("workpinnacleSpecificationFourteen"),
         t("workpinnacleSpecificationFifteen"),
         t("workpinnacleSpecificationSixteen"),
         t("workpinnacleSpecificationSeventeen"),
       ],
       headingTwo: t("workpinnacleHeadingTwo"),
       pointText: t("workpinnaclePointText"),
       pointOneHeading: t("workpinnaclePointOneHeading"),
       pointOneDescription: t("workpinnaclePointOneDescription"),
       pointTwoHeading: t("workpinnaclePointTwoHeading"),
       pointTwoDescription: t("workpinnaclePointTwoDescription"),
       pointTwoDescriptionTwo: t("workpinnaclePointTwoDescriptionTwo"),
       dimensionHeading: t("workpinnacleDimensionHeading"),
       dimentionImages: [
         {
           src: dimensionsOpen.src, // Replace with actual full image path
           thumb: dimensionsOpen.src, // Replace with actual thumbnail path
           label: t("workpinnacleDimensionFullyExtended"),
         },
         {
           src: dimensionsClosed.src, // Replace with actual full image path
           thumb: dimensionsClosed.src, // Replace with actual thumbnail path
           label: t("workpinnacleDimensionCompactClosed"),
         },
       ],
       techinicalheading: t("workpinnacleTechnicalHeading"),
       technicalDescription: t("workpinnacleTechnicalDescription"),
       technicalOverViewImage: specs,
       technicalItems: {
         Overall_Dimensions: {
           heading: t("workpinnacleOverallDimensionsHeading"),
           items: [
             {
               heading: t("workpinnacleOverallDimensionsWidth"),
               value: t("workpinnacleOverallDimensionsWidthValue"),
             },
             {
               heading: t("workpinnacleOverallDimensionsDepthClosed"),
               value: t("workpinnacleOverallDimensionsDepthClosedValue"),
             },
             {
               heading: t("workpinnacleOverallDimensionsDepthOpen"),
               value: t("workpinnacleOverallDimensionsDepthOpenValue"),
             },
             {
               heading: t("workpinnacleOverallDimensionsHeightClosed"),
               value: t("workpinnacleOverallDimensionsHeightClosedValue"),
             },
           ],
         },
         Weight: {
           heading: t("workpinnacleWeightHeading"),
           items: [
             {
               heading: t("workpinnacleTotalWeight"),
               value: t("workpinnacleTotalWeightValue"),
             },
           ],
         },
         Construction_Materials: {
           heading: t("workpinnacleConstructionMaterialsHeading"),
           items: [
             t("workpinnacleConstructionMaterialsOne"),
             t("workpinnacleConstructionMaterialsTwo"),
             t("workpinnacleConstructionMaterialsThree"),
             t("workpinnacleConstructionMaterialsFour"),
           ],
         },
         Front_Door_System: {
           heading: t("workpinnacleFrontDoorSystemHeading"),
           items: [
             t("workpinnacleFrontDoorSystemOne"),
             t("workpinnacleFrontDoorSystemTwo"),
           ],
         },
         Cooking_Appliances: {
           heading: t("workpinnacleCookingAppliancesHeading"),
           items: [
             t("workpinnacleCookingAppliancesOne"),
             t("workpinnacleCookingAppliancesTwo"),
             t("workpinnacleCookingAppliancesThree"),
              t("workpinnacleCookingAppliancesFour"),
           ],
         },
         Lighting_Electrical: {
           heading: t("workpinnacleLightingElectricalHeading"),
           items: [
             t("workpinnacleLightingElectricalOne"),
             t("workpinnacleLightingElectricalTwo"),
             t("workpinnacleLightingElectricalThree"),
             t("workpinnacleLightingElectricalFour"),
           ],
         },
   
         Finish_Options: {
           heading: t("workpinnacleFinishOptionsHeading"),
           items: [
             t("workpinnacleFinishOptionsOne"),
             t("workpinnacleFinishOptionsTwo"),
             t("workpinnacleFinishOptionsThree"),
           ],
         },
         Warranty: {
           heading: t("workpinnacleWarrantyHeading"),
           items: [t("workpinnacleWarrantyOne"), t("workpinnacleWarrantyTwo")],
         },
       },
       headingThree: t("workpinnacleHeadingThree"),
       descriptionThree: t("workpinnacleDescriptionThree"),
       descriptionFour: t("workpinnacleDescriptionFour"),
       buttonThreeText: t("workpinnacleButtonThreeText"),
       buttonFourText: t("workpinnacleButtonFourText"),
       headingTechnicalOverview: t("workpinnacleHeadingTechnicalOverview"),
       descriptionTechnicalOverview: t("workpinnacleDescriptionTechnicalOverview"),
     };
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
        <title>{PRODUCT_DETAILS.productName}</title>
        <meta name="description" content="Generated by create next app" />
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
                          href={""}
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

export default PinnacleProductDetails;
