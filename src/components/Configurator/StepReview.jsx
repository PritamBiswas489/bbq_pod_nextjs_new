import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import hero1 from "@/assets/front/images/hero-1.jpg";

import { useTranslation } from "next-i18next";
import { exteriorFinishes } from "@/utils/exteriorInteriorFinish";
import {
  interiorCabinetBlockColours,
  interiorCabinetsWoodGrainTransfer,
} from "@/utils/exteriorInteriorFinish";

import {
  countertopStainlessSteelTitle,
  countertopSinteredStoneTitle,
} from "@/utils/exteriorInteriorFinish";

import { doorCongiguration } from "@/utils/exteriorInteriorFinish";
import { bbqStyle } from "@/utils/exteriorInteriorFinish";

import { questions } from "@/utils/exteriorInteriorFinish";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setCheckoutData } from "@/store/configurator.slice";

import ConfirmationModal from "./ConfirmationModal";
import { useRouter } from "next/router";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const StepReview = ({ backtoStart }) => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const currentLocale = router.locale;
  const selectedModel = useAppSelector((state) => state.configurator.model);
  const selectedColor = useAppSelector((state) => state.configurator.color);
  const [submitbtndisabled, setSubmitbtndisabled] = useState(false);
  const selectedInterior = useAppSelector(
    (state) => state.configurator.interior,
  );
  const selectedCountertop = useAppSelector(
    (state) => state.configurator.counterTop,
  );
  const selectedDoorConfig = useAppSelector(
    (state) => state.configurator.doorConfig,
  );
  const selectedBBQStyle = useAppSelector(
    (state) => state.configurator.bbqStyle,
  );

  const margedInteriorOptions = [
    ...interiorCabinetBlockColours,
    ...interiorCabinetsWoodGrainTransfer,
  ];
  const selectedInteriorOption = margedInteriorOptions.find(
    (c) => c.modelName === selectedInterior,
  );

  const margedCountertopOptions = [
    ...countertopStainlessSteelTitle,
    ...countertopSinteredStoneTitle,
  ];
  const selectedCountertopOption = margedCountertopOptions.find(
    (c) => c.modelName === selectedCountertop,
  );
  const selectedDoorConfigOption = doorCongiguration.find(
    (c) => c.id === selectedDoorConfig,
  );
  const selectedBBQStyleOption = bbqStyle.find(
    (c) => c.id === selectedBBQStyle,
  );
  const installationRequirements = useAppSelector(
    (state) => state.configurator.installationRequirements,
  );

  const selectedInstallationRequirementOptions = questions
    .map((q) => {
      const answer = installationRequirements[q.key];
      if (!answer) return null;
      return { ...q, answer };
    })
    .filter(Boolean);

  const additionalNotes = installationRequirements.additionalNotes || "";

  const { t } = useTranslation("common");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitbtndisabled(true);
    dispatch(setCheckoutData(formData));
    // setModalOpen(true);
    // // Here you would also send the email to sales@bbqpodspain.com
    const submissionData = {
      ...formData,
      model: t(selectedModel),
      color: exteriorFinishes.find((c) => c.modelName === selectedColor)
        ?.colorName,
      interior: selectedInteriorOption?.colorName,
      countertop: selectedCountertopOption?.colorName,
      doorConfig: selectedDoorConfigOption?.title,
      bbqStyle: selectedBBQStyleOption?.title,
      installationRequirements: selectedInstallationRequirementOptions.map(
        (q) => ({
          label: t(q.label),
          answer: q.answer?.customValue || q.answer?.option || "--",
        }),
      ),
      additionalNotes: additionalNotes || "--",
      currentLocale,
    };

    console.log(
      "Final form data to submit:",
      JSON.stringify(submissionData, null, 2),
    );
    // Reset form or show success message as needed
    const sendEmail = async () => {
      try {
        await axios.post("/api/send-order-email", submissionData);
        setModalOpen(true);

        setFormData({});
        setSubmitbtndisabled(false);
      } catch (err) {
        console.error("Failed to send email:", err);
        alert(t("stepReview.errorSubmit"));
        setSubmitbtndisabled(false);
      }
    };

    sendEmail();
  };

  return (
    <>
      <div className={styles.stepHeader}>
        <h2>{t("stepReview.yourDetails")}</h2>
        <p>{t("stepReview.provideInfo")}</p>
      </div>
      

      <div className={styles.infoWrap}>
        <h3>{t("stepReview.yourContactInfo")}</h3>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col lg={12} md={12} sm={6} xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">{t("stepReview.fullName")}</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={styles.formInput}
                  value={formData.fullName || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="email">{t("stepReview.emailAddress")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">{t("stepReview.phoneNumber")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                  value={formData.phone || ""}
                  onChange={handleChange}
                  required
                />
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className={styles.formGroup}>
                <label>
                  {t("stepReview.installationAddress")}{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <Row>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="installStreet"
                      placeholder={t("stepReview.streetAddress")}
                      className={styles.formInput}
                      value={formData.installStreet || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="installCity"
                      placeholder={t("stepReview.townCity")}
                      className={styles.formInput}
                      value={formData.installCity || ""}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="installPostcode"
                      placeholder={t("stepReview.postcode")}
                      className={styles.formInput}
                      value={formData.installPostcode || ""}
                      onChange={handleChange}
                      required
                      style={{ marginTop: 8 }}
                    />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      name="installProvince"
                      placeholder={t("stepReview.province")}
                      className={styles.formInput}
                      value={formData.installProvince || ""}
                      onChange={handleChange}
                      required
                      style={{ marginTop: 8 }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={6} xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="howDidYouHear">
                  {t("stepReview.howDidYouHear")}{" "}
                  <span style={{ color: "#888", fontWeight: 400 }}>
                    {t("stepReview.optional")}
                  </span>
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  className={styles.formInput}
                  value={formData.howDidYouHear || ""}
                  onChange={handleChange}
                  style={{ marginTop: 4 }}
                >
                  <option value="" disabled>
                    {t("stepReview.selectOption")}
                  </option>
                  <option value="Instagram">{t("stepReview.instagram")}</option>
                  <option value="Google">{t("stepReview.google")}</option>
                  <option value="Referral">{t("stepReview.referral")}</option>
                  <option value="Driving past showroom">
                    {t("stepReview.drivingPastShowroom")}
                  </option>
                  <option value="Other">{t("stepReview.other")}</option>
                </select>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="message">{t("stepReview.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={styles.messageInput}
                  value={formData.message || ""}
                  onChange={handleChange}
                ></textarea>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className={styles.informationBtm}>
                <button
                  type="submit"
                  disabled={submitbtndisabled}
                  className={styles.submitBtn}
                >
                  {submitbtndisabled ? (
                    <span
                      style={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      {t("stepReview.sending")}
                    </span>
                  ) : (
                    t("stepReview.requestQuote")
                  )}
                </button>

                <p>{t("stepReview.noPayment")}</p>
              </div>
            </Col>
          </Row>
          {/* <div className={styles.information}>
            <div className={styles.informationLeft}>
              
              
              
              
             
            </div>
            <div className={styles.informationRight}>
              
            </div>
            
          </div> */}
        </form>
      </div>
      <ConfirmationModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          backtoStart();
        }}
      />
    </>
  );
};
export default StepReview;
