import React from "react";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaStar } from "react-icons/fa";
import heroImage from "@/assets/front/images/hero-2.webp";
import bannerImage from "@/assets/front/images/ban-slider/ban-1.jpg";
import Link from "next/link";
import FeaturesSection from "@/components/featuresSection";
import CounterSection from "@/components/counter";
import OutdoorKitchens from "@/components/outdoorKitchen";
import ModelConfiguratorBanner from "@/components/modelConfiguratorBanner";
import ComparisonTable from "@/components/comparisonTable";
import YourGarden from "@/components/yourGarden";
import ExteriorColours from "@/components/exteriorColours";
import StainlessSteel from "@/components/stainlessSteel";
import InteriorFinishesBanner from "@/components/interiorFinishesBanner";
import Testimonials from "@/components/testimonials";
import CraftedBy from "@/components/craftedBy";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta";
import TitleHeader from "@/components/titleHeader";

import bannerBg from "@/assets/front/images/home-banner.avif";

import { TiArrowRightOutline } from "react-icons/ti";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";
import BrochureModal from "@/components/brochureModal";
import { products } from "@/utils/exteriorInteriorFinish";

import  homeBannerImageOne from "@/assets/front/images/homePageBanner/01-blue-desktop.jpg";
import  homeBannerImageTwo from "@/assets/front/images/homePageBanner/02-violet-desktop.jpg";
import  homeBannerImageThree from "@/assets/front/images/homePageBanner/03-food-desktop.jpg";


import  mobileBannerImageOne from "@/assets/front/images/mobileBanner/01-blue-mobile.jpg";
import  mobileBannerImageTwo from "@/assets/front/images/mobileBanner/02-violet-mobile.jpg";
import  mobileBannerImageThree from "@/assets/front/images/mobileBanner/03-food-mobile.jpg";

