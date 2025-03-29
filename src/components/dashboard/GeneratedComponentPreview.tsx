
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

  return (
    <div className="w-full min-h-[300px] flex items-center justify-center bg-background/50 border border-border/50 rounded-xl p-8 shadow-inner">
      {mounted && (
        <div className="component-preview">
          <div dangerouslySetInnerHTML={{ __html: component.html }} />
          <style dangerouslySetInnerHTML={{ __html: component.css }} />
        </div>
      )}
    </div>
  );
};

export default GeneratedComponentPreview;
