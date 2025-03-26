
import { useEffect, useState } from "react";

interface ComponentPreviewProps {
  component: {
    jsx: string;
    css: string;
    html: string;
    preview: string;
  };
}

const ComponentPreview = ({ component }: ComponentPreviewProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [component]);

  // This is a simple renderer for the mock components
  // In a real app, this would either:
  // 1. Use a sandboxed iframe to render the actual component
  // 2. Have predefined component templates that get customized

  // For this demo, we'll render custom HTML with the CSS applied

  return (
    <div className="w-full h-full flex items-center justify-center">
      {mounted && (
        <>
          <div 
            className="custom-button"
            dangerouslySetInnerHTML={{ __html: "Click Me" }}
          />
          <style dangerouslySetInnerHTML={{ __html: component.css }} />
        </>
      )}
    </div>
  );
};

export default ComponentPreview;
