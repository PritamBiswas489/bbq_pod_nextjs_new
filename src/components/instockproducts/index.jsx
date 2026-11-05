import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import styles from "./index.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import primenew from "@/assets/front/images/primenew.jpg";
import apexnew from "@/assets/front/images/apexnew.jpg";
import liftup from "@/assets/front/images/liftup.png";
import { FiBox, FiLayers, FiMonitor } from "react-icons/fi";
import { MdOutdoorGrill } from "react-icons/md";


import athensWhite from "@/assets/front/images/image-shade/athens-white.webp";
import khakiWood from "@/assets/front/images/image-shade/khaki-wood.webp";
import calacattaWhite from "@/assets/front/images/image-shade/calacatta-white.webp";

import starrySilver from "@/assets/front/images/image-shade/starry-silver.webp";
import caveStoneBeige from "@/assets/front/images/image-shade/cave-stone-beige.webp";


const InStockProducts = ({ openModal, setModalContent }) => {
  const { t } = useTranslation("common");

  const products = [
    {
      badges: [{ text: "Available", variant: "success", position: "right" }],
      nameKey: "Prime",
      descriptionKey: "",
      priceKey: "15.250€",
      featuresKeys: [
        "SP00321",
        "XGHY-P2412 + XCH-PS9015",
        "CALACATTA_WHITE",
      ],
      specifications: [
        { key: "GAS_BARBECUE_30", Icon: MdOutdoorGrill },
        { key: "SAMSUNG_SMART_TV_32", Icon: FiMonitor },
      ],
      finishImages: [athensWhite.src, khakiWood.src, calacattaWhite.src],
      image: primenew.src,
      link: "",
      popContent: {
        title: "Prime",
        image: primenew.src,
        price: "15.250€",
        Next_plan: t("In_stock_Next_Plan"),
        Stock_description: t("In_stock_Prime_Description"),
        Stock_No_Manufacturing_Wait: t("In_stock_No_Manufacturing_Wait"),
        features: {
          Exterior_Finish: "in_stock_Purple_Grey_Exterior",
          Interior_Finish: "in_stock_Black_Walnut_Interior",
          Worktop: "in_stock_Spanish_Stone_Worktop",
        },
        highlights: [
          { key: "GAS_BARBECUE_30", Icon: MdOutdoorGrill },
          { key: "SAMSUNG_SMART_TV_32", Icon: FiMonitor },
          { key: "In_stock_Calacatta_Stone", Icon: FiLayers },
          { key: "In_stock_Glass_Refrigerator", Icon: FiBox },
        ],
        equipmentInclude: [
          "GAS_BARBECUE_30",
          "SAMSUNG_SMART_TV_32",
          "In_stock_Equip_Fridge_Glass_Door",
          "In_stock_Equip_Sink_Pull_Out_Tap",
          "In_stock_Equip_Electric_Spice_Rack",
          "In_stock_Equip_Ceiling_Extractor_Hood",
          "In_stock_Bluetooth_audio_system",
          "In_stock_LED_ambient_lighting",
          "In_stock_Wine_glass_holder",
        ],
        dimensions: [
          { labelKey: "In_stock_Width", value: "2.690 mm" },
          { labelKey: "In_stock_Height", value: "2.350 mm" },
          { labelKey: "In_stock_Depth_closed", value: "1.002 mm" },
          { labelKey: "In_stock_Depth_open", value: "3.202 mm" },
        ],
        deliveryNoteKeys: [
          "In_stock_Delivery_Included_4h",
          "In_stock_Delivery_Confirm_Date",
        ],
        whatsAppMessageKey: "In_stock_Prime_WhatsApp_Message",
      },
    },


    {
      badges: [{ text: "Available", variant: "success", position: "right" }],
      nameKey: "Apex",
      descriptionKey: "",
      priceKey: "18.750€",
      featuresKeys: [
        "SP00321",
        "CPJ103",
        "CAVE_STONE_BEIGE",
      ],
      specifications: [
        { key: "GAS_BARBECUE_46_KAMADO", Icon: MdOutdoorGrill },
        { key: "SAMSUNG_SMART_TV_43", Icon: FiMonitor },
      ],
      finishImages: [athensWhite.src, starrySilver.src, caveStoneBeige.src],
      image: apexnew.src,
      link: "",
      popContent: {
        title: "Apex",
        image: apexnew.src,
        price: "18.750€",
        Next_plan: t("In_stock_Product_Tagline"),
        Stock_description: t("In_stock_Prime_Description"),
        Stock_No_Manufacturing_Wait: t("In_stock_No_Manufacturing_Wait"),
        features: {
          Exterior_Finish: "in_stock_Purple_Grey_Exterior",
          Interior_Finish: "in_stock_Black_Walnut_Interior",
          Worktop: "in_stock_Spanish_Stone_Worktop",
        },
        highlights: [
          { key: "GAS_BARBECUE_46", Icon: MdOutdoorGrill },
          { key: "SAMSUNG_SMART_TV_43", Icon: FiMonitor },
          { key: "In_stock_Charcoal_Kamado", Icon: MdOutdoorGrill },
          { key: "In_stock_Glass_Refrigerator", Icon: FiBox },
        ],
        equipmentInclude: [
          "GAS_BARBECUE_46",
          "In_stock_Charcoal_Kamado",
          "In_stock_Equip_Side_Gas_Burner",
          "SAMSUNG_SMART_TV_43",
          "In_stock_Equip_Fridge_Glass_Door_Simple",
          "In_stock_Equip_Sink_Pull_Out_Tap",
          "In_stock_Equip_Electric_Spice_Rack",
          "In_stock_Equip_Ceiling_Extractor_Hood",
          "In_stock_Bluetooth_audio_system",
          "In_stock_LED_ambient_lighting",
          "In_stock_Wine_glass_holder",
        ],
        dimensions: [{ labelKey: "In_stock_Width", value: "3.500 mm" }],
        dimensionsNoteKey: "In_stock_Dimensions_Note",
        deliveryNoteKeys: [
          "In_stock_Delivery_Included_4h",
          "In_stock_Delivery_Confirm_Date",
        ],
        whatsAppMessageKey: "In_stock_Apex_WhatsApp_Message",
      },
    },

  ];

  return (
    <section className={styles.outdoorKitchens}>
      <Container>
        <Row className={`g-4 justify-content-center ${styles.productGrid}`}>
          {products.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card
                className={`h-100 ${styles.productCard}`}
                data-aos="zoom-in-up"
                data-aos-anchor-placement="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className={styles.imageFrame}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={t(product.nameKey)}
                    className={styles.cardImage}
                  />
                  {product.badges?.some(
                    (badge) => badge.text === "Available",
                  ) && (
                    <span className={styles.stockBadge}>
                      <span className={styles.stockDot} aria-hidden="true" />
                      {t("Available")}
                    </span>
                  )}
                </div>
                <Card.Body className={styles.cardBody}>
                  <Card.Title className={styles.cardTitle}>
                    {t(product.nameKey)}
                  </Card.Title>
                  <Card.Subtitle className={styles.cardSubtitle}>
                    {t(product.featuresKeys[0])}
                  </Card.Subtitle>
                  <div className={styles.priceBlock}>
                    <div className={styles.cardPrice}>
                      {t(product.priceKey)}
                    </div>
                    <span className={styles.taxNote}>
                      {t("priceTaxIncluded")}
                    </span>
                  </div>
                  <ul className={styles.finishList}>
                    {product.featuresKeys.map((featureKey, fIndex) => (
                      <li key={featureKey} className={styles.finishItem}>
                        <span
                          className={styles.finishSwatch}
                          style={{
                            backgroundImage: `url(${product.finishImages[fIndex]})`,
                          }}
                          aria-hidden="true"
                        />
                        <span className={styles.finishLabel}>
                          {t(featureKey)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.specifications}>
                    {product.specifications.map(({ key, Icon }) => (
                      <div key={key} className={styles.specification}>
                        <Icon aria-hidden="true" />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                  {product.badges?.some(
                    (badge) => badge.text === "Available",
                  ) && (
                    <Link
                      className={styles.viewDetails}
                      onClick={(event) => {
                        event.preventDefault();
                        setModalContent({
                          ...product.popContent,
                          subtitleKey: product.featuresKeys[0],
                          finishes: [
                            ...product.featuresKeys.map(
                              (valueKey, finishIndex) => ({
                                labelKey: [
                                  "In_stock_Exterior_Finish_Label",
                                  "In_stock_Cabinet_Finish_Label",
                                  "In_stock_Worktop_Finish_Label",
                                ][finishIndex],
                                value:
                                  finishIndex === 1
                                    ? t("In_stock_Cabinet_Finish_Value", {
                                        finish: t(valueKey),
                                      })
                                    : t(valueKey),
                                image: product.finishImages[finishIndex],
                              }),
                            ),
                            {
                              labelKey: "In_stock_Closure_Label",
                              value: t("In_stock_Lift_up_door"),
                              image: "",
                            },
                          ],
                          highlights: product.popContent.highlights,
                        });
                        openModal();
                      }}
                      href="#"
                    >
                      {t("viewDetailsButton")}
                    </Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InStockProducts;
