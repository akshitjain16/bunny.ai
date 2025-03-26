
import { useState } from "react";
import PromptInput from "../PromptInput";
import LoadingAnimation from "../LoadingAnimation";

interface ComponentGeneratorProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: React.Dispatch<React.SetStateAction<any>>;
  result: any;
}

const ComponentGenerator = ({ 
  prompt, 
  setPrompt, 
  isLoading, 
  setIsLoading, 
  setResult,
  result
}: ComponentGeneratorProps) => {
  
  // Mock component generation (in a real app, this would call an API)
  const generateComponent = async (promptText: string) => {
    setIsLoading(true);
    setPrompt(promptText);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock response
    const mockResult = {
      html: `<div class="pricing-card">
  <div class="pricing-header">
    <h3 class="plan-name">Pro Plan</h3>
    <p class="plan-price">$29<span>/month</span></p>
  </div>
  <ul class="features-list">
    <li>Unlimited projects</li>
    <li>Priority support</li>
    <li>Custom domain</li>
    <li>Analytics dashboard</li>
  </ul>
  <button class="subscribe-button">Get Started</button>
</div>`,
      jsx: `import React from 'react';

const PricingCard = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl bg-white dark:bg-gray-800">
      <div className="px-6 py-8 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Pro Plan</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$29</span>
          <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/month</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <ul className="space-y-3">
          {['Unlimited projects', 'Priority support', 'Custom domain', 'Analytics dashboard'].map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;`,
      vue: `<template>
  <div class="pricing-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 transition-all">
    <div class="px-6 py-8 border-b border-gray-200 dark:border-gray-700">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Pro Plan</h3>
      <div class="mt-4 flex items-baseline">
        <span class="text-4xl font-extrabold text-gray-900 dark:text-white">$29</span>
        <span class="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/month</span>
      </div>
    </div>
    <div class="px-6 py-4">
      <ul class="space-y-3">
        <li v-for="(feature, index) in features" :key="index" class="flex items-center">
          <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
        </li>
      </ul>
      <button class="mt-8 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
        Get Started
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  data() {
    return {
      features: ['Unlimited projects', 'Priority support', 'Custom domain', 'Analytics dashboard']
    }
  }
}
</script>`,
      css: `.pricing-card {
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  background-color: white;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.pricing-header {
  padding: 2rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.plan-price {
  margin-top: 1rem;
  font-size: 2.25rem;
  font-weight: 800;
  color: #111827;
}

.plan-price span {
  font-size: 1.125rem;
  font-weight: 500;
  color: #6b7280;
}

.features-list {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.features-list li {
  display: flex;
  align-items: center;
  color: #4b5563;
}

.features-list li::before {
  content: "✓";
  display: inline-flex;
  margin-right: 0.5rem;
  color: #10b981;
}

.subscribe-button {
  display: block;
  width: calc(100% - 3rem);
  margin: 0 1.5rem 1.5rem;
  padding: 0.75rem 0;
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
}

.subscribe-button:hover {
  background-color: #1d4ed8;
}`
    };
    
    setResult(mockResult);
    setIsLoading(false);
  };

  const handlePromptSubmit = async (promptText: string) => {
    await generateComponent(promptText);
  };

  return (
    <div className="mb-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
        {result ? "Generated UI Component" : "Generate a UI Component"}
      </h1>
      <p className="text-muted-foreground animate-fade-in">
        {prompt 
          ? `Current prompt: "${prompt}"` 
          : "Enter a description of the UI component you want to create"}
      </p>
      
      <div className="mt-6 animate-fade-in">
        <PromptInput 
          onSubmit={handlePromptSubmit} 
          isLoading={isLoading}
          placeholder="e.g. Create a pricing card with hover effects"
          autoFocus={!prompt}
        />
      </div>

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
          <LoadingAnimation size="large" />
          <p className="mt-6 text-muted-foreground animate-pulse-subtle">
            Generating your component...
          </p>
        </div>
      )}
    </div>
  );
};

export default ComponentGenerator;
