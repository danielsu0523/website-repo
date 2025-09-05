import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-fixed border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 
              className="text-xl font-semibold text-primary cursor-pointer" 
              onClick={() => scrollToSection('hero')}
              data-testid="logo-title"
            >
              Dr. Sarah Chen
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('research')} 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-research"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('publications')} 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-publications"
              >
                Publications
              </button>
              <button 
                onClick={() => scrollToSection('teaching')} 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-teaching"
              >
                Teaching
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary" 
              onClick={toggleMobileMenu}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('research')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-research"
              >
                Research
              </button>
              <button 
                onClick={() => scrollToSection('publications')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-publications"
              >
                Publications
              </button>
              <button 
                onClick={() => scrollToSection('teaching')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-teaching"
              >
                Teaching
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
