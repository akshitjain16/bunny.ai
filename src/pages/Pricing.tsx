
import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "For individuals and small projects",
      price: {
        monthly: 0,
        annual: 0,
      },
      features: [
        "10 UI component generations per day",
        "Basic templates",
        "HTML and CSS export",
        "Community support",
      ],
      cta: "Get Started",
      ctaLink: "/dashboard",
      highlight: false,
    },
    {
      name: "Pro",
      description: "For professionals and growing teams",
      price: {
        monthly: 10,
        annual: 96, // 20% discount for annual
      },
      features: [
        "Unlimited UI generations",
        "1 million+ component variations",
        "React, Vue & Angular support",
        "API access",
        "Priority support",
        "Remove attribution",
      ],
      cta: "Start Free Trial",
      ctaLink: "/dashboard",
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      price: {
        monthly: 99,
        annual: 948, // 20% discount for annual
      },
      features: [
        "Everything in Pro",
        "Customized AI model training",
        "Brand asset integration",
        "Custom CSS frameworks",
        "Dedicated support",
        "SSO Authentication",
        "Team management",
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      highlight: false,
    },
  ];

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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
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
            ))}
          </div>
          
          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "How many UI components can I generate with the free plan?",
                  a: "The free plan allows you to generate up to 10 UI components per day. For unlimited generations, consider upgrading to our Pro plan."
                },
                {
                  q: "How many different component variations does Bonny.AI offer?",
                  a: "With our Pro and Enterprise plans, you get access to over 1 million component variations across different styles, frameworks, and design patterns."
                },
                {
                  q: "Do I need to create an account to use Bonny.AI?",
                  a: "No, you can use the basic features without creating an account. However, to save your generated components and access advanced features, you'll need to sign up."
                },
                {
                  q: "How does billing work for annual subscriptions?",
                  a: "Annual subscriptions are billed once per year at the beginning of your billing cycle. You'll save 20% compared to monthly billing."
                },
              ].map((item, index) => (
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