export const homeFaqs = [
  {
    question: "faq1Question",
    answer: "faq1Answer",
  },
  {
    question: "faq2Question",
    answer: "faq2Answer",
  },
  {
    question: "faq3Question",
    answer: "faq3Answer",
  },
  {
    question: "faq4Question",
    answer: "faq4Answer",
  },
  {
    question: "faq5Question",
    answer: "faq5Answer",
  },
  {
    question: "faq6Question",
    answer: "faq6Answer",
  },
  {
    question: "faq7Question",
    answer: "faq7Answer",
  },
  {
    question: "faq8Question",
    answer: "faq8Answer",
  },
];
const WHATSAPP_NUMBER = "+34672021437"; 
const Home = () => {
  const { t } = useTranslation("common");
  const [openModal, setOpenModal] = useState(false);
  const [activeBannerSlide, setActiveBannerSlide] = useState(0);
  const router = useRouter();
  let currentLocale = router.locale;


   const [whatsappLink, setWhatsappLink] = useState(null);
  
    useEffect(() => {
      if(currentLocale === 'es') {
        setWhatsappLink(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! 👋 He visto vuestra página web y me gustaría recibir más información sobre las BBQ Pods y sus precios. Gracias.")}`);
      } else {
        setWhatsappLink(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! 👋 I’ve been looking at your website and would like some more information about your BBQ Pods and prices. Thank you")}`);
      }
    }, [currentLocale]);
  


 // banner  slides 
const bannerSlides = [
  {
    image: homeBannerImageOne,
    mobileImage: mobileBannerImageOne,
    Overline: "home.banner.Overline",
    Headline: "home.banner.Headline",
    SupportingText: "home.banner.SupportingText",
    Primarybutton: "home.banner.Primarybutton",
    PrimarybuttonLink: pageURLS[currentLocale].products,
    Secondarybutton: "home.banner.Secondarybutton",
    SecondarybuttonLink: pageURLS[currentLocale].configurator,
  },
  {
    image: homeBannerImageTwo,
    mobileImage: mobileBannerImageTwo,
    Overline: "home.banner2.Overline",
    Headline: "home.banner2.Headline",
    SupportingText: "home.banner2.SupportingText",
    Primarybutton: "home.banner2.Primarybutton",
    PrimarybuttonLink: pageURLS[currentLocale].configurator,
    Secondarybutton: "home.banner2.Secondarybutton",
    SecondarybuttonLink: pageURLS[currentLocale].products,
  },
  {
    image: homeBannerImageThree,
    mobileImage: mobileBannerImageThree,
    Overline: "home.banner3.Overline",
    Headline: "home.banner3.Headline",
    SupportingText: "home.banner3.SupportingText",
    Primarybutton: "home.banner3.Primarybutton",
    PrimarybuttonLink: pageURLS[currentLocale].products,
    Secondarybutton: "home.banner3.Secondarybutton",
     
  },
];
useEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const slideTimer = window.setInterval(() => {
    setActiveBannerSlide((currentSlide) => (currentSlide + 1) % bannerSlides.length);
  }, 5000);

  return () => window.clearInterval(slideTimer);
}, []);

const mobileBannerHeight = `${
  (bannerSlides[activeBannerSlide].mobileImage.height /
    bannerSlides[activeBannerSlide].mobileImage.width) *
  100
}vw`;
console.warn("Banner slides:", bannerSlides);


  console.log("Current locale:", currentLocale);
  const pageUrls = pageURLS[currentLocale];

  const currentUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${router.asPath}`;
  console.log("Current URL:", currentUrl);
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl =
        pageURLS[currentLocale]?.home || `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

  let metatitle = "BBQ Pod Spain | Premium Outdoor Kitchens";
  let metaDescription =
    "Luxury outdoor kitchens designed for life in Spain. Built to handle sun, heat and year-round outdoor living.";
  let ogTitle = "BBQ Pod Spain | Premium Outdoor Kitchens";
  let ogDescription =
    "Luxury outdoor kitchens designed for life in Spain. Built to handle sun, heat and year-round outdoor living.";
  const ogImage = products.filter((d) => d.nameKey === "pinnacleProductName")[0]
    .image;

  if (currentLocale === "es") {
    metatitle = "BBQ Pod Spain | Cocinas Exteriores Premium";
    metaDescription =
      "Cocinas exteriores de alta calidad diseñadas para disfrutar del estilo de vida al aire libre en España.";
    ogTitle = "BBQ Pod Spain | Cocinas Exteriores Premium";
    ogDescription =
      "Cocinas exteriores de alta calidad diseñadas para disfrutar del estilo de vida al aire libre en España.";
  }

  if (currentLocale === "pt") {
    metatitle = "BBQ Pod Spain | Cozinhas de Exterior Premium";
    metaDescription =
      "Cozinhas de exterior de luxo, concebidas para a vida em Espanha. Construídas para suportar o sol, o calor e a utilização no exterior durante todo o ano.";
    ogTitle = "BBQ Pod Spain | Cozinhas de Exterior Premium";
    ogDescription =
      "Cozinhas de exterior de luxo, concebidas para a vida em Espanha. Construídas para suportar o sol, o calor e a utilização no exterior durante todo o ano.";
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
        <section
          className={style.banner}
          aria-roledescription="carousel"
          aria-label={t(bannerSlides[activeBannerSlide].Overline)}
          style={{ "--mobile-banner-height": mobileBannerHeight }}
        >
          {bannerSlides.map((slide, index) => (
            <div
              key={slide.image.src}
              className={`${style.bannerSlide} ${
                activeBannerSlide === index ? style.activeBannerSlide : ""
              }`}
              style={{
                "--desktop-banner-image": `url(${slide.image.src})`,
                "--mobile-banner-image": `url(${slide.mobileImage.src})`,
              }}
              aria-hidden="true"
            />
          ))}
          <Container>
            <Row className="align-items-center">
              {/* LEFT CONTENT */}
              <Col md={12}>
                <div className={style.bannerContent}>
                  <p className={style.bannerEyebrow}>{t("bannerEyebrow")}</p>
                  <h1
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    {t(bannerSlides[activeBannerSlide].Headline)}
                    {/* Luxury Outdoor Kitchen Pods */}
                  </h1>

                  <h3
                    data-aos="fade-right"
                    data-aos-duration="2500"
                    data-aos-once="true"
                  >
                    {t(bannerSlides[activeBannerSlide].SupportingText)}
                  </h3>

                  <div className={style.actions}>
                    <Link
                      href={
                        bannerSlides[activeBannerSlide]?.PrimarybuttonLink ||
                        "#"
                      }
                      className={style.exploreBtn}
                      data-aos="zoom-out"
                      data-aos-duration="2500"
                    >
                      {t(bannerSlides[activeBannerSlide].Primarybutton)}{" "}
                      <TiArrowRightOutline className="ms-1" />
                    </Link>
                    {bannerSlides[activeBannerSlide]?.SecondarybuttonLink ? (
                      <Link
                        href={
                          bannerSlides[activeBannerSlide]
                            ?.SecondarybuttonLink || "#"
                        }
                        className={style.customizeLink}
                      >
                        {t(bannerSlides[activeBannerSlide].Secondarybutton)}
                      </Link>
                    ) : (
                       <Link  href={whatsappLink} target="_blank" className={style.customizeLink}>
                           {t(bannerSlides[activeBannerSlide].Secondarybutton)}
                      </Link>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className={style.bannerDots} aria-label="Choose a slide">
            {bannerSlides.map((slide, index) => (
              <button
                key={slide.image.src}
                type="button"
                className={`${style.bannerDot} ${
                  activeBannerSlide === index ? style.activeBannerDot : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={activeBannerSlide === index}
                onClick={() => setActiveBannerSlide(index)}
              />
            ))}
          </div>
        </section>
        <FeaturesSection />
        <CounterSection />
        <OutdoorKitchens />
        <ComparisonTable />
        <YourGarden
          title={t("brochureTitle")}
          description={t("brochureDescription")}
          backgroundImage={heroImage}
          setOpenModal={setOpenModal}
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
        <ExteriorColours />
        {/* <StainlessSteel /> */}
        {/* <InteriorFinishesBanner /> */}
        <Testimonials />
        {/* <CraftedBy /> */}
        <section className={style.faqs}>
          <TitleHeader
            whyChoose={[]}
            title={t("faqsTitle")}
            subtitle={t("faqsSubtitle")}
          />
          {/* <Faqs /> */}
          <Faqs faqs={homeFaqs} />
        </section>
        <Cta />
        <BrochureModal open={openModal} onClose={() => setOpenModal(false)} />
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

export default Home;
