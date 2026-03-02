"use client";

import { useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Stepper from "./Stepper";
import StepModel from "./StepModel";
import StepColor from "./StepColor";
import StepCountertop from "./StepCountertop";
import StepInterior from "./StepInterior";
import StepDoorConfig from "./StepDoorConfig";
import StepFeatures from "./StepFeatures";
import StepReview from "./StepReview";
import styles from "./index.module.scss";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import ConfigSummary from "./ConfigSummary";
import StepBbqStyle from "./StepBbqStyle";
import StepInstallationRequirements from "./StepInstallationRequirements";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {setModel, setColor, setInterior, setCounterTop, setDoorConfig, setBBQStyle, setInstallationRequirements, setCheckoutData} from "@/store/configurator.slice";

const TOTAL_STEPS = 8;

export default function Configurator() {
  const { t } = useTranslation('common');
  const [step, setStep] = useState(0);
  const data = useAppSelector((state) => state.configurator);

  const canNext = () => {
    switch (step) {
      case 0:
        return data.model;
      case 1:
        return data.color;
      case 2:
        return data.interior;
      case 3:
        return data.counterTop;
      case 4:
        return data.doorConfig;
      case 5:
        return data.bbqStyle;
      case 6:
        return ["power", "water", "drainage", "surface", "access"].every(
          (key) => key in data.installationRequirements
        );
      default:
        return true;
    }
  };

  
  const handleNext = () => {
    setStep(step + 1);
    setTimeout(() => {
      const el = document.getElementById("configurator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handlePrev = () => {
    setStep(step - 1);
    setTimeout(() => {
      const el = document.getElementById("configurator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const backtoStart = () => {
    setStep(0);
    setTimeout(() => {
      const el = document.getElementById("configurator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  return (
    <Container id="configurator" className={styles.wrapper}>
      <Stepper total={TOTAL_STEPS} active={step} />

      <Row>
        <Col md={8}>
          <div className={styles.stepContent}>
            {step === 0 && (
              <StepModel/>
            )}
            {step === 1 && (
              <StepColor/>
            )}
            {step === 2 && (
               <StepInterior
              />
            )}
            {step === 3 && (
               <StepCountertop
              />
            )}
            {step === 4 && (
              <StepDoorConfig
              />
            )}
            {step === 5 && (
              <StepBbqStyle   
              />
            )}
            {step === 6 && <StepInstallationRequirements
              />}
            {step === 7 && <StepReview  backtoStart={backtoStart} />}
          </div>
        </Col>
        <Col md={4} className={styles.sidebar}>
          <ConfigSummary />
        </Col>
      </Row>

      <div className={styles.nav}>
        <Button
          className={styles.previous}
          disabled={step === 0}
          onClick={handlePrev}
        >
          <GrFormPreviousLink /> {t('previous')}
        </Button>

      {step < TOTAL_STEPS - 1 && (
        <Button
          className={styles.next}
          disabled={!canNext()}
          onClick={handleNext}
        >
          {t('continue')} <GrFormNextLink />
        </Button>
      )}
      </div>
    </Container>
  );
}
