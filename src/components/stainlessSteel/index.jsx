import { Container, Row, Col } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import styles from "./index.module.scss";
import heroImage from "@/assets/front/images/hero-2.webp";

const StainlessSteel = () => {
  const materials = [
    {
      title: "Stainless Steel",
      subtitle: "Classic professional finish",
      points: ["Hygienic", "Heat resistant", "Easy clean"],
    },
    {
      title: "Sintered Stone",
      subtitle: "Premium natural look",
      points: ["8 colour options", "Scratch proof", "UV resistant"],
    },
  ];

  return (
    <div
      className={styles.quoteBanner}
      style={{
        backgroundImage: `url(${heroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row className="justify-content-end">
          <Col lg={5}>
            <div
              className={styles.quoteBannerInner}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              {materials.map((item, index) => (
                <div
                  className={styles.quoteBox}
                  key={index}
                  data-aos="zoom-in-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <h4>{item.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: item.subtitle }}></p>
                  <ul>
                    {item.points.map((point, i) => (
                      <li key={i}>
                        <FiCheckCircle /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StainlessSteel;
