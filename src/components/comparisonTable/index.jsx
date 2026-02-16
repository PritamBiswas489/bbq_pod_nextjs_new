import React from "react";
import { Table, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import TitleHeader from "../titleHeader";
import { useTranslation } from 'next-i18next';
import Link from "next/link";

const ComparisonTable = () => {
  const { t } = useTranslation('common');
  const tableData = [
    {
      modelKey: "coreTableModel",
      lengthKey: "coreTableLength",
      grillSizeKey: "coreTableGrillSize",
      keyFeatureKey: "coreTableKeyFeature",
      bestForKey: "coreTableBestFor",
      color: "blue",
      link: "/core",
    },
    {
      modelKey: "primeTableModel",
      lengthKey: "primeTableLength",
      grillSizeKey: "primeTableGrillSize",
      keyFeatureKey: "primeTableKeyFeature",
      bestForKey: "primeTableBestFor",
      color: "purple",
      link: "/prime",
    },
    {
      modelKey: "apexTableModel",
      lengthKey: "apexTableLength",
      grillSizeKey: "apexTableGrillSize",
      keyFeatureKey: "apexTableKeyFeature",
      bestForKey: "apexTableBestFor",
      color: "gold",
      link: "/apex",
    },
    {
      modelKey: "pinnacleTableModel",
      lengthKey: "pinnacleTableLength",
      grillSizeKey: "pinnacleTableGrillSize",
      keyFeatureKey: "pinnacleTableKeyFeature",
      bestForKey: "pinnacleTableBestFor",
      color: "red",
      link: "/pinnacle",
    },
    {
      modelKey: "aeroTableModel",
      lengthKey: "aeroTableLength",
      grillSizeKey: "aeroTableGrillSize",
      keyFeatureKey: "aeroTableKeyFeature",
      bestForKey: "aeroTableBestFor",
      color: "green",
      link: "/aero",
    },
  ];

  return (
    <section className={styles.quickComparison}>
      <Container className={styles.container}>
        <TitleHeader
          title={t('comparisonTableTitle')}
          subtitle={t('comparisonTableSubtitle')}
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
                <th className={styles.headerCell}>{t('tableHeaderModel')}</th>
                <th className={styles.headerCell}>{t('tableHeaderLength')}</th>
                <th className={styles.headerCell}>{t('tableHeaderGrillSize')}</th>
                <th className={styles.headerCell}>{t('tableHeaderKeyFeature')}</th>
                <th className={styles.headerCell}>{t('tableHeaderBestFor')}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.modelCell}>
                    <Link href={row.link} className={styles.modelLink}>
                      <div
                        className={`${styles.modelBadge} ${styles[row.color]}`}
                      >
                        {t(row.modelKey)}
                      </div>
                    </Link>
                  </td>
                  <td className={styles.dataCell}>
                    <span className={styles.lengthText}>{t(row.lengthKey)}</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${(parseInt(t(row.lengthKey)) / 3760) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </td>
                  <td className={styles.dataCell}>{t(row.grillSizeKey)}</td>
                  <td className={styles.dataCell}>{t(row.keyFeatureKey)}</td>
                  <td className={styles.dataCell}>
                    <span
                      className={`${styles.bestForTag} ${styles[row.color]}`}
                    >
                      {t(row.bestForKey)}
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
