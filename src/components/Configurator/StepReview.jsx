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

import { useAppSelector } from "@/store/hooks";

import ConfirmationModal from "./ConfirmationModal";
import { useRouter } from "next/router";
import { current } from "@reduxjs/toolkit";

const StepReview = ({ data }) => {
  const router = useRouter();
  const currentLocale = router.locale;
  const selectedModel = useAppSelector((state) => state.configurator.model);
  const selectedColor = useAppSelector((state) => state.configurator.color);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // setModalOpen(true);
    // // Here you would also send the email to sales@bbqpodspain.com
    const submissionData = {
      ...formData,
      model: t(selectedModel),
      color: exteriorFinishes.find((c) => c.modelName === selectedColor)?.colorName,
      interior: selectedInteriorOption?.colorName,
      countertop: selectedCountertopOption?.colorName,
      doorConfig: selectedDoorConfigOption?.title,
      bbqStyle: selectedBBQStyleOption?.title,
      installationRequirements: selectedInstallationRequirementOptions.map((q) => ({
        label: q.label,
        answer: q.answer?.customValue || q.answer?.option || "--",
      })),
      additionalNotes: additionalNotes || "--",
      currentLocale,
    };
     
    console.log("Final form data to submit:", JSON.stringify(submissionData, null, 2));
    // Reset form or show success message as needed
  };

  return (
    <>
      <div className={styles.stepHeader}>
        <h2>Your Details</h2>
        <p>
          Please provide your information so we can review your configuration
          and contact you to finalise pricing, availability and installation
          planning.
        </p>
      </div>
      {/* <div className={styles.infoWrap}>
        <h3>Your Configuration</h3>
        <div className={styles.reviewContainer}>
          <div className={styles.reviewImg}>
            <div className={styles.reviewImgPlaceholder}>
              <Image
                src={hero1.src}
                alt="Camel Grey Sand"
                width={400}
                height={260}
              />
            </div>
          </div>
          <div className={styles.reviewContent}>
            <div className={styles.reviewContentInnerTop}>
              <h5>
                Starting Price : <span>From £15,999</span>
              </h5>
              <p>
                * Submit to receive your personalised quote based on your
                configuration.
              </p>
            </div>
            <div className={styles.reviewContentInnerBottom}>
              <div className={styles.RevViewDetails}>
                <h6>Model</h6>
                <h4>A-Pro</h4>
                <p>All-Weather Luxury with Motorised Awning</p>
              </div>
              <div className={styles.RevViewDetails}>
                <h6>Exterior Color</h6>
                <p>Black Sand</p>
                <small>IEPC-A10</small>
              </div>
              <div className={styles.RevViewDetails}>
                <h6>Countertop</h6>
                <p>Stainless Steel - Rhino Skin</p>
                <small>SS-A01</small>
              </div>
              <div className={styles.RevViewDetails}>
                <h6>Interior Finish</h6>
                <p>Powder Coated - Silver Grey</p>
                <small>IEPC-A06</small>
              </div>
              <div className={styles.RevViewDetails}>
                <h6>Appliances</h6>
                <p>• 46" BBQ Grill</p>
              </div>
              <div className={styles.RevViewDetails}>
                <h6>Optional Features</h6>
                <p>• Ecological Fish Pond</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className={styles.infoWrap}>
        <h3>Your Contact Information</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.information}>
            <div className={styles.informationLeft}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name</label>
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
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
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
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
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
              <div className={styles.formGroup}>
                <label>
                  Installation Address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  name="installStreet"
                  placeholder="Street Address"
                  className={styles.formInput}
                  value={formData.installStreet || ""}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="installCity"
                  placeholder="Town / City"
                  className={styles.formInput}
                  value={formData.installCity || ""}
                  onChange={handleChange}
                  required
                  style={{ marginTop: 8 }}
                />
                <input
                  type="text"
                  name="installPostcode"
                  placeholder="Postcode"
                  className={styles.formInput}
                  value={formData.installPostcode || ""}
                  onChange={handleChange}
                  required
                  style={{ marginTop: 8 }}
                />
                <input
                  type="text"
                  name="installProvince"
                  placeholder="Province"
                  className={styles.formInput}
                  value={formData.installProvince || ""}
                  onChange={handleChange}
                  required
                  style={{ marginTop: 8 }}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="howDidYouHear">
                  How did you hear about us?{" "}
                  <span style={{ color: "#888", fontWeight: 400 }}>
                    (Optional)
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
                    Select an option
                  </option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral</option>
                  <option value="Driving past showroom">
                    Driving past showroom
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.informationRight}>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={styles.messageInput}
                  value={formData.message || ""}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className={styles.informationBtm}>
              <button type="submit" className={styles.submitBtn}>
                Request Personalised Quote 🎄
              </button>
              <p>
                Submitting this form does not process payment. A member of our
                team will contact you to confirm your project details.
              </p>
            </div>
          </div>
        </form>
      </div>
      <ConfirmationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        orderDetails={
          <div>
            <p>
              <b>Name:</b> {formData.fullName}
            </p>
            <p>
              <b>Email:</b> {formData.email}
            </p>
            <p>
              <b>Phone:</b> {formData.phone}
            </p>
            <p>
              <b>Installation Address:</b>
              <br />
              {formData.installStreet}
              <br />
              {formData.installCity}, {formData.installProvince}{" "}
              {formData.installPostcode}
            </p>
            <p>
              <b>How did you hear about us?</b> {formData.howDidYouHear}
            </p>
            <p>
              <b>Message:</b> {formData.message}
            </p>
            {/* Add more details/specs/price/model as needed */}
          </div>
        }
      />
    </>
  );
};
export default StepReview;
