import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import styles from "./index.module.scss";
import { LuQuote } from "react-icons/lu";
import TitleHeader from "../titleHeader";
import { useTranslation } from 'next-i18next';

const testimonials = [
  {
    textKey: "testimonial1Text",
    nameKey: "testimonial1Name",
    locationKey: "testimonial1Location",
    ownerKey: "testimonial1Owner",
  },
  {
    textKey: "testimonial2Text",
    nameKey: "testimonial2Name",
    locationKey: "testimonial2Location",
    ownerKey: "testimonial2Owner",
  },
  {
    textKey: "testimonial3Text",
    nameKey: "testimonial3Name",
    locationKey: "testimonial3Location",
    ownerKey: "testimonial3Owner",
  },
  {
    textKey: "testimonial4Text",
    nameKey: "testimonial4Name",
    locationKey: "testimonial4Location",
    ownerKey: "testimonial4Owner",
  },
  {
    textKey: "testimonial5Text",
    nameKey: "testimonial5Name",
    locationKey: "testimonial5Location",
    ownerKey: "testimonial5Owner",
  },
  {
    textKey: "testimonial6Text",
    nameKey: "testimonial6Name",
    locationKey: "testimonial6Location",
    ownerKey: "testimonial6Owner",
  },
];

const Testimonials = () => {
  const { t } = useTranslation('common');
  return (
    <section className={styles.testimonials}>
      <TitleHeader
        whyChoose={[]}
        title={t('sectionTitle')}
        subtitle={t('sectionSubtitle')}
      />
      <Container>
        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className={styles.card}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className={styles.quoteIcon}>
                  <LuQuote />
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className={styles.text}>"{t(item.textKey)}"</p>

                <div className={styles.footer}>
                  <strong>{t(item.nameKey)}</strong>
                  <span>
                    {t(item.locationKey)} • {t(item.ownerKey)}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bottom Rating Box */}
        {/* <div className={styles.ratingBox}>
          <div className={styles.ratingBoxInner}>
            <div className={styles.starsGreen}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <strong>5.0 / 5.0</strong>
            <p>Average Rating</p>
          </div>

          <div className={styles.ratingBoxInner}>
            <strong>112+</strong>
            <p>Verified Reviews</p>
          </div>

          <div className={styles.ratingBoxInner}>
            <strong>100%</strong>
            <p>Satisfaction Rate</p>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Testimonials;
