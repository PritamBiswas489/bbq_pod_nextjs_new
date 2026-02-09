import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import styles from "./index.module.scss";
import { LuQuote } from "react-icons/lu";
import TitleHeader from "../titleHeader";

const testimonials = [
  {
    text: "We use the Pinnacle most weekends now. Cooking, eating and just sitting outside feels easier because everything is already there. It’s changed how we use our garden without feeling over the top",
    name: "James & Laura",
    location: "Málaga",
    owner: "Pinnacle",
  },
  {
    text: "The Prime felt like the right balance for us. Big enough to entertain, but not massive. Everything feels solid and well finished, and the install was straightforward.",
    name: "David",
    location: "Marbella",
    owner: "Prime",
  },
  {
    text: "We wanted something open rather than fully enclosed, and the Aero suits us perfectly. The awning is useful for shade, and it still feels like proper outdoor cooking.",
    name: "Emma & Carlos",
    location: "Alicante",
    owner: "Aero",
  },
  {
    text: "Our space is quite small, so we were worried it might feel cramped. The Core fits really well and doesn’t feel like a compromise at all.",
    name: "Richard & Claire",
    location: "Valencia",
    owner: "Core",
  },
  {
    text: "I cook a lot, so the Apex made sense for me. The extra worktop space and larger grill are noticeable day to day. It feels practical, not just for show.",
    name: "Miguel",
    location: "Madrid",
    owner: "Apex",
  },
  {
    text: "The whole process was calm and clear. No pressure, no rushing. The pod looks exactly how we expected and we’re really happy with how it turned out.",
    name: "Sophie & Daniel",
    location: "Estepona",
    owner: "Prime",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <TitleHeader
        whyChoose={[]}
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
