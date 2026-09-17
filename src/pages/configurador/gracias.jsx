import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "@/../next-i18next.config.js";
import Layout from "@/section/layout";
import style from "../configurator/thankyou.module.scss";
import { useAppSelector } from "@/store/hooks";

const ConfirmationPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const checkoutData = useAppSelector((state) => state.configurator.checkoutData);

  const hasOrder = Boolean(checkoutData?.email || checkoutData?.fullName);

  return (
    <>
      <Head>
        <title>{t("confirmationModal.thankYou")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.iconWrap}>
            <svg
              className={style.checkIcon}
              viewBox="0 0 52 52"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className={style.checkCircle} cx="26" cy="26" r="25" fill="none" />
              <path className={style.checkMark} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>

          <div className={style.header}>
            <h1>{t("confirmationModal.thankYou")}</h1>
            <p className={style.subMessage}>
              {t("confirmationModal.reviewMessage")}
              <br />
              {t("confirmationModal.nextSteps")}
            </p>
          </div>

          {hasOrder && (
            <div className={style.orderDetailsSection}>
              <h2>{t("confirmationModal.orderDetails")}</h2>

              <div className={style.detailGrid}>
                <div className={style.detailRow}>
                  <span className={style.label}>{t("stepReview.name")}</span>
                  <span className={style.value}>{checkoutData.fullName}</span>
                </div>

                <div className={style.detailRow}>
                  <span className={style.label}>{t("stepReview.email")}</span>
                  <span className={style.value}>{checkoutData.email}</span>
                </div>

                <div className={style.detailRow}>
                  <span className={style.label}>{t("stepReview.phone")}</span>
                  <span className={style.value}>{checkoutData.phone}</span>
                </div>

                <div className={style.detailRow}>
                  <span className={style.label}>
                    {t("stepReview.installationAddressLabel")}
                  </span>
                  <span className={style.value}>
                    {checkoutData.installStreet}
                    <br />
                    {checkoutData.installCity}, {checkoutData.installProvince}{" "}
                    {checkoutData.installPostcode}
                  </span>
                </div>

                {checkoutData.howDidYouHear && (
                  <div className={style.detailRow}>
                    <span className={style.label}>
                      {t("stepReview.howDidYouHearLabel")}
                    </span>
                    <span className={style.value}>{checkoutData.howDidYouHear}</span>
                  </div>
                )}

                {checkoutData.message && (
                  <div className={style.detailRow}>
                    <span className={style.label}>{t("stepReview.messageLabel")}</span>
                    <span className={style.value}>{checkoutData.message}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className={style.actions}>
            <Link href="/" className={style.homeButton}>
              {t("confirmationModal.backHome", "Back to Home")}
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ConfirmationPage;

export async function getStaticProps({ locale }) {
  const defaultLocale = nextI18NextConfig.i18n.defaultLocale;
  const localeToUse = locale || defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(localeToUse, ["common"], nextI18NextConfig)),
    },
  };
}
