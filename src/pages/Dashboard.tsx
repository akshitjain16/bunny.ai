
import { useState, useEffect } from "react";
import { Layers, Cpu, Zap, Download, Clipboard, Check, RefreshCcw, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromptInput from "../components/PromptInput";
import LoadingAnimation from "../components/LoadingAnimation";
import { toast } from "@/components/ui/use-toast";
import DashboardSidebar from "../components/DashboardSidebar";
import ComponentPreview from "../components/ComponentPreview";

const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [generatedComponent, setGeneratedComponent] = useState<any>(null);
  const [dailyUsage, setDailyUsage] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(10); // Free tier limit
  const [copied, setCopied] = useState(false);
  const [recentPrompts, setRecentPrompts] = useState<string[]>([]);

  useEffect(() => {
    // In a real app, this would check user auth and fetch from backend
    const savedUsage = localStorage.getItem("dailyUsage");
    const savedPrompts = localStorage.getItem("recentPrompts");
    
    if (savedUsage) {
      setDailyUsage(parseInt(savedUsage));
    }
    
    if (savedPrompts) {
      setRecentPrompts(JSON.parse(savedPrompts));
    }
    
    // Simulating checking user tier to set limits
    // For now, we're setting the default free tier limit
  }, []);

  const saveUsageData = (usage: number, prompts: string[]) => {
    localStorage.setItem("dailyUsage", usage.toString());
    localStorage.setItem("recentPrompts", JSON.stringify(prompts));
  };

  const handleGenerateComponent = async (promptText: string) => {
    if (dailyUsage >= dailyLimit) {
      toast({
        title: "Daily limit reached",
        description: "Upgrade to our Pro plan for unlimited component generation.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setPrompt(promptText);
    
    // Add to recent prompts
    const updatedPrompts = [promptText, ...recentPrompts.slice(0, 4)];
    setRecentPrompts(updatedPrompts);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock component generation based on prompt
    // In a real app, this would call an AI API
    const mockComponent = generateMockComponent(promptText);
    
    setGeneratedComponent(mockComponent);
    setIsLoading(false);
    
    // Update usage count
    const newUsage = dailyUsage + 1;
    setDailyUsage(newUsage);
    
    // Save to localStorage
    saveUsageData(newUsage, updatedPrompts);
    
    toast({
      title: "Component generated successfully!",
      description: `You have ${dailyLimit - newUsage} generations left today.`,
    });
  };

  const generateMockComponent = (promptText: string) => {
    // Simple mock logic to generate different components based on prompt words
    // In a real app, this would be the AI model's response
    const prompt = promptText.toLowerCase();
    
    // Default button component with customizations based on prompt
    const hasHover = prompt.includes("hover");
    const isModern = prompt.includes("modern");
    const isBubble = prompt.includes("bubble") || prompt.includes("rounded");
    const hasAnimation = prompt.includes("animation") || prompt.includes("animate");
    
    return {
      jsx: `import React from 'react';

const CustomButton = () => {
  return (
    <button 
      className="${isModern ? 'bg-gradient-to-r from-purple-500 to-indigo-600' : 'bg-blue-600'} 
      ${isBubble ? 'rounded-full' : 'rounded-lg'}
      px-6 py-2.5 text-white font-medium shadow-lg
      ${hasHover ? 'transition-all duration-300 hover:shadow-xl hover:scale-105' : ''}
      ${hasAnimation ? 'animate-pulse' : ''}"
    >
      Click Me
    </button>
  );
};

export default CustomButton;`,
      
      css: `.custom-button {
  display: inline-block;
  padding: 10px 20px;
  background: ${isModern ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#3b82f6'};
  color: white;
  font-weight: 500;
  border-radius: ${isBubble ? '9999px' : '8px'};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  ${hasHover ? `
  transition: all 0.3s ease;
  ` : ''}
}

${hasHover ? `
.custom-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
` : ''}

${hasAnimation ? `
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.custom-button {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
` : ''}`,
      
      html: `<button class="custom-button">
  Click Me
</button>`,
      
      preview: "button" // This would be a reference to what kind of component to preview
    };
  };

  const handleCopyCode = async () => {
    if (!generatedComponent) return;
    
    try {
      await navigator.clipboard.writeText(generatedComponent.jsx);
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
    
    const element = document.createElement("a");
    const file = new Blob([generatedComponent.jsx], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "BonnyAI-Component.jsx";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Component downloaded",
      description: "Your component file has been downloaded",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="flex flex-1 pt-16">
        <DashboardSidebar usage={dailyUsage} limit={dailyLimit} />
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-3xl font-bold mb-2">Design dashboard</h1>
              <p className="text-muted-foreground">
                Describe any UI component and Bonny.AI will generate it instantly
              </p>
            </div>
            
            <div className="glass-card p-6 mb-8 animate-fade-in">
              <PromptInput
                onSubmit={handleGenerateComponent}
                isLoading={isLoading}
                placeholder="e.g., Create a modern button with bubble shape and hover effect"
                buttonText="Generate UI"
                autoFocus
              />
              
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4" />
                <span>{dailyLimit - dailyUsage} generations left today</span>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                <LoadingAnimation size="large" />
                <p className="mt-4 text-muted-foreground animate-pulse-subtle">
                  Generating your component...
                </p>
              </div>
            ) : generatedComponent ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
                <div className="glass-card p-6 rounded-xl overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold">Component Preview</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCopyCode}
                        className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label="Copy code"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={handleDownload}
                        className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label="Download code"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleGenerateComponent(prompt)}
                        className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                        aria-label="Regenerate component"
                      >
                        <RefreshCcw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="h-60 flex items-center justify-center border border-border/50 rounded-lg bg-background/50">
                    <ComponentPreview component={generatedComponent} />
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl overflow-hidden">
                  <h2 className="font-semibold mb-4">Component Code</h2>
                  <div className="bg-secondary/30 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm whitespace-pre-wrap">
                      <code>{generatedComponent.jsx}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-card p-6 rounded-xl text-center py-16 animate-fade-in">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-60" />
                <h2 className="text-xl font-medium mb-2">Describe your UI component</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Type a description of what you want to create and Bonny.AI will 
                  generate it for you instantly
                </p>
                
                {recentPrompts.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-sm font-medium mb-2 text-muted-foreground">
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
