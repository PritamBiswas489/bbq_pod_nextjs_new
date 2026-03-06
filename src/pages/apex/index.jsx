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

import bannerImage from "@/assets/front/images/apeximages/hero-1.jpg";
import dimensionsClosed from "@/assets/front/images/apeximages/dimensions-closed.jpg";
import dimensionsOpen from "@/assets/front/images/apeximages/dimensions-open.jpg";
import specs from "@/assets/front/images/apeximages/specs.jpg";
import { pageURLS } from "@/utils/getPageUrls";
 
 

const ApexProductDetails = () => {
  const { t } = useTranslation("common");
   const PRODUCT_DETAILS = {
      productName: t("workapexProductName"),
      productHeading: t("workapexProductHeading"),
      bannerItem: [
        {
          icon: "fa-solid fa-medal",
          text: t("workapexBannerItemOne"),
        },
        {
          icon: "fa-solid fa-truck-fast",
          text: t("workapexBannerItemTwo"),
        },
        {
          icon: "fa-solid fa-umbrella-beach",
          text: t("workapexBannerItemThree"),
        },
         {
          icon: "fa-solid fa-tv",
          text: t("workapexBannerItemFour"),
        },
      ],
      bannerBg: bannerImage,
      bannerImage: bannerImage,
      secondProductImage: bannerImage,
      descriptionOne: t("workapexDescriptionOne"),
      descriptionTwo: t("workapexDescriptionTwo"),
      buttonOneText: t("workapexButtonOneText"),
      headingOne: t("workapexHeadingOne"),
      headingOneDescription: t("workapexHeadingOneDescription"),
      specifications: [
        t("workapexSpecificationOne"),
        t("workapexSpecificationTwo"),
        t("workapexSpecificationThree"),
        t("workapexSpecificationFour"),
        t("workapexSpecificationFive"),
        t("workapexSpecificationSix"),
        t("workapexSpecificationSeven"),
        t("workapexSpecificationEight"),
        t("workapexSpecificationNine"),
        t("workapexSpecificationTen"),
        t("workapexSpecificationEleven"),
        t("workapexSpecificationTwelve"),
        t("workapexSpecificationThirteen"),
        t("workapexSpecificationFourteen"),
      ],
      headingTwo: t("workapexHeadingTwo"),
      pointText: t("workapexPointText"),
      pointOneHeading: t("workapexPointOneHeading"),
      pointOneDescription: t("workapexPointOneDescription"),
      pointTwoHeading: t("workapexPointTwoHeading"),
      pointTwoDescription: t("workapexPointTwoDescription"),
      pointTwoDescriptionTwo: t("workapexPointTwoDescriptionTwo"),
      dimensionHeading: t("workapexDimensionHeading"),
      dimentionImages: [
        {
          src: dimensionsOpen.src, // Replace with actual full image path
          thumb: dimensionsOpen.src, // Replace with actual thumbnail path
          label: t("workapexDimensionFullyExtended"),
        },
        {
          src: dimensionsClosed.src, // Replace with actual full image path
          thumb: dimensionsClosed.src, // Replace with actual thumbnail path
          label: t("workapexDimensionCompactClosed"),
        },
      ],
      techinicalheading: t("workapexTechnicalHeading"),
      technicalDescription: t("workapexTechnicalDescription"),
      technicalOverViewImage: specs,
      technicalItems: {
        Overall_Dimensions: {
          heading: t("workapexOverallDimensionsHeading"),
          items: [
            {
              heading: t("workapexOverallDimensionsWidth"),
              value: t("workapexOverallDimensionsWidthValue"),
            },
            {
              heading: t("workapexOverallDimensionsDepthClosed"),
              value: t("workapexOverallDimensionsDepthClosedValue"),
            },
            {
              heading: t("workapexOverallDimensionsDepthOpen"),
              value: t("workapexOverallDimensionsDepthOpenValue"),
            },
            {
              heading: t("workapexOverallDimensionsHeightClosed"),
              value: t("workapexOverallDimensionsHeightClosedValue"),
            },
          ],
        },
        Weight: {
          heading: t("workapexWeightHeading"),
          items: [
            {
              heading: t("workapexTotalWeight"),
              value: t("workapexTotalWeightValue"),
            },
          ],
        },
        Construction_Materials: {
          heading: t("workapexConstructionMaterialsHeading"),
          items: [
            t("workapexConstructionMaterialsOne"),
            t("workapexConstructionMaterialsTwo"),
            t("workapexConstructionMaterialsThree"),
            t("workapexConstructionMaterialsFour"),
          ],
        },
        Front_Door_System: {
          heading: t("workapexFrontDoorSystemHeading"),
          items: [
            t("workapexFrontDoorSystemOne"),
            t("workapexFrontDoorSystemTwo"),
          ],
        },
        Cooking_Appliances: {
          heading: t("workapexCookingAppliancesHeading"),
          items: [
            t("workapexCookingAppliancesOne"),
            t("workapexCookingAppliancesTwo"),
            t("workapexCookingAppliancesThree"),
             t("workapexCookingAppliancesFour"),
          ],
        },
        Lighting_Electrical: {
          heading: t("workapexLightingElectricalHeading"),
          items: [
            t("workapexLightingElectricalOne"),
            t("workapexLightingElectricalTwo"),
            t("workapexLightingElectricalThree"),
            t("workapexLightingElectricalFour"),
          ],
        },
  
        Finish_Options: {
          heading: t("workapexFinishOptionsHeading"),
          items: [
            t("workapexFinishOptionsOne"),
            t("workapexFinishOptionsTwo"),
            t("workapexFinishOptionsThree"),
          ],
        },
        Warranty: {
          heading: t("workapexWarrantyHeading"),
          items: [t("workapexWarrantyOne"), t("workapexWarrantyTwo")],
        },
      },
      headingThree: t("workapexHeadingThree"),
      descriptionThree: t("workapexDescriptionThree"),
      descriptionFour: t("workapexDescriptionFour"),
      buttonThreeText: t("workapexButtonThreeText"),
      buttonFourText: t("workapexButtonFourText"),
      headingTechnicalOverview: t("workapexHeadingTechnicalOverview"),
      descriptionTechnicalOverview: t("workapexDescriptionTechnicalOverview"),
    };
  const router = useRouter();
  const currentLocale = router.locale;
  console.log("Current locale:", currentLocale);
  const pageUrls = pageURLS[currentLocale] || pageURLS["en"]; // Fallback to English if current locale is not found

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
        <meta name="description" content="bbq pod spain" />
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

export default ApexProductDetails;
