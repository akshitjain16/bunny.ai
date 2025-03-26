
import { useState, useEffect } from "react";
import { Code, ImageIcon } from "lucide-react";

interface ComponentPreviewProps {
  result: any;
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;
  activeCodeTab: "html" | "jsx" | "vue";
  setActiveCodeTab: (tab: "html" | "jsx" | "vue") => void;
}

const ComponentPreview = ({ 
  result, 
  activeTab, 
  setActiveTab, 
  activeCodeTab, 
  setActiveCodeTab 
}: ComponentPreviewProps) => {
  if (!result) return null;

  return (
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
      </div>
    </div>
  );
};

export default ComponentPreview;
