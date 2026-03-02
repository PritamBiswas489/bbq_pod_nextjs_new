import Image from "next/image";
import styles from "./index.module.scss";
import hero1 from "@/assets/front/images/image-shade/camel-grey-sand.webp";
import hero2 from "@/assets/front/images/image-shade/khaki-wood.webp";
import hero3 from "@/assets/front/images/image-shade/black-walnut.webp";
import hero4 from "@/assets/front/images/image-shade/titanium-blue.webp";
import hero5 from "@/assets/front/images/image-shade/italian-black-walnut.webp";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import {
  interiorCabinetBlockColours,
  interiorCabinetsWoodGrainTransfer,
} from "@/utils/exteriorInteriorFinish";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setInterior } from "@/store/configurator.slice";

 
const StepInterior = () => {
  const { t } = useTranslation("common");
  const value = useAppSelector((state) => state.configurator.interior);
  const dispatch = useAppDispatch();
  const onChange = (interior) => {
    dispatch(setInterior(interior));
  };
  return (
    <>
      <div className={styles.stepHeader}>
        <h2>{t('interior_cabinetry_colour')}</h2>
        <p>{t('choose_internal_finish')}</p>
      </div>

      <div className={styles.divider}>
        <h5>{t('block_colours')} ({interiorCabinetBlockColours.length})</h5>
        <div className={styles.grid}>
          {interiorCabinetBlockColours.map((c) => (
            <div
              key={c.code}
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
      <div className={styles.divider}>
        <h5>{t('wood_grain_transfer')} ({interiorCabinetsWoodGrainTransfer.length})</h5>
        <div className={styles.cardGrid}>
          {interiorCabinetsWoodGrainTransfer.map((item) => (
            <div
              key={item.title}
              className={`${styles.imageCard} ${
                value === item.modelName ? styles.selected : ""
              }`}
              onClick={() => onChange(item.modelName)}
            >
              <Image src={item.image} alt={item.title} width={400} height={260} />
              <div className={styles.cardInfo}>
                
                <div className={styles.codeLabel}>{item.colorName}</div>
              </div>

              {value === item.modelName && (
                <div className={styles.check}>
                  <FaCheck />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default StepInterior;
