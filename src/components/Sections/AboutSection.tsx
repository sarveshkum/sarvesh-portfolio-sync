
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { User, Briefcase, Book, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="col-span-1">
            <div className="sticky top-24">
              <img 
                src="/lovable-uploads/4b0e3e12-2f25-49a8-93a9-fa8b1db27d16.png" 
                alt="Sarveshkumar S S" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <User size={20} className="text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-medium">Name</h3>
                    <p className="text-gray-600">Sarveshkumar S S</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Briefcase size={20} className="text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-medium">Experience</h3>
                    <p className="text-gray-600">Machine Learning Engineer & Full Stack Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Book size={20} className="text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-medium">Education</h3>
                    <p className="text-gray-600">M.Tech CSE, Sri Ramakrishna Engineering College</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Award size={20} className="text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-medium">Achievement</h3>
                    <p className="text-gray-600">Best Mini Project of the Year 2023-2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Professional Profile</h3>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              As a committed college student pursuing Computer Science and Engineering, my passion lies in the captivating world of Full Stack Development and Machine Learning. I'm constantly enhancing my skills through working on real-time projects that solve complex problems.
            </p>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              At Laboneft, I've honed my Full-Stack Development skills by building dynamic, responsive web applications, managing both front-end and back-end development with a focus on seamless user experiences. I've also enhanced my expertise in Machine Learning through remote work at Laboneft, developing intelligent models to solve complex problems and gain actionable insights from data.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Professional Growth</h3>
                  <p className="text-gray-700">
                    Continuously improving my skills in modern web technologies and machine learning algorithms to stay at the forefront of technological innovation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Project Focus</h3>
                  <p className="text-gray-700">
                    Dedicated to creating solutions that combine technical excellence with outstanding user experiences, from sales prediction systems to student applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
