import React from "react";
import Image from "next/image";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import { Col, Container, Row } from "react-bootstrap";
import bannerImage from "@/assets/front/images/ban-slider/ban-1.jpg";
import heroImage from "@/assets/front/images/hero-1.jpg";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import LifestyleFeatures from "@/components/lifestyleFeatures";
import EngineeringExcellence from "@/components/engineeringExcellence";
import DimensionsSection from "@/components/dimensionsSection";
import TechnicalSpecifications from "@/components/technicalSpecifications";
// import WhatIncluded from "@/components/whatIncluded";
import SingleImage from "@/components/singleImg";
import TitleHeader from "@/components/titleHeader";
import WhatInclude from "@/components/whatInclude";
import ModelConfiguratorBanner from "@/components/modelConfiguratorBanner";
import Faqs from "@/components/faqs";
import YourGarden from "@/components/yourGarden";
import ApplianceOptions from "@/components/applianceOptions";
import MaterialOptions from "@/components/materialOptions";
import GalleryImage from "@/components/galleryImage";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../next-i18next.config";
import Head from "next/head";

import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";


import dmhero1 from "@/assets/front/images/dimensions-open.webp";
import dmhero1Big from "@/assets/front/images/dimensions-open-big.webp";
import dmhero2 from "@/assets/front/images/dimensions-closed.jpg";
import dmhero2Big from "@/assets/front/images/dimensions-closed-big.jpg";



import technical1 from "@/assets/front/images/specs.jpg";
import floorImage from "@/assets/front/images/flrr.png";
import ExploreOtherModels from "@/components/exploreOtherModels";
import bannerBg from "@/assets/front/images/core-ban.jpg";
import DoorAccess from "@/components/doorAccess";
import ProductsDetails from "../products-details";

const CoreProductDetails = () => {
  const { t } = useTranslation("common");
  const PRODUCT_DETAILS = {
    productName: t('workcoreProductName'),
    productHeading: t('workcoreProductHeading'),
    bannerItem: [
      {
        icon: "fa-solid fa-medal",
        text: t('workcoreBannerItemOne'),
      },
      {
        icon: "fa-solid fa-truck-fast",
        text: t('workcoreBannerItemTwo'),
      },
      {
        icon: "fa-solid fa-umbrella-beach",
        text: t('workcoreBannerItemThree'),
      },
    ],
    bannerBg: bannerBg,
    bannerImage: bannerImage,
    secondProductImage: hero1,
    descriptionOne: t('workcoreDescriptionOne'),
    descriptionTwo: t('workcoreDescriptionTwo'),
    buttonOneText: t('workcoreButtonOneText'),
    headingOne: t('workcoreHeadingOne'),
    headingOneDescription: t('workcoreHeadingOneDescription'),
    specifications: [
      t('workcoreSpecificationOne'),
      t('workcoreSpecificationTwo'),
      t('workcoreSpecificationThree'),
      t('workcoreSpecificationFour'),
      t('workcoreSpecificationFive'),
      t('workcoreSpecificationSix'),
      t('workcoreSpecificationSeven'),
      t('workcoreSpecificationEight'),
      t('workcoreSpecificationNine'),
      t('workcoreSpecificationTen'),
      t('workcoreSpecificationEleven'),
      t('workcoreSpecificationTwelve'),
    ],
    headingTwo: t('workcoreHeadingTwo'),
    pointText: t('workcorePointText'),
    pointOneHeading: t('workcorePointOneHeading'),
    pointOneDescription: t('workcorePointOneDescription'),
    pointTwoHeading: t('workcorePointTwoHeading'),
    pointTwoDescription: t('workcorePointTwoDescription'),
    pointTwoDescriptionTwo: t('workcorePointTwoDescriptionTwo'),
    dimensionHeading: t('workkoreDimensionHeading'),
    dimentionImages: [
          {
            src: dmhero1.src, // Replace with actual full image path
            thumb: dmhero1Big.src, // Replace with actual thumbnail path
            label: t('workkoreDimensionFullyExtended'),
          },
          {
            src: dmhero2.src, // Replace with actual full image path
            thumb: dmhero2Big.src, // Replace with actual thumbnail path
            label: t('workkoreDimensionCompactClosed'),
          },
        ],
    techinicalheading: t('workkoreTechnicalHeading'),
    technicalDescription: t('workcoreTechnicalDescription'),
    technicalOverViewImage: technical1,
    technicalItems: {
      Overall_Dimensions: {
        heading: t('workcoreOverallDimensionsHeading'),
        items: [
          {
            heading: t('workcoreOverallDimensionsWidth'),
            value: t('workcoreOverallDimensionsWidthValue'),
          },
          {
            heading: t('workcoreOverallDimensionsDepthClosed'),
            value: t('workcoreOverallDimensionsDepthClosedValue'),
          },
          {
            heading: t('workcoreOverallDimensionsDepthOpen'),
            value: t('workcoreOverallDimensionsDepthOpenValue'),
          },
          {
            heading: t('workcoreOverallDimensionsHeightClosed'),
            value: t('workcoreOverallDimensionsHeightClosedValue'),
          },
        ],
      },
      Weight: {
        heading: t('workcoreWeightHeading'),
        items: [
          {
            heading: t('workkoreTotalWeight'),
            value: t('workkoreTotalWeightValue'),
          },
        ],
      },
      Construction_Materials: {
        heading: t('workcoreConstructionMaterialsHeading'),
        items: [
          t('workcoreConstructionMaterialsOne'),
          t('workcoreConstructionMaterialsTwo'),
          t('workcoreConstructionMaterialsThree'),
          t('workcoreConstructionMaterialsFour'),
        ],
      },
      Front_Door_System: {
        heading: t('workkoreFrontDoorSystemHeading'),
        items: [
          t('workkoreFrontDoorSystemOne'),
          t('workkoreFrontDoorSystemTwo'),
        ],
      },
      Cooking_Appliances: {
        heading: t('workkoreCookingAppliancesHeading'),
        items: [
          t('workkoreCookingAppliancesOne'),
          t('workkoreCookingAppliancesTwo'),
          t('workkoreCookingAppliancesThree'),
        ],
      },
      Lighting_Electrical: {
        heading: t('workkoreLightingElectricalHeading'),
        items: [
          t('workkoreLightingElectricalOne'),
          t('workkoreLightingElectricalTwo'),
          t('workkoreLightingElectricalThree'),
        ],
      },

      Finish_Options: {
        heading: t('workcoreFinishOptionsHeading'),
        items: [
          t('workcoreFinishOptionsOne'),
          t('workcoreFinishOptionsTwo'),
          t('workcoreFinishOptionsThree'),
        ],
      },
      Warranty: {
        heading: t('workcoreWarrantyHeading'),
        items: [
          t('workcoreWarrantyOne'),
          t('workcoreWarrantyTwo'),
        ],
      },
    },
    headingThree: t('workcoreHeadingThree'),
    descriptionThree: t('workcoreDescriptionThree'),
    descriptionFour: t('workcoreDescriptionFour'),
    buttonThreeText: t('workcoreButtonThreeText'),
    buttonFourText: t('workcoreButtonFourText'),
    headingTechnicalOverview: t('workcoreHeadingTechnicalOverview'),
    descriptionTechnicalOverview: t('workcoreDescriptionTechnicalOverview'),
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
              <Col lg={6} md={6} sm={6} xs={12}>
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
              <Col lg={6} md={6} sm={6} xs={12}>
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
        images = {PRODUCT_DETAILS.dimentionImages}
        
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

export default CoreProductDetails;
