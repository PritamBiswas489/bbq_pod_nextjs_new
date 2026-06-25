import React from "react";
import styles from "./index.module.scss";
import { FaCheck } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import Image from "next/image";

import { doorCongiguration } from "@/utils/exteriorInteriorFinish";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setDoorConfig } from "@/store/configurator.slice";
import { rollerBlindPriceReduction } from "@/utils/productsPrice";
import { useTranslation } from "next-i18next";

const StepDoorConfig = () => {
  const { t } = useTranslation("common");
  const value = useAppSelector((state) => state.configurator.doorConfig);
  const model = useAppSelector((state) => state.configurator.model);
  const dispatch = useAppDispatch();
  const onChange = (doorConfig) => {
    dispatch(setDoorConfig(doorConfig));
  };
  const modelKey = model?.replace("ProductName", "").toUpperCase();
  const rollerReduction = modelKey ? rollerBlindPriceReduction[modelKey] : 0;
  let filteredDoorConfig = [...doorCongiguration];
  if(modelKey === 'PINNACLE') {
    console.log('Removing metal blind option for Pinnacle model');
      filteredDoorConfig = filteredDoorConfig.filter(item => item.id !== 'metal_blind' && item.id!="roller_style");
  }
  return (
    <>
      <div className="">
        <div className={styles.stepHeader}>
          <h2>{t('door_configuration')}</h2>
          <p>
            {t('choose_door_option')}
          </p>
        </div>

        {/* BBQ Grill */}
        <div className={styles.divider}>
           
          <div className={styles.gridDoorConfig}>
            {filteredDoorConfig.map((item) => (
              <div
                key={item.id}
                className={`${styles.imageCard} ${
                  value === item.id ? styles.selected : ""
                }`}
                onClick={() => onChange(item.id)}
              >
                <Image
                  src={item.img}
                  alt={t(item.id)}
                  width={600}
                  height={600}
                />
                <div className={styles.cardInfo}>
                  <div className={styles.cardLabel}>{t(item.id)}</div>
                  {item.id === "roller_style" && rollerReduction > 0 && (
                    <div className={styles.cardPrice}>− {rollerReduction.toLocaleString()}€</div>
                  )}
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

export default StepDoorConfig;
