import { Calendar, MapPin } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/slides/s0.png",
    title: "ICMISI 2026",
    subtitle:
      "2nd International Conference on Materials Innovation and Sustainable Infrastructure",
  },
  {
    image: "/slides/s1.png",
    title: "",
    subtitle: "",
    showContent: false,
  },
  {
    image: "/slides/s2.png",
    title: "ICMISI 2026",
    subtitle: "",
  },
  {
    image: "/slides/s4.png",
    title: "ICMISI 2026",
    subtitle:
      "2nd International Conference on Materials Innovation and Sustainable Infrastructure",
  },
  {
    image: "/slides/s5.png",
    title: "ICMISI 2026",
    subtitle:
      "2nd International Conference on Materials Innovation and Sustainable Infrastructure",

  },
  {
    image: "/slides/s3.png",
    title: "",
    subtitle:
      "2nd International Conference on Materials Innovation and Sustainable Infrastructure",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] max-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          {slide.showContent !== false && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                ICMISI 2026
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl sm:max-w-2xl mb-4 sm:mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                2<sup>nd</sup> International Conference on Materials Innovation
                and Sustainable Infrastructure
              </p>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-xs sm:text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-conference-orange" />
                  <span>
                    1<sup>st</sup> - 2<sup>nd</sup> April 2026
                  </span>
                </div>
                <div className="hidden sm:block bg-white w-1 h-1 rounded-full" />
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-conference-orange" />
                  <span className="text-center sm:text-left">
                    VITB, Bhimavaram, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? "bg-conference-orange w-5"
                : "bg-white bg-opacity-50 hover:bg-opacity-70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
