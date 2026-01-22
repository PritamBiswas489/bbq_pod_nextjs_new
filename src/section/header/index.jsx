import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/front/images/logo.png";

import { TiArrowRightOutline } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${style.header} ${isSticky ? style.sticky : ""}`}>
        <Container fluid="xxl">
          <Row className="align-items-center">
            <Col className={style.logoCol} md="auto">
              <Link href="/home">
                <Image
                  src={logo}
                  alt="logo"
                  width={893}
                  height={137}
                  className={style.logo}
                  priority
                />
              </Link>
            </Col>

            <div
              className={`${style.navArea} ${menuOpen ? style.navOpen : ""}`}
            >
              <nav className={style.nav}>
                <button
                  className={`${style.navToggler} ${
                    menuOpen ? style.active : ""
                  }`}
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span />
                  <span />
                  <span />
                </button>
                <ul className="d-flex align-items-center">
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
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
            </div>

            <Col className={style.headerBtnCol} md="auto">
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <Link href="/" className={`btn ${style.getQuoteBtnBdr}`}>
                    <MdOutlineCall size={20} /> 0808 225 0045
                  </Link>
                </li>
                <li>
                  <Link href="/" className={`btn ${style.getQuoteBtn}`}>
                    Get Quote <TiArrowRightOutline className="ms-1" />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
