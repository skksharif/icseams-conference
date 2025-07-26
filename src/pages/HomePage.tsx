import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import AboutConference from '../components/home/AboutConference';
import AboutInstitute from '../components/home/AboutInstitute';
import AboutDepartment from '../components/home/AboutDepartment';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Materials Innovation and Sustainable Infrastructure (ICMISI-2026) is an international conference organized by the Civil Engineering department at Vishnu Institute of Technology, Bhimavaram. Join us on 1st & 2nd April 2026 to explore advancements in sustainable infrastructure and materials innovation." 
        canonical="/"
      />
      <Hero />
      <AboutConference />
      <AboutInstitute />
      <AboutDepartment />
    </>
  );
};

export default HomePage;