import style from "./index.module.scss";
import InnerBanner from "@/components/innerBanner";
import hero1 from "@/assets/front/images/hero-1.webp";
import Layout from "@/section/layout";
import OutdoorKitchens from "@/components/outdoorKitchen";
import ModelConfiguratorBanner from "@/components/modelConfiguratorBanner";
import ComparisonTable from "@/components/comparisonTable";
import Faqs from "@/components/faqs";
import FindKitchen from "@/components/findKitchen";
import TitleHeader from "@/components/titleHeader";
export const homeFaqs = [
  {
    question: "Do I need planning permission for a BBQ Pod?",
    answer:
      "In most cases, planning permission isn't required for residential BBQ pods as they are considered permitted development for garden structures under 2.5 meters in height. However, regulations vary by location and property type (listed buildings, conservation areas, flats). We recommend checking with your local planning authority, and we're happy to provide technical specifications to support your enquiry.",
  },
  {
    question: "How long is the shipping time?",
    answer:
      "Approx. 16 weeks from 50% deposit being paid. Each BBQ pod arrives 100% fully assembled from our UK facility. Our professional installation team will position it in your garden and complete all utility connections (gas, electric, water if applicable) in a single day. You can start cooking immediately after installation.",
  },
  {
    question: "Are BBQ Pods suitable for year-round use?",
    answer:
      "Absolutely. Each outdoor kitchen pod features weatherproof insulation, 6-layer door panels, and commercial-grade stainless steel construction engineered to perform in British weather all year round. The sealed electronics and integrated drainage systems protect against rain and moisture. Many customers use their pods throughout winter for Christmas gatherings and New Year celebrations. The A-Pro model's motorised awning provides additional rain protection when needed.",
  },
  {
    question: "What utilities do I need for installation?",
    answer:
      "Standard outdoor electrical connection (13A socket) and either mains gas or space for a propane tank are required. Some models benefit from a garden hose connection for easy cleaning. Our installation team will advise on the optimal placement considering utility access, level ground requirements, and clearance specifications. We can also arrange utility connections if needed through our network of certified contractors.",
  },
  {
    question: "What warranty coverage is included?",
    answer:
      "BBQ Pods feature commercial-grade construction with stainless steel frames, 6-layer insulated door panels, and weatherproof materials designed for long-term durability. All integrated appliances (grill, fridge, TV) come with manufacturer warranties typically ranging from 1-5 years. Full warranty documentation and terms are provided with your quote.",
  },
];

export default function Products() {
  return (
    <Layout>
      <InnerBanner
        badgeText="5 PREMIUM MODELS"
        title="Premium Outdoor Kitchen Pods -"
        subtitle="Compare All Models"
        description1="Discover our range of premium outdoor kitchen pods, designed for life outdoors in Spain and built for long-term use. Each BBQ Pod is constructed using commercial-grade stainless steel and high-quality materials throughout, combining refined design, performance and durability."
        description2="Whether you’re upgrading your outdoor entertaining space or creating a dedicated cooking area in your garden or terrace, our five BBQ Pod models offer tailored solutions — from compact layouts to fully equipped, all-season outdoor kitchens"
        backgroundImage={hero1.src}
        links={[]}
      />
      <OutdoorKitchens />
      <ModelConfiguratorBanner
        title="Not Sure Which Model Is Right for You?"
        description="Use our interactive configurator to explore features, compare models, and visualise your perfect outdoor kitchen. Get a personalised quote in minutes."
        leftButton="Try Configurator"
        rightButton="Compare All Models"
        showButtons={true}
      />
      <ComparisonTable />
      <section className={style.faqs}>
        <TitleHeader
          whyChoose={[]}
          title="Frequently Asked Questions"
          subtitle={[]}
        />
        <Faqs faqs={homeFaqs} />
      </section>
      <FindKitchen />
    </Layout>
  );
}
