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
      const newUrl =
        pageURLS[currentLocale]?.legalNotice ||
        `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

  const isPortuguese = currentLocale === "pt";

  const content = isPortuguese
    ? {
        title: "Aviso Legal",
        lastUpdated: "Última atualização: 5 de março de 2026",

        websiteInfo: "Informações do Website",
        websiteInfoText:
          "Em cumprimento do dever de informação estabelecido na Lei 34/2002 relativa aos Serviços da Sociedade da Informação e ao Comércio Eletrónico (LSSI-CE), são disponibilizados de seguida os seguintes dados:",

        websiteOwner: "Titular do Website",
        taxNumber: "NIF",
        email: "E-mail",
        website: "Website",
        registeredOffice: "Sede Social",

        useWebsite: "Utilização do Website",
        useWebsiteText1:
          "O acesso e a utilização deste website conferem a condição de utilizador e implicam a aceitação plena das condições estabelecidas no presente Aviso Legal.",
        useWebsiteText2:
          "O utilizador compromete-se a utilizar de forma adequada os conteúdos e serviços disponibilizados através do website e a não os utilizar para realizar atividades ilícitas ou contrárias à legislação em vigor.",

        intellectualProperty: "Propriedade Intelectual",
        intellectualPropertyText1:
          "Todos os conteúdos do website, incluindo, entre outros, textos, imagens, gráficos, logótipos, designs e software, são propriedade da BBQ Pod Spain, SL ou são utilizados com a devida autorização.",
        intellectualPropertyText2:
          "É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem a autorização prévia e por escrito da BBQ Pod Spain, SL.",

        liability: "Limitação de Responsabilidade",
        liabilityText1:
          "A BBQ Pod Spain, SL não se responsabiliza por quaisquer danos ou prejuízos que possam resultar da utilização das informações contidas neste website.",
        liabilityText2:
          "Do mesmo modo, não é garantida a ausência de vírus ou de outros elementos que possam causar alterações nos sistemas informáticos do utilizador.",

        externalLinks: "Ligações Externas",
        externalLinksText:
          "Este website pode conter ligações para páginas web de terceiros. A BBQ Pod Spain, SL não se responsabiliza pelo conteúdo nem pelas políticas de privacidade desses websites.",
      }
    : {
        title: "Aviso Legal",
        lastUpdated: "Última actualización: 5 de marzo de 2026",

        websiteInfo: "Información del Sitio Web",
        websiteInfoText:
          "En cumplimiento con el deber de información establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los siguientes datos:",

        websiteOwner: "Titular del Sitio Web",
        taxNumber: "NIF",
        email: "Correo Electrónico",
        website: "Sitio Web",
        registeredOffice: "Domicilio Social",

        useWebsite: "Uso del Sitio Web",
        useWebsiteText1:
          "El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena de las condiciones recogidas en el presente Aviso Legal.",
        useWebsiteText2:
          "El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través del sitio web y a no utilizarlos para realizar actividades ilícitas o contrarias a la legislación vigente.",

        intellectualProperty: "Propiedad Intelectual",
        intellectualPropertyText1:
          "Todos los contenidos del sitio web, incluyendo, entre otros, textos, imágenes, gráficos, logotipos, diseños y software, son propiedad de BBQ Pod Spain, SL o se utilizan con la debida autorización.",
        intellectualPropertyText2:
          "Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin la autorización previa y por escrito de BBQ Pod Spain, SL.",

        liability: "Limitación de Responsabilidad",
        liabilityText1:
          "BBQ Pod Spain, SL no se hace responsable de los daños o perjuicios que pudieran derivarse del uso de la información contenida en este sitio web.",
        liabilityText2:
          "Asimismo, no se garantiza la ausencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos del usuario.",

        externalLinks: "Enlaces Externos",
        externalLinksText:
          "Este sitio web puede contener enlaces a páginas web de terceros. BBQ Pod Spain, SL no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios web.",
      };

  return (
    <>
      <Head>
        <title>{content.title} - BBQ Pod Spain</title>

        <meta
          name="description"
          content={`${content.title} - BBQ Pod Spain`}
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
            <h2>{content.websiteInfo}</h2>

            <p>{content.websiteInfoText}</p>

            <div className={style.infoGrid}>
              <div className={style.infoItem}>
                <h3>{content.websiteOwner}</h3>
                <p>BBQ Pod Spain, SL</p>
              </div>

              <div className={style.infoItem}>
                <h3>{content.taxNumber}</h3>
                <p>B24971665</p>
              </div>

              <div className={style.infoItem}>
                <h3>{content.email}</h3>

                <p>
                  <a href="mailto:sales@bbqpodspain.com">
                    sales@bbqpodspain.com
                  </a>
                </p>
              </div>

              <div className={style.infoItem}>
                <h3>{content.website}</h3>

                <p>
                  <a
                    href="https://www.bbqpodspain.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bbqpodspain.com
                  </a>
                </p>
              </div>
            </div>

            <div className={style.address}>
              <h3>{content.registeredOffice}</h3>

              <p>
                CL. Alhaurín de la Sierra, 15
                <br />
                29120 Alhaurín el Grande
                <br />
                Málaga
                <br />
                {isPortuguese ? "Espanha" : "España"}
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2>{content.useWebsite}</h2>

            <p>{content.useWebsiteText1}</p>

            <p>{content.useWebsiteText2}</p>
          </section>

          <section className={style.section}>
            <h2>{content.intellectualProperty}</h2>

            <p>{content.intellectualPropertyText1}</p>

            <p>{content.intellectualPropertyText2}</p>
          </section>

          <section className={style.section}>
            <h2>{content.liability}</h2>

            <p>{content.liabilityText1}</p>

            <p>{content.liabilityText2}</p>
          </section>

          <section className={style.section}>
            <h2>{content.externalLinks}</h2>

            <p>{content.externalLinksText}</p>
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
        nextI18NextConfig
      )),
    },
  };
}