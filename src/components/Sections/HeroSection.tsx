
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-green-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-gray-600 mb-4 text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Sarveshkumar</span> S S
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-md">
              A <span className="font-medium">Full Stack Developer</span> and <span className="font-medium">Machine Learning Engineer</span> passionate about building modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white">
                <a href="/lovable-uploads/4b0e3e12-2f25-49a8-93a9-fa8b1db27d16.png" download="Sarveshkumar_Resume.pdf">
                  Download CV
                </a>
              </Button>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={800}>
                <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80 animate-fade-in">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 animate-pulse"></div>
              <img 
                src="/lovable-uploads/1e6456d7-965a-4628-a570-56e2ac1117fc.png" 
                alt="Sarveshkumar S S" 
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl relative z-10"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer">
          <ChevronDown size={32} className="text-blue-600" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
