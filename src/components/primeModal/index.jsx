
import React from "react";
import styles from "./primeModal.module.scss";
import { Modal, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import rs4 from "@/assets/front/images/in-stock-images/rs4.jpg";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const PrimeModal = ({ open, onClose, modalContent }) => {
    const { t } = useTranslation("common");
  return (modalContent?.title ? (
    <Modal show={open} onHide={onClose} centered size="md" contentClassName={styles.modal}>
      <Modal.Body>
        <Button variant="link" className={styles.closeBtn} onClick={onClose} style={{position: 'absolute', top: 18, right: 18, zIndex: 2, color: '#fff'}}>
          <IoClose size={28} />
        </Button>
        <Image priority width={400} height={400} src={modalContent.image} alt={t(modalContent.title)} style={{width: '100%', borderRadius: '12px', marginBottom: '1.2rem', objectFit: 'cover', maxHeight: '220px'}} />
        <h2>{t(modalContent.title)}</h2>
        <div className={styles.priceRow}>
          <span className={styles.price}>{modalContent.price}</span>
          <span className={styles.badge}>{t('In_stock_Available_for_Immediate_Delivery')}</span>
        </div>
        <h3>{t('In_stock_Configuration')}</h3>
        <ul className={styles.configList}>
          <li><b>{t('In_stock_Exterior_Finish')}</b> {t(modalContent.features.Exterior_Finish)}</li>
          <li><b>{t('In_stock_Interior_Finish')}</b> {t(modalContent.features.Interior_Finish)}</li>
          <li><b>{t('In_stock_Worktop')}</b> {t(modalContent.features.Worktop)}</li>
          <li><b>{t('In_stock_Door_System')}</b> {t('In_stock_Lift_up_door')}</li>
          <li><b>{t('In_stock_Grill_Type')}</b> {t('In_stock_Premium_gas_BBQ_grill')}</li>
        </ul>
        <h3>{t('In_stock_Included_Features')}</h3>
        <ul className={styles.featuresList}>
          <li>{t('In_stock_Extractor_hood')}</li>
          <li>{t('In_stock_Refrigerator')}</li>
          <li>{t('In_stock_Bluetooth_audio_system')}</li>
          <li>{t('In_stock_Weatherproof_TV')}</li>
          <li>{t('In_stock_LED_ambient_lighting')}</li>
          <li>{t('In_stock_Stainless_steel_sink_with_pull_out_tap')}</li>
          <li>{t('In_stock_Wine_glass_holder')}</li>
          <li>{t('In_stock_Electric_spice_cupboard')}</li>
        </ul>
        <h3>{t('In_stock_Dimensions')}</h3>
        <ul className={styles.dimensionsList}>
          <li><b>{t('In_stock_Width')}</b> {t('In_stock_lmm_add_please')}</li>
          <li><b>{t('In_stock_Height')}</b> {t('In_stock_mm')}</li>
          <li><b>{t('In_stock_Depth_closed')}</b> {t('In_stock_mm')}</li>
          <li><b>{t('In_stock_Depth_open')}</b> {t('In_stock_mm')}</li>
        </ul>
        <h3>{t('In_stock_Delivery')}</h3>
        <ul className={styles.deliveryList}>
          <li>{t('In_stock_Delivery_and_installation_available_across_mainland_Spain')}</li>
          <li>{t('In_stock_Delivery_pricing_depends_on_location')}</li>
          <li><b>{t('In_stock_Andalucia_Included')}</b></li>
          <li><b>{t('In_stock_Central_Spain_From_300')}</b></li>
          <li><b>{t('In_stock_Northern_Spain_From_500')}</b></li>
        </ul>
        <div className={styles.actions}>
          <a
            href="mailto:sales@?subject=Reservation%20request"
            className={styles.primaryBtn}
          >
            {t('In_stock_Reserve_This_Pod')}
          </a>
        </div>
      </Modal.Body>
    </Modal>) : null
  );
};

export default PrimeModal;
