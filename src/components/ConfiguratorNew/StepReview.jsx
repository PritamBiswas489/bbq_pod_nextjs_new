import React, { useEffect, useRef, useState } from "react";
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
import { setCheckoutData, setDeliveryCharge } from "@/store/configurator.slice";

import ConfirmationModal from "./ConfirmationModal";
import AddressAutocomplete from "./AddressAutocomplete";
import { useRouter } from "next/router";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { gaEvent } from "@/lib/gtag";

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
  const selectedApplianceGas = useAppSelector((state) => state.configurator.applianceGas);
  const selectedApplianceExtractor = useAppSelector((state) => state.configurator.applianceExtractor);
  const selectedApplianceTv = useAppSelector((state) => state.configurator.applianceTv);
  const selectedApplianceSink = useAppSelector((state) => state.configurator.applianceSink);
  const selectedApplianceFridge = useAppSelector((state) => state.configurator.applianceFridge);
  const selectedProductPrice = useAppSelector((state) => state.configurator.productTotalPrice);

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

  // ---- Delivery / address ----
  const [address, setAddress] = useState(null); // selected Google place
  // quote: { status: 'idle'|'loading'|'ok'|'error', drivingMinutes, drivingTimeText, deliveryCharge }
  const [quote, setQuote] = useState({ status: "idle" });
  const [addressError, setAddressError] = useState(false);
  const quoteRequestId = useRef(0);

  // Clear the delivery charge from the price summary if the user leaves this step
  useEffect(() => {
    return () => {
      dispatch(setDeliveryCharge(0));
    };
  }, [dispatch]);

  const resetQuote = () => {
    quoteRequestId.current++; // ignore any in-flight response
    setAddress(null);
    setQuote({ status: "idle" });
    setAddressError(false);
    dispatch(setDeliveryCharge(0));
  };

  const handleAddressSelect = async (place) => {
    const requestId = ++quoteRequestId.current;
    setAddress(place);
    setAddressError(false);
    setQuote({ status: "loading" });
    dispatch(setDeliveryCharge(0));
    try {
      const { data } = await axios.post("/api/delivery-quote", {
        lat: place.lat,
        lng: place.lng,
      });
      if (requestId !== quoteRequestId.current) return; // stale
      setQuote({ status: "ok", ...data });
      dispatch(setDeliveryCharge(data.deliveryCharge));
    } catch (err) {
      if (requestId !== quoteRequestId.current) return;
      console.error("Delivery quote failed:", err);
      setQuote({ status: "error" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Address must be picked from the list and the quote calculated
    if (!address || quote.status !== "ok") {
      setAddressError(true);
      return;
    }

    setSubmitbtndisabled(true);
    dispatch(setCheckoutData(formData));

    const deliveryCharge = quote.deliveryCharge;
    const totalWithDelivery =
      (selectedProductPrice || 0) + deliveryCharge;

    const submissionData = {
      ...formData,
      // Address fields kept under the old names so the email template keeps working
      installStreet: address.street || address.fullAddress,
      installCity: address.city,
      installPostcode: address.postcode,
      installProvince: address.province,
      // New delivery info
      installationAddress: address.fullAddress,
      installationPlaceId: address.placeId,
      installationLat: address.lat,
      installationLng: address.lng,
      deliveryZone: quote.zone, // "mainland" | "balearic"
      drivingTimeMinutes: quote.drivingMinutes, // null for Balearic Islands
      drivingTime:
        quote.zone === "balearic"
          ? "N/A (Balearic Islands – fixed charge)"
          : quote.drivingTimeText,
      deliveryCharge, // number, €
      deliveryChargeText:
        deliveryCharge === 0 ? "FREE" : `${deliveryCharge.toLocaleString()} €`,
      totalWithDelivery: totalWithDelivery
        ? `${totalWithDelivery.toLocaleString()} €`
        : undefined,
      model: t(selectedModel),
      color: exteriorFinishes.find((c) => c.modelName === selectedColor)
        ?.colorName,
      interior: selectedInteriorOption?.colorName,
      countertop: selectedCountertopOption?.colorName,
      doorConfig: selectedDoorConfigOption?.title,
      bbqStyle: selectedBBQStyleOption?.title,
      applianceGas: selectedApplianceGas
        ? `${t(selectedApplianceGas.key)}${selectedApplianceGas.size ? ` — ${selectedApplianceGas.size}` : ''}`
        : undefined,
      applianceExtractor: selectedApplianceExtractor ? t(selectedApplianceExtractor.key) : undefined,
      applianceTv: selectedApplianceTv ? t(selectedApplianceTv.key) : undefined,
      applianceSink: selectedApplianceSink ? t(selectedApplianceSink.key) : undefined,
      applianceFridge: selectedApplianceFridge ? t(selectedApplianceFridge.key) : undefined,
      installationRequirements: selectedInstallationRequirementOptions.map(
        (q) => ({
          label: t(q.label),
          answer: q.answer?.customValue || q.answer?.option || "--",
        }),
      ),
      additionalNotes: additionalNotes || "--",
      currentLocale,
      selectedProductPrice: selectedProductPrice ? `${selectedProductPrice.toLocaleString()} €` : undefined,
    };

    console.log(
      "Final form data to submit:",
      JSON.stringify(submissionData, null, 2),
    );

 

    const sendEmail = async () => {
      gaEvent('configurator_submit', { locale: currentLocale });
      try {
        await axios.post("/api/send-order-email", submissionData);
        if (currentLocale === 'en') {
          router.push('/configurator/thankyou');
        } else if (currentLocale === 'pt') {
          router.push('/configurador/obrigado');
        } else if (currentLocale === 'es') {
          router.push('/configurador/gracias');
        } else {
          setModalOpen(true);
        }

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

  const hintStyle = { fontSize: 16, color: "#666", marginTop: 6, lineHeight: 1.45, fontWeight: "bold" };

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

            {/* Single Google autocomplete address field */}
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className={styles.formGroup}>
                <label htmlFor="installAddress">
                  {t("stepReview.installationAddress")}{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <AddressAutocomplete
                  id="installAddress"
                  placeholder={t("stepReview.addressPlaceholder")}
                  onSelect={handleAddressSelect}
                  onEdit={resetQuote}
                  invalid={addressError}
                />

                {/* Before an address is chosen */}
                {quote.status === "idle" && (
                  <div style={hintStyle}>
                    <div>{t("stepReview.deliveryInfoLine1")}</div>
                    <div>{t("stepReview.deliveryInfoLine2")}</div>
                  </div>
                )}

                {quote.status === "loading" && (
                  <div style={hintStyle}>{t("stepReview.deliveryCalculating")}</div>
                )}

                {quote.status === "ok" && (
                  <div
                    style={{
                      marginTop: 8,
                      fontWeight: 600,
                      fontSize:16,
                      fontWeight: "bold",
                      color: quote.deliveryCharge === 0 ? "#1e7e34" : "inherit",
                    }}
                  >
                    {quote.deliveryCharge === 0
                      ? t("stepReview.deliveryFree")
                      : t("stepReview.deliveryCharged", {
                          amount: quote.deliveryCharge.toLocaleString(),
                        })}
                  </div>
                )}

                {quote.status === "error" && (
                  <div style={{ ...hintStyle, color: "#c0392b" }}>
                    {t("stepReview.deliveryError")}
                  </div>
                )}

                {addressError && quote.status !== "error" && (
                  <div style={{ ...hintStyle, color: "#c0392b" }}>
                    {t("stepReview.addressRequired")}
                  </div>
                )}

                <div style={hintStyle}>{t("stepReview.craneNote")}</div>
              </div>
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
                  disabled={submitbtndisabled || quote.status === "loading"}
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