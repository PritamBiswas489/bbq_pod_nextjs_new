import styles from "./index.module.scss";

export default function ConfigSummary({ config }) {
  return (
    <div className={styles.summary}>
      <h5>Your Config</h5>
      <p>Model: {config.model || "-"}</p>
      <p>Color: {config.color || "-"}</p>
      <p>
        Appliances:{" "}
        {config.appliances.length ? config.appliances.join(", ") : "-"}
      </p>
      <p>
        Features: {config.features.length ? config.features.join(", ") : "-"}
      </p>
      <hr />
      <h4>£{config.price.toLocaleString()}</h4>
    </div>
  );
}
