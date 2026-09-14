import React from "react";
import Head from "next/head";
import style from "./index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";

const PrivacyPolicy = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;

  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl =
        pageURLS[currentLocale]?.privacyPolicy ||
        `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

  return (
    <>
      <Head>
        <title>{t("Privacy Policy")}</title>
        <meta name="description" content={t("Privacy Policy")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>{t("Privacy Policy")}</h1>
            <p className={style.lastUpdated}>
              Última atualização: 5 de março de 2026
            </p>
          </div>

          <section className={style.section}>
            <p>
              <strong>BBQ Pod Spain, SL</strong> está empenhada em proteger a
              sua privacidade e em garantir que os seus dados pessoais são
              tratados de forma responsável e em conformidade com o Regulamento
              Geral sobre a Proteção de Dados (RGPD) e com a legislação
              espanhola aplicável em matéria de proteção de dados.
            </p>

            <p>
              Esta Política de Privacidade explica como recolhemos, utilizamos e
              protegemos os dados pessoais quando visita o nosso website.
            </p>
          </section>

          <section className={style.section}>
            <h2>Responsável pelo Tratamento</h2>

            <p>O responsável pelo tratamento dos dados deste website é:</p>

            <div className={style.address}>
              <p>
                <strong>BBQ Pod Spain, SL</strong>
                <br />
                CIF: B24971665
                <br />
                CL. Alhaurín de la Sierra, 15
                <br />
                29120 Alhaurín el Grande
                <br />
                Málaga
                <br />
                Espanha
                <br />
                E-mail:{" "}
                <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a>
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Dados Pessoais que Recolhemos</h2>

            <p>
              Podemos recolher informações pessoais quando interage com o nosso
              website, incluindo quando solicita uma brochura, utiliza o nosso
              configurador de BBQ Pods ou entra em contacto connosco.
            </p>

            <p>
              <strong>As informações que podemos recolher incluem:</strong>
            </p>

            <ul className={style.list}>
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Preferência de idioma</li>
              <li>
                Seleções de configuração do BBQ Pod submetidas através do
                configurador do nosso website
              </li>
              <li>
                Qualquer informação que forneça voluntariamente através de
                formulários ou comunicações connosco
              </li>
            </ul>

            <p>
              <strong>
                Podemos também recolher automaticamente determinadas informações
                técnicas quando visita o nosso website, incluindo:
              </strong>
            </p>

            <ul className={style.list}>
              <li>Endereço IP</li>
              <li>Tipo de navegador</li>
              <li>Tipo de dispositivo</li>
              <li>Páginas visitadas e tempo passado no website</li>
            </ul>

            <p>
              Estas informações ajudam-nos a compreender como os visitantes
              utilizam o website e ajudam-nos a melhorar a funcionalidade, a
              segurança e o desempenho dos nossos serviços.
            </p>
          </section>

          <section className={style.section}>
            <h2>Como Utilizamos as Suas Informações</h2>

            <p>Utilizamos os dados pessoais para os seguintes fins:</p>

            <ul className={style.list}>
              <li>Enviar a brochura da BBQ Pod Spain solicitada</li>
              <li>Responder a pedidos de informação ou questões</li>
              <li>
                Analisar as seleções de configuração do BBQ Pod submetidas
                através do website
              </li>
              <li>
                Contactar potenciais clientes relativamente a pedidos de
                informação sobre os produtos
              </li>
              <li>Melhorar a funcionalidade e a segurança do nosso website</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>Base Legal para o Tratamento</h2>

            <p>
              Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD),
              as bases legais em que nos fundamentamos para o tratamento de
              dados pessoais incluem:
            </p>

            <ul className={style.list}>
              <li>
                Consentimento do utilizador ao submeter formulários no website
              </li>
              <li>
                Interesse legítimo em responder a pedidos de informação e
                fornecer as informações solicitadas sobre os nossos produtos
              </li>
            </ul>

            <p>
              Os utilizadores podem retirar o seu consentimento a qualquer
              momento, contactando-nos.
            </p>
          </section>

          <section className={style.section}>
            <h2>Conservação dos Dados</h2>

            <p>
              Os dados pessoais serão conservados apenas durante o período
              necessário para cumprir as finalidades descritas nesta política ou
              para cumprir obrigações legais.
            </p>

            <p>
              Quando os dados pessoais são submetidos através de pedidos de
              informação ou solicitações de brochuras, poderão ser conservados
              para fins comerciais e de atendimento ao cliente.
            </p>
          </section>

          <section className={style.section}>
            <h2>Partilha de Dados</h2>

            <p>Não vendemos, alugamos nem comercializamos dados pessoais.</p>

            <p>
              Podemos partilhar informações com prestadores de serviços
              terceiros de confiança que nos ajudam a operar o nosso website e
              os nossos serviços, tais como:
            </p>

            <ul className={style.list}>
              <li>Prestadores de serviços de alojamento web</li>
              <li>Prestadores de serviços de envio de e-mails</li>
              <li>Prestadores de serviços de análise de websites</li>
            </ul>

            <p>
              Estes prestadores apenas tratam os dados na medida do necessário
              para prestar os seus serviços e são obrigados a manter níveis
              adequados de confidencialidade e segurança.
            </p>
          </section>

          <section className={style.section}>
            <h2>Transferências Internacionais de Dados</h2>

            <p>
              Alguns dos prestadores de serviços utilizados para operar este
              website podem tratar dados fora do Espaço Económico Europeu.
              Nestes casos, são implementadas salvaguardas adequadas para
              garantir que os dados pessoais permanecem protegidos de acordo com
              os requisitos do RGPD.
            </p>
          </section>

          <section className={style.section}>
            <h2>Os Seus Direitos em Matéria de Proteção de Dados</h2>

            <p>
              Ao abrigo do RGPD, os utilizadores têm os seguintes direitos
              relativamente aos seus dados pessoais:
            </p>

            <ul className={style.list}>
              <li>Direito de acesso aos dados pessoais</li>
              <li>Direito de solicitar a correção de dados inexatos</li>
              <li>Direito de solicitar a eliminação dos dados pessoais</li>
              <li>Direito de limitar o tratamento</li>
              <li>Direito de oposição ao tratamento</li>
              <li>Direito à portabilidade dos dados, quando aplicável</li>
            </ul>

            <p>
              Os pedidos para exercer estes direitos podem ser enviados para:{" "}
              <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a>
            </p>

            <p>
              Os utilizadores têm também o direito de apresentar uma reclamação
              junto da Autoridade Espanhola de Proteção de Dados (Agencia
              Española de Protección de Datos – AEPD).
            </p>
          </section>

          <section className={style.section}>
            <h2>Segurança do Website</h2>

            <p>
              A <strong>BBQ Pod Spain, SL</strong> adota medidas técnicas e
              organizativas adequadas para proteger os dados pessoais contra
              acesso não autorizado, perda, utilização indevida ou alteração.
            </p>

            <p>
              No entanto, nenhuma transmissão de dados através da Internet pode
              ser garantida como totalmente segura.
            </p>
          </section>

          <section className={style.section}>
            <h2>Ligações para Websites de Terceiros</h2>

            <p>
              O nosso website pode conter ligações para websites de terceiros. A
              BBQ Pod Spain, SL não é responsável pelas práticas de privacidade
              ou pelo conteúdo desses websites externos.
            </p>
          </section>

          <section className={style.section}>
            <h2>Alterações a Esta Política de Privacidade</h2>

            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para
              refletir alterações nos requisitos legais ou na funcionalidade do
              website.
            </p>

            <p>Quaisquer atualizações serão publicadas nesta página.</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;

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
