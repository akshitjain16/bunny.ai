
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeSnippet from "../components/CodeSnippet";
import PromptInput from "../components/PromptInput";
import LoadingAnimation from "../components/LoadingAnimation";
import { Download, RefreshCcw, Copy, Check, Clipboard, Code, ImageIcon } from "lucide-react";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeCodeTab, setActiveCodeTab] = useState<"html" | "jsx" | "vue">("jsx");
  const [copied, setCopied] = useState(false);

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

  // Handle query params if coming from homepage
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const promptParam = params.get('prompt');
    
    if (promptParam) {
      setPrompt(promptParam);
      generateComponent(promptParam);
      
      // Clear the URL params
      navigate("/results", { replace: true });
    }
  }, [location.search, navigate]);

  const handlePromptSubmit = async (promptText: string) => {
    await generateComponent(promptText);
  };

  const handleCopyCode = async () => {
    if (!result) return;
    
    const codeToCopy = result[activeCodeTab === "html" ? "html" : activeCodeTab];
    
    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    
    const code = result[activeCodeTab === "html" ? "html" : activeCodeTab];
    const extension = activeCodeTab === "jsx" ? "jsx" : (activeCodeTab === "vue" ? "vue" : "html");
    const filename = `aivora-component.${extension}`;
    
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 md:px-6 py-8">
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
          </div>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
              <LoadingAnimation size="large" />
              <p className="mt-6 text-muted-foreground animate-pulse-subtle">
                Generating your component...
              </p>
            </div>
          ) : result ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
              <div className="col-span-1 order-2 lg:order-1">
                <div className="sticky top-24">
                  <div className="flex items-center space-x-1 mb-3">
                    <button
                      onClick={() => setActiveTab("preview")}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === "preview"
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ImageIcon className="w-4 h-4 inline mr-2" />
                      Preview
                    </button>
                    <button
                      onClick={() => setActiveTab("code")}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeTab === "code"
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Code className="w-4 h-4 inline mr-2" />
                      Code
                    </button>
                  </div>
                  
                  {activeTab === "preview" ? (
                    <div className="glass-card p-8 flex items-center justify-center min-h-[400px] rounded-lg">
                      <div className="pricing-card">
                        <div className="pricing-header">
                          <h3 className="plan-name">Pro Plan</h3>
                          <p className="plan-price">$29<span>/month</span></p>
                        </div>
                        <ul className="features-list">
                          <li>Unlimited projects</li>
                          <li>Priority support</li>
                          <li>Custom domain</li>
                          <li>Analytics dashboard</li>
                        </ul>
                        <button className="subscribe-button">Get Started</button>
                      </div>
                      
                      <style>{result.css}</style>
                    </div>
                  ) : (
                    <div className="rounded-lg glass overflow-hidden">
                      <div className="border-b border-border/50 p-2">
                        <div className="flex space-x-1">
                          {(["html", "jsx", "vue"] as const).map((tab) => (
                            <button
                              key={tab}
                              onClick={() => setActiveCodeTab(tab)}
                              className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                                activeCodeTab === tab
                                  ? "bg-secondary text-foreground"
                                  : "text-muted-foreground hover:text-foreground"
                              }`}
                            >
                              {tab.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-4 relative">
                        <pre className="text-sm overflow-x-auto max-h-[500px]">
                          <code>
                            {activeCodeTab === "html" 
                              ? result.html 
                              : activeCodeTab === "jsx" 
                                ? result.jsx 
                                : result.vue}
                          </code>
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={handleDownload}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    
                    <button
                      onClick={() => handlePromptSubmit(prompt)}
                      className="flex items-center space-x-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                    >
                      <RefreshCcw className="w-4 h-4" />
                      <span>Regenerate</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 order-1 lg:order-2">
                <h2 className="text-xl font-semibold mb-4">Code Details</h2>
                
                <div className="space-y-6">
                  <CodeSnippet
                    code={result.jsx}
                    language="jsx"
                    title="React Component"
                  />
                  
                  <CodeSnippet
                    code={result.css}
                    language="css"
                    title="CSS Styles"
                  />
                </div>
                
                <div className="mt-6 p-4 rounded-lg glass">
                  <h3 className="text-sm font-medium mb-2">About this component</h3>
                  <p className="text-sm text-muted-foreground">
                    This pricing card component features a clean design with a hover effect. 
                    It includes a plan name, price display, feature list, and a call-to-action button. 
                    The component is fully responsive and works well on both light and dark themes.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResultsPage;
