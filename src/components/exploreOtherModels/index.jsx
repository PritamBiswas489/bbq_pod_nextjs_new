import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { HiArrowRight } from "react-icons/hi";
import styles from "./index.module.scss";

const models = [
  { id: 1, label: "A-Plus" },
  { id: 2, label: "A-Max" },
  { id: 3, label: "A-Ultra" },
  { id: 4, label: "A-Pro" },
];

const ExploreOtherModels = () => {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.wrapper}>
      <Container className="text-center">
        <h2 className={styles.title}>Explore Other Models</h2>

        <div className={styles.buttonGroup}>
          {models.map((item) => (
            <button
              key={item.id}
              className={`${styles.modelBtn} ${
                active === item.id ? styles.active : ""
              }`}
              onClick={() => setActive(item.id)}
            >
              {item.label}
              <HiArrowRight />
            </button>
          ))}

          {/* CTA */}
          <button className={styles.compareBtn}>
            Compare All Models
            <HiArrowRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ExploreOtherModels;
