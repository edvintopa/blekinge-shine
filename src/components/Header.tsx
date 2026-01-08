import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/#tjanster", label: "Tjänster" },
    { to: "/#priser", label: "Priser" },
    { to: "/#om-oss", label: "Om oss" },
    { to: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between py-4">
        <HashLink to="/#" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Elite Clean Service"
            className="h-12 w-auto"
          />
        </HashLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <HashLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </HashLink>
          ))}
          <HashLink
            to="/#boka"
            className="gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Boka nu
          </HashLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <HashLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </HashLink>
            ))}
            <HashLink
              to="/#boka"
              onClick={() => setIsMobileMenuOpen(false)}
              className="gradient-hero text-primary-foreground px-5 py-3 rounded-lg font-semibold text-center"
            >
              Boka nu
            </HashLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
