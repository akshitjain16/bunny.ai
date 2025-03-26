
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface GeneratedComponentCodeProps {
  component: {
    jsx: string;
    html: string;
    vue: string;
    css: string;
  };
  activeCodeTab: "jsx" | "html" | "vue";
}

const GeneratedComponentCode = ({ component, activeCodeTab }: GeneratedComponentCodeProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(component[activeCodeTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      toast({
        title: "Code copied",
        description: "Code copied to clipboard",
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={handleCopyCode}
        className="absolute right-3 top-3 p-2 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      
      <div className="p-4 overflow-x-auto max-h-[400px] overflow-y-auto">
        <pre className="text-sm">
          <code className="font-mono">{component[activeCodeTab]}</code>
        </pre>
      </div>
    </div>
  );
};

export default GeneratedComponentCode;
