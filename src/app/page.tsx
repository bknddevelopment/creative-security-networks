import HeroPremium from "@/components/sections/HeroPremium";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import TrustIndicators from "@/components/sections/TrustIndicators";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary">
      <HeroPremium />
      <ServiceShowcase />
      <TrustIndicators />
    </main>
  );
}