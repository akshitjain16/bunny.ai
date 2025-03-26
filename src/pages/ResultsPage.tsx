import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComponentGenerator from "../components/results/ComponentGenerator";
import ComponentPreview from "../components/results/ComponentPreview";
import ActionButtons from "../components/results/ActionButtons";
import CodeDetails from "../components/results/CodeDetails";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeCodeTab, setActiveCodeTab] = useState<"html" | "jsx" | "vue">("jsx");

  // Handle query params if coming from homepage
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const promptParam = params.get('prompt');
    
    if (promptParam) {
      setPrompt(promptParam);
      // Use the generateComponent method from ComponentGenerator
      // This is a workaround since we can't directly call the component's method
      const triggerGeneration = async () => {
        const componentGenerator = document.querySelector('button[type="submit"]');
        if (componentGenerator) {
          setTimeout(() => {
            componentGenerator.click();
          }, 100);
        }
      };
      
      triggerGeneration();
      
      // Clear the URL params
      navigate("/results", { replace: true });
    }
  }, [location.search, navigate]);

  const handlePromptSubmit = async (promptText: string) => {
    // This is just a proxy to the actual implementation in ComponentGenerator
    // The actual logic is in ComponentGenerator.tsx
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-4 md:px-6 py-8">
          <ComponentGenerator 
            prompt={prompt}
            setPrompt={setPrompt}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setResult={setResult}
            result={result}
          />
          
          {!isLoading && result && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in">
              <ComponentPreview
                result={result}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                activeCodeTab={activeCodeTab}
                setActiveCodeTab={setActiveCodeTab}
              />
              
              <div className="sticky top-24">
                <ActionButtons
                  result={result}
                  activeCodeTab={activeCodeTab}
                  handlePromptSubmit={(text) => {
                    setIsLoading(true);
                    const triggerRegeneration = async () => {
                      const componentGenerator = document.querySelector('button[type="submit"]');
                      if (componentGenerator) {
                        setTimeout(() => {
                          componentGenerator.click();
                        }, 100);
                      }
                    };
                    triggerRegeneration();
                  }}
                  prompt={prompt}
                />
              </div>
              
              <CodeDetails
                result={result}
              />
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResultsPage;
