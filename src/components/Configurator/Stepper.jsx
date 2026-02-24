import styles from "./index.module.scss";

export default function Stepper({ total, active }) {
  const percent = (active / (total - 1)) * 100;

  return (
    <div className={styles.stepperWrapper}>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${percent}%` }} />
      </div>

      <div className={styles.steps}>
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`${styles.stepCircle} ${
              i <= active ? styles.active : ""
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
