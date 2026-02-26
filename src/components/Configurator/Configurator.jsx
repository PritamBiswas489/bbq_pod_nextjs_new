"use client";

import { useState } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Stepper from "./Stepper";
import StepModel from "./StepModel";
import StepColor from "./StepColor";
import StepCountertop from "./StepCountertop";
import StepInterior from "./StepInterior";
import StepAppliances from "./StepAppliances";
import StepFeatures from "./StepFeatures";
import StepReview from "./StepReview";
import styles from "./index.module.scss";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import ConfigSummary from "./ConfigSummary";

const TOTAL_STEPS = 7;

export default function Configurator() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    model: null,
    color: null,
    countertop: null,
    interior: null,
    appliances: null,
    features: null,
  });

  const canNext = () => {
    switch (step) {
      case 0:
        return data.model;
      case 1:
        return data.color;
      case 2:
        return data.countertop;
      case 3:
        return data.interior;
      case 4:
        return data.appliances;
      case 5:
        return data.features;
      default:
        return true;
    }
  };

  return (
    <Container className={styles.wrapper}>
      <Stepper total={TOTAL_STEPS} active={step} />

      <Row>
        <Col md={8}>
          <div className={styles.stepContent}>
            {step === 0 && (
              <StepModel
                value={data.model}
                onChange={(v) => setData({ ...data, model: v })}
              />
            )}
            {step === 1 && (
              <StepColor
                value={data.color}
                onChange={(v) => setData({ ...data, color: v })}
              />
            )}
            {step === 2 && (
              <StepCountertop
                value={data.countertop}
                onChange={(v) => setData({ ...data, countertop: v })}
              />
            )}
            {step === 3 && (
              <StepInterior
                value={data.interior}
                onChange={(v) => setData({ ...data, interior: v })}
              />
            )}
            {step === 4 && (
              <StepAppliances
                value={data.appliances}
                onChange={(v) => setData({ ...data, appliances: v })}
              />
            )}
            {step === 5 && (
              <StepFeatures
                value={data.features}
                onChange={(v) => setData({ ...data, features: v })}
              />
            )}
            {step === 6 && <StepReview data={data} />}
          </div>
        </Col>
        <Col md={4} className={styles.sidebar}>
          <ConfigSummary config={data} />
        </Col>
      </Row>

      <div className={styles.nav}>
        <Button
          variant="outline-dark"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          <GrFormPreviousLink /> Previous
        </Button>

        <Button
          className={styles.next}
          disabled={!canNext()}
          onClick={() => setStep(step + 1)}
        >
          {step === TOTAL_STEPS - 1 ? "Finish" : "Continue"} <GrFormNextLink />
        </Button>
      </div>
    </Container>
  );
}
