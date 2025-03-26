
import { useState, FormEvent, useRef, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import LoadingAnimation from "./LoadingAnimation";

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
  className?: string;
  placeholder?: string;
  buttonText?: string;
  autoFocus?: boolean;
}

const PromptInput = ({
  onSubmit,
  isLoading = false,
  className = "",
  placeholder = "Describe the UI component you need...",
  buttonText = "Generate",
  autoFocus = false
}: PromptInputProps) => {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.metaKey) {
      handleSubmit(e);
    }
  };

  const adjustHeight = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  // Example prompts
  const examplePrompts = [
    "Create a pricing table with 3 plans and hover effects",
    "Design a navigation bar with dropdown menus",
    "Build a contact form with validation",
    "Create a product card with image gallery",
  ];

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative w-full glass rounded-2xl transition-all duration-300 hover:shadow-md focus-within:ring-1 focus-within:ring-aivora-300 dark:focus-within:ring-aivora-700">
          <textarea
            ref={inputRef}
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              adjustHeight();
            }}
            onKeyDown={handleKeyDown}
            className="w-full resize-none bg-transparent px-4 py-4 text-base focus:outline-none min-h-[80px]"
            placeholder={placeholder}
            rows={1}
          />
          
          <div className="absolute bottom-3 right-3 flex items-center space-x-2">
            <div className="hidden md:block text-xs text-muted-foreground">
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-secondary/50 font-mono">⌘</kbd>
              <span className="mx-1">+</span>
              <kbd className="px-1.5 py-0.5 rounded border border-border bg-secondary/50 font-mono">Enter</kbd>
            </div>
            
            <button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className={`flex items-center justify-center space-x-2 px-5 py-2.5 rounded-full bg-aivora-500 text-white font-medium transition-all ${
                !prompt.trim() || isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-aivora-600"
              }`}
            >
              {isLoading ? (
                <LoadingAnimation size="small" color="white" />
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>{buttonText}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
      
      {!prompt && (
        <div className="mt-4 flex flex-wrap gap-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setPrompt(example);
                if (inputRef.current) {
                  inputRef.current.focus();
                  adjustHeight();
                }
              }}
              className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/30 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              {example}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromptInput;
