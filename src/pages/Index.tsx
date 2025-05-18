
import React from 'react';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import HeroSection from "../components/Sections/HeroSection";
import AboutSection from "../components/Sections/AboutSection";
import ExperienceSection from "../components/Sections/ExperienceSection";
import SkillsSection from "../components/Sections/SkillsSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import EducationSection from "../components/Sections/EducationSection";
import CertificationsSection from "../components/Sections/CertificationsSection";
import ContactSection from "../components/Sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
