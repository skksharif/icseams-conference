'use client';

import { useState, useEffect } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1426825/pexels-photo-1426825.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 5s ease-in-out, opacity 1s ease-in-out',
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A52]/90 via-black/60 to-[#1A2A52]/90" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 hero-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-scale">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Best Scaffolding in{' '}
            <span className="gradient-text">Hyderabad</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            "The Best Scaffolding in Hyderabad – Structure Built Strong, Safety Elevated."
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="group bg-[#F36A2D] hover:bg-[#E85C24] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 animate-glow flex items-center space-x-3">
              <span>Request a Quote</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-[#F36A2D] text-white hover:bg-[#F36A2D] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-3">
              <FaPlay className="text-sm" />
              <span>Explore Services</span>
            </button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-float">
              <h3 className="text-3xl font-bold text-[#F36A2D]">500+</h3>
              <p className="text-gray-200">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-float" style={{animationDelay: '1s'}}>
              <h3 className="text-3xl font-bold text-[#F36A2D]">15+</h3>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-float" style={{animationDelay: '2s'}}>
              <h3 className="text-3xl font-bold text-[#F36A2D]">100%</h3>
              <p className="text-gray-200">Safety Compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;