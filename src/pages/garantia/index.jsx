import React from "react";
import Head from "next/head";
import style from "../warranty/index.module.scss";
import Layout from "@/section/layout";
import nextI18NextConfig from "@/../next-i18next.config.js";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { pageURLS } from "@/utils/getPageUrls";

const Garantia = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;

  React.useEffect(() => {
    if (!router.query.locale && currentLocale) {
      const newUrl =
        pageURLS[currentLocale]?.garantia ||
        `/${currentLocale}${router.asPath}`;

      window.history.replaceState(null, "", newUrl);
    }
  }, [router, currentLocale]);

  const isPortuguese = currentLocale === "pt";

  const content = isPortuguese
    ? {
        pageTitle: "Garantia - BBQ Pod Spain",
        metaDescription: "Garantia - BBQ Pod Spain",
        title: "Garantia BBQ Pod Spain",
        lastUpdated: "Última atualização: 5 de março de 2026",

        intro1:
          "Na BBQ Pod Spain, concebemos e fabricamos cozinhas exteriores tipo pod, pensadas para proporcionar muitos anos de cozinha, convívio e lazer ao ar livre.",
        intro2:
          "Os nossos produtos são fabricados com materiais duráveis e componentes cuidadosamente selecionados para utilização no exterior. Para garantir a qualidade dos nossos produtos, oferecemos cobertura de garantia para a estrutura, os acabamentos exteriores e os eletrodomésticos integrados dos nossos BBQ Pods.",
        intro3:
          "Esta página apresenta uma visão geral da nossa cobertura de garantia. A documentação completa da garantia é fornecida aos clientes no momento da compra.",

        warrantyCoverage: "Cobertura da Garantia",

        structuralWarranty: "Garantia Estrutural de 10 Anos",
        structuralText:
          "A estrutura principal do BBQ Pod está coberta por uma garantia estrutural limitada de 10 anos. Esta garantia cobre defeitos de materiais ou de fabrico que afetem a integridade estrutural do pod quando utilizado em condições normais de utilização residencial.",
        coveredComponents: "Componentes abrangidos:",
        stainlessSteel: "Estrutura principal em aço inoxidável",
        cabinetStructure: "Estrutura principal dos armários",
        podShell: "Carcaça estrutural do BBQ Pod",
        structuralDefect:
          "Se for detetado um defeito estrutural durante o período de garantia, a BBQ Pod Spain poderá reparar ou substituir o componente afetado, ao seu critério.",
        structuralExclusion:
          "A garantia estrutural não cobre danos causados por utilização indevida, acidentes, instalação incorreta, modificações não autorizadas ou impactos externos.",

        exteriorWarranty: "Garantia de 5 Anos do Acabamento Exterior",
        exteriorText:
          "As superfícies exteriores pintadas ou revestidas do BBQ Pod estão cobertas por uma garantia limitada de 5 anos contra defeitos de fabrico no acabamento aplicado.",
        exteriorCovers: "Esta garantia cobre problemas como:",
        coatingPeeling: "Desprendimento do revestimento original de fábrica",
        finishFailure:
          "Falha do acabamento devido a defeitos de fabrico",
        exteriorNotCovered: "A garantia não cobre:",
        naturalWeathering: "Desgaste natural devido à exposição às condições climatéricas",
        fading:
          "Pequenas alterações de cor ou alterações estéticas ao longo do tempo",
        scratches: "Riscos ou danos causados durante a utilização",
        cleaningDamage:
          "Danos causados por produtos de limpeza ou manutenção inadequados",
        outdoorProducts:
          "Os produtos para utilização no exterior estão expostos a condições ambientais e podem sofrer alterações estéticas naturais ao longo do tempo devido ao sol, às variações de temperatura e a outros fatores ambientais.",

        applianceWarranty: "Garantia de 2 Anos dos Eletrodomésticos",
        applianceText:
          "Os eletrodomésticos integrados fornecidos com o BBQ Pod têm uma garantia de 2 anos a partir da data de entrega.",
        mayInclude: "Isto pode incluir:",
        barbecues: "Barbecues",
        refrigerators: "Frigoríficos",
        electricalComponents: "Componentes elétricos",
        lightingSystems: "Sistemas de iluminação",
        kitchenEquipment:
          "Outros equipamentos de cozinha ou refrigeração integrados",
        manufacturerWarranty:
          "Quando aplicável, os eletrodomésticos podem também dispor da sua própria garantia do fabricante. A documentação correspondente será entregue juntamente com o produto.",
        applianceClaims:
          "As reclamações relacionadas com eletrodomésticos poderão ser tratadas diretamente com o fabricante, quando necessário.",

        sitePreparation: "Preparação do Local de Instalação",
        sitePreparation1:
          "O cliente é responsável por garantir que o local de instalação está devidamente preparado antes da entrega.",
        sitePreparation2:
          "A área de instalação deve proporcionar uma superfície estável e nivelada, capaz de suportar o peso do BBQ Pod.",
        sitePreparation3:
          "As superfícies adequadas podem incluir betão reforçado, pátios estruturais ou outras bases apropriadas.",
        sitePreparation4:
          "Danos ou problemas de funcionamento resultantes de superfícies instáveis, desniveladas ou inadequadas não estão cobertos pela garantia.",

        accessDelivery: "Acesso ao Local e Entrega",
        accessDelivery1:
          "Os BBQ Pods são estruturas exteriores de grandes dimensões e podem exigir equipamentos especializados de transporte ou elevação, dependendo da localização.",
        accessDelivery2:
          "O cliente é responsável por garantir que o local de entrega dispõe de acesso adequado para veículos de transporte e para qualquer equipamento de elevação necessário.",
        accessDelivery3:
          "Se a entrega não puder ser concluída devido a acessos restritos, terreno inadequado ou outras condições do local, poderão aplicar-se custos adicionais de transporte ou elevação.",
        accessDelivery4:
          "A BBQ Pod Spain não se responsabiliza por atrasos nem por custos adicionais resultantes de condições de acesso inadequadas.",

        installationServices: "Instalação e Ligações de Serviços",
        installation1:
          "Alguns modelos de BBQ Pod podem necessitar de ligações elétricas, de gás ou de água, dependendo da configuração selecionada.",
        installation2:
          "O cliente é responsável por garantir que todas as ligações necessárias são realizadas por profissionais qualificados e cumprem a legislação em vigor.",
        installation3:
          "A BBQ Pod Spain não se responsabiliza por falhas, danos ou problemas de funcionamento resultantes de uma instalação incorreta, ligações inadequadas ou modificações realizadas após a entrega.",

        outdoorEnvironment: "Ambiente Exterior",
        outdoorEnvironment1:
          "Os BBQ Pods foram concebidos para utilização no exterior e estarão expostos a condições climatéricas como sol, chuva, variações de temperatura e outros fatores ambientais.",
        outdoorEnvironment2:
          "Ao longo do tempo, esta exposição pode provocar alterações estéticas naturais, como ligeiras alterações de cor, desgaste ou marcas superficiais. Estas alterações são consideradas normais e não constituem defeitos de fabrico.",

        exclusions: "Exclusões da Garantia",
        exclusionsTitle: "A garantia não cobre:",
        misuse: "Danos causados por utilização indevida ou negligência",
        unauthorized:
          "Modificações ou alterações não autorizadas",
        normalWear: "Desgaste normal decorrente da utilização",
        environmentalChanges:
          "Alterações estéticas causadas pela exposição ao ambiente",
        accidents:
          "Danos provocados por acidentes, incêndios, inundações ou fenómenos meteorológicos extremos",
        transportInstallation:
          "Danos causados durante o transporte ou instalação organizados pelo cliente",
        incorrectConnections:
          "Danos resultantes de ligações elétricas, de gás ou de água incorretas",

        warrantyClaim: "Pedido de Garantia",
        warrantyClaimText:
          "Se considerar que existe um problema abrangido pela garantia, contacte-nos, fornecendo informações detalhadas sobre o problema.",
        include: "Inclua:",
        nameOrder: "O seu nome e informações da encomenda",
        problemDescription: "Uma descrição do problema",
        photos:
          "Fotografias da área afetada, se possível",
        email: "E-mail:",
        teamReview:
          "A nossa equipa analisará as informações e indicará os próximos passos.",

        warrantyLimitations: "Limitações da Garantia",
        limitations1:
          "A BBQ Pod Spain reserva-se o direito de reparar, substituir ou fornecer componentes de substituição quando for confirmada uma reclamação de garantia válida.",
        limitations2:
          "A garantia aplica-se exclusivamente ao comprador original, salvo acordo escrito em contrário.",
        limitations3:
          "A BBQ Pod Spain não será responsável por perdas indiretas ou consequenciais decorrentes da utilização do produto.",

        completeTerms: "Condições Completas",
        completeTerms1:
          "As condições completas da garantia e de venda são fornecidas aos clientes no momento da compra.",
        completeTerms2:
          "O pagamento do depósito de um BBQ Pod implica a aceitação das condições de venda e garantia aplicáveis.",
      }
    : {
        pageTitle: "Garantía - BBQ Pod Spain",
        metaDescription: "Garantía - BBQ Pod Spain",
        title: "Garantía BBQ Pod Spain",
        lastUpdated: "Última actualización: 5 de marzo de 2026",

        intro1:
          "En BBQ Pod Spain diseñamos y fabricamos cocinas exteriores tipo pod pensadas para ofrecer muchos años de cocina, reuniones y disfrute al aire libre.",
        intro2:
          "Nuestros productos se fabrican utilizando materiales duraderos y componentes cuidadosamente seleccionados para su uso en exteriores. Para respaldar la calidad de nuestros productos, ofrecemos cobertura de garantía para la estructura, los acabados exteriores y los electrodomésticos integrados de nuestros BBQ Pods.",
        intro3:
          "Esta página ofrece una visión general de nuestra cobertura de garantía. La documentación completa de la garantía se proporciona a los clientes en el momento de la compra.",

        warrantyCoverage: "Cobertura de Garantía",

        structuralWarranty: "Garantía Estructural de 10 Años",
        structuralText:
          "La estructura principal del BBQ Pod está cubierta por una garantía estructural limitada de 10 años. Esta garantía cubre defectos de materiales o de fabricación que afecten a la integridad estructural del pod cuando se utilice en condiciones normales de uso residencial.",
        coveredComponents: "Componentes cubiertos:",
        stainlessSteel: "Estructura principal de acero inoxidable",
        cabinetStructure: "Estructura principal de los armarios",
        podShell: "Carcasa estructural del BBQ Pod",
        structuralDefect:
          "Si se detecta un defecto estructural dentro del período de garantía, BBQ Pod Spain podrá reparar o sustituir el componente afectado a su discreción.",
        structuralExclusion:
          "La garantía estructural no cubre daños causados por uso indebido, accidentes, instalación incorrecta, modificaciones no autorizadas o impactos externos.",

        exteriorWarranty: "Garantía del Acabado Exterior de 5 Años",
        exteriorText:
          "Las superficies exteriores pintadas o recubiertas del BBQ Pod están cubiertas por una garantía limitada de 5 años contra defectos de fabricación en el acabado aplicado.",
        exteriorCovers: "Esta garantía cubre problemas como:",
        coatingPeeling:
          "Desprendimiento del recubrimiento original de fábrica",
        finishFailure:
          "Fallo del acabado debido a defectos de fabricación",
        exteriorNotCovered: "La garantía no cubre:",
        naturalWeathering:
          "Desgaste natural por exposición al clima",
        fading:
          "Pequeñas decoloraciones o cambios estéticos con el tiempo",
        scratches:
          "Arañazos o daños causados durante el uso",
        cleaningDamage:
          "Daños causados por productos de limpieza o mantenimiento inadecuados",
        outdoorProducts:
          "Los productos para exteriores están expuestos a condiciones ambientales y pueden experimentar cambios estéticos naturales con el paso del tiempo debido al sol, cambios de temperatura y otros factores ambientales.",

        applianceWarranty: "Garantía de Electrodomésticos de 2 Años",
        applianceText:
          "Los electrodomésticos integrados suministrados con el BBQ Pod cuentan con una garantía de 2 años a partir de la fecha de entrega.",
        mayInclude: "Esto puede incluir:",
        barbecues: "Barbacoas",
        refrigerators: "Frigoríficos",
        electricalComponents: "Componentes eléctricos",
        lightingSystems: "Sistemas de iluminación",
        kitchenEquipment:
          "Otros equipos de cocina o refrigeración integrados",
        manufacturerWarranty:
          "Cuando corresponda, los electrodomésticos pueden disponer también de su propia garantía del fabricante. La documentación correspondiente se entregará junto con el producto.",
        applianceClaims:
          "Las reclamaciones relacionadas con electrodomésticos podrán gestionarse directamente con el fabricante cuando sea necesario.",

        sitePreparation: "Preparación del Lugar de Instalación",
        sitePreparation1:
          "El cliente es responsable de garantizar que el lugar de instalación esté correctamente preparado antes de la entrega.",
        sitePreparation2:
          "El área de instalación debe proporcionar una superficie estable y nivelada capaz de soportar el peso del BBQ Pod.",
        sitePreparation3:
          "Las superficies adecuadas pueden incluir hormigón reforzado, patios estructurales u otras bases apropiadas.",
        sitePreparation4:
          "Los daños o problemas de funcionamiento derivados de superficies inestables, desniveladas o insuficientes no están cubiertos por la garantía.",

        accessDelivery: "Acceso al Lugar y Entrega",
        accessDelivery1:
          "Los BBQ Pods son estructuras exteriores de gran tamaño y pueden requerir equipos de transporte o elevación especializados según la ubicación.",
        accessDelivery2:
          "El cliente es responsable de asegurar que el lugar de entrega dispone de acceso adecuado para vehículos de transporte y cualquier equipo de elevación necesario.",
        accessDelivery3:
          "Si la entrega no puede completarse debido a accesos restringidos, terreno inadecuado u otras condiciones del lugar, podrán aplicarse costes adicionales de transporte o elevación.",
        accessDelivery4:
          "BBQ Pod Spain no se hace responsable de retrasos ni de costes adicionales derivados de condiciones de acceso inadecuadas.",

        installationServices: "Instalación y Conexiones de Servicios",
        installation1:
          "Algunos modelos de BBQ Pod pueden requerir conexiones eléctricas, de gas o de agua dependiendo de la configuración seleccionada.",
        installation2:
          "El cliente es responsable de garantizar que todas las conexiones necesarias sean realizadas por profesionales cualificados y cumplan con la normativa vigente.",
        installation3:
          "BBQ Pod Spain no se responsabiliza de fallos, daños o problemas de funcionamiento derivados de una instalación incorrecta, conexiones inadecuadas o modificaciones realizadas después de la entrega.",

        outdoorEnvironment: "Entorno Exterior",
        outdoorEnvironment1:
          "Los BBQ Pods están diseñados para su uso en exteriores y estarán expuestos a condiciones climáticas como sol, lluvia, variaciones de temperatura y otros factores ambientales.",
        outdoorEnvironment2:
          "Con el tiempo, esta exposición puede provocar cambios estéticos naturales como ligeras decoloraciones, desgaste o marcas superficiales. Estos cambios se consideran normales y no constituyen defectos de fabricación.",

        exclusions: "Exclusiones de Garantía",
        exclusionsTitle: "La garantía no cubre:",
        misuse: "Daños causados por uso indebido o negligencia",
        unauthorized:
          "Modificaciones o alteraciones no autorizadas",
        normalWear: "Desgaste normal por uso",
        environmentalChanges:
          "Cambios estéticos causados por la exposición al entorno",
        accidents:
          "Daños provocados por accidentes, incendios, inundaciones o fenómenos meteorológicos extremos",
        transportInstallation:
          "Daños causados durante transporte o instalación organizados por el cliente",
        incorrectConnections:
          "Daños derivados de conexiones eléctricas, de gas o de agua incorrectas",

        warrantyClaim: "Solicitud de Garantía",
        warrantyClaimText:
          "Si considera que existe un problema cubierto por la garantía, póngase en contacto con nosotros proporcionando detalles del problema.",
        include: "Incluya:",
        nameOrder: "Su nombre e información del pedido",
        problemDescription: "Una descripción del problema",
        photos:
          "Fotografías de la zona afectada si es posible",
        email: "Correo electrónico:",
        teamReview:
          "Nuestro equipo revisará la información y le indicará los siguientes pasos.",

        warrantyLimitations: "Limitaciones de la Garantía",
        limitations1:
          "BBQ Pod Spain se reserva el derecho de reparar, sustituir o proporcionar componentes de reemplazo cuando se confirme una reclamación válida de garantía.",
        limitations2:
          "La garantía se aplica únicamente al comprador original, salvo que se acuerde lo contrario por escrito.",
        limitations3:
          "BBQ Pod Spain no será responsable de pérdidas indirectas o consecuentes derivadas del uso del producto.",

        completeTerms: "Condiciones Completas",
        completeTerms1:
          "Las condiciones completas de garantía y de venta se proporcionan a los clientes en el momento de la compra.",
        completeTerms2:
          "El pago del depósito para un BBQ Pod implica la aceptación de las condiciones de venta y garantía aplicables.",
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
            <p>{content.intro1}</p>
            <p>{content.intro2}</p>
            <p>{content.intro3}</p>
          </section>

          <section className={style.section}>
            <h2>{content.warrantyCoverage}</h2>

            <div className={style.warrantyCard}>
              <h3>{content.structuralWarranty}</h3>

              <p>{content.structuralText}</p>

              <p>
                <strong>{content.coveredComponents}</strong>
              </p>

              <ul className={style.list}>
                <li>{content.stainlessSteel}</li>
                <li>{content.cabinetStructure}</li>
                <li>{content.podShell}</li>
              </ul>

              <p>{content.structuralDefect}</p>

              <p>{content.structuralExclusion}</p>
            </div>

            <div className={style.warrantyCard}>
              <h3>{content.exteriorWarranty}</h3>

              <p>{content.exteriorText}</p>

              <p>
                <strong>{content.exteriorCovers}</strong>
              </p>

              <ul className={style.list}>
                <li>{content.coatingPeeling}</li>
                <li>{content.finishFailure}</li>
              </ul>

              <p>
                <strong>{content.exteriorNotCovered}</strong>
              </p>

              <ul className={style.list}>
                <li>{content.naturalWeathering}</li>
                <li>{content.fading}</li>
                <li>{content.scratches}</li>
                <li>{content.cleaningDamage}</li>
              </ul>

              <p>{content.outdoorProducts}</p>
            </div>

            <div className={style.warrantyCard}>
              <h3>{content.applianceWarranty}</h3>

              <p>{content.applianceText}</p>

              <p>
                <strong>{content.mayInclude}</strong>
              </p>

              <ul className={style.list}>
                <li>{content.barbeques}</li>
                <li>{content.refrigerators}</li>
                <li>{content.electricalComponents}</li>
                <li>{content.lightingSystems}</li>
                <li>{content.kitchenEquipment}</li>
              </ul>

              <p>{content.manufacturerWarranty}</p>

              <p>{content.applianceClaims}</p>
            </div>
          </section>

          <section className={style.section}>
            <h2>{content.sitePreparation}</h2>

            <p>{content.sitePreparation1}</p>
            <p>{content.sitePreparation2}</p>
            <p>{content.sitePreparation3}</p>
            <p>{content.sitePreparation4}</p>
          </section>

          <section className={style.section}>
            <h2>{content.accessDelivery}</h2>

            <p>{content.accessDelivery1}</p>
            <p>{content.accessDelivery2}</p>
            <p>{content.accessDelivery3}</p>
            <p>{content.accessDelivery4}</p>
          </section>

          <section className={style.section}>
            <h2>{content.installationServices}</h2>

            <p>{content.installation1}</p>
            <p>{content.installation2}</p>
            <p>{content.installation3}</p>
          </section>

          <section className={style.section}>
            <h2>{content.outdoorEnvironment}</h2>

            <p>{content.outdoorEnvironment1}</p>
            <p>{content.outdoorEnvironment2}</p>
          </section>

          <section className={style.section}>
            <h2>{content.exclusions}</h2>

            <p>
              <strong>{content.exclusionsTitle}</strong>
            </p>

            <ul className={style.list}>
              <li>{content.misuse}</li>
              <li>{content.unauthorized}</li>
              <li>{content.normalWear}</li>
              <li>{content.environmentalChanges}</li>
              <li>{content.accidents}</li>
              <li>{content.transportInstallation}</li>
              <li>{content.incorrectConnections}</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>{content.warrantyClaim}</h2>

            <p>{content.warrantyClaimText}</p>

            <p>
              <strong>{content.include}</strong>
            </p>

            <ul className={style.list}>
              <li>{content.nameOrder}</li>
              <li>{content.problemDescription}</li>
              <li>{content.photos}</li>
            </ul>

            <div className={style.address}>
              <p>
                {content.email}{" "}
                <a href="mailto:sales@bbqpodspain.com">
                  sales@bbqpodspain.com
                </a>
              </p>
            </div>

            <p>{content.teamReview}</p>
          </section>

          <section className={style.section}>
            <h2>{content.warrantyLimitations}</h2>

            <p>{content.limitations1}</p>
            <p>{content.limitations2}</p>
            <p>{content.limitations3}</p>
          </section>

          <section className={style.section}>
            <h2>{content.completeTerms}</h2>

            <p>{content.completeTerms1}</p>
            <p>{content.completeTerms2}</p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Garantia;

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