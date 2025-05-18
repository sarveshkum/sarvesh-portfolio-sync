
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface CertificationProps {
  title: string;
  issuer: string;
  date?: string;
  score?: string;
}

const CertificationItem = ({ title, issuer, date, score }: CertificationProps) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-start">
          <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-gray-600">{issuer}</p>
            <div className="flex flex-wrap items-center gap-x-4 mt-1 text-sm text-gray-500">
              {date && <span>{date}</span>}
              {score && <span>Score: {score}</span>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div>
            <CertificationItem
              title="Software Engineering Job Simulation"
              issuer="Skyscanner (Forage)"
              date="Completed on February 17th, 2025"
            />
            
            <CertificationItem
              title="Software Engineering Job Simulation"
              issuer="Accenture (Forage)"
              date="Completed on February 16th, 2025"
            />
            
            <CertificationItem
              title="Software Engineering Job Simulation"
              issuer="JPMorgan Chase & Co. (Forage)"
              date="Completed on February 16th, 2025"
            />
            
            <CertificationItem
              title="Career Advancement through C Programming"
              issuer="E-Box (Amphisoft)"
              date="Completed September 2024 - October 2024"
            />
          </div>
          
          <div>
            <CertificationItem
              title="Full-Stack (MERN) App/Web Development Traineeship"
              issuer="MSME, Youth United Council of India, V Vision"
              date="Completed on August 7th, 2024"
            />
            
            <CertificationItem
              title="Fundamentals of Deep Learning"
              issuer="NVIDIA Deep Learning Institute (DLI)"
              date="Certification of Competency"
            />
            
            <CertificationItem
              title="NPTEL - Privacy and Security in Online Social Media"
              issuer="NPTEL"
              score="54%"
            />
            
            <CertificationItem
              title="Executive Member"
              issuer="IEEL, Association of Computer Engineers, Phorartz Club, SREC Library Club"
            />
            
            <CertificationItem
              title="Treasurer"
              issuer="Reading Movement SREC"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
