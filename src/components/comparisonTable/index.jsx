import React from "react";
import { Table, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";

const ComparisonTable = () => {
  const tableData = [
    {
      model: "A-Mini →",
      length: "2210mm",
      grillSize: '30" three-burner gas grill',
      keyFeature: "Premium quality",
      bestFor: "Small gardens",
      color: "blue",
    },
    {
      model: "A-Plus →",
      length: "2690mm",
      grillSize: '30" three-burner gas grill',
      keyFeature: '32" weatherproof outdoor TV',
      bestFor: "Entertainers",
      color: "purple",
    },
    {
      model: "A-Max →",
      length: "3500mm",
      grillSize: '36" four-burner professional gas grill',
      keyFeature: '42" weatherproof outdoor TV',
      bestFor: "Luxury seekers",
      color: "gold",
    },
    {
      model: "A-Ultra →",
      length: "3760mm",
      grillSize: '46" five-burner professional gas grill',
      keyFeature: "Premium quality",
      bestFor: "Grill masters",
      color: "red",
    },
    {
      model: "A-Pro →",
      length: "3180mm",
      grillSize: "Professional gas grill",
      keyFeature: "Motorised retractable awning with remote",
      bestFor: "All-weather use",
      color: "green",
    },
  ];

  return (
    <section>
      <Container className={styles.container}>
        {/* <div className={styles.header}>
        <h2 className={styles.title}>Quick Comparison</h2>
        <p className={styles.subtitle}>
          Compare our premium outdoor kitchen models
        </p>
      </div> */}

        <TitleHeader
          // whyChoose="Quick Comparison"
          title="Quick Comparison"
          subtitle="Compare our premium outdoor kitchen models"
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
                          width: `${(parseInt(row.length) / 3760) * 80}%`,
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
