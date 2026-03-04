import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import { questions } from "@/utils/exteriorInteriorFinish";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setInstallationRequirements } from "@/store/configurator.slice";
import { useTranslation } from "next-i18next";

const StepInstallationRequirements = () => {
  const { t } = useTranslation("common");
  const value = useAppSelector(
    (state) => state.configurator.installationRequirements,
  );
  const dispatch = useAppDispatch();
  const onChange = (installationRequirements) => {
    dispatch(setInstallationRequirements(installationRequirements));
  };

  const handleChange = (key, option, customValue = "") => {
    if (option === t(`${key}_option_other`)) {
      onChange({ ...value, [key]: { option, customValue } });
    } else {
      onChange({ ...value, [key]: { option, customValue: "" } });
    }
  };

  return (
    <form className={styles.wrapper} autoComplete="off">
      {questions.map((q) => {
        const selected = value[q.key]?.option || "";
        return (
          <div className={styles.divider} key={q.key}>
            <h5 style={{ color: "#fff" }}>{t(q.label)}</h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {q.options.map((opt) => (
                <label key={opt} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name={q.key}
                    value={t(opt)}
                    checked={selected === t(opt)}
                    onChange={() => handleChange(q.key, t(opt))}
                    className={styles.radioInput}
                  />
                  <span className={styles.customRadio}></span>
                  <span className={styles.radioText}>{t(opt)}</span>
                </label>
              ))}
              {selected === t("power_option_other") ||
              selected === t("water_option_other") ||
              selected === t("drainage_option_other") ||
              selected === t("surface_option_other") ? (
                <input
                  type="text"
                  placeholder={t("please_specify")}
                  value={value[q.key]?.customValue || ""}
                  onChange={(e) =>
                    handleChange(
                      q.key,
                      t(`${q.key}_option_other`),
                      e.target.value,
                    )
                  }
                  style={{
                    marginTop: 8,
                    padding: 8,
                    borderRadius: 6,
                    border: "1px solid rgba(255, 255, 255, 0.07)",
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.05)",
                    color: "#f2f2f2",
                  }}
                />
              ) : null}
            </div>
          </div>
        );
      })}
      <div className={styles.divider}>
        <h5>{t("additional_requirements_notes")}</h5>
        <textarea
          placeholder={t("additional_requirements_placeholder")}
          value={value.additionalNotes || ""}
          onChange={(e) =>
            onChange({ ...value, additionalNotes: e.target.value })
          }
          style={{
            width: "100%",
            background: "rgba(255, 255, 255, 0.05)",
            resize: "none",
            color: "#f2f2f2",
            minHeight: 140,
            padding: 12,
            borderRadius: 8,
            border: "1px solid rgba(255, 255, 255, 0.07)",
          }}
        />
      </div>
    </form>
  );
};
export default StepInstallationRequirements;
