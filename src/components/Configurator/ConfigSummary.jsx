import styles from "./index.module.scss";

export default function ConfigSummary({ config }) {
  return (
    <div className={styles.summary}>
      <h4>Your Config</h4>
      <p>
        Model : <span>{config.model || "-"}</span>
      </p>
      <p>
        Color : <span>{config.color || "-"}</span>
      </p>
      <p>
        Appliances:{" "}
        {/* {config.appliances.length ? config.appliances.join(", ") : "-"} */}
      </p>
      <p>
        Features:
        {/* {config.features.length ? config.features.join(", ") : "-"} */}
      </p>
      {/* <h4>£{config.price.toLocaleString()}</h4> */}
    </div>
  );
}
