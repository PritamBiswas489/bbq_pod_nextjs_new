import React from "react";
import style from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import TitleHeader from "../titleHeader";
import bannerImage from "@/assets/front/images/ban-slider/ban-1.jpg";
import Image from "next/image";

const DoorAccess = ({headingTwo, pointText, pointOneHeading, pointOneDescription, pointTwoHeading, pointTwoDescription, pointTwoDescriptionTwo, floorImage  }) => {
  return (
    <section className={style.doorAccessSection}>
      <Container>
        <TitleHeader
          whyChoose={[]}
          title={headingTwo}
          subtitle={pointText}
        />
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className={style.doorAccessLeft}>
              <div className={style.doorAccessLeftBox}>
                <h4>{pointOneHeading}</h4>
                <p>
                  {pointOneDescription}
                </p>
              </div>
              <div className={style.doorAccessLeftBox}>
                <h4>{pointTwoHeading}</h4>
                <p>
                  {pointTwoDescription}
                </p>
                <p>
                  {pointTwoDescriptionTwo}
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
                src={floorImage}
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
