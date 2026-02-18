import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./index.module.scss";

/* ICONS */
import icon1 from "@/assets/front/images/difference/1.svg";
import icon2 from "@/assets/front/images/difference/2.svg";
import icon3 from "@/assets/front/images/difference/3.svg";
import icon4 from "@/assets/front/images/difference/4.svg";
import icon5 from "@/assets/front/images/difference/5.svg";
import icon6 from "@/assets/front/images/difference/6.svg";
import { useTranslation } from "next-i18next";



const BenefitsGrid = () => {
  const { t } = useTranslation("common");
  
const benefitsData = [
  {
    icon: "fa fa-solid fa-cubes",
    title: t('aboutusBenefitTitle1'),
    description: t('aboutusBenefitDescription1'),
  },
  {
    icon: "fa fa-solid fa-industry",
    title: t('aboutusBenefitTitle2'),
    description: t('aboutusBenefitDescription2'),
  },
  {
    icon: "fa fa-solid fa-truck",
    title: t('aboutusBenefitTitle3'),
    description: t('aboutusBenefitDescription3'),
  },
  {
    icon: "fa fa-solid fa-user-tie",
    title: t('aboutusBenefitTitle4'),
    description: t('aboutusBenefitDescription4'),
  },
  {
    icon: "fa fa-solid fa-cogs",
    title: t('aboutusBenefitTitle5'),
    description: t('aboutusBenefitDescription5'),
  },
  {
    icon: "fa fa-solid fa-shield-alt",
    title: t('aboutusBenefitTitle6'),
    description: t('aboutusBenefitDescription6'),
  },
];
  return (
    <section className={styles.benefitsSection}>
      <Container>
        <Row>
          {benefitsData.map((item, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  <i className={item.icon}></i>
                </div>

                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenefitsGrid;
