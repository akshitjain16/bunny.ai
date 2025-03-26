
import { useState } from "react";
import { Download, RefreshCcw, Copy, Check } from "lucide-react";

interface ActionButtonsProps {
  result: any;
  activeCodeTab: "html" | "jsx" | "vue";
  handlePromptSubmit: (prompt: string) => Promise<void>;
  prompt: string;
}

const ActionButtons = ({ 
  result, 
  activeCodeTab, 
  handlePromptSubmit, 
  prompt 
}: ActionButtonsProps) => {
  const [copied, setCopied] = useState(false);

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
    const filename = `bonny-component.${extension}`;
    
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
  );
};

export default ActionButtons;
