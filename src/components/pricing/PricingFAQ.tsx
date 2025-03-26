
interface FAQItem {
  q: string;
  a: string;
}

interface PricingFAQProps {
  faqItems: FAQItem[];
}

const PricingFAQ = ({ faqItems }: PricingFAQProps) => {
  return (
    <div className="mt-24 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="rounded-lg glass p-5 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg font-medium mb-2">{item.q}</h3>
            <p className="text-muted-foreground">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFAQ;
