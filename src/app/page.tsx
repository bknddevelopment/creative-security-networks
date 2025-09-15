import HeroPremium from "@/components/sections/HeroPremium";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import TrustIndicators from "@/components/sections/TrustIndicators";
import FAQStructuredData, { securityFAQs } from "@/components/seo/FAQStructuredData";

export default function Home() {
  return (
    <>
      <FAQStructuredData items={securityFAQs} />
      <main className="min-h-screen bg-background-primary">
        <HeroPremium />
        <ServiceShowcase />
        <TrustIndicators />
      </main>
    </>
  );
}