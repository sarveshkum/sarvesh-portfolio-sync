
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button variant="outline" size="sm" onClick={onClick}>
          Learn More
        </Button>
        <div className="flex space-x-2">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <ExternalLink size={18} />
              </Button>
            </a>
          )}
          {project.codeLink && (
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Code size={18} />
              </Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Sales Prediction System",
      shortDesc: "A machine learning model that forecasts product sales for future updates",
      fullDesc: "A machine learning model that forecasts product sales for future updates with precision and insights. This project uses advanced data analysis and prediction algorithms to help businesses plan inventory and marketing strategies based on projected sales figures.",
      tags: ["Machine Learning", "Python", "Data Analysis", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Student Application",
      shortDesc: "A web application to automate student mark lists and securely manage academic data",
      fullDesc: "A web application to automate student mark lists and securely manage academic data. It ensures efficient record-keeping and easy access for future updates. The system features robust authentication, comprehensive data management, and intuitive reporting interfaces for students, teachers, and administrators.",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      shortDesc: "A modern personal portfolio website to showcase skills and projects",
      fullDesc: "A modern personal portfolio website built with React and Tailwind CSS to showcase skills, experience, and projects. The site features responsive design, smooth scroll animations, and interactive components to create an engaging user experience.",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      shortDesc: "A full-stack e-commerce platform with secure payment processing",
      fullDesc: "A full-stack e-commerce platform built with the MERN stack featuring product catalog, shopping cart, user authentication, order management, and secure payment processing. The application includes an admin dashboard for inventory management and order fulfillment.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      demoLink: "#",
      codeLink: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="pt-4">
                  <div className="mb-4">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="my-4">
                    <p className="text-gray-700">{selectedProject.fullDesc}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 pt-2">
                    {selectedProject.demoLink && (
                      <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                        <Button className="flex items-center space-x-2">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </Button>
                      </a>
                    )}
                    {selectedProject.codeLink && (
                      <a href={selectedProject.codeLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Code size={16} />
                          <span>View Code</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
