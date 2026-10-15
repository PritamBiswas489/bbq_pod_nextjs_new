import React from "react";
import styles from "./PodPreview.module.scss";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { exteriorFinishes, interiorCabinetBlockColours, interiorCabinetsWoodGrainTransfer, countertopStainlessSteelTitle, countertopSinteredStoneTitle } from "@/utils/exteriorInteriorFinish";
const models = {
    'coreProductName':'core',
    'primeProductName':'prime',
    'apexProductName':'apex',
    'pinnacleProductName':'pinnacle',
    'horizon220ProductName':'core',
    'horizon270ProductName':'prime'
};
const PodPreview = () => {
  const data = useAppSelector((state) => state.configurator);  

  const pod = exteriorFinishes.find(finish => finish.modelName === data.color);
  const cabinet = [...interiorCabinetBlockColours, ...interiorCabinetsWoodGrainTransfer].find(finish => finish.modelName === data.interior); 
  const worktop = [...countertopStainlessSteelTitle, ...countertopSinteredStoneTitle].find(finish => finish.modelName === data.counterTop); 

  console.log("selected worktop in PodPreview", worktop);
  

  return (
    <div className={styles.previewFrame}>
      <iframe
        src={`/pod/iframe.html?model=${models[data.model]}&pod=${pod?.previewId}&cabinet=${cabinet?.previewId}&worktop=${worktop?.previewId}`}
        title="BBQ Pod design preview"
      />
    </div>
  );
};

export default PodPreview;