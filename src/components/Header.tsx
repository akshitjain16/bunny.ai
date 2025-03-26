
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Results", path: "/results" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <div className="relative h-8 w-8 rounded-full bg-gradient-to-tr from-aivora-500 to-aivora-700 flex items-center justify-center">
            <div className="absolute inset-0.5 rounded-full bg-background"></div>
            <span className="relative text-lg font-bold text-aivora-500">A</span>
          </div>
          <span className="text-xl font-bold">Aivora</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-aivora-500 ${
                  location.pathname === link.path 
                    ? "text-aivora-500" 
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a 
              href="#" 
              className="text-sm px-4 py-2 rounded-full bg-aivora-500 text-white hover:bg-aivora-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 pt-16 z-40 bg-background/95 backdrop-blur-md animate-fade-in">
          <nav className="flex flex-col items-center justify-center space-y-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors hover:text-aivora-500 ${
                  location.pathname === link.path 
                    ? "text-aivora-500" 
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="#" 
              className="mt-4 px-6 py-2 rounded-full bg-aivora-500 text-white hover:bg-aivora-600 transition-colors"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
