import React from "react";
import styles from "./primeModal.module.scss";
import { Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import {
  FiCheck,
  FiChevronDown,
  FiLayers,
  FiList,
  FiMaximize2,
  FiTruck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const WHATSAPP_NUMBER = "34672021437";

const defaultDimensions = [
  { labelKey: "In_stock_Width", value: "2690 mm" },
  { labelKey: "In_stock_Height", value: "2350 mm" },
  { labelKey: "In_stock_Depth_closed", value: "1002 mm" },
  { labelKey: "In_stock_Depth_open", value: "3202 mm" },
];

const PrimeModal = ({ open, onClose, modalContent }) => {
  const { t } = useTranslation("common");

  if (!modalContent?.title) return null;

  const includedFeatures = [
    "In_stock_Extractor_hood",
    "In_stock_Refrigerator",
    "In_stock_Bluetooth_audio_system",
    "In_stock_Weatherproof_TV",
    "In_stock_LED_ambient_lighting",
    "In_stock_Stainless_steel_sink_with_pull_out_tap",
    "In_stock_Wine_glass_holder",
    "In_stock_Electric_spice_cupboard",
  ];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    modalContent.whatsAppMessageKey
      ? t(modalContent.whatsAppMessageKey)
      : t("In_stock_WhatsApp_Message", { product: t(modalContent.title) }),
  )}`;

  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      dialogClassName={styles.dialog}
      contentClassName={styles.modal}
      aria-labelledby="stock-product-title"
    >
      <Modal.Body className={styles.body}>
        <div className={styles.imageFrame}>
          <Image
            priority
            fill
            sizes="(max-width: 576px) 100vw, 560px"
            src={modalContent.image}
            alt={t(modalContent.title)}
            className={styles.image}
          />
          <span className={styles.stockBadge}>
            <span className={styles.stockDot} aria-hidden="true" />
            {t("In_stock_One_Unit_Available")}
          </span>
          <Button
            variant="link"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label={t("In_stock_Close_Details")}
          >
            <IoClose size={25} />
          </Button>
        </div>

        <div className={styles.content}>
          <header className={styles.productHeader}>
            <h2 id="stock-product-title">
              {t(modalContent.title)}
              {modalContent.subtitleKey && (
                <span className={styles.finish}>
                  {" "}
                  · {t(modalContent.subtitleKey)}
                </span>
              )}
            </h2>
            <p className={styles.tagline}>{modalContent.Next_plan}</p>
            <p className={styles.tagline}>{modalContent.Stock_description}</p>
            <div className={styles.priceBlock}>
              <span className={styles.price}>{modalContent.price}</span>
              <span className={styles.taxNote}>{t("priceTaxIncluded")}</span>
            </div>
            <p className={styles.tagline}>{modalContent.Stock_No_Manufacturing_Wait}</p>
          </header>

          <div className={styles.highlights} aria-label={t("In_stock_Configuration")}>
            {modalContent.highlights?.map(({ key, Icon }) => (
              <div className={styles.highlight} key={key}>
                <Icon aria-hidden="true" />
                <span>{t(key)}</span>
              </div>
            ))}
          </div>

          <div className={styles.accordions}>
            <details className={styles.accordion}>
              <summary>
                <FiLayers aria-hidden="true" />
                <span>{t("In_stock_Finishes")}</span>
                <FiChevronDown className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.accordionContent}>
                <ul className={styles.finishList}>
                  {modalContent.finishes?.map(
                    ({ labelKey, value, image }) => (
                      <li className={styles.finishRow} key={labelKey}>
                        <span className={styles.finishLabel}>
                          {t(labelKey)}
                        </span>
                        <span className={styles.finishValue}>{value}</span>
                        {image && (
                          <Image
                            src={image}
                            alt=""
                            width={52}
                            height={26}
                            className={styles.finishSwatch}
                          />
                        )}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </details>

            <details className={styles.accordion}>
              <summary>
                <FiList aria-hidden="true" />
                <span>{t("In_stock_Equipment_Included")}</span>
                <FiChevronDown className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.accordionContent}>
                <ul className={styles.featuresList}>
                  {(modalContent.equipmentInclude ?? includedFeatures).map((feature) => (
                    <li key={feature}>
                      <FiCheck aria-hidden="true" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className={styles.accordion}>
              <summary>
                <FiMaximize2 aria-hidden="true" />
                <span>{t("In_stock_Dimensions")}</span>
                <FiChevronDown className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.accordionContent}>
                <ul className={styles.dimensionsList}>
                  {(modalContent.dimensions ?? defaultDimensions).map(
                    ({ labelKey, value }) => (
                      <li key={labelKey}>
                        <span className={styles.dimLabel}>
                          {t(labelKey).replace(/:\s*$/, "")}
                        </span>
                        <span className={styles.dimValue}>{value}</span>
                      </li>
                    ),
                  )}
                </ul>
                {modalContent.dimensionsNoteKey && (
                  <p className={styles.dimensionsNote}>
                    {t(modalContent.dimensionsNoteKey)}
                  </p>
                )}
              </div>
            </details>

            <details className={styles.accordion}>
              <summary>
                <FiTruck aria-hidden="true" />
                <span>{t("In_stock_Delivery_Installation")}</span>
                <FiChevronDown className={styles.chevron} aria-hidden="true" />
              </summary>
              <div className={styles.accordionContent}>
                {modalContent.deliveryNoteKeys ? (
                  <div className={styles.deliveryNotes}>
                    {modalContent.deliveryNoteKeys.map((key) => (
                      <p key={key}>{t(key)}</p>
                    ))}
                  </div>
                ) : (
                  <div className={styles.deliveryNotes}>
                    <p>{t("In_stock_Delivery_Included_4h")}</p>
                    <p>{t("In_stock_Delivery_Confirm_Date")}</p>
                  </div>
                )}
              </div>
            </details>
          </div>
        </div>

        <footer className={styles.actions}>
          <div className={styles.footerPrice}>
            <span className={styles.price}>{modalContent.price}</span>
            <span className={styles.taxNote}>{t("priceTaxIncluded")}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            <FaWhatsapp aria-hidden="true" />
            {t("In_stock_Contact_WhatsApp")}
          </a>
        </footer>
      </Modal.Body>
    </Modal>
  );
};

export default PrimeModal;
