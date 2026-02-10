import React from "react";
import styles from "./index.module.scss";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const BrochureModal = ({ open, onClose }) => {
  const { t } = useTranslation('common');
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IoClose />
        </button>

        <h2>{t('brochureModalTitle')}</h2>

        <p>
          {t('brochureModalParagraph1')}
          <br />
          <br />
          {t('brochureModalParagraph2')}
          <br />
          <br />
          {t('brochureModalParagraph3')}
        </p>

        <div className={styles.actions}>
          <Link href="/models" className={styles.primaryBtn}>
            {t('brochureModalExploreModelsButton')}
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            {t('brochureModalContactUsButton')}
          </Link>
        </div>

        <span className={styles.note}>
          {t('brochureModalNote')}
        </span>
      </div>
    </div>
  );
};

export default BrochureModal;
