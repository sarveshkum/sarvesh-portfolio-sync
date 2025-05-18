
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <Card className="h-full hover-card hover:border-blue-500 group">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-6 group-hover:text-blue-600 transition-colors">{title}</h3>
        <div className="space-y-5">
          {skills.map((skill, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-105">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 skill-progress" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 80 },
    { name: "Next JS", level: 75 },
    { name: "Angular JS", level: 70 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 80 },
    { name: "Express JS", level: 75 },
    { name: "Nest JS", level: 65 },
    { name: "Python", level: 85 },
    { name: "MongoDB", level: 70 },
  ];

  const mlSkills = [
    { name: "Machine Learning", level: 85 },
    { name: "Deep Learning", level: 75 },
    { name: "Data Analysis", level: 80 },
    { name: "TensorFlow/PyTorch", level: 70 },
    { name: "Data Visualization", level: 75 },
  ];

  const otherSkills = [
    { name: "UI/UX", level: 65 },
    { name: "Virtual Reality", level: 60 },
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjZjdmYWZjIiBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwQzAgMTMuNDMzIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMzIDMwIDMweiIgLz48cGF0aCBmaWxsPSIjZTZlZmY3IiBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwQzAgMTMuNDMzIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMzIDMwIDMweiIgLz48L2c+PC9zdmc+')]">
      <div className="section-container">
        <h2 className="section-title text-center animate-fade-in">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[frontendSkills, backendSkills, mlSkills, otherSkills].map((skillSet, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${0.2 * i}s` }}>
              <SkillCategory 
                title={["Frontend Development", "Backend Development", "Machine Learning", "Other Skills"][i]} 
                skills={skillSet} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
