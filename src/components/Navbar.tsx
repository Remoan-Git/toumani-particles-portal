
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavLink = ({ 
  href, 
  children, 
  active = false 
}: { 
  href: string; 
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "text-sm font-medium transition-colors",
        active ? "text-primary" : "text-foreground/70 hover:text-foreground"
      )}
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = "#" + section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
            T
          </div>
          <span className="font-bold tracking-tight text-xl">Toumani</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#home" active={activeSection === "#home"}>Home</NavLink>
          <NavLink href="#about" active={activeSection === "#about"}>About</NavLink>
          <NavLink href="#skills" active={activeSection === "#skills"}>Skills</NavLink>
          <NavLink href="#projects" active={activeSection === "#projects"}>Projects</NavLink>
          <NavLink href="#contact" active={activeSection === "#contact"}>Contact</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="btn-gradient">
            <span className="relative z-10">Download CV</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-background/95 backdrop-blur-md flex flex-col justify-center items-center md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={cn(
                "text-lg font-medium transition-colors",
                activeSection === `#${item}` ? "text-primary" : "text-foreground/70"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <div className="mt-10">
          <Button className="btn-gradient">
            <span className="relative z-10">Download CV</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
