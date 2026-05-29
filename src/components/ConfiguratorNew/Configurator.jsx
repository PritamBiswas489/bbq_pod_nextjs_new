"use client";

import { useState, useEffect } from "react";
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
import {setModel, setColor, setInterior, setCounterTop, setDoorConfig, setBBQStyle, setApplianceGas, setApplianceExtractor, setApplianceTv, setApplianceSink, setApplianceFridge, setInstallationRequirements, setCheckoutData, setProductTotalPrice} from "@/store/configurator.slice";
import { products, extractorAndTv, onlyextractor, onlyTv, sinkOptions, fridgeStyle } from "@/utils/exteriorInteriorFinish";
import { productsPrice, sinteredStonePrice, rollerBlindPriceReduction } from "@/utils/productsPrice";
import { countertopSinteredStoneTitle } from "@/utils/exteriorInteriorFinish";

export default function Configurator() {
  const { t } = useTranslation('common');
  const [step, setStep] = useState(0);
   
  const data = useAppSelector((state) => state.configurator);
  const isAero = data.model?.replace('ProductName', '').toUpperCase() === 'AERO';
  const TOTAL_STEPS = isAero ? 7 : 8;
  const selectedProduct = products.find((p) => p.nameKey === data.model);
  const dispatch = useAppDispatch();
  const selectedProductPrice = useAppSelector((state) => state.configurator.productTotalPrice);
 


  useEffect(() => {
    let totalPrice = 0;
    if (data.model) {
      const productName  = data.model.replace('ProductName', '').toUpperCase();
    
      const basePrice = productsPrice[productName] || 0;
      totalPrice+= basePrice;
    }
    if(data.counterTop) {
      const isSinteredStone = countertopSinteredStoneTitle.some(c => c.modelName === data.counterTop);
      if(isSinteredStone) {
        const productName  = data.model.replace('ProductName', '').toUpperCase();
        const sinteredStonePriceValue = sinteredStonePrice[productName] || 0;
        totalPrice+= sinteredStonePriceValue;
      }
    }
    if(data.doorConfig === 'roller_style') {
      const productName  = data.model.replace('ProductName', '').toUpperCase();
      const rollerBlindPriceReductionValue = rollerBlindPriceReduction[productName] || 0;
      totalPrice-= rollerBlindPriceReductionValue;
    }
    if (data.applianceGas) {
      totalPrice += data.applianceGas.priceAddition || 0;
    }
    if (data.applianceExtractor) {
      totalPrice += data.applianceExtractor.priceAddition || 0;
    }
    if (data.applianceTv) {
      totalPrice += data.applianceTv.priceAddition || 0;
    }
    if (data.applianceSink) {
      totalPrice += data.applianceSink.priceAddition || 0;
    }
    if (data.applianceFridge) {
      totalPrice += data.applianceFridge.priceAddition || 0;
    }
    
    dispatch(setProductTotalPrice(totalPrice));
  },  [data.model, data.color, data.interior, data.counterTop, data.doorConfig, data.applianceGas, data.applianceExtractor, data.applianceTv, data.applianceSink, data.applianceFridge, data.installationRequirements]);

  

      
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
      case 4: {
        const modelKey = data.model?.replace("ProductName", "").toUpperCase();
        const hasCombinedExtractorTv = (extractorAndTv[modelKey] || []).length > 0;
        const hasExtractorOnly = (onlyextractor[modelKey] || []).length > 0;
        const hasTvOnly = (onlyTv[modelKey] || []).length > 0;
        const useSeparatePanels = hasExtractorOnly || hasTvOnly;
        const needsExtractor = useSeparatePanels ? hasExtractorOnly : hasCombinedExtractorTv;
        const needsTv = useSeparatePanels ? hasTvOnly : false;
        const hasSink = (sinkOptions[modelKey] || []).length > 0;
        const hasFridge = (fridgeStyle[modelKey] || []).length > 0;
        const applianceReady =
          data.applianceGas &&
          (!needsExtractor || data.applianceExtractor) &&
          (!needsTv || data.applianceTv) &&
          (!hasSink || data.applianceSink) &&
          (!hasFridge || data.applianceFridge);
        return isAero ? applianceReady : data.doorConfig;
      }
      case 5: {
        const modelKey = data.model?.replace("ProductName", "").toUpperCase();
        const hasCombinedExtractorTv = (extractorAndTv[modelKey] || []).length > 0;
        const hasExtractorOnly = (onlyextractor[modelKey] || []).length > 0;
        const hasTvOnly = (onlyTv[modelKey] || []).length > 0;
        const useSeparatePanels = hasExtractorOnly || hasTvOnly;
        const needsExtractor = useSeparatePanels ? hasExtractorOnly : hasCombinedExtractorTv;
        const needsTv = useSeparatePanels ? hasTvOnly : false;
        const hasSink = (sinkOptions[modelKey] || []).length > 0;
        const hasFridge = (fridgeStyle[modelKey] || []).length > 0;
        const applianceReady =
          data.applianceGas &&
          (!needsExtractor || data.applianceExtractor) &&
          (!needsTv || data.applianceTv) &&
          (!hasSink || data.applianceSink) &&
          (!hasFridge || data.applianceFridge);
        return isAero
          ? ["power", "water", "drainage", "surface", "access"].every(
              (key) => key in data.installationRequirements
            )
          : applianceReady;
      }
      case 6:
        return isAero
          ? true
          : ["power", "water", "drainage", "surface", "access"].every(
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
    <>
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
            {step === 4 && !isAero && (
              <StepDoorConfig
              />
            )}
            {((!isAero && step === 5) || (isAero && step === 4)) && (
              <StepBbqStyle   
              />
            )}
            {((!isAero && step === 6) || (isAero && step === 5)) && <StepInstallationRequirements
              />}
            {((!isAero && step === 7) || (isAero && step === 6)) && <StepReview  backtoStart={backtoStart} />}
          </div>
        </Col>
        <Col md={4} className={styles.sidebar}>
          <ConfigSummary isAero={isAero} totalPrice={selectedProductPrice?.toLocaleString()} />
        </Col>
      </Row>
    </Container>

    
    {data.model && selectedProduct && (
      <div className={styles.floatingPrice}>
        <div className={styles.floatingPriceInner}>
          <div className={styles.floatingPriceLeft}>
            <span className={styles.floatingPriceSublabel}>{t('model')}</span>
            <span className={styles.floatingPriceModelName}>{t(data.model)}</span>
          </div>
          <div className={styles.floatingPriceDivider} />
          <div className={styles.floatingPriceRight}>
            <span className={styles.floatingPriceSublabel}>Total Price</span>
            <span className={styles.floatingPriceValue}>€{selectedProductPrice?.toLocaleString()}</span>
          </div>
          <div className={styles.floatingPriceDivider} />
          <div className={styles.floatingPriceActions}>
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
        </div>
      </div>
    )}
    </>
  );
}
