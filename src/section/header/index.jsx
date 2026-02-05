import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/front/images/logo.png";

import { TiArrowRightOutline } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";
import enFlag from "@/assets/front/images/united-kingdom.png";
import { MdOutlineArrowDropDown } from "react-icons/md";

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
            {/* <Col className={style.logoCol} md="auto">
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
            </Col> */}

            <Link href="/home" className={style.mobLogo}>
              <Image src={logo} alt="Logo" width={180} height={28} priority />
            </Link>

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
                {/* <ul className="d-flex align-items-center">
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/">Order Now</Link>
                  </li>
                  
                </ul> */}
                <ul className={`${menuOpen ? style.navOpen : ""}`}>
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  {/* CENTER LOGO */}
                  <li className={style.centerLogo}>
                    <Link href="/home">
                      <Image
                        src={logo}
                        alt="Logo"
                        width={180}
                        height={28}
                        priority
                      />
                    </Link>
                  </li>

                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li>
                    <Link href="/order">Order</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <Col md="auto" className={style.langCol}>
              <button className={style.langBtn} title="Switch language">
                <Image src={enFlag} alt="English" width={22} height={22} />
                <span>En</span> <MdOutlineArrowDropDown />
              </button>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
