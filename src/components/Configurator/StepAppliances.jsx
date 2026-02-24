import styles from "./index.module.scss";

const appliances = ["BBQ Grill", "Fridge", "Audio System"];

export default function StepAppliances({ value, onChange }) {
  const toggle = (item) => {
    onChange(
      value.includes(item) ? value.filter((v) => v !== item) : [...value, item],
    );
  };

  return (
    <div className={styles.grid}>
      {appliances.map((a) => (
        <div
          key={a}
          className={`${styles.card} ${value.includes(a) ? styles.active : ""}`}
          onClick={() => toggle(a)}
        >
          {a}
        </div>
      ))}
    </div>
  );
}
