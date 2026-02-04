import React from "react";
import { Table, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";

const ComparisonTable = () => {
  const tableData = [
    {
      model: "CORE →",
      length: "2210mm",
      grillSize: '30" premium gas BBQ',
      keyFeature: "Compact integrated kitchen",
      bestFor: "Small gardens",
      color: "blue",
    },
    {
      model: "PRIME →",
      length: "2690mm",
      grillSize: ' 30" premium gas BBQ',
      keyFeature: " Integrated TV & entertaining layout",
      bestFor: "Entertaining",
      color: "purple",
    },
    {
      model: "APEX →",
      length: "3500mm",
      grillSize: '36" premium gas BBQ',
      keyFeature: "Larger cooking & prep space",
      bestFor: "Premium living",
      color: "gold",
    },
    {
      model: "PINNACLE →",
      length: "3760mm",
      grillSize: '46" premium gas BBQ',
      keyFeature:
        "Full-spec outdoor kitchen with motorised roof and luxury features",
      bestFor: "Statement outdoor kitchens & hosting",
      color: "red",
    },
    {
      model: "AERO →",
      length: "3139mm",
      grillSize: '36" premium gas BBQ',
      keyFeature: "Open-air design with awning",
      bestFor: "Open air",
      color: "green",
    },
  ];

  return (
    <section className={styles.quickComparison}>
      <Container className={styles.container}>
        <TitleHeader
          // whyChoose="Quick Comparison"
          title="Quick Comparison"
          subtitle="Our premium outdoor kitchen range at a glance"
        />

        <div
          className={styles.tableWrapper}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Table responsive hover className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.headerCell}>Model</th>
                <th className={styles.headerCell}>Length</th>
                <th className={styles.headerCell}>Grill Size</th>
                <th className={styles.headerCell}>Key Feature</th>
                <th className={styles.headerCell}>Best For</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.modelCell}>
                    <div
                      className={`${styles.modelBadge} ${styles[row.color]}`}
                    >
                      {row.model}
                    </div>
                  </td>
                  <td className={styles.dataCell}>
                    <span className={styles.lengthText}>{row.length}</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${(parseInt(row.length) / 3760) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className={styles.dataCell}>{row.grillSize}</td>
                  <td className={styles.dataCell}>{row.keyFeature}</td>
                  <td className={styles.dataCell}>
                    <span
                      className={`${styles.bestForTag} ${styles[row.color]}`}
                    >
                      {row.bestFor}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonTable;
