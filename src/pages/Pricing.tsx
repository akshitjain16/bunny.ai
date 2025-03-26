
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingToggle from "../components/pricing/PricingToggle";
import PricingPlans from "../components/pricing/PricingPlans";
import PricingFAQ from "../components/pricing/PricingFAQ";
import { pricingPlans, faqItems } from "../data/pricingData";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 mb-20">
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in animation-delay-100">
              Choose the plan that's right for you
            </p>
            
            <PricingToggle annual={annual} setAnnual={setAnnual} />
          </div>
          
          <PricingPlans plans={pricingPlans} annual={annual} />
          
          <PricingFAQ faqItems={faqItems} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
