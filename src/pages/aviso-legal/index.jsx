import React from "react";
import Head from "next/head";
import style from "../legal-notice/index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";
const AvisoLegal = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = pageURLS[currentLocale]?.legalNotice || `/${currentLocale}${router.asPath}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>Aviso Legal - BBQ Pod Spain</title>
        <meta name="description" content="Aviso Legal - BBQ Pod Spain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>Aviso Legal</h1>
            <p className={style.lastUpdated}>Última actualización: 5 de marzo de 2026</p>
          </div>

          <section className={style.section}>
            <h2>Información del Sitio Web</h2>
            <p>En cumplimiento con el deber de información establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos:</p>
            
            <div className={style.infoGrid}>
              <div className={style.infoItem}>
                <h3>Titular del Sitio Web</h3>
                <p>BBQ Pod Spain, SL</p>
              </div>
              
              <div className={style.infoItem}>
                <h3>NIF</h3>
                <p>B24971665</p>
              </div>
              
              <div className={style.infoItem}>
                <h3>Correo Electrónico</h3>
                <p><a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a></p>
              </div>
              
              <div className={style.infoItem}>
                <h3>Sitio Web</h3>
                <p><a href="https://www.bbqpodspain.com" target="_blank" rel="noopener noreferrer">www.bbqpodspain.com</a></p>
              </div>
            </div>

            <div className={style.address}>
              <h3>Domicilio Social</h3>
              <p>CL. Alhaurín de la Sierra, 15<br />29120 Alhaurín el Grande<br />Málaga<br />España</p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Uso del Sitio Web</h2>
            <p>El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena de las condiciones recogidas en el presente Aviso Legal.</p>
            <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web y a no utilizarlos para realizar actividades ilícitas o contrarias a la legislación vigente.</p>
          </section>

          <section className={style.section}>
            <h2>Propiedad Intelectual</h2>
            <p>Todos los contenidos del sitio web, incluyendo, entre otros, textos, imágenes, gráficos, logotipos, diseños y software, son propiedad de BBQ Pod Spain, SL o se utilizan con la debida autorización.</p>
            <p>Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin la autorización previa y por escrito de BBQ Pod Spain, SL.</p>
          </section>

          <section className={style.section}>
            <h2>Limitación de Responsabilidad</h2>
            <p>BBQ Pod Spain, SL no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de la información contenida en este sitio web.</p>
            <p>Asimismo, no se garantiza la ausencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos del usuario.</p>
          </section>

          <section className={style.section}>
            <h2>Enlaces Externos</h2>
            <p>Este sitio web puede contener enlaces a páginas web de terceros. BBQ Pod Spain, SL no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios web.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AvisoLegal;
export async function getStaticProps({ locale }) {
  const defaultLocale = nextI18NextConfig.i18n.defaultLocale;
  const localeToUse = locale || defaultLocale;

  return {
    props: {
      ...(await serverSideTranslations(
        localeToUse,
        ["common"],
        nextI18NextConfig,
      )),
    },
  };
}