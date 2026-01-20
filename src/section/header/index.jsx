import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/front/images/logo.png";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <Container>
          <Row className="align-items-center">
            <Col md="auto">
              <Link href="/">
                <Image src={logo} alt="logo" width={241} height={63} priority />
              </Link>
            </Col>
            <Col>
              <nav className={style.nav}>
                <ul className="d-flex align-items-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Products</Link>
                  </li>
                  <li>
                    <Link href="/">Order Now</Link>
                  </li>
                  <li>
                    <Link href="/">Gallery</Link>
                  </li>
                  <li>
                    <Link href="/">Configurator</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col md="auto">
              <div className="">
                <ul className="d-flex align-items-center gap-3">
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-phone"></i> 0808 225 0045
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="btn btn-primary">
                      Get Quote
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
