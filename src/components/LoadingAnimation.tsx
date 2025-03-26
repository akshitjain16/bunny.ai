
import { CSSProperties } from "react";

interface LoadingAnimationProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "white";
  className?: string;
}

const LoadingAnimation = ({ 
  size = "medium", 
  color = "primary",
  className = ""
}: LoadingAnimationProps) => {
  const getSize = (): CSSProperties => {
    switch (size) {
      case "small":
        return { width: "20px", height: "20px" };
      case "large":
        return { width: "40px", height: "40px" };
      default:
        return { width: "30px", height: "30px" };
    }
  };

  const getColor = (): string => {
    switch (color) {
      case "white":
        return "border-white border-t-transparent";
      default:
        return "border-aivora-500 border-t-transparent";
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`rounded-full animate-spin border-2 ${getColor()}`}
        style={getSize()}
      />
    </div>
  );
};

export default LoadingAnimation;
