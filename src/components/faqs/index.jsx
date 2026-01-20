import React from "react";
import { Accordion } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";

const faqs = [
  {
    question: "How long is the shipping time?",
    answer:
      "Shipping typically takes 4-8 weeks depending on the manufacturer, customization level, and location. For example, prefabricated models may ship in 4-6 weeks, while international freight can add 30-45 days.",
  },
  {
    question: "Do I need planning permission for a BBQ pod?",
    answer:
      "In the UK, most BBQ pods fall under permitted development rights and do not require planning permission if they are under 4 meters in height, not a permanent structure, and meet size limits (e.g., covering less than 50% of your garden). Always check with your local authority, especially in conservation areas.",
  },
  {
    question: "What warranty coverage is included?",
    answer:
      "Warranties vary by brand but generally include 2-5 years on the structure and parts, with 1-5 years on appliances like grills and refrigerators. Exclusions often apply for misuse or lack of maintenance. Check the manufacturer's documentation for details.",
  },
  {
    question: "Can I use the pod year-round in British weather?",
    answer:
      "Yes, most BBQ pods are designed for year-round use with weatherproof materials like 304 stainless steel, insulation, and features like motorized awnings. They can withstand rain, wind, and cold, allowing outdoor cooking even in winter.",
  },
  {
    question: "What utilities do I need for installation?",
    answer:
      "Basic requirements include a level concrete base, 240V electrical supply for lights and appliances, gas (natural or propane) for the grill, and water/drainage if including a sink. Professional installation is recommended for safety.",
  },
  {
    question: "How do I choose the right model for my garden?",
    answer:
      "Consider your garden size, desired features (e.g., grill size, storage, refrigeration), budget, and customization options like colors or appliances. Measure your space and think about usage—compact models for small gardens, larger ones for entertaining.",
  },
  {
    question: "What ongoing maintenance is required?",
    answer:
      "Regular cleaning of grates and burners after each use, deep cleaning every 3 months (scrub interior, check for rust), and annual inspections of gas lines and electrical components. Use mild soap and avoid harsh chemicals to preserve the finish.",
  },
  {
    question: "Can I customise the pod after purchase?",
    answer:
      "Major customizations like colors and finishes are typically done at purchase, but you can often add or upgrade accessories, appliances, storage, or lighting post-purchase. Some brands offer modular designs for easy modifications.",
  },
];

const Faqs = () => {
  return (
    <section className={styles.faqs}>
      <div className={styles.container}>
        <TitleHeader
          whyChoose="FREQUENTLY ASKED QUESTIONS"
          title="Got Questions?"
          subtitle="Everything you need to know about BBQ pods, delivery, and installation."
        />
        <Accordion className={styles.accordion}>
          {faqs.map((faq, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className={styles.item}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <Accordion.Header className={styles.header}>
                {faq.question}
                {/* <FaArrowRight className={styles.icon} /> */}
              </Accordion.Header>
              <Accordion.Body className={styles.body}>
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
