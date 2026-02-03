// components/CustomQuoteForm.jsx

import React, { useState } from "react";
import Layout from "@/section/layout";
import InnerBanner from "@/components/innerBanner";
import hero1 from "@/assets/front/images/hero-1.webp";
import {
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  Modal,
  Card,
} from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./index.module.scss";
import Link from "next/link";

import box1 from "@/assets/front/images/mini.jpg";
import box2 from "@/assets/front/images/plus.jpg";
import box3 from "@/assets/front/images/max.webp";
import box4 from "@/assets/front/images/ultra.jpg";
import box5 from "@/assets/front/images/pro.webp";

const getQuote = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [podModel, setPodModel] = useState("");
  const [exteriorColour, setExteriorColour] = useState("");
  const [internalColour, setInternalColour] = useState("");
  const [cabinetDoor, setCabinetDoor] = useState("");
  const [worktopMaterial, setWorktopMaterial] = useState("");
  const [electricalWiring, setElectricalWiring] = useState("yes");
  const [otherElectrical, setOtherElectrical] = useState("");
  const [waterSupply, setWaterSupply] = useState("yes");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const [showPodModal, setShowPodModal] = useState(false);
  const [selectedPod, setSelectedPod] = useState(null);
  const pods = [
    {
      id: "a-mini",
      name: "A-Mini",
      price: "£8,999",
      desc: "Compact Luxury for Every Garden",
      imageSrc: box1.src,
      save: "1,000",
      type: "Most Popular",
    },
    {
      id: "a-plus",
      name: "A-Plus",
      price: "£14,399",
      desc: "Entertainment Elevated",
      imageSrc: box2.src,
      save: "1,600",
      type: "",
    },
    {
      id: "a-max",
      name: "A-Max",
      price: "£16,199",
      desc: "Maximum Performance, Maximum Luxury",
      imageSrc: box3.src,
      save: "1,800",
      type: "Premium Choice",
    },
    {
      id: "a-ultra",
      name: "A-Ultra",
      price: "£16,199",
      desc: "For Those Who Take Grilling Seriously",
      imageSrc: box4.src,
      save: "1,800",
      type: "",
    },
    {
      id: "a-pro",
      name: "A-Pro",
      price: "£14,399",
      desc: "All-Weather Luxury with Motorised Awning",
      imageSrc: box5.src,
      save: "1,600",
      type: "New Design",
    },
  ];

  return (
    <Layout>
      <InnerBanner
        badgeText="10% WINTER DISCOUNT!"
        title="Get Ready for "
        subtitle="Spring 2026"
        description1="Order now and save 10% on all BBQ Pods!"
        description2="Offer ends 31st January 2025"
        backgroundImage={hero1.src}
        links={[]}
      />
      <section className={styles.getQuote}>
        <div className={styles.container}>
          <div className={styles.formHeader}>
            <h2 className={styles.title}>Get Your Custom Quote</h2>
            <p className={styles.description}>
              Fill out all the information below based on your requirements and
              we will email you a quote.{" "}
              <Link href={"#"} className={styles.link}>
                Click here to use our configurator
              </Link>{" "}
              for an easy way to select colours and visualise your BBQ Pod.
            </p>
            <p className={styles.noPayment}>
              No payment required - Get a personalised quote first
            </p>
          </div>
          <div className={styles.formBody}>
            <h4>Personal Information</h4>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={styles.input}
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={styles.input}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="tel"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                  />
                </Col>
              </Row>

              <h4>Delivery Address</h4>
              <Form.Control
                type="text"
                placeholder="Country*"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={styles.input}
              />
              <Form.Control
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                className={styles.input}
              />
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="City*"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={styles.input}
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Postal Code*"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className={styles.input}
                  />
                </Col>
              </Row>

              <h4>Pod Selection</h4>
              {/* <div className={styles.podSelectionBox}>
                <p>Please select a BBQ Pod model from the options above</p>
                <Link href={"#"} className={styles.viewModelButton}>
                  View Model
                </Link> 
                
              </div>*/}
              <div className={styles.podSelectionBox}>
                {selectedPod ? (
                  <div className={styles.selectedPod}>
                    <div className={styles.selectedPodCol}>
                      <div className={styles.selectedPodLable}>
                        Selected Pod Size
                      </div>
                      <div
                        className={`${styles.selectedPodColInner} d-flex flex-wrap justify-content-between align-items-center`}
                      >
                        <div>
                          <strong>{selectedPod.name}</strong> –{" "}
                          {selectedPod.price}
                        </div>
                        <button
                          className={styles.changeBtn}
                          onClick={() => setShowPodModal(true)}
                        >
                          Change
                        </button>
                      </div>
                    </div>
                    <div className={styles.selectedPodCol}>
                      <div className={styles.selectedPodLable}>Quantity</div>
                      <Form.Select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className={styles.input}
                      >
                        {/* Add actual options here as needed */}
                        <option value="option1">1 Pod</option>
                        <option value="option2">2 Pod</option>
                        <option value="option3">3 Pod</option>
                        <option value="option4">4 Pod</option>
                        <option value="option5">5 Pod</option>
                      </Form.Select>
                    </div>
                  </div>
                ) : (
                  <>
                    <p>Please select a BBQ Pod model from the options above</p>
                    <Link
                      href="#"
                      className={styles.viewModelButton}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPodModal(true);
                      }}
                    >
                      View Model
                    </Link>
                  </>
                )}
              </div>

              <h4>Customisation Options</h4>
              <Row>
                <Col md={6}>
                  <div className={styles.colorInput}>
                    <Form.Control
                      type="text"
                      placeholder="Pod Exterior Colour"
                      value={exteriorColour}
                      onChange={(e) => setExteriorColour(e.target.value)}
                      className={styles.input}
                    />
                    <Link href={"#"} className={styles.linkSmall}>
                      Click here to view colour options
                    </Link>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.colorInput}>
                    <Form.Control
                      type="text"
                      placeholder="Pod Internal Colour"
                      value={internalColour}
                      onChange={(e) => setInternalColour(e.target.value)}
                      className={styles.input}
                    />
                    <a href="#" className={styles.linkSmall}>
                      Click here to view colour options
                    </a>
                  </div>
                </Col>
              </Row>
              <div className={styles.colorInput}>
                <Form.Select
                  value={cabinetDoor}
                  onChange={(e) => setCabinetDoor(e.target.value)}
                  className={styles.input}
                >
                  <option>Cabinet Door Colour/Finish</option>
                  {/* Add actual options here as needed */}
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Form.Select>
              </div>
              <div className={styles.colorInput}>
                <Form.Control
                  type="text"
                  placeholder="Worktop Material"
                  value={worktopMaterial}
                  onChange={(e) => setWorktopMaterial(e.target.value)}
                  className={styles.input}
                />
                <a href="#" className={styles.linkSmall}>
                  Click here to view material options
                </a>
              </div>

              <h4>Installation Requirements</h4>
              <div className={styles.radioBox}>
                <Form.Label className={styles.question}>
                  Do you have electrical wiring available at the installation
                  site? *
                </Form.Label>
                <Form.Group className={styles.radioGroup}>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="electricalWiring"
                    id="electricalYes"
                    checked={electricalWiring === "yes"}
                    onChange={() => setElectricalWiring("yes")}
                    className={styles.radio}
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="electricalWiring"
                    id="electricalNo"
                    checked={electricalWiring === "no"}
                    onChange={() => setElectricalWiring("no")}
                    className={styles.radio}
                  />
                  <Form.Check
                    type="radio"
                    label="Other, please specify"
                    name="electricalWiring"
                    id="electricalOther"
                    checked={electricalWiring === "other"}
                    onChange={() => setElectricalWiring("other")}
                    className={styles.radio}
                  />
                </Form.Group>
                {electricalWiring === "other" && (
                  <Form.Control
                    type="text"
                    placeholder="Please specify"
                    value={otherElectrical}
                    onChange={(e) => setOtherElectrical(e.target.value)}
                    className={styles.input}
                  />
                )}
              </div>
              <Form.Label className={styles.question}>
                Do you have water supply available at the installation site? *
              </Form.Label>
              <Form.Group className={styles.radioGroup}>
                <Form.Check
                  type="radio"
                  label="Yes - existing water source"
                  name="waterSupply"
                  id="waterYes"
                  checked={waterSupply === "yes"}
                  onChange={() => setWaterSupply("yes")}
                  className={styles.radio}
                />
                <Form.Check
                  type="radio"
                  label="No - requires plumbing"
                  name="waterSupply"
                  id="waterNo"
                  checked={waterSupply === "no"}
                  onChange={() => setWaterSupply("no")}
                  className={styles.radio}
                />
              </Form.Group>
              <div className={styles.radioBox}>
                <Form.Control
                  as="textarea"
                  placeholder="Additional Requirements/Notes"
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  rows={3}
                  className={styles.textarea}
                />
              </div>
              <Form.Check
                type="checkbox"
                label="I'd like to receive updates about new products, promotions, and outdoor living tips from BBQ Pods UK"
                checked={receiveUpdates}
                onChange={(e) => setReceiveUpdates(e.target.checked)}
                className={styles.checkbox}
              />

              <Button type="submit" className={styles.submitButton}>
                Submit Order Request
              </Button>
            </Form>
            <p className={styles.terms}>
              By submitting this form, you agree to our{" "}
              <Link href={"#"}>Terms & Conditions</Link> and{" "}
              <Link href={"#"}>Privacy Policy</Link>
            </p>
          </div>
        </div>
      </section>
      <Modal
        show={showPodModal}
        onHide={() => setShowPodModal(false)}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose Your BBQ Pod</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="g-3">
            {pods.map((pod) => {
              const isActive = selectedPod?.id === pod.id;

              return (
                <Col md={4} key={pod.id}>
                  <Card
                    className={`${styles.podCard} ${
                      isActive ? styles.active : ""
                    }`}
                    onClick={() => setSelectedPod(pod)}
                  >
                    <div className={styles.imgWrap}>
                      <Card.Img src={pod.imageSrc} />
                      <ul>
                        <li className={styles.saveBadge}>SAVE £ {pod.save}</li>
                        {pod.type && (
                          <li className={styles.typeBadge}>{pod.type}</li>
                        )}
                      </ul>
                    </div>
                    <Card.Body>
                      <h5>{pod.name}</h5>
                      <p>{pod.desc}</p>
                      <div className={styles.price}>From {pod.price}</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <button
                          className={`${styles.selectBtn} ${
                            isActive ? styles.selected : ""
                          }`}
                        >
                          {isActive ? (
                            <>
                              <FaCheckCircle /> Selected
                            </>
                          ) : (
                            "Select"
                          )}
                        </button>
                        <Link href={"#"} className={styles.configureBtn}>
                          Configure
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default getQuote;
