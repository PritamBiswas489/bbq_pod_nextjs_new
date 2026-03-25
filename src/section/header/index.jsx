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
import { pageURLS, pageURLSES } from "@/utils/getPageUrls";

const Header = () => {
   
  const { t } = useTranslation('common');
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  const currentLocale = router.locale
  console.log('Header Current locale:', currentLocale)
  const pageUrls = pageURLS[currentLocale];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const handleLanguageChange = (locale) => {
    //remove / from router.asPath to prevent double slashes when switching languages
   const cleanPath = (router.asPath || "").split("?")[0].split("#")[0].replace(/^\/+/, "");
const path =
  pageURLS?.[locale]?.[cleanPath] ||
  pageURLSES?.[locale]?.[cleanPath] ||
  pageURLS?.[locale]?.home ||
  "/";
   //now add other query params and hash back to the path
   const queryString = router.asPath.includes("?") ? "?" + router.asPath.split("?")[1].split("#")[0] : "";
   const hashString = router.asPath.includes("#") ? "#" + router.asPath.split("#")[1] : "";
   const finalPath = path + queryString + hashString;
    
   router.push(finalPath, finalPath, { locale });
    //router.push(router.asPath, router.asPath, { locale });
    setLangDropdownOpen(false);
  };

  return (
    <>
      <header className={`${style.header} ${isSticky ? style.sticky : ""}`}>
        <Container fluid="xxl">
          <Row className="align-items-center">
           
            <Link href={pageUrls.home} className={style.mobLogo}>
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
                    <Link href={pageUrls.about}>{t('headerNavAbout')}</Link>
                  </li>
                   <li>
                    <Link href={pageUrls.products}>{t('headerNavProducts')}</Link>
                  </li>

                  {/* CENTER LOGO */}
                  <li className={style.centerLogo}>
                    <Link href={pageUrls.home}>
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
                    <Link href={pageUrls['in-stock']}>{t('headerNavInStock')}</Link>
                  </li>
                 
                  <li>
                    <Link href={pageUrls.configurator}>{t('headerNavConfigurator')}</Link>
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
