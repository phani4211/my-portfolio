import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "/about", isRoute: true },
  { name: "Skills", href: "/skills", isRoute: true },
  { name: "Experience", href: "/experience", isRoute: true },
  { name: "Services", href: "/services", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href: string, isRoute: boolean) => {
    if (isRoute) {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        {/* 🔽 Increased height from h-16 to h-20 */}
        <div className="flex h-20 items-center justify-between">
          <div className="font-bold text-2xl cursor-pointer" onClick={() => navigate("/")}>
            <span className="gradient-text">Phanindra Nidamanuri</span>
            <span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.isRoute)}
                className="text-base font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => handleNavigation("/contact", true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 text-base"
            >
              Hire me
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="h-9 w-9"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t animate-fade-in">
            <div className="flex flex-col space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className="text-left text-base font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavigation("/contact", true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-fit px-6 text-base"
              >
                Hire me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
