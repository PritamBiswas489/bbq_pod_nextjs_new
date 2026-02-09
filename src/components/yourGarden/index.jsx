import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { TiArrowRightOutline } from "react-icons/ti";
import { VscGear } from "react-icons/vsc";
import styles from "./index.module.scss";
import Link from "next/link";
import LanguageCheckbox from "../languageCheckbox";
import BrochureModal from "../brochureModal";

const YourGarden = ({
  title,
  description,
  backgroundImage,
  badges = [],
  primaryButton,
  secondaryButton = [],
  footerText = [],
}) => {
  const [openModal, setOpenModal] = useState(false);
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
                  <ul className="d-flex align-items-center">
                    <li>
                      <label>Name</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className={styles.input}
                      />
                    </li>
                    <li>
                      <label>Email address</label>
                      <input
                        type="email"
                        name=""
                        id=""
                        className={styles.input}
                      />
                    </li>
                  </ul>
                  <div
                    className={`${styles.cbArea} d-flex justify-content-center`}
                  >
                    <LanguageCheckbox />
                  </div>
                  {/* BUTTONS */}
                  {/* <div className={styles.actions}>
                    <Link
                      href={primaryButton.href}
                      className={styles.personalisedQuoteBtn}
                      data-aos="zoom-in-left"
                      data-aos-duration="1000"
                      data-aos-once
                    >
                      {primaryButton.label} <TiArrowRightOutline />
                    </Link>
                  </div> */}
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.personalisedQuoteBtn}
                      onClick={() => setOpenModal(true)}
                    >
                      {primaryButton.label} <TiArrowRightOutline />
                    </button>
                  </div>

                  <BrochureModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                  />
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
