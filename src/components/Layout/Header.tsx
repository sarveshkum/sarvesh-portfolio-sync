
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavItem = ({ to, label, onClick }: NavItemProps) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className="text-gray-700 hover:text-primary cursor-pointer transition-colors duration-300 px-4 py-2 text-base"
    onClick={onClick}
  >
    {label}
  </ScrollLink>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
              <span className="font-heading text-xl font-semibold gradient-text">Sarveshkumar S S</span>
            </ScrollLink>
          </div>
          
          <nav className="hidden md:flex space-x-1 items-center">
            <NavItem to="about" label="About" />
            <NavItem to="experience" label="Experience" />
            <NavItem to="skills" label="Skills" />
            <NavItem to="projects" label="Projects" />
            <NavItem to="education" label="Education" />
            <NavItem to="certifications" label="Certifications" />
            <NavItem to="contact" label="Contact" />
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-700" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" className="text-gray-700" onClick={toggleMenu}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col items-center py-8 space-y-6">
          <NavItem to="about" label="About" onClick={closeMenu} />
          <NavItem to="experience" label="Experience" onClick={closeMenu} />
          <NavItem to="skills" label="Skills" onClick={closeMenu} />
          <NavItem to="projects" label="Projects" onClick={closeMenu} />
          <NavItem to="education" label="Education" onClick={closeMenu} />
          <NavItem to="certifications" label="Certifications" onClick={closeMenu} />
          <NavItem to="contact" label="Contact" onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
