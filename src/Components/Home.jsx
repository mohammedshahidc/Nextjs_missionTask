"use client"
import React from 'react';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import LogoCarousel from './LogoCarousel';
import Howitworks from './Howitworks';
import Portfolio from './Protfolio';
import Benefits from './Benefits';
import Services from './Services';
import Pricing from './Pricing';
import Insights from './Insights';
import Testimonial from './Testimonial';
import Footer from './Footer';
const Home = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <ProjectSection/>
      <LogoCarousel/>
      <Howitworks/>
      <Portfolio/>
      <Benefits/>
      <Services/>
      <Pricing/>
      <Insights/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default Home;
