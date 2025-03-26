
import { useState } from "react";
import { Check, Copy, Code } from "lucide-react";

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
  title?: string;
}

const CodeSnippet = ({
  code,
  language = "jsx",
  showLineNumbers = true,
  className = "",
  title
}: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Format code with line numbers
  const formatCode = () => {
    const lines = code.trim().split("\n");
    
    if (!showLineNumbers) return <code className="whitespace-pre">{code}</code>;
    
    return (
      <code className="whitespace-pre">
        {lines.map((line, index) => (
          <div key={index} className="table-row">
            <span className="table-cell pr-4 text-right text-muted-foreground opacity-50 select-none">{index + 1}</span>
            <span className="table-cell">{line}</span>
          </div>
        ))}
      </code>
    );
  };

  return (
    <div className={`rounded-lg glass overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
        <div className="flex items-center space-x-2">
          <Code size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium">
            {title || `${language.toUpperCase()} Code`}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>
      <div className={`p-4 text-sm overflow-x-auto ${showLineNumbers ? "table w-full" : ""}`} style={{ maxHeight: "500px" }}>
        {formatCode()}
      </div>
    </div>
  );
};

export default CodeSnippet;
