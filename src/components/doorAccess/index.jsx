import React from "react";
import style from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import TitleHeader from "../titleHeader";
import bannerImage from "@/assets/front/images/ban-slider/ban-1.jpg";
import Image from "next/image";

const DoorAccess = () => {
  return (
    <section className={style.doorAccessSection}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title="Front Door & Access Options"
          subtitle="The Core can be configured with different front door styles,
                depending on your space and how you plan to use the pod:"
        />
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className={style.doorAccessLeft}>
              <div className={style.doorAccessLeftBox}>
                <h4>Lift up stainless-steel door</h4>
                <p>
                  Opens upwards to provide overhead shade while cooking and
                  offers the highest level of protection from sun, rain and dust
                  when closed.
                </p>
              </div>
              <div className={style.doorAccessLeftBox}>
                <h4>Roller style door (fabric mesh or metal)</h4>
                <p>
                  A space efficient option where a lift up door isn’t practical.
                  Provides quick access and helps reduce exposure when closed,
                  while maintaining an open, lightweight feel when in use.
                </p>
                <p>
                  Both options are designed to keep the interior tidy and
                  protected when not in use, while remaining practical and
                  comfortable during cooking.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
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
  );
};

export default DoorAccess;
