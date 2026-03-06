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
        const newUrl = pageURLS[currentLocale]?.garantia || `/${currentLocale}${router.asPath}`;
        window.history.replaceState(null, "", newUrl);
      }
    }, [router, currentLocale]);

  return (
    <>
      <Head>
        <title>Garantía - BBQ Pod Spain</title>
        <meta name="description" content="Garantía - BBQ Pod Spain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={style.container}>
          <div className={style.header}>
            <h1>Garantía BBQ Pod Spain</h1>
            <p className={style.lastUpdated}>Última actualización: 5 de marzo de 2026</p>
          </div>

          <section className={style.section}>
            <p>
              En BBQ Pod Spain diseñamos y fabricamos cocinas exteriores tipo pod pensadas para ofrecer muchos años
              de cocina, reuniones y disfrute al aire libre.
            </p>
            <p>
              Nuestros productos se fabrican utilizando materiales duraderos y componentes cuidadosamente seleccionados
              para su uso en exteriores. Para respaldar la calidad de nuestros productos, ofrecemos cobertura de garantía
              para la estructura, los acabados exteriores y los electrodomésticos integrados de nuestros BBQ Pods.
            </p>
            <p>
              Esta página ofrece una visión general de nuestra cobertura de garantía. La documentación completa de la
              garantía se proporciona a los clientes en el momento de la compra.
            </p>
          </section>

          <section className={style.section}>
            <h2>Cobertura de Garantía</h2>

            <div className={style.warrantyCard}>
              <h3>Garantía Estructural de 10 Años</h3>
              <p>
                La estructura principal del BBQ Pod está cubierta por una garantía estructural limitada de 10 años.
                Esta garantía cubre defectos de materiales o de fabricación que afecten a la integridad estructural
                del pod cuando se utilice en condiciones normales de uso residencial.
              </p>
              <p><strong>Componentes cubiertos:</strong></p>
              <ul className={style.list}>
                <li>Estructura principal de acero inoxidable</li>
                <li>Estructura principal de los armarios</li>
                <li>Carcasa estructural del BBQ Pod</li>
              </ul>
              <p>
                Si se detecta un defecto estructural dentro del período de garantía, BBQ Pod Spain podrá reparar o
                sustituir el componente afectado a su discreción.
              </p>
              <p>
                La garantía estructural no cubre daños causados por uso indebido, accidentes, instalación incorrecta,
                modificaciones no autorizadas o impactos externos.
              </p>
            </div>

            <div className={style.warrantyCard}>
              <h3>Garantía del Acabado Exterior de 5 Años</h3>
              <p>
                Las superficies exteriores pintadas o recubiertas del BBQ Pod están cubiertas por una garantía limitada
                de 5 años contra defectos de fabricación en el acabado aplicado.
              </p>
              <p><strong>Esta garantía cubre problemas como:</strong></p>
              <ul className={style.list}>
                <li>Desprendimiento del recubrimiento original de fábrica</li>
                <li>Fallo del acabado debido a defectos de fabricación</li>
              </ul>
              <p><strong>La garantía no cubre:</strong></p>
              <ul className={style.list}>
                <li>Desgaste natural por exposición al clima</li>
                <li>Pequeñas decoloraciones o cambios estéticos con el tiempo</li>
                <li>Arañazos o daños causados durante el uso</li>
                <li>Daños causados por productos de limpieza o mantenimiento inadecuados</li>
              </ul>
              <p>
                Los productos para exteriores están expuestos a condiciones ambientales y pueden experimentar cambios
                estéticos naturales con el paso del tiempo debido al sol, cambios de temperatura y otros factores ambientales.
              </p>
            </div>

            <div className={style.warrantyCard}>
              <h3>Garantía de Electrodomésticos de 2 Años</h3>
              <p>
                Los electrodomésticos integrados suministrados con el BBQ Pod cuentan con una garantía de 2 años a partir
                de la fecha de entrega.
              </p>
              <p><strong>Esto puede incluir:</strong></p>
              <ul className={style.list}>
                <li>Barbacoas</li>
                <li>Frigoríficos</li>
                <li>Componentes eléctricos</li>
                <li>Sistemas de iluminación</li>
                <li>Otros equipos de cocina o refrigeración integrados</li>
              </ul>
              <p>
                Cuando corresponda, los electrodomésticos pueden disponer también de su propia garantía del fabricante.
                La documentación correspondiente se entregará junto con el producto.
              </p>
              <p>
                Las reclamaciones relacionadas con electrodomésticos podrán gestionarse directamente con el fabricante
                cuando sea necesario.
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2>Preparación del Lugar de Instalación</h2>
            <p>
              El cliente es responsable de garantizar que el lugar de instalación esté correctamente preparado antes
              de la entrega.
            </p>
            <p>
              El área de instalación debe proporcionar una superficie estable y nivelada capaz de soportar el peso del BBQ Pod.
            </p>
            <p>
              Las superficies adecuadas pueden incluir hormigón reforzado, patios estructurales u otras bases apropiadas.
            </p>
            <p>
              Los daños o problemas de funcionamiento derivados de superficies inestables, desniveladas o insuficientes
              no están cubiertos por la garantía.
            </p>
          </section>

          <section className={style.section}>
            <h2>Acceso al Lugar y Entrega</h2>
            <p>
              Los BBQ Pods son estructuras exteriores de gran tamaño y pueden requerir equipos de transporte o elevación
              especializados según la ubicación.
            </p>
            <p>
              El cliente es responsable de asegurar que el lugar de entrega dispone de acceso adecuado para vehículos
              de transporte y cualquier equipo de elevación necesario.
            </p>
            <p>
              Si la entrega no puede completarse debido a accesos restringidos, terreno inadecuado u otras condiciones
              del lugar, podrán aplicarse costes adicionales de transporte o elevación.
            </p>
            <p>
              BBQ Pod Spain no se hace responsable de retrasos ni de costes adicionales derivados de condiciones de
              acceso inadecuadas.
            </p>
          </section>

          <section className={style.section}>
            <h2>Instalación y Conexiones de Servicios</h2>
            <p>
              Algunos modelos de BBQ Pod pueden requerir conexiones eléctricas, de gas o de agua dependiendo de la
              configuración seleccionada.
            </p>
            <p>
              El cliente es responsable de garantizar que todas las conexiones necesarias sean realizadas por profesionales
              cualificados y cumplan con la normativa vigente.
            </p>
            <p>
              BBQ Pod Spain no se responsabiliza de fallos, daños o problemas de funcionamiento derivados de una instalación
              incorrecta, conexiones inadecuadas o modificaciones realizadas después de la entrega.
            </p>
          </section>

          <section className={style.section}>
            <h2>Entorno Exterior</h2>
            <p>
              Los BBQ Pods están diseñados para su uso en exteriores y estarán expuestos a condiciones climáticas como
              sol, lluvia, variaciones de temperatura y otros factores ambientales.
            </p>
            <p>
              Con el tiempo, esta exposición puede provocar cambios estéticos naturales como ligeras decoloraciones,
              desgaste o marcas superficiales. Estos cambios se consideran normales y no constituyen defectos de fabricación.
            </p>
          </section>

          <section className={style.section}>
            <h2>Exclusiones de Garantía</h2>
            <p><strong>La garantía no cubre:</strong></p>
            <ul className={style.list}>
              <li>Daños causados por uso indebido o negligencia</li>
              <li>Modificaciones o alteraciones no autorizadas</li>
              <li>Desgaste normal por uso</li>
              <li>Cambios estéticos causados por la exposición al entorno</li>
              <li>Daños provocados por accidentes, incendios, inundaciones o fenómenos meteorológicos extremos</li>
              <li>Daños causados durante transporte o instalación organizados por el cliente</li>
              <li>Daños derivados de conexiones eléctricas, de gas o de agua incorrectas</li>
            </ul>
          </section>

          <section className={style.section}>
            <h2>Solicitud de Garantía</h2>
            <p>Si considera que existe un problema cubierto por la garantía, póngase en contacto con nosotros proporcionando detalles del problema.</p>
            <p><strong>Incluya:</strong></p>
            <ul className={style.list}>
              <li>Su nombre e información del pedido</li>
              <li>Una descripción del problema</li>
              <li>Fotografías de la zona afectada si es posible</li>
            </ul>
            <div className={style.address}>
              <p>
                Correo electrónico: <a href="mailto:sales@bbqpodspain.com">sales@bbqpodspain.com</a>
              </p>
            </div>
            <p>Nuestro equipo revisará la información y le indicará los siguientes pasos.</p>
          </section>

          <section className={style.section}>
            <h2>Limitaciones de la Garantía</h2>
            <p>
              BBQ Pod Spain se reserva el derecho de reparar, sustituir o proporcionar componentes de reemplazo cuando
              se confirme una reclamación válida de garantía.
            </p>
            <p>La garantía se aplica únicamente al comprador original, salvo que se acuerde lo contrario por escrito.</p>
            <p>
              BBQ Pod Spain no será responsable de pérdidas indirectas o consecuentes derivadas del uso del producto.
            </p>
          </section>

          <section className={style.section}>
            <h2>Condiciones Completas</h2>
            <p>
              Las condiciones completas de garantía y de venta se proporcionan a los clientes en el momento de la compra.
            </p>
            <p>
              El pago del depósito para un BBQ Pod implica la aceptación de las condiciones de venta y garantía aplicables.
            </p>
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
      ...(await serverSideTranslations(localeToUse, ["common"], nextI18NextConfig)),
    },
  };
}