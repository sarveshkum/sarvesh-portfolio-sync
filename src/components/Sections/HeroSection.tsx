
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-green-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-yellow-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-pink-300 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-gray-600 mb-4 text-lg animate-slide-in" style={{ animationDelay: '0.2s' }}>Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-800 animate-gradient-x">Sarveshkumar</span> S S
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-md animate-slide-in" style={{ animationDelay: '0.6s' }}>
              A <span className="font-medium">Full Stack Developer</span> and <span className="font-medium">Machine Learning Engineer</span> passionate about building modern web applications.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '0.8s' }}>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-blue-500/50">
                <a href="/lovable-uploads/4b0e3e12-2f25-49a8-93a9-fa8b1db27d16.png" download="Sarveshkumar_Resume.pdf">
                  Download CV
                </a>
              </Button>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={800}>
                <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50 transition-all hover:scale-105 duration-300 shadow-md hover:shadow-blue-300/50">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-70 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30 blur-md animate-spin-slow"></div>
              <img 
                src="/lovable-uploads/1e6456d7-965a-4628-a570-56e2ac1117fc.png" 
                alt="Sarveshkumar S S" 
                className="rounded-full w-full h-full object-cover border-4 border-white shadow-xl relative z-10 hover:scale-105 transition-transform duration-500"
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
