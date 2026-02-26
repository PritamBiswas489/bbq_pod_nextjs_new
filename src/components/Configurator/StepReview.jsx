import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import hero1 from "@/assets/front/images/hero-1.jpg";

const StepReview = ({ data }) => {
  // if (!data) return null; // safety guard

  return (
    <>
      <div className={styles.stepHeader}>
        <h2>Review Your Configuration</h2>
        <p>
          Review your selections and submit to receive your custom quote based
          on this configuration.
        </p>
      </div>
      <div className={styles.infoWrap}>
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
      </div>

      <div className={styles.infoWrap}>
        <h3>Your Contact Information</h3>
        <form action="" method="get">
          <div className={styles.information}>
            <div className={styles.informationLeft}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.formInput}
                />
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
                ></textarea>
              </div>
            </div>
            <div className={styles.informationBtm}>
              <button type="submit" className={styles.submitBtn}>
                Request Personalised Quote 🎄
              </button>
              <p>
                No payment required. By submitting, you agree to be contacted
                about your BBQ Pod configuration and receive a personalised
                quote within 24 hours.
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default StepReview;
