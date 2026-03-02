import styles from "./index.module.scss";
import { useAppSelector } from "@/store/hooks";
import { products } from "@/utils/exteriorInteriorFinish";
import { useTranslation } from "next-i18next";
import { exteriorFinishes } from "@/utils/exteriorInteriorFinish";
import {
  interiorCabinetBlockColours,
  interiorCabinetsWoodGrainTransfer,
} from "@/utils/exteriorInteriorFinish";

import { countertopStainlessSteelTitle, countertopSinteredStoneTitle  } from "@/utils/exteriorInteriorFinish";

import { doorCongiguration } from "@/utils/exteriorInteriorFinish";
import { bbqStyle } from "@/utils/exteriorInteriorFinish";

import { questions } from "@/utils/exteriorInteriorFinish";

export default function ConfigSummary() {
  const selectedModel = useAppSelector((state) => state.configurator.model);
  const selectedColor = useAppSelector((state) => state.configurator.color);
  const selectedInterior = useAppSelector((state) => state.configurator.interior);
  const selectedCountertop = useAppSelector((state) => state.configurator.counterTop);
  const selectedDoorConfig = useAppSelector((state) => state.configurator.doorConfig);
  const selectedBBQStyle = useAppSelector((state) => state.configurator.bbqStyle);

  const margedInteriorOptions = [...interiorCabinetBlockColours, ...interiorCabinetsWoodGrainTransfer];
  const selectedInteriorOption = margedInteriorOptions.find((c) => c.modelName === selectedInterior);


  const margedCountertopOptions = [...countertopStainlessSteelTitle, ...countertopSinteredStoneTitle];
  const selectedCountertopOption = margedCountertopOptions.find((c) => c.modelName === selectedCountertop);
  const selectedDoorConfigOption = doorCongiguration.find((c) => c.id === selectedDoorConfig);
  const selectedBBQStyleOption = bbqStyle.find((c) => c.id === selectedBBQStyle);
  const installationRequirements = useAppSelector((state) => state.configurator.installationRequirements);
  
  const selectedInstallationRequirementOptions = questions.map((q) => {
    const answer = installationRequirements[q.key];
    if (!answer) return null; 
    return { ...q, answer };
  }).filter(Boolean);
   

  const additionalNotes = installationRequirements.additionalNotes || "";

  const { t } = useTranslation("common");
  
  return (
    selectedModel || selectedInterior || selectedColor || selectedCountertop || selectedDoorConfig || selectedBBQStyle || (selectedInstallationRequirementOptions && selectedInstallationRequirementOptions.length > 0) || additionalNotes ? (
    <div className={styles.summary}>
      <h4>{t('your_config')}</h4>
     {selectedModel &&  <p>
        {t('model')} <span>{t(selectedModel || '--')}</span>
      </p>}
      {selectedColor && (
        <p>
          {t('exterior_finish')} <span>{t(exteriorFinishes.find((c) => c.modelName === selectedColor)?.colorName || '--')}</span>
        </p>
      )}
      {selectedInteriorOption && (
        <p>
           {t('interior_cabinetry_colour')} <span>{t(selectedInteriorOption?.colorName || '--')}</span>
      </p>
      )}
      {selectedCountertopOption && (
        <p>
          {t('worktop_selection')} <span>{t(selectedCountertopOption?.colorName || '--')}</span>
        </p>
      )}
      {selectedDoorConfigOption && (
        <p>
          {t('door_configuration')} <span>{t(selectedDoorConfigOption?.title || '--')}</span>  
        </p>
      )}
      {selectedBBQStyleOption && (
        <p>
          {t('bbq_style')} <span>{t(selectedBBQStyleOption?.title || '--')}</span>  
        </p>
      )}
    {selectedInstallationRequirementOptions && selectedInstallationRequirementOptions.length > 0 && (
      <div>
        {t('installation_requirements')} 
        <div>
          {selectedInstallationRequirementOptions.map((q) => (
            <div key={q?.key}>
              <strong style={{ color: "#f7502f" }}>{t(q?.label)}:</strong> <br />
              {q?.answer?.customValue || q?.answer?.option || '--'}
            </div>
          ))}
        </div>
      </div>
    )}

      {additionalNotes && (
        <p>
          {t('additional_notes')} <span>{additionalNotes || '--'}</span>
        </p>
      )}
    </div>
  ) : null)
}
