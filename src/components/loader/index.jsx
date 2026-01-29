import React from "react";
import style from "./index.module.scss";

const Loader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={style.loaderOverlay}>
      <div className={style.spinnerContainer}>
        <div className={style.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;
