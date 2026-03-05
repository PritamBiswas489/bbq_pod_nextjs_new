import Image from "next/image";
import styles from "./index.module.scss";

import hero1 from "@/assets/front/images/image-shade/tree-bark.webp";
import hero2 from "@/assets/front/images/image-shade/rhino-skin.webp";
import hero3 from "@/assets/front/images/image-shade/aurora-white.webp";
import hero4 from "@/assets/front/images/image-shade/stone-saint-blanc.webp";
import hero5 from "@/assets/front/images/image-shade/garda-belly-gold.webp";
import hero6 from "@/assets/front/images/image-shade/marsha-gray.webp";
import hero7 from "@/assets/front/images/image-shade/marsha-brown.webp";
import hero8 from "@/assets/front/images/image-shade/titanium-blue.webp";
import hero9 from "@/assets/front/images/image-shade/saronlan.webp";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setCounterTop } from "@/store/configurator.slice";

import { countertopStainlessSteelTitle, countertopSinteredStoneTitle  } from "@/utils/exteriorInteriorFinish";

import { FaCheck } from "react-icons/fa";
import { useTranslation } from "next-i18next";

 
const StepCountertop = () => {
  const { t } = useTranslation("common");
  const value = useAppSelector((state) => state.configurator.counterTop);
  console.log("selected countertop in step countertop", value);
  const dispatch = useAppDispatch();
  const onChange = (countertop) => {
   
    dispatch(setCounterTop(countertop));
  };
  return (
    <>
      <div className={styles.stepHeader}>
        <h2>{t('worktop_selection')}</h2>
        <p>{t('select_preferred_worktop')}</p>
      </div>


       <div className={styles.divider}>
              <h5>{t('stainless_steel')} ({countertopStainlessSteelTitle.length})</h5>
              <div className={styles.grid}>
                {countertopStainlessSteelTitle.map((c) => (
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
              <h5>{t('sintered_stone')} ({countertopSinteredStoneTitle.length})</h5>
              <div className={styles.grid}>
                {countertopSinteredStoneTitle.map((c) => (
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
      

       
    </>
  );
};
export default StepCountertop;
