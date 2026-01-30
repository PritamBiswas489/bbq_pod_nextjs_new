import React from "react";
import GalleryImage from "@/components/galleryImage";
import InnerBanner from "@/components/innerBanner";
import Layout from "@/section/layout";

import hero1 from "@/assets/front/images/outdoor/hero-1.jpg";
import hero2 from "@/assets/front/images/outdoor/hero-2.jpg";
import hero3 from "@/assets/front/images/outdoor/hero-3.webp";
import hero4 from "@/assets/front/images/outdoor/hero-4.jpg";

/* =======================
   PAGE IMAGES
======================= */
const images = [
  {
    id: 1,
    src: hero1.src,
    categories: ["lifestyle", "a-mini"],
    label: "A-Mini",
  },
  {
    id: 2,
    src: hero2.src,
    categories: ["technical", "a-mini"],
    label: "A-Mini",
  },
  {
    id: 3,
    src: hero3.src,
    categories: ["lifestyle", "a-plus"],
    label: "A-Plus",
  },
  {
    id: 4,
    src: hero4.src,
    categories: ["technical", "a-plus"],
    label: "A-Plus",
  },
  {
    id: 5,
    src: hero4.src,
    categories: ["technical", "a-plus"],
    label: "A-Plus",
  },
  {
    id: 6,
    src: hero3.src,
    categories: ["technical", "a-finishes"],
    label: "Finishes",
  },
  {
    id: 7,
    src: hero2.src,
    categories: ["technical", "countertops"],
    label: "Countertops",
  },
  {
    id: 8,
    src: hero1.src,
    categories: ["technical", "a-ultra"],
    label: "A-Ultra",
  },
  {
    id: 8,
    src: hero1.src,
    categories: ["technical", "a-max"],
    label: "A-Max",
  },
  {
    id: 9,
    src: hero2.src,
    categories: ["technical", "a-pro"],
    label: "A-Pro",
  },
  {
    id: 10,
    src: hero4.src,
    categories: ["technical", "features"],
    label: "Features",
  },
  {
    id: 11,
    src: hero3.src,
    categories: ["technical", "finishes"],
    label: "Finishes",
  },
];

const ImageGallery = () => {
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

      <GalleryImage images={images} />

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
