import React from "react";
import Head from "next/head";
import style from "../privacy-policy/index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";

const PoliticaDePrivacidad = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;
  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl = pageURLS[currentLocale]?.privacyPolicy || `/${currentLocale}${router.asPath}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);
  return (
    <>
      <Head>
        <title>Política de Privacidad - BBQ Pod Spain</title>
        <meta name="description" content="Política de Privacidad - BBQ Pod Spain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>Política de Privacidad</h1>
            <p className={style.lastUpdated}>Última actualización: 5 de marzo de 2026</p>
          </div>

          <section className={style.section}>
            <p><strong>BBQ Pod Spain, SL</strong> se compromete a proteger su privacidad y a garantizar que sus datos personales se traten de forma responsable y conforme al Reglamento General de Protección de Datos (RGPD) y a la normativa española aplicable en materia de protección de datos.</p>
            <p>Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos los datos personales cuando visita nuestro sitio web.</p>
          </section>

          <section className={style.section}>
            <h2>Responsable del Tratamiento</h2>
            <p>El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:</p>
            <div className={style.address}>
              <p><strong>BBQ Pod Spain, SL</strong><br />
              CIF: B24971665<br />
              CL. Alhaurín de la Sierra, 15<br />
              29120 Alhaurín el Grande<br />
              Málaga<br />
              España<br />
              Correo electrónico: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a></p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Datos Personales que Recopilamos</h2>
            <p>Podemos recopilar información personal cuando interactúa con nuestro sitio web, por ejemplo cuando solicita un catálogo, utiliza nuestro configurador de BBQ Pods o se pone en contacto con nosotros.</p>
            <p><strong>La información que podemos recopilar incluye:</strong></p>
            <ul className={style.list}>
              <li>Nombre</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Preferencia de idioma</li>
              <li>Configuraciones de BBQ Pod enviadas a través de nuestro configurador web</li>
              <li>Cualquier información que el usuario proporcione voluntariamente mediante formularios o comunicaciones con nosotros</li>
            </ul>
            
            <p><strong>También podemos recopilar automáticamente cierta información técnica cuando visita nuestro sitio web, incluyendo:</strong></p>
            <ul className={style.list}>
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Tipo de dispositivo</li>
              <li>Páginas visitadas y tiempo de navegación en el sitio web</li>
            </ul>
            <p>Esta información nos ayuda a comprender cómo los visitantes utilizan el sitio web y nos permite mejorar la funcionalidad, seguridad y rendimiento del mismo.</p>
          </section>

          <section className={style.section}>
            <h2>Finalidad del Tratamiento</h2>
            <p>Utilizamos los datos personales para las siguientes finalidades:</p>
            <ul className={style.list}>
              <li>Enviar el catálogo de BBQ Pod Spain solicitado</li>
              <li>Responder a consultas o solicitudes de información</li>
              <li>Revisar configuraciones de BBQ Pod enviadas a través del sitio web</li>
              <li>Contactar con potenciales clientes respecto a consultas sobre productos</li>
              <li>Mejorar la funcionalidad y seguridad de nuestro sitio web</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>Base Legal para el Tratamiento</h2>
            <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), las bases legales para el tratamiento de los datos personales incluyen:</p>
            <ul className={style.list}>
              <li>El consentimiento del usuario al enviar formularios a través del sitio web</li>
              <li>El interés legítimo para responder a consultas y proporcionar información sobre nuestros productos</li>
            </ul>
            <p>Los usuarios pueden retirar su consentimiento en cualquier momento contactando con nosotros.</p>
          </section>

          <section className={style.section}>
            <h2>Conservación de los Datos</h2>
            <p>Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados o para cumplir con obligaciones legales.</p>
            <p>Cuando los datos se faciliten mediante solicitudes de información o solicitudes de catálogo, podrán conservarse con fines comerciales y de atención al cliente.</p>
          </section>

          <section className={style.section}>
            <h2>Comunicación de Datos</h2>
            <p>No vendemos, alquilamos ni cedemos datos personales a terceros.</p>
            <p>No obstante, podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar el sitio web o prestar determinados servicios, tales como:</p>
            <ul className={style.list}>
              <li>Proveedores de alojamiento web</li>
              <li>Servicios de envío de correos electrónicos</li>
              <li>Proveedores de análisis web</li>
            </ul>
            <p>Estos proveedores solo tratarán los datos en la medida necesaria para prestar sus servicios y están obligados a mantener la confidencialidad y seguridad de la información.</p>
          </section>

          <section className={style.section}>
            <h2>Transferencias Internacionales de Datos</h2>
            <p>Algunos proveedores de servicios utilizados para el funcionamiento del sitio web pueden procesar datos fuera del Espacio Económico Europeo.</p>
            <p>En estos casos, se adoptarán las garantías adecuadas para asegurar que los datos personales estén protegidos conforme a los requisitos del RGPD.</p>
          </section>

          <section className={style.section}>
            <h2>Derechos del Usuario</h2>
            <p>De acuerdo con el RGPD, los usuarios tienen los siguientes derechos en relación con sus datos personales:</p>
            <ul className={style.list}>
              <li>Derecho de acceso a sus datos personales</li>
              <li>Derecho de rectificación de datos inexactos</li>
              <li>Derecho de supresión de datos</li>
              <li>Derecho a la limitación del tratamiento</li>
              <li>Derecho de oposición al tratamiento</li>
              <li>Derecho a la portabilidad de los datos cuando sea aplicable</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos puede enviar una solicitud a: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a></p>
            <p>Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
          </section>

          <section className={style.section}>
            <h2>Seguridad del Sitio Web</h2>
            <p>BBQ Pod Spain, SL adopta medidas técnicas y organizativas adecuadas para proteger los datos personales frente a accesos no autorizados, pérdida, uso indebido o alteración.</p>
            <p>No obstante, ninguna transmisión de datos a través de Internet puede garantizarse como completamente segura.</p>
          </section>

          <section className={style.section}>
            <h2>Enlaces a Terceros</h2>
            <p>Nuestro sitio web puede contener enlaces a páginas web de terceros. BBQ Pod Spain, SL no se hace responsable de las políticas de privacidad ni del contenido de dichos sitios web.</p>
          </section>

          <section className={style.section}>
            <h2>Cambios en esta Política de Privacidad</h2>
            <p>Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios legales o modificaciones en el funcionamiento del sitio web.</p>
            <p>Cualquier actualización se publicará en esta página.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PoliticaDePrivacidad;
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