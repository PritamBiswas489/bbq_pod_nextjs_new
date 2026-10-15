import React from "react";
import styles from "./PodPreview.module.scss";
import { useAppSelector } from "@/store/hooks";
import { useTranslation } from "next-i18next";
import {
  countertopSinteredStoneTitle,
  countertopStainlessSteelTitle,
  exteriorFinishes,
  interiorCabinetBlockColours,
  interiorCabinetsWoodGrainTransfer,
} from "@/utils/exteriorInteriorFinish";

const models = {
  coreProductName: "core",
  primeProductName: "prime",
  apexProductName: "apex",
  pinnacleProductName: "pinnacle",
  horizon220ProductName: "core",
  horizon270ProductName: "prime",
};

const PodPreview = () => {
  const { t } = useTranslation();
  const data = useAppSelector((state) => state.configurator);

  const pod = exteriorFinishes.find((finish) => finish.modelName === data.color);
  const cabinet = [
    ...interiorCabinetBlockColours,
    ...interiorCabinetsWoodGrainTransfer,
  ].find((finish) => finish.modelName === data.interior);
  const worktop = [
    ...countertopStainlessSteelTitle,
    ...countertopSinteredStoneTitle,
  ].find((finish) => finish.modelName === data.counterTop);
  const isHorizon =
    data.model === "horizon220ProductName" ||
    data.model === "horizon270ProductName";

  return (
    <div className={styles.previewFrame}>
      <div className={styles.canvas}>
        <iframe
          src={`/pod/iframe.html?model=${models[data.model]}&pod=${pod?.previewId}&cabinet=${cabinet?.previewId}&worktop=${worktop?.previewId}`}
          title="BBQ Pod design preview"
        />
      </div>
      {isHorizon && (
        <div className={styles.horizonNote}>
          <h3>{t('stepHorizonHeading')}</h3>
          <p>{t('stepHorizonDescription')}</p>
        </div>
      )}
    </div>
  );
};

export default PodPreview;