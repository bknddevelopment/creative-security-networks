import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import QuoteCalculator from "@/components/sections/QuoteCalculator";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <QuoteCalculator />
      
      {/* Placeholder for Testimonials - NO FAKE REVIEWS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Testimonials
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              What our clients say about us
            </p>
            <div className="bg-white rounded-lg p-12 shadow-sm">
              <p className="text-gray-500 italic">
                [Testimonials will be added once we collect authentic customer feedback]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}