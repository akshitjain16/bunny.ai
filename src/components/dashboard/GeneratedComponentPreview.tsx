
import { useEffect, useState } from "react";

interface GeneratedComponentPreviewProps {
  component: {
    jsx: string;
    css: string;
    html: string;
    preview: string;
  };
}

const GeneratedComponentPreview = ({ component }: GeneratedComponentPreviewProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, [component]);

  // This is a simple renderer for the mock components
  // In a real app, this would use a sandboxed iframe to render the actual component

  return (
    <div className="w-full min-h-[300px] flex items-center justify-center bg-background/50 border border-border/50 rounded-xl p-8 shadow-inner">
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

export default GeneratedComponentPreview;
