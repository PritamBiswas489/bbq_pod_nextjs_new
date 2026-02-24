"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Configurator from "@/components/Configurator/Configurator";

export default function ConfiguratorPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      {/* PAGE HERO */}
      <section
        style={{
          background: "#141414",
          color: "#fff",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
            Build Your BBQ Pod
          </h1>
          <p style={{ color: "#ccc", maxWidth: "680px", margin: "0 auto" }}>
            Customize your outdoor kitchen step by step. Choose your model,
            colors, appliances, and features — see pricing update instantly.
          </p>
        </Container>
      </section>

      {/* CONFIGURATOR */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <Row>
            <Col>
              <Configurator />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
