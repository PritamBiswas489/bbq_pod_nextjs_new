import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import lgZoom from "lightgallery/plugins/zoom";
import styles from "./index.module.scss";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

import hero1 from "@/assets/front/images/dimensions-open.webp";
import hero1Big from "@/assets/front/images/dimensions-open-big.webp";
import hero2 from "@/assets/front/images/dimensions-closed.jpg";
import hero2Big from "@/assets/front/images/dimensions-closed-big.jpg";

// dimensions-open.webp
// dimensions-closed.jpg
// dimensions-open-big.webp

const defaultImages = [
  {
    src: hero1.src, // Replace with actual full image path
    thumb: hero1Big.src, // Replace with actual thumbnail path
    label: "Fully Extended",
  },
  {
    src: hero2.src, // Replace with actual full image path
    thumb: hero2Big.src, // Replace with actual thumbnail path
    label: "Compact/Closed",
  },
];

const DimensionsSection = ({
  title = "Dimensions & Space Requirements",
  images = defaultImages,
}) => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        <Row>
          {images.map((image, index) => (
            <Col md={6} key={index} className="mb-4">
              <LightGallery
                speed={500}
                plugins={[lgZoom]}
                elementClassNames={styles.gallery}
              >
                <a href={image.src}>
                  <Card className={styles.dimensionCard}>
                    <Card.Img
                      variant="top"
                      src={image.thumb}
                      className={styles.image}
                    />
                    <Card.Body className={styles.cardBody}>
                      <Card.Title className={styles.label}>
                        {image.label}
                      </Card.Title>
                    </Card.Body>
                    <div className={styles.viewIcon}>
                      <HiOutlineViewfinderCircle />
                    </div>
                  </Card>
                </a>
              </LightGallery>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DimensionsSection;
