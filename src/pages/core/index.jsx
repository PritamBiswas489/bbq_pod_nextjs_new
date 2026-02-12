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

import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";
import ExploreOtherModels from "@/components/exploreOtherModels";
import bannerBg from "@/assets/front/images/core-ban.jpg";
import DoorAccess from "@/components/doorAccess";

export const productFaqs = [
  {
    question: "Is the A-Mini suitable for small gardens?",
    answer: `Absolutely. The A-Mini is specifically designed for smaller UK gardens with its compact 2210mm length. Despite its space-efficient footprint, it includes a professional 30" grill, integrated fridge, and full LED lighting - delivering complete outdoor kitchen functionality without overwhelming your garden space.`,
  },
  {
    question: "Can the A-Mini handle year-round use?",
    answer: `Yes. Like all our BBQ pods, the A-Mini features weatherproof construction with 6-layer insulated door panels, sealed electronics, and drainage systems. The stainless steel construction and insulation make it perfect for British weather throughout all seasons.`,
  },
];

const images = [
  {
    id: 1,
    src: hero1.src,
    categories: ["lifestyle", "a-mini"],
    label: "A-Mini",
  },
  {
    id: 2,
    src: hero2.src,
    categories: ["technical", "a-mini"],
    label: "A-Mini",
  },
  {
    id: 3,
    src: hero3.src,
    categories: ["lifestyle", "a-plus"],
    label: "A-Plus",
  },
  {
    id: 4,
    src: hero4.src,
    categories: ["technical", "a-plus"],
    label: "A-Plus",
  },
  {
    id: 5,
    src: hero4.src,
    categories: ["technical", "a-plus"],
    label: "A-Plus",
  },
  {
    id: 6,
    src: hero3.src,
    categories: ["technical", "a-finishes"],
    label: "Finishes",
  },
  {
    id: 7,
    src: hero2.src,
    categories: ["technical", "countertops"],
    label: "Countertops",
  },
];

const ProductsDetails = () => {
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
    <Layout>
      {/* <section className={style.banner}> */}
      <section
        className={style.banner}
        style={{
          backgroundImage: `url(${bannerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className={style.bannerContent}>
                {/* <div
                  className={style.nationwide}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-center"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <i className="fa-regular fa-circle-check" /> Most Popular
                </div> */}

                <h1
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  A-Mini
                </h1>

                <h3
                  data-aos="fade-right"
                  data-aos-duration="2500"
                  data-aos-once="true"
                >
                  Compact Luxury for Every Garden
                </h3>

                <p
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  data-aos-once="true"
                  dangerouslySetInnerHTML={{
                    __html: `The perfect starter BBQ pod for smaller gardens. The A-Mini combines essential outdoor cooking features with commercial-grade construction quality. Ideal for couples or small families who want premium outdoor entertaining without compromising on space.`,
                  }}
                ></p>

                <div className={style.features}>
                  <ul>
                    <li>
                      <i className="fa-solid fa-medal" /> 2210mm Length
                    </li>
                    <li>
                      <i className="fa-solid fa-truck-fast" /> 30" three-burner
                      gas grill
                    </li>
                    <li>
                      <i className="fa-solid fa-umbrella-beach" /> Premium
                      Quality
                    </li>
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
                        Get Personalised Quote <TiArrowRightOutline />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={""}
                        className={style.quoteBtn}
                        data-aos="zoom-out"
                        data-aos-duration="2500"
                        data-aos-once="true"
                      >
                        Try Configurator <TiArrowRightOutline />
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
                  src={bannerImage}
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
              <SingleImage />
            </Col>
          </Row>
        </Container>
      </section>

      <EngineeringExcellence />
      <DoorAccess />
      <DimensionsSection />
      <TechnicalSpecifications />
      <section className={style.BottomSingleImg}>
        <TitleHeader
          whyChoose={[]}
          title="Technical Overview"
          subtitle="Complete specification diagram with all features labeled"
        />
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <SingleImage />
            </Col>
          </Row>
        </Container>
      </section>

      <ModelConfiguratorBanner
        title="Perfect For"
        description="Perfect for homeowners with smaller gardens who want a professional-grade outdoor kitchen. Ideal for couples, small families, intimate garden parties, and year-round outdoor cooking without compromising on space."
        leftButton="Try Configurator"
        rightButton="Compare All Models"
        showButtons={false}
      />
    </Layout>
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

export default ProductsDetails;
