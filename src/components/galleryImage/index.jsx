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

/* =======================
   DEFAULT CATEGORIES
======================= */
const defaultCategories = [
  { key: "*", label: "All Images" },
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
   COMPONENT
======================= */

const GalleryImage = ({
  images = [],
  categories = defaultCategories,
  showFilters = true,
  showLabel = true,
}) => {
  const [filterKey, setFilterKey] = useState("*");

  const filteredImages = useMemo(() => {
    if (filterKey === "*") return images;
    return images.filter((img) => img.categories?.includes(filterKey));
  }, [filterKey, images]);

  return (
    <Container className="my-5">
      {/* 🔥 FILTER BUTTONS (OPTIONAL) */}
      {showFilters && (
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
      )}

      {/* GALLERY */}
      <LightGallery
        selector="a"
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        download={false}
      >
        <div className={styles.grid} key={filterKey}>
          {filteredImages.map((img) => (
            <div key={img.id} className={styles.gridItem}>
              <a href={img.src} data-sub-html={`<h4>${img.label}</h4>`}>
                <img src={img.src} alt={img.label} className={styles.image} />
                {showLabel && <span className={styles.label}>{img.label}</span>}
                <span className={styles.view}>
                  <HiOutlineViewfinderCircle />
                </span>
              </a>
            </div>
          ))}
        </div>
      </LightGallery>
    </Container>
  );
};

export default GalleryImage;
