import React from "react";
import Head from "next/head";
import style from "../cookie-policy/index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";


const PoliticaDeCookies = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = pageURLS[currentLocale]?.cookiePolicy || `/${currentLocale}${router.asPath}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>Política de Cookies - BBQ Pod Spain</title>
        <meta name="description" content="Política de Cookies - BBQ Pod Spain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>Política de Cookies</h1>
            <p className={style.lastUpdated}>Última actualización: 5 de marzo de 2026</p>
          </div>

          <section className={style.section}>
            <p>Esta Política de Cookies explica cómo <strong>BBQ Pod Spain, SL</strong> utiliza cookies y tecnologías similares en el sitio web <strong>www.bbqpodspain.com</strong>.</p>
          </section>

          <section className={style.section}>
            <h2>¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que los sitios web funcionen correctamente y ayudan a los propietarios del sitio a comprender cómo interactúan los visitantes con el mismo.</p>
            <p>Las cookies pueden almacenar información como el tipo de navegador, información del dispositivo, preferencias de idioma y páginas visitadas.</p>
          </section>

          <section className={style.section}>
            <h2>Responsable del Sitio Web</h2>
            <p>Este sitio web es operado por:</p>
            <div className={style.address}>
              <p><strong>BBQ Pod Spain, SL</strong><br />
              NIF: B24971665<br />
              CL. Alhaurín de la Sierra, 15<br />
              29120 Alhaurín el Grande<br />
              Málaga<br />
              España<br />
              Correo electrónico: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a><br />
              Sitio web: <a href="https://www.bbqpodspain.com" target="_blank" rel="noopener noreferrer">www.bbqpodspain.com</a></p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Tipos de Cookies que Utilizamos</h2>
            
            <div className={style.cookieCard}>
              <h3>Cookies Técnicas o Esenciales</h3>
              <p>Estas cookies son necesarias para el correcto funcionamiento del sitio web y no pueden desactivarse en nuestros sistemas. Permiten funciones básicas como la navegación por las páginas y el acceso a áreas seguras del sitio web.</p>
            </div>

            <div className={style.cookieCard}>
              <h3>Cookies de Análisis</h3>
              <p>Estas cookies nos ayudan a comprender cómo los visitantes utilizan el sitio web. Permiten analizar información como el número de visitantes, qué páginas se visitan y cómo los usuarios navegan por el sitio.</p>
              <p>Esta información nos ayuda a mejorar el rendimiento y la usabilidad del sitio web.</p>
            </div>

            <div className={style.cookieCard}>
              <h3>Cookies Funcionales</h3>
              <p>Estas cookies permiten que el sitio web recuerde las preferencias del usuario, como el idioma seleccionado u otras opciones de personalización.</p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Cookies de Terceros</h2>
            <p>Algunas cookies pueden ser instaladas por servicios de terceros que aparecen en nuestras páginas, como herramientas de análisis o servicios relacionados con el rendimiento del sitio web.</p>
            <p>Estos proveedores externos pueden recopilar cierta información técnica, incluyendo la dirección IP, el tipo de navegador y la interacción con el contenido del sitio web.</p>
          </section>

          <section className={style.section}>
            <h2>Gestión de Cookies</h2>
            <p>Cuando visite nuestro sitio web por primera vez, puede aparecer un aviso o banner de cookies que le permitirá aceptar o configurar el uso de cookies.</p>
            <p>También puede controlar o eliminar las cookies a través de la configuración de su navegador.</p>
            <p><strong>La mayoría de los navegadores permiten:</strong></p>
            <ul className={style.list}>
              <li>Ver las cookies almacenadas</li>
              <li>Eliminar cookies</li>
              <li>Bloquear cookies de sitios web específicos</li>
              <li>Bloquear todas las cookies</li>
            </ul>
            <p><em>Tenga en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio web.</em></p>
          </section>

          <section className={style.section}>
            <h2>Cambios en esta Política de Cookies</h2>
            <p><strong>BBQ Pod Spain, SL</strong> puede actualizar esta Política de Cookies ocasionalmente para reflejar cambios legales o modificaciones en el uso de cookies en el sitio web.</p>
            <p>Cualquier cambio será publicado en esta página.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PoliticaDeCookies;
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