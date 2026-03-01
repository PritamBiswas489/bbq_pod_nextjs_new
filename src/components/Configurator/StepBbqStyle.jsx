import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setBBQStyle } from "@/store/configurator.slice";

import { bbqStyle } from "@/utils/exteriorInteriorFinish";

const StepBbqStyle = () => {
  const value = useAppSelector((state) => state.configurator.bbqStyle);
  const dispatch = useAppDispatch();
  const onChange = (bbqStyle) => {
    dispatch(setBBQStyle(bbqStyle));
  };
  return (
    <>
      <div className="">
        <div className={styles.stepHeader}>
          <h2>BBQ Style</h2>
          <p>
            Select your preferred grill type and appliance configuration.
          </p>
        </div>

        {/* BBQ Grill */}
        <div className={styles.divider}>
           
          <div className={styles.gridDoorConfig}>
            {bbqStyle.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={600}
                />
                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{item.title}</div>
                </div>

                {value === item.id && (
                  <div className={styles.check}>
                    <FaCheck />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Rest of sections updated same way */}   
      </div>
    </>
  );
};

export default StepBbqStyle;
