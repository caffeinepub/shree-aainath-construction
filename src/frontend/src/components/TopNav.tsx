import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Shree Aainath Construction Home"
          >
            <img
              src="/assets/generated/sac-logo.dim_512x512.png"
              alt="Shree Aainath Construction Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                Shree Aainath Construction
              </h1>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-base font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => scrollToSection(link.id)}
                  className="justify-start text-base font-medium"
                >
                  {link.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="mt-2"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default TopNav;
