import React from 'react';
import { portfolioData } from '../data/portfolioData.js';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Experience from './Experience';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation name={portfolioData.name} />
      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        profilePicture={portfolioData.profilePicture}
        social={portfolioData.social}
      />
      <About about={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Experience />
      <Contact email={portfolioData.social.email} />
      <Footer name={portfolioData.name} social={portfolioData.social} />
    </div>
  );
};

export default Portfolio;
