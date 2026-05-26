import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  setApplianceGas,
  setApplianceExtractor,
  setApplianceSink,
  setApplianceFridge,
} from "@/store/configurator.slice";
import {
  gasOptions,
  extractorAndTv,
  sinkOptions,
  fridgeStyle,
} from "@/utils/exteriorInteriorFinish";
import { useTranslation } from "next-i18next";

const StepBbqStyle = () => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.configurator);
  const modelKey = data.model?.replace("ProductName", "").toUpperCase() || "CORE";

  const gasOpts = gasOptions[modelKey] || [];
  const extractorOpts = extractorAndTv[modelKey] || [];
  const sinkOpts = sinkOptions[modelKey] || [];
  const fridgeOpts = fridgeStyle[modelKey] || [];

  const getOptionId = (opt) => `${opt.key}_${opt.size || ""}`;

  const formatPrice = (price) => {
    if (price === 0) return null;
    if (price > 0) return { label: `+ \u20AC${price.toLocaleString()}`, cls: styles.priceAdded };
    return { label: `\u2212 \u20AC${Math.abs(price).toLocaleString()}`, cls: styles.priceReduced };
  };

  const renderSection = (titleKey, badgeKey, badgeType, options, selected, onSelect) => {
    if (!options || options.length === 0) return null;
    return (
      <div className={styles.divider}>
        <h5>
          {t(titleKey)}
          {badgeKey && <span className={styles[badgeType]}>{t(badgeKey)}</span>}
        </h5>
        <div className={styles.applianceGrid}>
          {options.map((opt, idx) => {
            const id = getOptionId(opt);
            const isSelected = selected && getOptionId(selected) === id;
            const priceInfo = formatPrice(opt.priceAddition);
            return (
              <div
                key={idx}
                className={`${styles.applianceCard} ${isSelected ? styles.applianceSelected : ""}`}
                onClick={() => onSelect(isSelected ? null : opt)}
              >
                {isSelected && (
                  <div className={styles.applianceCheck}>
                    <FaCheck />
                  </div>
                )}
                <div className={styles.applianceCardContent}>
                  <span className={styles.applianceName}>{t(opt.key)}</span>
                  {opt.size && <span className={styles.applianceSize}>{opt.size}</span>}
                  {priceInfo && (
                    <span className={`${styles.appliancePriceBadge} ${priceInfo.cls}`}>
                      {priceInfo.label}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.stepHeader}>
        <h2>{t("appliance_options_title")}</h2>
        <p>{t("appliance_options_desc")}</p>
      </div>

      {renderSection(
        "grill_options_title",
        "required_badge",
        "reqired",
        gasOpts,
        data.applianceGas,
        (opt) => dispatch(setApplianceGas(opt))
      )}

      {renderSection(
        "extractor_tv_title",
        "required_badge",
        "reqired",
        extractorOpts,
        data.applianceExtractor,
        (opt) => dispatch(setApplianceExtractor(opt))
      )}

      {renderSection(
        "sink_title",
        "required_badge",
        "reqired",
        sinkOpts,
        data.applianceSink,
        (opt) => dispatch(setApplianceSink(opt))
      )}

      {renderSection(
        "fridge_title",
        "required_badge",
        "reqired",
        fridgeOpts,
        data.applianceFridge,
        (opt) => dispatch(setApplianceFridge(opt))
      )}
      <div className={styles.designNotes}>
        <div className={styles.designNotesHeader}>
          <span className={styles.designNotesDot} />
          <span className={styles.designNotesTitle}>{t("designNotes_title")}</span>
        </div>
        <ul className={styles.designNotesList}>
          <li>
            <strong>{t("designNotes_premiumTitle")}</strong> — {t("designNotes_premiumDesc")}
          </li>
          <li>
            <strong>{t("designNotes_cardsTitle")}</strong> — {t("designNotes_cardsDesc")}
          </li>
          <li>
            <strong>{t("designNotes_tagsTitle")}</strong> — {t("designNotes_tagsDesc")}
            <span className={styles.designNotesTag}>{t("designNotes_tagGasCharcoal")}</span>
            <span className={styles.designNotesTag}>{t("designNotes_tagMostPopular")}</span>
            <span className={styles.designNotesTag}>{t("designNotes_tagPremiumOption")}</span>
          </li>
          <li>
            <strong>{t("designNotes_pricingTitle")}</strong> — {t("designNotes_pricingDesc")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StepBbqStyle;
