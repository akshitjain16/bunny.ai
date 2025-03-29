
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Dashboard", href: "/dashboard" },
    { text: "Pricing", href: "/pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Sparkles className="h-5 w-5 text-aivora-500 mr-2" />
            <span className="text-xl font-bold text-foreground">Bonny.AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.href}
                className={`font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <Link
              to="/dashboard"
              className="hidden md:flex items-center h-9 px-4 py-2 bg-aivora-500 hover:bg-aivora-600 text-white rounded-md font-medium transition-colors"
            >
              Try Bonny.AI
            </Link>

            {/* Mobile menu button */}
            <button
              className="p-2 rounded-md md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border animate-slide-down">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.href}
                  className={`py-2 font-medium ${
                    location.pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.text}
                </Link>
              ))}
              <Link
                to="/dashboard"
                className="mt-2 py-2 bg-aivora-500 hover:bg-aivora-600 text-white rounded-md font-medium text-center transition-colors"
              >
                Try Bonny.AI
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
