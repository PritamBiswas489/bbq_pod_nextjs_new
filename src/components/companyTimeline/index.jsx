import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import { useTranslation } from "next-i18next";


const CompanyTimeline = () => {
  const { t } = useTranslation("common");


  const timelineData = [
  {
    year: t('aboutusTimelineYear1'),
    title: t('aboutusTimelineTitle1'),
    icon: " fa fa-lightbulb",
    description: t('aboutusTimelineDescription1'),
  },
  {
    year: t('aboutusTimelineYear2'),
    title: t('aboutusTimelineTitle2'),
    icon: " fa fa-tools",
    description: t('aboutusTimelineDescription2'),
  },
  {
    year: t('aboutusTimelineYear3'),
    title: t('aboutusTimelineTitle3'),
    icon: " fa fa-star",
    description: t('aboutusTimelineDescription3'),
  },
  {
    year: t('aboutusTimelineYear4'),
    title: t('aboutusTimelineTitle4'),
    icon: " fa fa-rocket",
    description: t('aboutusTimelineDescription4'),
  },
];

  return (
    <section className={styles.timelineSection}>
      <Container>
        <Row className="justify-content-center">
          {timelineData.map((item, index) => (
            <Col
              key={index}
              xl={3}
              lg={3}
              md={6}
              sm={12}
              className={styles.timelineCol}
            >
              <div className={styles.timelineCard}>
                <div className={styles.yearCircle}> <i className={item.icon}></i></div>
               
                <h5 className={styles.title}>{item.title}</h5>
                <p className={styles.description}>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CompanyTimeline;
