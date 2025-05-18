
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ExperienceProps {
  title: string;
  company: string;
  period?: string;
  description: string;
}

const ExperienceItem = ({ title, company, period, description }: ExperienceProps) => {
  return (
    <Card className="mb-6 hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {period && <span className="text-gray-500 text-sm">{period}</span>}
        </div>
        <p className="text-blue-600 mb-4">{company}</p>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <ExperienceItem 
            title="Machine Learning Engineer"
            company="Laboneft pvt.ltd"
            description="I have enhanced my expertise in Machine Learning through remote work at Laboneft, developing intelligent models to solve complex problems and gain actionable insights from data."
          />
          
          <ExperienceItem 
            title="Full Stack Developer"
            company="Laboneft pvt ltd"
            description="At Laboneft, I have honed my Full-Stack Development skills by building dynamic, responsive web applications, managing both front-end and back-end development with a focus on seamless user experiences."
          />

          <div className="text-center mt-10">
            <p className="text-gray-600 italic">
              "The best way to predict the future is to create it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
