
import { useState } from "react";

interface PricingToggleProps {
  annual: boolean;
  setAnnual: (value: boolean) => void;
}

const PricingToggle = ({ annual, setAnnual }: PricingToggleProps) => {
  return (
    <div className="mt-8 inline-flex items-center p-1 bg-secondary/50 rounded-full">
      <button
        onClick={() => setAnnual(false)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          !annual 
            ? "bg-background shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setAnnual(true)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          annual 
            ? "bg-background shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Annual
        <span className="ml-1 text-xs py-0.5 px-1.5 bg-aivora-500 text-white rounded-full">
          Save 20%
        </span>
      </button>
    </div>
  );
};

export default PricingToggle;
