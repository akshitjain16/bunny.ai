
import { useState, useEffect } from "react";
import { Layers, Download, Clipboard, Check, RefreshCcw, Sparkles, Code, Eye, Share2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromptInput from "../components/PromptInput";
import LoadingAnimation from "../components/LoadingAnimation";
import { toast } from "@/components/ui/use-toast";
import DashboardSidebar from "../components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import GeneratedComponentPreview from "../components/dashboard/GeneratedComponentPreview";
import GeneratedComponentCode from "../components/dashboard/GeneratedComponentCode";

const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedComponent, setGeneratedComponent] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeCodeTab, setActiveCodeTab] = useState<"html" | "jsx" | "vue">("jsx");
  const [recentPrompts, setRecentPrompts] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Load recent prompts from localStorage
    const savedPrompts = localStorage.getItem("recentPrompts");
    
    if (savedPrompts) {
      setRecentPrompts(JSON.parse(savedPrompts));
    }
  }, []);

  const savePromptHistory = (prompts: string[]) => {
    localStorage.setItem("recentPrompts", JSON.stringify(prompts));
  };

  const handleGenerateComponent = async (promptText: string) => {
    setIsLoading(true);
    setPrompt(promptText);
    
    // Add to recent prompts
    const updatedPrompts = [promptText, ...recentPrompts.filter(p => p !== promptText).slice(0, 4)];
    setRecentPrompts(updatedPrompts);
    savePromptHistory(updatedPrompts);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate component based on prompt
    const generatedComponent = generateComponent(promptText);
    
    setGeneratedComponent(generatedComponent);
    setIsLoading(false);
    
    toast({
      title: "Component generated successfully!",
      description: "Your UI component is ready to use and customize.",
    });
  };

  const generateComponent = (promptText: string) => {
    // Extract key features from the prompt
    const prompt = promptText.toLowerCase();
    
    // Customize based on prompt keywords
    const isModern = prompt.includes("modern");
    const isFloating = prompt.includes("float");
    const isBubble = prompt.includes("bubble") || prompt.includes("rounded");
    const hasHover = prompt.includes("hover");
    const hasAnimation = prompt.includes("animation") || prompt.includes("animate");
    const isGradient = prompt.includes("gradient");
    const isOutlined = prompt.includes("outline");
    const isDark = prompt.includes("dark");
    const isIcon = prompt.includes("icon");
    const hasShadow = prompt.includes("shadow");
    
    // Generate HTML
    let html = `<button class="custom-button">`;
    if (isIcon) {
      html += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 8-9.04 9.06a10.07 10.07 0 1 1 14.14-14.14L8.03 12"/></svg>`;
    }
    html += `Click Me</button>`;
    
    // Generate CSS
    let css = `.custom-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${isBubble ? '10px 20px' : '12px 24px'};
  ${isGradient ? 'background: linear-gradient(135deg, #6366f1, #8b5cf6);' : isOutlined ? 'background: transparent;' : isModern ? 'background: #3b82f6;' : 'background: #2563eb;'}
  color: ${isOutlined ? (isDark ? '#fff' : '#3b82f6') : '#fff'};
  font-weight: 500;
  border-radius: ${isBubble ? '9999px' : '8px'};
  ${isOutlined ? `border: 2px solid ${isDark ? '#fff' : '#3b82f6'};` : 'border: none;'}
  ${hasShadow ? 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);' : ''}
  cursor: pointer;
  transition: all 0.3s ease;
  ${isFloating ? 'position: relative;' : ''}
}`;

    if (hasHover) {
      css += `
.custom-button:hover {
  ${isOutlined ? `background: ${isDark ? '#fff' : '#3b82f6'}; color: ${isDark ? '#3b82f6' : '#fff'};` : 'filter: brightness(110%);'}
  ${hasShadow ? 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);' : ''}
  ${isFloating ? 'transform: translateY(-3px);' : 'transform: scale(1.05);'}
}`;
    }

    if (hasAnimation) {
      css += `
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.custom-button {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}`;
    }

    // Generate JSX
    const jsx = `import React from 'react';

const CustomButton = () => {
  return (
    <button 
      className="${isModern ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : isOutlined ? 'bg-transparent border-2 border-blue-500 text-blue-500' : 'bg-blue-600'} 
      ${isBubble ? 'rounded-full' : 'rounded-lg'}
      ${isIcon ? 'inline-flex items-center gap-2' : ''}
      px-6 py-2.5 text-white font-medium
      ${hasShadow ? 'shadow-lg' : ''}
      ${hasHover ? 'transition-all duration-300 hover:shadow-xl hover:scale-105' : ''}
      ${hasAnimation ? 'animate-pulse' : ''}"
    >
      ${isIcon ? `<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a10.07 10.07 0 1 1 14.14-14.14L8.03 12"/></svg>` : ''}
      Click Me
    </button>
  );
};

