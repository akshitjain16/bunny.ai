
import CodeSnippet from "../CodeSnippet";

interface CodeDetailsProps {
  result: any;
}

const CodeDetails = ({ result }: CodeDetailsProps) => {
  if (!result) return null;

  return (
    <div className="col-span-1 order-1 lg:order-2">
      <h2 className="text-xl font-semibold mb-4">Code Details</h2>
      
      <div className="space-y-6">
        <CodeSnippet
          code={result.jsx}
          language="jsx"
          title="React Component"
        />
        
        <CodeSnippet
          code={result.css}
          language="css"
          title="CSS Styles"
        />
      </div>
      
      <div className="mt-6 p-4 rounded-lg glass">
        <h3 className="text-sm font-medium mb-2">About this component</h3>
        <p className="text-sm text-muted-foreground">
          This pricing card component features a clean design with a hover effect. 
          It includes a plan name, price display, feature list, and a call-to-action button. 
          The component is fully responsive and works well on both light and dark themes.
        </p>
      </div>
    </div>
  );
};

export default CodeDetails;
