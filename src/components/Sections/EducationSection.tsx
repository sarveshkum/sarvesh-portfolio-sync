
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  percentage?: string;
  description?: string;
}

const EducationItem = ({ degree, institution, period, percentage, description }: EducationItemProps) => {
  return (
    <div className="mb-8 relative">
      <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-600 -ml-2 mt-1.5"></div>
      <div className="pl-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h3 className="text-xl font-semibold">{degree}</h3>
              {percentage && <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{percentage}</Badge>}
            </div>
            <p className="text-blue-600 mb-2">{institution}</p>
            <p className="text-gray-500 text-sm mb-3">{period}</p>
            {description && <p className="text-gray-700">{description}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto mt-12 relative border-l-2 border-gray-200 pl-4">
          <EducationItem 
            degree="M.Tech CSE"
            institution="Sri Ramakrishna Engineering College"
            period="2023 - Present"
          />
          
          <EducationItem 
            degree="HSC"
            institution="G.K.D.Matric.Hr.Sec.School"
            period="2021 - 2022"
            percentage="60%"
          />
          
          <EducationItem 
            degree="SSLC"
            institution="G.K.D.Matric.Hr.Sec.School"
            period="2019 - 2020"
            percentage="71%"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
