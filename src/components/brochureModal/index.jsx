import React from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const BrochureModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoClose />
        </button>

        <h2>Your Brochure Is on Its Way</h2>

        <p>
          Thanks for your interest in BBQ Pod Spain.
          <br />
          <br />
          We’ve just sent you our full brochure in your chosen language,
          including models, specifications and pricing guidance to your email
          address.
          <br />
          <br />
          Take your time exploring the range. If you’d like help choosing the
          right BBQ Pod or visualising it in your space, we’re here when you’re
          ready.
        </p>

        <div className={styles.actions}>
          <Link href="/models" className={styles.primaryBtn}>
            Explore the Models
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </div>

        <span className={styles.note}>
          If you don’t see the email within a few minutes, please check your
          spam folder.
        </span>
      </div>
    </div>
  );
};

export default BrochureModal;
