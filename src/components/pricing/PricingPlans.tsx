
import PricingCard, { PricingPlan } from "./PricingCard";

interface PricingPlansProps {
  plans: PricingPlan[];
  annual: boolean;
}

const PricingPlans = ({ plans, annual }: PricingPlansProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {plans.map((plan, index) => (
        <PricingCard 
          key={plan.name}
          plan={plan} 
          annual={annual}
          index={index}
        />
      ))}
    </div>
  );
};

export default PricingPlans;
