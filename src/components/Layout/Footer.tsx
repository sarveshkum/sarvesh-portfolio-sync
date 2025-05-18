
import React from 'react';
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sarveshkumar S S</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & Machine Learning Engineer
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sarveshkumar-s-s-software-developer/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sarveshkumar.sasikumar@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+918883568741" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="flex items-center text-gray-400 mb-2">
              <Mail size={16} className="mr-2" />
              sarveshkumar.sasikumar@gmail.com
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <Phone size={16} className="mr-2" />
              +91 8883568741
            </p>
            <p className="flex items-center text-gray-400">
              <Linkedin size={16} className="mr-2" />
              sarveshkumar-s-s-software-developer
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sarveshkumar S S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
