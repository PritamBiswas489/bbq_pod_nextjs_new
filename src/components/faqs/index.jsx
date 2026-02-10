import React from "react";
import { Accordion } from "react-bootstrap";
import styles from "./index.module.scss";
import { useTranslation } from 'next-i18next'

const Faqs = ({ faqs }) => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.container}>
      <Accordion className={styles.accordion}>
        {faqs.map((faq, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className={styles.item}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Accordion.Header className={styles.header}>
              {t(faq.question)}
            </Accordion.Header>

            <Accordion.Body className={styles.body}>
              {t(faq.answer)}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
