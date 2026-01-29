"use client";

import React, { useState, useMemo } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import LightGallery from "lightgallery/react";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

// LightGallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import styles from "./index.module.scss";

// Images
import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";
import hero5 from "@/assets/front/images/outdoor/hero-5.webp";
import Layout from "@/section/layout";
import InnerBanner from "@/components/innerBanner";

/* =======================
   CATEGORIES
======================= */
const categories = [
  { key: "*", label: "All Images", variant: "danger" },
  { key: "lifestyle", label: "Lifestyle" },
  { key: "technical", label: "Technical" },
  { key: "countertops", label: "Countertops" },
  { key: "finishes", label: "Finishes" },
  { key: "features", label: "Features" },
  { key: "a-mini", label: "A-Mini" },
  { key: "a-plus", label: "A-Plus" },
  { key: "a-max", label: "A-Max" },
  { key: "a-ultra", label: "A-Ultra" },
  { key: "a-pro", label: "A-Pro" },
];

/* =======================
   IMAGES
======================= */
const images = [
  {
    id: 1,
    src: hero1.src,
    categories: ["a-mini", "lifestyle"],
    label: "A-Mini",
  },
  {
    id: 2,
    src: hero2.src,
    categories: ["a-mini", "technical"],
    label: "A-Mini",
  },
  {
    id: 3,
    src: hero3.src,
    categories: ["a-plus", "lifestyle"],
    label: "A-Plus",
  },
  {
    id: 4,
    src: hero4.src,
    categories: ["a-plus", "technical"],
    label: "A-Plus",
  },
  { id: 5, src: hero5.src, categories: ["a-max", "lifestyle"], label: "A-Max" },
  {
    id: 6,
    src: hero3.src,
    categories: ["a-ultra", "technical"],
    label: "A-Ultra",
  },
  { id: 7, src: hero2.src, categories: ["a-pro", "lifestyle"], label: "A-Pro" },
  { id: 8, src: hero4.src, categories: ["countertops"], label: "Countertops" },
  { id: 9, src: hero5.src, categories: ["finishes"], label: "Finishes" },
  { id: 10, src: hero1.src, categories: ["features"], label: "Features" },
  { id: 9, src: hero5.src, categories: ["finishes"], label: "Finishes" },
  { id: 10, src: hero1.src, categories: ["features"], label: "Features" },
];

/* =======================
   COMPONENT
======================= */
const ImageGallery = () => {
  const [filterKey, setFilterKey] = useState("*"); // ✅ default active

  const filteredImages = useMemo(() => {
    if (filterKey === "*") return images;
    return images.filter((img) => img.categories.includes(filterKey));
  }, [filterKey]);

  return (
    <Layout>
      <InnerBanner
        badgeText="CUSTOMER GALLERY"
        title="BBQ Pod"
        subtitle="GALLERY"
        description1="Explore our comprehensive product gallery featuring professional photography, annotated technical diagrams, and detailed dimensions for all 5 BBQ Pod models. See every aspect of our outdoor kitchens in stunning detail."
        description2={[]}
        backgroundImage={hero1.src}
      />
      <Container className="my-5">
        <div className={styles.buttonWrap}>
          <ButtonGroup className={`flex-wrap mb-4 ${styles.filterGroup}`}>
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant="light"
                className={`${styles.filterBtn} ${
                  filterKey === cat.key ? styles.active : ""
                }`}
                onClick={() => setFilterKey(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        {/* GALLERY */}
        <LightGallery
          selector="a"
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
        >
          {/* 🔥 key forces re-animation on filter change */}
          <div className={styles.grid} key={filterKey}>
            {filteredImages.map((img) => (
              <div key={img.id} className={styles.gridItem}>
                <a href={img.src} data-sub-html={`<h4>${img.label}</h4>`}>
                  <img src={img.src} alt={img.label} className={styles.image} />
                  <span className={styles.label}>{img.label}</span>
                  <span className={styles.view}>
                    <HiOutlineViewfinderCircle />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </LightGallery>
      </Container>
      <InnerBanner
        badgeText={null}
        title="Ready to Create Your"
        subtitle="Dream Outdoor Kitchen?"
        description1="Seen everything you need? Get a personalised quote and join 100+ satisfied UK families who transformed their gardens with BBQ Pods."
        backgroundImage={hero1.src}
        links={[
          { label: "Get Your Quote", href: "#", className: "primaryLink" },
          { label: "Try Configurator", href: "#", className: "secondaryLink" },
        ]}
      />
    </Layout>
  );
};

export default ImageGallery;
