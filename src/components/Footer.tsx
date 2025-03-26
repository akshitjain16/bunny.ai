
import { Link } from "react-router-dom";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-aivora-500 to-aivora-700 flex items-center justify-center">
                <div className="absolute inset-0.5 rounded-full bg-background"></div>
                <span className="relative text-lg font-bold text-aivora-500">A</span>
              </div>
              <span className="text-xl font-bold">Aivora</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered UI generator – Instantly build stunning interfaces from text!
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-aivora-500 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-aivora-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-aivora-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Showcase", "Pricing", "API"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "Components", "Templates", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Careers", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aivora. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
