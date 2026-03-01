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
    <div className={styles.summary}>
      <h4>Your Config</h4>
      <p>
        Model:{" "}<span>{t(selectedModel || '--')}</span>
      </p>
      <p>
        Exterior Finish:{" "}<span>{t(exteriorFinishes.find((c) => c.modelName === selectedColor)?.colorName || '--')}</span>
      </p>
      <p>
         Interior Cabinetry Colour:{" "}<span>{t(selectedInteriorOption?.colorName || '--')}</span>
      </p>
      <p>
        Worktop Selection:{" "}<span>{t(selectedCountertopOption?.colorName || '--')}</span>
      </p>
       <p>
        Door Configuration:{" "}<span>{t(selectedDoorConfigOption?.title || '--')}</span>  
      </p>
       <p>
        BBQ Style:{" "}<span>{t(selectedBBQStyleOption?.title || '--')}</span>  
      </p>
    {selectedInstallationRequirementOptions && selectedInstallationRequirementOptions.length > 0 && (
      <div>
        Installation Requirements:{" "}
        <div>
          {selectedInstallationRequirementOptions.map((q) => (
            <div key={q?.key}>
              <strong style={{ color: "#f7502f" }}>{q?.label}:</strong> <br />
              {q?.answer?.customValue || q?.answer?.option || '--'}
            </div>
          ))}
        </div>
      </div>
    )}

      {additionalNotes && (
        <p>
          Additional Notes: <span>{additionalNotes || '--'}</span>
        </p>
      )}
    </div>
  );
}
