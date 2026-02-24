import styles from "./index.module.scss";

const features = ["RGB Lighting", "Fish Pond", "Tool Storage"];

export default function StepFeatures({ value, onChange }) {
  const toggle = (item) => {
    onChange(
      value.includes(item) ? value.filter((v) => v !== item) : [...value, item],
    );
  };

  return (
    <div className={styles.grid}>
      {features.map((f) => (
        <div
          key={f}
          className={`${styles.card} ${value.includes(f) ? styles.active : ""}`}
          onClick={() => toggle(f)}
        >
          {f}
        </div>
      ))}
    </div>
  );
}
