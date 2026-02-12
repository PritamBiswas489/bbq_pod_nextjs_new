import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import {
  BsArrowLeftRight,
  BsArrowsVertical,
  BsFire,
  //   BsSnowflake,
} from "react-icons/bs";
import { GiSnowflake1 } from "react-icons/gi";
import styles from "./index.module.scss";

const defaultDimensions = [
  {
    icon: <BsArrowLeftRight className={styles.icon} />,
    label: "Length",
    value: "2210mm",
  },
  {
    icon: <BsArrowLeftRight className={styles.icon} />,
    label: "Width",
    value: "1002mm",
  },
  {
    icon: <BsArrowsVertical className={styles.icon} />,
    label: "Height",
    value: "2350mm",
  },
];

const defaultEquipment = [
  {
    icon: <BsFire className={styles.icon} />,
    label: "Grill",
    value: '30" three-burner gas grill',
  },
  {
    icon: <GiSnowflake1 className={styles.icon} />,
    label: "Fridge",
    value: '21" integrated fridge',
  },
];

const TechnicalSpecifications = ({
  title = "Technical Specifications",
  subtitle = "Precision-engineered for performance and longevity",
  technicalItems
}) => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Card className={styles.specCard}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Overall_Dimensions.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Overall_Dimensions.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item.heading}</span>
                      <span className={styles.value}>{item.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>

               <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Weight.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Weight.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item.heading}</span>
                      <span className={styles.value}>{item.value}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              
               
            </Row>


              <Row>
              <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Construction_Materials.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Construction_Materials.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item}</span>
                      
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>


              <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Front_Door_System.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Front_Door_System.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item}</span>
                      
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>

                
               
            </Row>

            <Row>
              <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Cooking_Appliances.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Cooking_Appliances.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item}</span>
                      
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>

               <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Lighting_Electrical.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Lighting_Electrical.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item}</span>
                      
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>


             <Row>
              <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Finish_Options.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Finish_Options.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item}</span>
                      
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>

               <Col md={6}>
                <h5 className={styles.cardHeader}>{technicalItems.Warranty.heading}</h5>
                <ListGroup variant="flush">
                  {technicalItems.Warranty.items.map((item, index) => (
                    <ListGroup.Item key={index} className={styles.specItem}>
                      {item.icon}
                      <span className={styles.label}>{item}</span>
                      
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
             
            
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default TechnicalSpecifications;
