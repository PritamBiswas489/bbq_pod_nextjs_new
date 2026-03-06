import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import { VscGear } from "react-icons/vsc";
import styles from "./index.module.scss";
import Link from "next/link";
import LanguageCheckbox from "../languageCheckbox";
import BrochureModal from "../brochureModal";
import { useTranslation } from "next-i18next";
import axios from "axios";

const YourGarden = ({
  title,
  description,
  backgroundImage,
  badges = [],
  primaryButton,
  secondaryButton = [],
  footerText = [],
  setOpenModal,
}) => {
  const { t } = useTranslation("common");
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [disabled, setDisabled] = useState(false); 
  const [loader, setLoader] = useState(false);

  //handle submit function to send form data to API route
  const handleSubmit = async () => {
   setDisabled(true); // prevent multiple submissions
   setLoader(true); // show loader
   const payload = {
      fullName: name,
      email: email,
      language: language,
    };
    const endpoint = "/api/brochure-request-email";
    const request = await axios.post(endpoint, payload);
    if (request.status === 200) {
      setOpenModal(true);
      setName("");
      setEmail("");
      setLanguage("");
      setDisabled(false);
      setLoader(false);
    } else {
      alert("Failed to submit. Please try again.");
      setDisabled(false);
      setLoader(false);
    }
  }
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setDisabled(!(name && emailRegex.test(email) && language));
  }, [name, email, language]);

  return (
    <div
      className={styles.quoteBanner}
      style={{
        backgroundImage: `url(${backgroundImage?.src || backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={12}>
            <div className={styles.quoteBannerInner}>
              <h2 data-aos="flip-left" data-aos-duration="1500" data-aos-once>
                {title}
              </h2>

              <p data-aos="fade-up" data-aos-duration="1000" data-aos-once>
                {description}
              </p>

              {/* BADGES */}
              {badges.length > 0 && (
                <div className={styles.badges}>
                  {badges.map((item, index) => (
                    <span
                      key={index}
                      className={styles.processQuote}
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                      data-aos-once
                    >
                      {item.icon}
                      {item.text}
                    </span>
                  ))}
                </div>
              )}

              <div className={styles.formArea}>
                <form action="" method="get">
                  <ul className="d-flex align-items-center flex-wrap">
                    <li>
                      <label>{t("yourGardenNameLabel")}</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                      />
                    </li>
                    <li>
                      <label>{t("yourGardenEmailLabel")}</label>
                      <input
                        type="email"
                        name=""
                        id=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                      />
                    </li>
                  </ul>
                  <div
                    className={`${styles.cbArea} d-flex justify-content-center`}
                  >
                    <LanguageCheckbox onChange={(selectedLanguages) => setLanguage(selectedLanguages)} />
                  </div>

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.personalisedQuoteBtn}
                      onClick={handleSubmit}
                      disabled={disabled}
                    >
                      {loader ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {t("submitting") || "Submitting..."}
                        </>
                      ) : (
                        <>
                          {primaryButton.label} <TiArrowRightOutline />
                        </>
                      )}
                    </button>
                  </div>

                 
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YourGarden;
