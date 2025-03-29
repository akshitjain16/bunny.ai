
import { PricingPlan } from "../components/pricing/PricingCard";

export const pricingPlans: PricingPlan[] = [
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

export const faqItems = [
  {
    q: "How many UI components can I generate with the free plan?",
    a: "The free plan allows you to generate up to 10 UI components per day. For unlimited generations, consider upgrading to our Pro plan."
  },
  {
    q: "How many different component variations does Bunny.AI offer?",
    a: "With our Pro and Enterprise plans, you get access to over 1 million component variations across different styles, frameworks, and design patterns."
  },
  {
    q: "Do I need to create an account to use Bunny.AI?",
    a: "No, you can use the basic features without creating an account. However, to save your generated components and access advanced features, you'll need to sign up."
  },
  {
    q: "How does billing work for annual subscriptions?",
    a: "Annual subscriptions are billed once per year at the beginning of your billing cycle. You'll save 20% compared to monthly billing."
  },
];
