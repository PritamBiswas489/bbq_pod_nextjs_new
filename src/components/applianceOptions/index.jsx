// ApplianceOptions.js
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import styles from "./index.module.scss";
import { FaMusic, FaWind, FaTrash } from "react-icons/fa";

const ApplianceOptions = () => {
  const bbqGrills = [
    {
      title: '30" BBQ Grill',
      img: "https://placehold.co/200x150?text=30+BBQ+Grill",
      alt: "30 BBQ Grill",
    },
    {
      title: '36" BBQ Grill',
      img: "https://placehold.co/200x150?text=36+BBQ+Grill",
      alt: "36 BBQ Grill",
    },
    {
      title: '42" BBQ Grill',
      img: "https://placehold.co/200x150?text=42+BBQ+Grill",
      alt: "42 BBQ Grill",
    },
    {
      title: '46" BBQ Grill',
      img: "https://placehold.co/200x150?text=46+BBQ+Grill",
      alt: "46 BBQ Grill",
    },
  ];

  const refrigerators = [
    {
      title: '21" Glass Door',
      img: "https://placehold.co/200x250?text=21+Glass+Door",
      alt: "21 Glass Door",
    },
    {
      title: '21" Stainless Steel',
      img: "https://placehold.co/200x250?text=21+Stainless+Steel",
      alt: "21 Stainless Steel",
    },
    {
      title: '24" Glass Door',
      img: "https://placehold.co/200x250?text=24+Glass+Door",
      alt: "24 Glass Door",
    },
    {
      title: '24" Stainless Steel',
      img: "https://placehold.co/200x250?text=24+Stainless+Steel",
      alt: "24 Stainless Steel",
    },
  ];

  const televisions = [
    {
      title: '32" Smart TV',
      img: "https://placehold.co/200x150?text=32+Smart+TV",
      alt: "32 Smart TV",
    },
    {
      title: '42" Smart TV',
      img: "https://placehold.co/200x150?text=42+Smart+TV",
      alt: "42 Smart TV",
    },
  ];

  const additionalOptions = [
    {
      icon: <FaMusic className={styles.icon} />,
      title: "Built-in Audio System",
      text: "Wireless Bluetooth Premium Sound",
    },
    {
      icon: <FaWind className={styles.icon} />,
      title: '36" Range Hood',
      text: "Professional ventilation",
    },
    {
      icon: <FaTrash className={styles.icon} />,
      title: "Built-in Trash Can",
      text: "Optional waste management",
    },
  ];

  return (
    <Container className={styles.mainContainer}>
      <Badge className={styles.badge}>Available Appliances</Badge>
      <h1 className={styles.title}>Appliance Options</h1>
      <p className={styles.subtitle}>
        Available commercial-grade appliances for your outdoor kitchen
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>BBQ Grill</h2>
        <p className={styles.sectionSubtitle}>Choose your grill size</p>
        <Row>
          {bbqGrills.map((grill) => (
            <Col key={grill.title} md={3} className={styles.col}>
              <Card className={styles.applianceCard}>
                <div className={styles.imgWrap}>
                  <Card.Img variant="top" src={grill.img} alt={grill.alt} />
                </div>
                <Card.Body>
                  <Card.Title>{grill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Refrigerator</h2>
        <p className={styles.sectionSubtitle}>Glass doors or stainless steel</p>
        <Row>
          {refrigerators.map((fridge) => (
            <Col key={fridge.title} md={3} className={styles.col}>
              <Card className={styles.applianceCard}>
                <div className={styles.imgWrap}>
                  <Card.Img variant="top" src={fridge.img} alt={fridge.alt} />
                </div>
                <Card.Body>
                  <Card.Title>{fridge.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Television</h2>
        <p className={styles.sectionSubtitle}>
          Add entertainment to your outdoor kitchen
        </p>
        <Row className="justify-content-start">
          {televisions.map((tv) => (
            <Col key={tv.title} md={3} className={styles.col}>
              <Card className={styles.applianceCard}>
                <div className={styles.imgWrap}>
                  <Card.Img variant="top" src={tv.img} alt={tv.alt} />
                </div>
                <Card.Body>
                  <Card.Title>{tv.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Additional Options</h2>
        <p className={styles.sectionSubtitle}>Optional premium features</p>
        <Row>
          {additionalOptions.map((option) => (
            <Col key={option.title} md={4} className={styles.col}>
              <Card className={styles.applianceCard}>
                <div className={styles.iconWrapper}>{option.icon}</div>
                <Card.Body>
                  <Card.Title>{option.title}</Card.Title>
                  <Card.Text>{option.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <div className={styles.ctaContainer}>
        <h3 className={styles.ctaTitle}>Ready to Build Your Perfect Pod?</h3>
        <p className={styles.ctaSubtitle}>
          Use our interactive configurator to select exact specifications,
          visualise your choices, and receive a personalised quote.
        </p>
        <Button className={styles.ctaButton}>Try Our Configurator</Button>
      </div>
    </Container>
  );
};

export default ApplianceOptions;
