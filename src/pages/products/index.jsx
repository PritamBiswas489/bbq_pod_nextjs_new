import InnerBanner from "@/components/innerBanner";
import hero1 from "@/assets/front/images/hero-1.webp";
import Layout from "@/section/layout";
import OutdoorKitchens from "@/components/outdoorKitchen";
import ModelConfiguratorBanner from "@/components/modelConfiguratorBanner";
import ComparisonTable from "@/components/comparisonTable";
import Faqs from "@/components/faqs";
import FindKitchen from "@/components/findKitchen";

export default function Products() {
  return (
    <Layout>
      <InnerBanner
        // Customize text for this page
        title="Premium Outdoor Kitchen Pods -"
        subtitle="Compare All Models"
        description1="Discover our handcrafted range of luxury outdoor kitchen pods, engineered for the UK and built to last a lifetime. Each BBQ Pod is constructed from commercial-grade stainless steel with premium materials throughout, offering the perfect balance of design, performance, and durability for your garden or patio."
        description2="Whether you're upgrading your home's outdoor entertaining area or planning a complete garden transformation, our five premium BBQ Pod models provide tailored options for every lifestyle — from compact luxury to all-weather performance."
        backgroundImage={hero1.src}
      />
      <OutdoorKitchens />
      <ModelConfiguratorBanner />
      <ComparisonTable />
      <Faqs />
      <FindKitchen />
    </Layout>
  );
}
