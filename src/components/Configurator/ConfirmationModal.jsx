
import React from "react";
import { useTranslation } from "next-i18next";
import styles from "./index.module.scss";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

const ConfirmationModal = ({ open, onClose  }) => {
  const { t } = useTranslation("common");
   const checkoutData = useAppSelector((state) => state.configurator.checkoutData);
   
   if (!open) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>&times;</button>
        <h2>{t("confirmationModal.thankYou")}</h2>
        <p style={{ marginBottom: 24 }}>
          {t("confirmationModal.reviewMessage")}<br />
          {t("confirmationModal.nextSteps")}
        </p>
        <div className={styles.orderDetailsSection}>
          <h3>{t("confirmationModal.orderDetails")}</h3>
          {/* Render all order details, specs, colour, model, price, etc. */}
            <div>
            <p>
              <b>{t("stepReview.name")}</b> {checkoutData.fullName}
            </p>
            <p>
              <b>{t("stepReview.email")}</b> {checkoutData.email}
            </p>
            <p>
              <b>{t("stepReview.phone")}</b> {checkoutData.phone}
            </p>
            <p>
              <b>{t("stepReview.installationAddressLabel")}</b>
              <br />
              {checkoutData.installStreet}
              <br />
              {checkoutData.installCity}, {checkoutData.installProvince} {checkoutData.installPostcode}
            </p>
            <p>
              <b>{t("stepReview.howDidYouHearLabel")}</b> {checkoutData.howDidYouHear}
            </p>
            <p>
              <b>{t("stepReview.messageLabel")}</b> {checkoutData.message}
            </p>
            {/* Add more details/specs/price/model as needed */}
          </div>
        </div>
        <div className={styles.emailInfo}>
          <p style={{ marginTop: 24, fontSize: 16 }}>
            <b>{t("confirmationModal.note")}</b> {t("confirmationModal.infoSent")} <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a><br />
            <b>{t("confirmationModal.subject")}</b> {t("confirmationModal.subjectText")} {checkoutData?.fullName || "FULL NAME"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
