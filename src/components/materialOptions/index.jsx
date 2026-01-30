// MaterialOptions.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";

import tiles1 from "@/assets/front/images/ss-tree-bark.jpg";
import tiles2 from "@/assets/front/images/ss-rhino-skin.jpg";
import tiles3 from "@/assets/front/images/stone-aurora-white.webp";
import tiles4 from "@/assets/front/images/stone-saint-blanc.webp";
import tiles5 from "@/assets/front/images/stone-garda-gold.webp";
import tiles6 from "@/assets/front/images/stone-marsha-gray.webp";
import tiles7 from "@/assets/front/images/stone-marsha-brown.webp";
import tiles8 from "@/assets/front/images/stone-titanium-blue.webp";
import tiles9 from "@/assets/front/images/stone-saronlan.webp";

import tiles10 from "@/assets/front/images/wood-camel-grey.webp";
import tiles11 from "@/assets/front/images/wood-khaki.webp";
import tiles12 from "@/assets/front/images/wood-black-walnut.webp";

import tiles13 from "@/assets/front/images/cabinet-titanium-blue.webp";
import tiles14 from "@/assets/front/images/cabinet-italian-walnut.webp";
import TitleHeader from "../titleHeader";

const MaterialOptions = () => {
  const [selections, setSelections] = useState({
    stainless: null,
    "sintered-counter": null,
    powder: null,
    wood: null,
    "sintered-cabinet": null,
  });

  const handleSelect = (groupId, name) => {
    setSelections((prev) => ({ ...prev, [groupId]: name }));
  };

  const getColSize = (optionsLength) => {
    if (optionsLength === 2) return 6; // Larger cards for SUS304 (2 options)
    if (optionsLength === 3) return; // 3 per row for Wood Grain (3 options)
    return 3; // 4 per row for larger groups (8+, 12)
  };

  const countertopGroups = [
    {
      id: "stainless",
      title: "SUS304 Stainless Steel",
      options: [
        {
          name: "Tree Bark",
          code: "SUS-001",
          img: tiles1.src,
        },
        {
          name: "Rhino Skin",
          code: "SUS-002",
          img: tiles2.src,
        },
      ],
    },
    {
      id: "sintered-counter",
      title: "Sintered Stone (8 Premium Colors)",
      options: [
        {
          name: "Aurora White",
          code: "CS-001",
          img: tiles3.src,
        },
        {
          name: "Saint Blanc Belly White",
          code: "CS-002",
          img: tiles4.src,
        },
        {
          name: "Garda Belly Gold",
          code: "CS-003",
          img: tiles5.src,
        },
        {
          name: "Marsha Gray",
          code: "CS-004",
          img: tiles6.src,
        },
        {
          name: "Marsha Brown",
          code: "CS-005",
          img: tiles7.src,
        },
        {
          name: "Titanium Blue",
          code: "CS-006",
          img: tiles8.src,
        },
        {
          name: "Saronian",
          code: "CS-007",
          img: tiles9.src,
        },
      ],
    },
  ];

  const interiorGroups = [
    {
      id: "powder",
      title: "Powder-Coated Colors (12 Options)",
      options: [
        { name: "Athens White", code: "EPC-001", color: "#F5F5F5" },
        { name: "Matte Beige", code: "EPC-002", color: "#D4C5B9" },
        { name: "Khaki Sand", code: "EPC-003", color: "#8C8477" },
        { name: "Grey Sparkle", code: "EPC-004", color: "#6B6B6B" },
        { name: "Light Medium Grey", code: "EPC-005", color: "#9E9E9E" },
        { name: "Silver Sand", code: "EPC-006", color: "#A8A8A8" },
        { name: "Medium Grey Sand", code: "EPC-007", color: "#808080" },
        { name: "Grey Shimmer", code: "EPC-008", color: "#7A7A7A" },
        { name: "Purple-Grey Pine", code: "EPC-009", color: "#6B5B6E" },
        { name: "Black Sand", code: "EPC-010", color: "#2B2B2B" },
        { name: "Olive Green", code: "EPC-011", color: "#6B7C5D" },
        { name: "Lake Green Sparkle", code: "EPC-012", color: "#4A7C7C" },
      ],
    },
    {
      id: "wood",
      title: "Wood Grain Transfer (3 Options)",
      options: [
        {
          name: "Camel Grey Sand",
          code: "TTP-001",
          img: tiles10.src,
        },
        {
          name: "Khaki Wood Grain",
          code: "TTP-002",
          img: tiles11.src,
        },
        {
          name: "Black Walnut Wood",
          code: "TTP-003",
          img: tiles12.src,
        },
      ],
    },
    {
      id: "sintered-cabinet",
      title: "Sintered Stone - Cabinets Only (2 Options)",
      options: [
        {
          name: "Titanium Blue",
          code: "ST-001",
          img: tiles13.src,
        },
        {
          name: "Italian Black Walnut",
          code: "ST-002",
          img: tiles14.src,
        },
      ],
    },
  ];

  const renderGroup = (group) => {
    const colSize = getColSize(group.options.length);
    return (
      <div key={group.id} className={styles.group}>
        <h3 className={styles.groupTitle}>{group.title}</h3>
        <Row className="g-4">
          {group.options.map((option) => {
            const isActive = selections[group.id] === option.name;
            return (
              <Col md={colSize} key={option.name} className={styles.col}>
                <div
                  className={`${styles.swatchCard} ${isActive ? styles.active : ""}`}
                  onClick={() => handleSelect(group.id, option.name)}
                >
                  <div className={styles.imgWrap}>
                    {option.img ? (
                      <img
                        src={option.img}
                        alt={option.name}
                        className={styles.swatchImg}
                      />
                    ) : (
                      <div
                        className={styles.swatchImg}
                        style={{ backgroundColor: option.color }}
                      />
                    )}
                  </div>
                  <div className={styles.swatchInfo}>
                    <div className={styles.name}>{option.name}</div>
                    <div className={styles.code}>{option.code}</div>
                  </div>
                  {isActive && (
                    <span className={styles.checkIcon}>
                      <FaCheck />
                    </span>
                  )}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  };

  return (
    <section className={styles.meterialSection}>
      <Container>
        <TitleHeader
          whyChoose="MATERIAL & FINISH OPTIONS"
          title="Customise Your Perfect"
          subtitle="Choose from premium countertop materials and interior finishes"
        />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Countertop Materials</h2>
          {countertopGroups.map(renderGroup)}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interior & Cabinet Finishes</h2>
          {interiorGroups.map(renderGroup)}
        </section>

        <div className={styles.bespokeNote}>
          <span>Bespoke Options Available:</span> All materials, colors, and
          finishes can be customized during ordering. Contact our team for
          special requests or custom color matching.
        </div>
      </Container>
    </section>
  );
};

export default MaterialOptions;
