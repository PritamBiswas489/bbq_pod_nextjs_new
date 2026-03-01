import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { exteriorFinishes } from "@/utils/exteriorInteriorFinish";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setColor } from "@/store/configurator.slice";


const StepColor = () => {
  const value = useAppSelector((state) => state.configurator.color);
  const dispatch = useAppDispatch();
  const onChange = (color) => {
    dispatch(setColor(color));
  };
  return (
    <div className="">
      <div className={styles.stepHeader}>
        <h2>Exterior Finish</h2>
        <p>Select the external colour and finish to complement your property.</p>
      </div>
      <div className={styles.grid}>
        {exteriorFinishes.map((c) => (
          <div
            key={c.modelName}
            className={`${styles.card} ${value === c.modelName ? styles.active : ""}`}
            onClick={() => onChange(c.modelName)}
          >
            <div className={styles.imgWrap}>
             {value === c.modelName && (
                <div className={styles.check}>
                  <FaCheck />
                </div>
              )}
              <div className={styles.imageBox}>
                <Image src={c.image} alt="" width={800} height={600} />
              </div> 
          </div>
            <div className={styles.info}>
              <p className={styles.name}>{c.colorName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepColor;
