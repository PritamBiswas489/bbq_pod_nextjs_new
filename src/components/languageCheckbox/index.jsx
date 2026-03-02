import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styles from "./index.module.scss";

const languages = [
  { id: "en", label: "English" },
  { id: "es", label: "Español" },
];


const LanguageCheckbox = ({ onChange }) => {
  const [selected, setSelected] = useState(null);

  const toggleLanguage = (id) => {
    const newSelected = selected === id ? null : id;
    setSelected(newSelected);
    if (onChange) {
      onChange(newSelected);
    }
  };

  return (
    <div className={styles.wrapper}>
      {languages.map((lang) => {
        const isChecked = selected === lang.id;

        return (
          <label key={lang.id} className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => toggleLanguage(lang.id)}
            />

            <span
              className={`${styles.box} ${isChecked ? styles.checked : ""}`}
            >
              {isChecked && <FaCheck />}
            </span>

            <span className={styles.label}>{lang.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default LanguageCheckbox;
