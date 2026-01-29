import React from "react";
import Image from "next/image";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import { Col, Container, Row } from "react-bootstrap";
import bannerImage from "@/assets/front/images/ban-slider/ban-1.jpg";
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

const ProductsDetails = () => {
  return (
    <Layout>
      <section className={style.banner}>
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col md={7}>
              <div className={style.bannerContent}>
                <div
                  className={style.nationwide}
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-center"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <i className="fa-regular fa-circle-check" /> Most Popular
                </div>

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

            {/* RIGHT IMAGE */}
            <Col md={5}>
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
      <LifestyleFeatures />
      <EngineeringExcellence />
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
      <WhatInclude />
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

export default ProductsDetails;
