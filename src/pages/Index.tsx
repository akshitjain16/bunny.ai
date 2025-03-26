
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PromptInput from "../components/PromptInput";
import { ArrowRight, Code, Monitor, Zap, Sparkles, Layout, Palette, Clock } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = (prompt: string) => {
    setIsLoading(true);
    
    // Navigate to results page with prompt as query param
    setTimeout(() => {
      navigate(`/results?prompt=${encodeURIComponent(prompt)}`);
      setIsLoading(false);
    }, 800);
  };

  // Demo examples
  const demoExamples = [
    {
      title: "Pricing Table",
      description: "A responsive pricing table with three tiers and hover effects",
      prompt: "Create a pricing table with 3 plans and hover effects",
      image: "bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-900",
    },
    {
      title: "Contact Form",
      description: "A validated contact form with floating labels",
      prompt: "Design a contact form with validation and floating labels",
      image: "bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-900",
    },
    {
      title: "Product Card",
      description: "Product display card with image gallery and add-to-cart",
      prompt: "Build a product card with image gallery and add to cart button",
      image: "bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-900 dark:to-amber-900",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "AI-Powered Generation",
      description: "Transform text descriptions into beautiful UI components instantly"
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Multi-Framework Support",
      description: "Export to HTML, React, Vue and more with a single click"
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "Responsive by Default",
      description: "All components are fully responsive and work on any device"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Fast",
      description: "Generate components in seconds with our optimized AI models"
    },
    {
      icon: <Layout className="h-5 w-5" />,
      title: "Component Library",
      description: "Access a growing library of pre-built components and templates"
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Theme Customization",
      description: "Customize colors, fonts, and styles to match your brand"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-noise-subtle opacity-50"></div>
          <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-radial from-aivora-100/20 to-transparent dark:from-aivora-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-secondary/50 rounded-full px-3 py-1 text-sm text-muted-foreground mb-6 animate-fade-in">
                <span className="inline-block w-2 h-2 rounded-full bg-aivora-500"></span>
                <span>AI-Powered Interface Generation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                AI-Powered UI Generator –{" "}
                <span className="text-gradient">Instantly Build Stunning Interfaces</span>{" "}
                from Text!
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-100">
                Transform your ideas into beautiful UI components with a simple text prompt. 
                No design skills required.
              </p>
              
              <div className="max-w-3xl mx-auto animate-fade-in animation-delay-200">
                <PromptInput 
                  onSubmit={handlePromptSubmit}
                  isLoading={isLoading}
                  className="mb-3"
                  placeholder="e.g. Create a pricing table with 3 plans and hover effects"
                />
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 animate-fade-in animation-delay-300">
                No account required. Free to use.
              </p>
            </div>
          </div>
        </section>
        
        {/* Demo Examples Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                See What You Can Create
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
                Browse examples of UI components generated from simple text prompts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {demoExamples.map((example, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-xl overflow-hidden hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-48 ${example.image} flex items-center justify-center`}>
                    <div className="glass p-4 rounded-xl">
                      <span className="font-medium">{example.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{example.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {example.description}
                    </p>
                    <button 
                      onClick={() => handlePromptSubmit(example.prompt)}
                      className="text-sm flex items-center text-aivora-500 hover:text-aivora-600 transition-colors"
                    >
                      <span>Generate this component</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                Powerful Features to Build Faster
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
                Everything you need to transform text descriptions into production-ready UI components
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-xl hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-10 w-10 rounded-full bg-aivora-100 dark:bg-aivora-900/50 flex items-center justify-center mb-4">
                    <div className="text-aivora-500">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/0 to-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-100">
                From text prompt to working UI component in seconds
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Describe Your Vision",
                  description: "Type in what you want to create in plain English – no design skills needed."
                },
                {
                  step: "02",
                  title: "AI Generates UI",
                  description: "Our advanced AI models transform your text into responsive UI components."
                },
                {
                  step: "03",
                  title: "Copy or Download",
                  description: "Get your component in the format you need – HTML, React, Vue, or CSS."
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex items-start space-x-6 mb-12 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-aivora-100 dark:bg-aivora-900/50 flex items-center justify-center border-2 border-aivora-500/20">
                      <span className="text-sm font-bold text-aivora-600 dark:text-aivora-400">{item.step}</span>
                    </div>
                    {index < 2 && (
                      <div className="absolute left-6 top-12 bottom-0 w-px h-[calc(100%-12px)] bg-aivora-200 dark:bg-aivora-800/50"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise-subtle opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-radial from-aivora-100/20 to-transparent dark:from-aivora-900/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Ready to Transform Your UI Development?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in animation-delay-100">
                Join thousands of developers accelerating their workflow with AI-generated components.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-200">
                <a 
                  href="#" 
                  className="px-8 py-3 rounded-full bg-aivora-500 text-white font-medium hover:bg-aivora-600 transition-colors"
                >
                  Get Started for Free
                </a>
                <a 
                  href="/pricing" 
                  className="px-8 py-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors font-medium"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