export default CustomButton;`;

    // Generate Vue component
    const vue = `<template>
  <button 
    class="custom-button"
  >
    ${isIcon ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 8-9.04 9.06a10.07 10.07 0 1 1 14.14-14.14L8.03 12"/></svg>` : ''}
    Click Me
  </button>
</template>

<style scoped>
${css}
</style>`;

    return {
      html,
      css,
      jsx,
      vue,
      preview: "button"
    };
  };

  const handleCopyCode = async () => {
    if (!generatedComponent) return;
    
    try {
      await navigator.clipboard.writeText(generatedComponent[activeCodeTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Code copied to clipboard",
        description: "You can now paste it into your project",
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually",
        variant: "destructive"
      });
    }
  };

  const handleDownload = () => {
    if (!generatedComponent) return;
    
    const fileExtension = activeCodeTab === "jsx" ? "jsx" : activeCodeTab === "vue" ? "vue" : "html";
    
    const element = document.createElement("a");
    const file = new Blob([generatedComponent[activeCodeTab]], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `BonnyAI-Component.${fileExtension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Component downloaded",
      description: "Your component file has been downloaded",
    });
  };

  const handleShareComponent = () => {
    // In a real app, this would generate a shareable link
    navigator.clipboard.writeText(
      `Check out this UI component I created with Bonny.AI: ${prompt}`
    );
    
    toast({
      title: "Share link copied",
      description: "Share link has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="flex flex-1 pt-16">
        <DashboardSidebar />
        
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 animate-fade-in">
              <div className="flex items-center mb-2">
                <Sparkles className="h-6 w-6 text-aivora-500 mr-2" />
                <h1 className="text-3xl font-bold">Bonny.AI Design Studio</h1>
              </div>
              <p className="text-muted-foreground max-w-3xl">
                Describe any UI component in plain text and Bonny.AI will generate it instantly. Create unlimited components with no restrictions.
              </p>
            </div>
            
            <div className="glass-card p-6 mb-8 animate-fade-in shadow-lg">
              <PromptInput
                onSubmit={handleGenerateComponent}
                isLoading={isLoading}
                placeholder="e.g., Create a modern button with bubble shape and hover effect"
                buttonText="Generate UI"
                autoFocus
              />
            </div>
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                <LoadingAnimation size="large" />
                <p className="mt-4 text-muted-foreground animate-pulse-subtle">
                  Generating your component...
                </p>
              </div>
            ) : generatedComponent ? (
              <div className="animate-fade-in space-y-6">
                <div className="flex flex-col lg:flex-row gap-4 mb-2">
                  <div className="flex">
                    <Button
                      variant={activeTab === "preview" ? "default" : "secondary"}
                      onClick={() => setActiveTab("preview")}
                      className="rounded-r-none"
                    >
                      <Eye className="mr-2 h-4 w-4" /> Preview
                    </Button>
                    <Button
                      variant={activeTab === "code" ? "default" : "secondary"}
                      onClick={() => setActiveTab("code")}
                      className="rounded-l-none"
                    >
                      <Code className="mr-2 h-4 w-4" /> Code
                    </Button>
                  </div>
                  
                  <div className="flex ml-auto gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleCopyCode}
                    >
                      {copied ? <Check className="h-4 w-4 mr-1" /> : <Clipboard className="h-4 w-4 mr-1" />}
                      Copy
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleShareComponent}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleGenerateComponent(prompt)}
                    >
                      <RefreshCcw className="h-4 w-4 mr-1" />
                      Regenerate
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeTab === "preview" ? (
                    <div className="col-span-2">
                      <GeneratedComponentPreview component={generatedComponent} />
                    </div>
                  ) : (
                    <>
                      <div className="glass-card overflow-hidden rounded-xl shadow-lg">
                        <div className="border-b border-border/50 p-3 bg-card/50">
                          <div className="flex gap-1">
                            {(["jsx", "html", "vue"] as const).map((tab) => (
                              <Button
                                key={tab}
                                size="sm"
                                variant={activeCodeTab === tab ? "default" : "ghost"}
                                className="text-xs px-3 py-1"
                                onClick={() => setActiveCodeTab(tab)}
                              >
                                {tab.toUpperCase()}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <GeneratedComponentCode 
                          component={generatedComponent} 
                          activeCodeTab={activeCodeTab}
                        />
                      </div>
                      
                      <div className="glass-card p-6 rounded-xl relative shadow-lg">
                        <h3 className="text-lg font-semibold mb-3">Live Preview</h3>
                        <div className="h-60 flex items-center justify-center border border-border/50 rounded-lg bg-background/50">
                          <GeneratedComponentPreview component={generatedComponent} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="glass-card p-8 rounded-xl text-center py-20 animate-fade-in shadow-lg">
                <Sparkles className="h-16 w-16 mx-auto mb-6 text-aivora-500 opacity-80" />
                <h2 className="text-2xl font-bold mb-3">Unlimited UI Component Generation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Type a description of what you want to create and Bonny.AI will 
                  generate it for you instantly. Create as many components as you need!
                </p>
                
                {recentPrompts.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-sm font-medium mb-3 text-muted-foreground">
                      Recently used prompts:
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {recentPrompts.map((recentPrompt, index) => (
                        <button
                          key={index}
                          onClick={() => handleGenerateComponent(recentPrompt)}
                          className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/30 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        >
                          {recentPrompt.length > 30 ? recentPrompt.substring(0, 30) + "..." : recentPrompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
