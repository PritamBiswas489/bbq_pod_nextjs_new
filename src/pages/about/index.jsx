import React from "react";
import Head from "next/head";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import InnerBanner from "@/components/innerBanner";
import hero1 from "@/assets/front/images/hero-1.webp";
import CompanyTimeline from "@/components/companyTimeline";
import TitleHeader from "@/components/titleHeader";
import HeritageSection from "@/components/heritageSection";
import BenefitsGrid from "@/components/benefitsGrid";
import OperationsSection from "@/components/operationsSection";
import podImage from "@/assets/front/images/ops.jpg";
import QualityFeatureCard from "@/components/qualityFeatureCard";
import shieldIcon from "@/assets/front/images/difference/1.svg";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("productsPageTitle")}</title>
        <meta name="description" content={t("productsPageDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <InnerBanner
          badgeText="30+ YEARS OF EXCELLENCE"
          title="UK Quality, "
          subtitle="British Service"
          description1="From bespoke hand-made commercial awnings to the UK's finest outdoor kitchen pods. Over 30 years of UK expertise, delivered from our Swindon facility, backed by commercial-grade quality and comprehensive manufacturer warranties."
          description2={[]}
          links={[
            {
              label: "Get Your Free Quote",
              href: "#",
              className: "primaryLink",
            },
            {
              label: "Explore Our Pods",
              href: "#",
              className: "secondaryLink",
            },
          ]}
          backgroundImage={hero1.src}
        />
        <div className={style.companyTimeline}>
          <TitleHeader
            whyChoose={[]}
            title="From Awnings to Outdoor Excellence"
            subtitle="For over 30 years, Commercial Awnings Ltd has been synonymous with British engineering excellence. What started as a passion for hand-making and fitting premium bespoke commercial awnings has evolved into creating the UK's finest outdoor kitchen pods."
          />
          <CompanyTimeline />
        </div>
        <HeritageSection />
        <div className={style.benefitsSection}>
          <TitleHeader
            whyChoose="WHY CHOOSE US"
            title="The BBQ Pods UK Difference"
            subtitle="When you choose BBQ Pods UK, you're choosing over 30 years of proven expertise, UK quality standards, and a guarantee that outlasts the competition."
          />
          <BenefitsGrid />
        </div>

        <OperationsSection
          badgeText="UK OPERATIONS"
          title="Based in"
          titleHighlight="Swindon"
          description="Our UK facility in Swindon, Wiltshire is where over 30 years of expertise meets cutting-edge quality control. Every BBQ pod undergoes rigorous inspection by our UK team before being delivered and professionally installed at your home."
          image={podImage}
          features={[
            {
              title: "Premium Materials Only",
              text: "Commercial-grade appliances and marine hardware",
            },
            {
              title: "Rigorous Quality Control",
              text: "Inspected at multiple stages",
            },
            {
              title: "Fully Assembled",
              text: "Arrives 100% built and ready",
            },
          ]}
          address={{
            title: "Unit 2266 Dunbeath Road",
            text: "Swindon, Wiltshire, SN2 8EA",
          }}
        />

        <div className={style.lifetime}>
          <TitleHeader
            whyChoose="OUR GUARANTEE"
            title="Built to Last a Lifetime"
            subtitle="We're so confident in our engineering and quality standards that every BBQ pod is built with commercial-grade materials and backed by comprehensive manufacturer warranties. This isn't a purchase—it's an investment in decades of outdoor entertainment, family gatherings, and unforgettable memories."
          />
          <QualityFeatureCard
            icon={shieldIcon}
            title="Quality Built to Last"
            description="Commercial-grade construction with manufacturer warranties on all appliances. Premium materials throughout including stainless steel, marine-grade hardware, and weatherproof components."
            footerText="Because quality you can trust deserves construction standards you can believe in."
          />
        </div>
      </Layout>
    </>
  );
};

export default About;

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
