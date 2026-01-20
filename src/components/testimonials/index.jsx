import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import styles from "./index.module.scss";
import { LuQuote } from "react-icons/lu";
import TitleHeader from "../titleHeader";

const testimonials = [
  {
    text: "The A-Max has completely transformed our garden. We host family BBQs every weekend now, and guests are always amazed by the quality. The 42\" TV and professional grill make it feel like a luxury outdoor restaurant. Best investment we've made for our home.",
    name: "James & Sarah Mitchell",
    location: "Surrey",
    owner: "A-Max Owner",
  },
  {
    text: "After 30 years of dodgy garden sheds and temporary structures, finding Commercial Awnings was a revelation. The build quality is exceptional – you can tell this is built to last a lifetime. Installation was seamless.",
    name: "David Thompson",
    location: "Manchester",
    owner: "A-Plus Owner",
  },
  {
    text: "We live in Cornwall where weather can be unpredictable. The A-Pro’s motorised awning is brilliant – we can cook outdoors even when it’s drizzling.",
    name: "Emma & Tom Harrison",
    location: "Cornwall",
    owner: "A-Pro Owner",
  },
  {
    text: "Perfect for our smaller garden. The A-Mini doesn’t compromise on quality despite being compact. Highly recommend BBQ Pods UK.",
    name: "Richard & Claire Foster",
    location: "Yorkshire",
    owner: "A-Mini Owner",
  },
  {
    text: 'As a serious home cook, the A-Ultra’s 46" grill was exactly what I needed. Worth every penny.',
    name: "Michael Stevens",
    location: "Edinburgh",
    owner: "A-Ultra Owner",
  },
  {
    text: "The customer service from Commercial Awnings was outstanding. The pod itself is absolutely stunning.",
    name: "Sophie & Andrew Wright",
    location: "Hampshire",
    owner: "A-Plus Owner",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <TitleHeader
        whyChoose="CUSTOMER REVIEWS"
        title="Loved by UK Families"
        subtitle="Join hundreds of satisfied customers who have transformed their gardens into luxury outdoor entertaining spaces."
      />
      <Container>
        <Row className="g-4">
          {testimonials.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className={styles.card}
                data-aos="zoom-in-up"
                data-aos-duration="2000"
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

                <p className={styles.text}>"{item.text}"</p>

                <div className={styles.footer}>
                  <strong>{item.name}</strong>
                  <span>
                    {item.location} • {item.owner}
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Bottom Rating Box */}
        <div className={styles.ratingBox}>
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
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
