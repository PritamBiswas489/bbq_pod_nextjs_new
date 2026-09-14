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
      const newUrl =
        pageURLS[currentLocale]?.cookiePolicy ||
        `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

  const isPortuguese = currentLocale === "pt";

  const content = isPortuguese
    ? {
        pageTitle: "Política de Cookies - BBQ Pod Spain",
        metaDescription: "Política de Cookies - BBQ Pod Spain",
        title: "Política de Cookies",
        lastUpdated: "Última atualização: 5 de março de 2026",

        intro:
          "Esta Política de Cookies explica como a BBQ Pod Spain, SL utiliza cookies e tecnologias semelhantes no website www.bbqpodspain.com.",

        whatAreCookies: "O que são os cookies?",
        whatAreCookies1:
          "Os cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo quando visita um website. Permitem que os websites funcionem corretamente e ajudam os proprietários dos websites a compreender como os visitantes interagem com os mesmos.",
        whatAreCookies2:
          "Os cookies podem armazenar informações como o tipo de navegador, informações do dispositivo, preferências de idioma e páginas visitadas.",

        websiteController: "Responsável pelo Website",
        websiteControllerText: "Este website é operado por:",
        nif: "NIF",
        email: "E-mail",
        website: "Website",
        spain: "Espanha",

        cookieTypes: "Tipos de Cookies que Utilizamos",

        essentialCookies: "Cookies Técnicos ou Essenciais",
        essentialCookiesText:
          "Estes cookies são necessários para o correto funcionamento do website e não podem ser desativados nos nossos sistemas. Permitem funções básicas, como a navegação entre páginas e o acesso a áreas seguras do website.",

        analyticsCookies: "Cookies de Análise",
        analyticsCookies1:
          "Estes cookies ajudam-nos a compreender como os visitantes utilizam o website. Permitem analisar informações como o número de visitantes, quais as páginas visitadas e como os utilizadores navegam pelo website.",
        analyticsCookies2:
          "Estas informações ajudam-nos a melhorar o desempenho e a facilidade de utilização do website.",

        functionalCookies: "Cookies Funcionais",
        functionalCookiesText:
          "Estes cookies permitem que o website memorize as preferências do utilizador, como o idioma selecionado ou outras opções de personalização.",

        thirdPartyCookies: "Cookies de Terceiros",
        thirdPartyCookies1:
          "Alguns cookies podem ser instalados por serviços de terceiros que aparecem nas nossas páginas, como ferramentas de análise ou serviços relacionados com o desempenho do website.",
        thirdPartyCookies2:
          "Estes fornecedores externos podem recolher determinadas informações técnicas, incluindo o endereço IP, o tipo de navegador e a interação com o conteúdo do website.",

        manageCookies: "Gestão de Cookies",
        manageCookies1:
          "Quando visitar o nosso website pela primeira vez, poderá aparecer um aviso ou banner de cookies que lhe permitirá aceitar ou configurar a utilização de cookies.",
        manageCookies2:
          "Também pode controlar ou eliminar os cookies através das definições do seu navegador.",
        mostBrowsers: "A maioria dos navegadores permite:",
        viewCookies: "Ver os cookies armazenados",
        deleteCookies: "Eliminar cookies",
        blockSpecific: "Bloquear cookies de websites específicos",
        blockAll: "Bloquear todos os cookies",
        cookiesWarning:
          "Tenha em atenção que a desativação de determinados cookies pode afetar o funcionamento do website.",

        changes: "Alterações a Esta Política de Cookies",
        changes1:
          "A BBQ Pod Spain, SL pode atualizar esta Política de Cookies ocasionalmente para refletir alterações legais ou modificações na utilização de cookies no website.",
        changes2:
          "Quaisquer alterações serão publicadas nesta página.",
      }
    : {
        pageTitle: "Política de Cookies - BBQ Pod Spain",
        metaDescription: "Política de Cookies - BBQ Pod Spain",
        title: "Política de Cookies",
        lastUpdated: "Última actualización: 5 de marzo de 2026",

        intro:
          "Esta Política de Cookies explica cómo BBQ Pod Spain, SL utiliza cookies y tecnologías similares en el sitio web www.bbqpodspain.com.",

        whatAreCookies: "¿Qué son las cookies?",
        whatAreCookies1:
          "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que los sitios web funcionen correctamente y ayudan a los propietarios del sitio a comprender cómo interactúan los visitantes con el mismo.",
        whatAreCookies2:
          "Las cookies pueden almacenar información como el tipo de navegador, información del dispositivo, preferencias de idioma y páginas visitadas.",

        websiteController: "Responsable del Sitio Web",
        websiteControllerText: "Este sitio web es operado por:",
        nif: "NIF",
        email: "Correo electrónico",
        website: "Sitio web",
        spain: "España",

        cookieTypes: "Tipos de Cookies que Utilizamos",

        essentialCookies: "Cookies Técnicas o Esenciales",
        essentialCookiesText:
          "Estas cookies son necesarias para el correcto funcionamiento del sitio web y no pueden desactivarse en nuestros sistemas. Permiten funciones básicas como la navegación por las páginas y el acceso a áreas seguras del sitio web.",

        analyticsCookies: "Cookies de Análisis",
        analyticsCookies1:
          "Estas cookies nos ayudan a comprender cómo los visitantes utilizan el sitio web. Permiten analizar información como el número de visitantes, qué páginas se visitan y cómo los usuarios navegan por el sitio.",
        analyticsCookies2:
          "Esta información nos ayuda a mejorar el rendimiento y la usabilidad del sitio web.",

        functionalCookies: "Cookies Funcionales",
        functionalCookiesText:
          "Estas cookies permiten que el sitio web recuerde las preferencias del usuario, como el idioma seleccionado u otras opciones de personalización.",

        thirdPartyCookies: "Cookies de Terceros",
        thirdPartyCookies1:
          "Algunas cookies pueden ser instaladas por servicios de terceros que aparecen en nuestras páginas, como herramientas de análisis o servicios relacionados con el rendimiento del sitio web.",
        thirdPartyCookies2:
          "Estos proveedores externos pueden recopilar cierta información técnica, incluyendo la dirección IP, el tipo de navegador y la interacción con el contenido del sitio web.",

        manageCookies: "Gestión de Cookies",
        manageCookies1:
          "Cuando visite nuestro sitio web por primera vez, puede aparecer un aviso o banner de cookies que le permitirá aceptar o configurar el uso de cookies.",
        manageCookies2:
          "También puede controlar o eliminar las cookies a través de la configuración de su navegador.",
        mostBrowsers: "La mayoría de los navegadores permiten:",
        viewCookies: "Ver las cookies almacenadas",
        deleteCookies: "Eliminar cookies",
        blockSpecific: "Bloquear cookies de sitios web específicos",
        blockAll: "Bloquear todas las cookies",
        cookiesWarning:
          "Tenga en cuenta que desactivar ciertas cookies puede afectar al funcionamiento del sitio web.",

        changes: "Cambios en esta Política de Cookies",
        changes1:
          "BBQ Pod Spain, SL puede actualizar esta Política de Cookies ocasionalmente para reflejar cambios legales o modificaciones en el uso de cookies en el sitio web.",
        changes2:
          "Cualquier cambio será publicado en esta página.",
      };

  return (
    <>
      <Head>
        <title>{content.pageTitle}</title>

        <meta
          name="description"
          content={content.metaDescription}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>{content.title}</h1>

            <p className={style.lastUpdated}>
              {content.lastUpdated}
            </p>
          </div>

          <section className={style.section}>
            <p>
              Esta Política de Cookies explica cómo{" "}
              <strong>BBQ Pod Spain, SL</strong>{" "}
              {isPortuguese
                ? "utiliza cookies e tecnologias semelhantes no website "
                : "utiliza cookies y tecnologías similares en el sitio web "}
              <strong>www.bbqpodspain.com</strong>.
            </p>
          </section>

          <section className={style.section}>
            <h2>{content.whatAreCookies}</h2>

            <p>{content.whatAreCookies1}</p>
            <p>{content.whatAreCookies2}</p>
          </section>

          <section className={style.section}>
            <h2>{content.websiteController}</h2>

            <p>{content.websiteControllerText}</p>

            <div className={style.address}>
              <p>
                <strong>BBQ Pod Spain, SL</strong>
                <br />
                {content.nif}: B24971665
                <br />
                CL. Alhaurín de la Sierra, 15
                <br />
                29120 Alhaurín el Grande
                <br />
                Málaga
                <br />
                {content.spain}
                <br />
                {content.email}:{" "}
                <a href="mailto:sales@bbqpodspain.com">
                  sales@bbqpodspain.com
                </a>
                <br />
                {content.website}:{" "}
                <a
                  href="https://www.bbqpodspain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.bbqpodspain.com
                </a>
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2>{content.cookieTypes}</h2>

            <div className={style.cookieCard}>
              <h3>{content.essentialCookies}</h3>
              <p>{content.essentialCookiesText}</p>
            </div>

            <div className={style.cookieCard}>
              <h3>{content.analyticsCookies}</h3>
              <p>{content.analyticsCookies1}</p>
              <p>{content.analyticsCookies2}</p>
            </div>

            <div className={style.cookieCard}>
              <h3>{content.functionalCookies}</h3>
              <p>{content.functionalCookiesText}</p>
            </div>
          </section>

          <section className={style.section}>
            <h2>{content.thirdPartyCookies}</h2>

            <p>{content.thirdPartyCookies1}</p>
            <p>{content.thirdPartyCookies2}</p>
          </section>

          <section className={style.section}>
            <h2>{content.manageCookies}</h2>

            <p>{content.manageCookies1}</p>
            <p>{content.manageCookies2}</p>

            <p>
              <strong>{content.mostBrowsers}</strong>
            </p>

            <ul className={style.list}>
              <li>{content.viewCookies}</li>
              <li>{content.deleteCookies}</li>
              <li>{content.blockSpecific}</li>
              <li>{content.blockAll}</li>
            </ul>

            <p>
              <em>{content.cookiesWarning}</em>
            </p>
          </section>

          <section className={style.section}>
            <h2>{content.changes}</h2>

            <p>{content.changes1}</p>
            <p>{content.changes2}</p>
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
        nextI18NextConfig
      )),
    },
  };
}