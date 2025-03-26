
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  cta: string;
  ctaLink: string;
  highlight: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  annual: boolean;
  index: number;
}

const PricingCard = ({ plan, annual, index }: PricingCardProps) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden transition-all duration-500 animate-fade-in hover-lift ${
        plan.highlight 
          ? "glass-card border-aivora-300 dark:border-aivora-700 shadow-lg" 
          : "glass-card"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {plan.highlight && (
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-aivora-400 to-aivora-600"></div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {plan.description}
        </p>
        
        <div className="mt-6 mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">
              ${annual ? plan.price.annual / 12 : plan.price.monthly}
            </span>
            <span className="ml-1 text-muted-foreground">
              /month
            </span>
          </div>
          
          {annual && plan.price.annual > 0 && (
            <div className="mt-1 text-xs text-muted-foreground">
              Billed annually (${plan.price.annual}/year)
            </div>
          )}
        </div>
        
        <Link 
          to={plan.ctaLink}
          className={`block w-full py-2.5 px-4 rounded-lg font-medium text-center transition-colors ${
            plan.highlight
              ? "bg-aivora-500 hover:bg-aivora-600 text-white"
              : "bg-secondary hover:bg-secondary/80"
          }`}
        >
          {plan.cta}
        </Link>
        
        <div className="mt-6 space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-aivora-500 mt-0.5 flex-shrink-0" />
              <span className="ml-3 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
