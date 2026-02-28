import React from "react";
import styles from "./index.module.scss";

const ConfirmationModal = ({ open, onClose, orderDetails }) => {
  if (!open) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>&times;</button>
        <h2>Thank You - Your Design Has Been Received</h2>
        <p style={{ marginBottom: 24 }}>
          Our team will carefully review your configuration and contact you within 48 hours to confirm pricing, availability and installation planning.<br />
          We’ll guide you through the next steps personally.
        </p>
        <div className={styles.orderDetailsSection}>
          <h3>Order Details</h3>
          {/* Render all order details, specs, colour, model, price, etc. */}
          {orderDetails}
        </div>
        <div className={styles.emailInfo}>
          <p style={{ marginTop: 24, fontSize: 16 }}>
            <b>Note:</b> All information will be sent to <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a><br />
            <b>Subject:</b> Online design submission {orderDetails?.fullName || "FULL NAME"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
