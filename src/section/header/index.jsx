import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import style from "./index.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/front/images/logo.png";

import { TiArrowRightOutline } from "react-icons/ti";
import { MdOutlineCall } from "react-icons/md";
import enFlag from "@/assets/front/images/united-kingdom.png";
import esFlag from "@/assets/front/images/spain-flag.png";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { useRouter } from "next/router";

const Header = () => {
  const { t } = useTranslation('common');
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  const currentLocale = router.locale
  console.log('Header Current locale:', currentLocale)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleLanguageChange = (locale) => {
    router.push(router.asPath, router.asPath, { locale });
    setLangDropdownOpen(false);
  };

  return (
    <>
      <header className={`${style.header} ${isSticky ? style.sticky : ""}`}>
        <Container fluid="xxl">
          <Row className="align-items-center">
           
            <Link href="/home" className={style.mobLogo}>
              <Image src={logo} alt={"BBQ POD SPAIN"} width={180} height={28} priority />
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
                
                <ul className={`${menuOpen ? style.navOpen : ""}`}>
                  <li>
                    <Link href="/home">{t('headerNavHome')}</Link>
                  </li>
                  <li>
                    <Link href="">{t('headerNavAbout')}</Link>
                  </li>

                  {/* CENTER LOGO */}
                  <li className={style.centerLogo}>
                    <Link href="/home">
                      <Image
                        src={logo}
                        alt={"BBQ POD SPAIN"}
                        width={180}
                        height={28}
                        priority
                      />
                    </Link>
                  </li>

                  <li>
                    <Link href="/products">{t('headerNavProducts')}</Link>
                  </li>
                  <li>
                    <Link href="">{t('headerNavOrder')}</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <Col md="auto" className={style.langCol}>
              <div className={`${style.langDropdown}`} style={{ position: 'relative' }}>
                <button 
                  className={style.langBtn} 
                  title={t('headerLanguageSwitchTitle')}
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                >
                  <Image src={currentLocale === 'es' ? esFlag : enFlag} alt={t('headerLanguageAlt')} width={22} height={22} />
                  <span>{currentLocale === 'es' ? 'ES' : 'EN'}</span> <MdOutlineArrowDropDown/>
                </button>
                
                {langDropdownOpen && (
                  <ul className={`${style.langMenu}`} style={{position: 'absolute', top: '100%', right: 0, backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', zIndex: 1000, padding: '8px 0', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', minWidth: '150px'}}>
                    <li style={{padding: '0'}}><button disabled={currentLocale === 'en'} onClick={() => handleLanguageChange('en')} style={{backgroundColor:"transparent", color: "black", padding: '12px 20px', width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', fontSize: '14px'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>English</button></li>
                    <li style={{padding: '0'}}><button disabled={currentLocale === 'es'} onClick={() => handleLanguageChange('es')} style={{backgroundColor:"transparent", color: "black", padding: '12px 20px', width: '100%', textAlign: 'left', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', fontSize: '14px'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Español</button></li>
                  </ul>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
