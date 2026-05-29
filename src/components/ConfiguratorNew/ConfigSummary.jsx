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

export default function ConfigSummary({isAero, totalPrice}) {
  const selectedModel = useAppSelector((state) => state.configurator.model);
  const selectedProductPrice = useAppSelector((state) => state.configurator.productTotalPrice);
  const selectedColor = useAppSelector((state) => state.configurator.color);
  const selectedInterior = useAppSelector((state) => state.configurator.interior);
  const selectedCountertop = useAppSelector((state) => state.configurator.counterTop);
  const selectedDoorConfig = useAppSelector((state) => state.configurator.doorConfig);
  const selectedBBQStyle = useAppSelector((state) => state.configurator.bbqStyle);
  const selectedApplianceGas = useAppSelector((state) => state.configurator.applianceGas);
  const selectedApplianceExtractor = useAppSelector((state) => state.configurator.applianceExtractor);
  const selectedApplianceTv = useAppSelector((state) => state.configurator.applianceTv);
  const selectedApplianceSink = useAppSelector((state) => state.configurator.applianceSink);
  const selectedApplianceFridge = useAppSelector((state) => state.configurator.applianceFridge);

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
  const summaryTotalPrice = totalPrice ?? selectedProductPrice?.toLocaleString();

  const ucFirst = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  return (
    selectedModel || selectedInterior || selectedColor || selectedCountertop || selectedDoorConfig || selectedBBQStyle || (selectedInstallationRequirementOptions && selectedInstallationRequirementOptions.length > 0) || additionalNotes ? (
    <div className={styles.summary}>
      <h4>{t('your_config')}</h4>
      {summaryTotalPrice && (
        <div className={styles.summaryTotalPrice}>
          <span className={styles.summaryTotalLabel}>Total Price</span>
          <span className={styles.summaryTotalValue}>€{summaryTotalPrice}</span>
        </div>
      )}
     {selectedModel &&  <p>
        {t('model')} <span>{ucFirst(t(selectedModel || '--'))}</span>
      </p>}
      {selectedColor && (
        <p>
          {t('exterior_finish')} <span>{ucFirst(exteriorFinishes.find((c) => c.modelName === selectedColor)?.colorName || '--')}</span>
        </p>
      )}
      {selectedInteriorOption && (
        <p>
           {t('interior_cabinetry_colour')} <span>{ucFirst(selectedInteriorOption?.colorName || '--')}</span>
      </p>
      )}
      {selectedCountertopOption && (
        <p>
          {t('worktop_selection')} <span>{ucFirst(selectedCountertopOption?.colorName || '--')}</span>
        </p>
      )}
      {selectedDoorConfigOption && !isAero && (
        <p>
          {t('door_configuration')} <span>{ucFirst(selectedDoorConfigOption?.title || '--')}</span>  
        </p>
      )}
      {selectedBBQStyleOption && (
        <p>
          {t('bbq_style')} <span>{ucFirst(selectedBBQStyleOption?.title || '--')}</span>  
        </p>
      )}
      {selectedApplianceGas && (
        <p>
          {t('grill_options_title')} <span>{ucFirst(t(selectedApplianceGas.key))}{selectedApplianceGas.size ? ` — ${selectedApplianceGas.size}` : ''}</span>
        </p>
      )}
      {selectedApplianceExtractor && (
        <p>
          {t('extractor_title')} <span>{ucFirst(t(selectedApplianceExtractor.key))}</span>
        </p>
      )}
      {selectedApplianceTv && (
        <p>
          {t('tv_title')} <span>{ucFirst(t(selectedApplianceTv.key))}</span>
        </p>
      )}
      {selectedApplianceSink && (
        <p>
          {t('sink_title')} <span>{ucFirst(t(selectedApplianceSink.key))}</span>
        </p>
      )}
      {selectedApplianceFridge && (
        <p>
          {t('fridge_title')} <span>{ucFirst(t(selectedApplianceFridge.key))}</span>
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
