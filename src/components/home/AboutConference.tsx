import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutConference: React.FC = () => {
  return (
    <section className="py-8" id="about-conference">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">
            About The Conference
          </h2>
          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Exploring innovations in sustainable energy and advanced
            manufacturing systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <p className="text-gray-700 mb-4">
              Civil Engineering department at Vishnu Institute of
              Technology-Bhimavaram is organizing International Conference on
              Materials Innovation and Sustainable Infrastructure (ICMISI 2025)
              on 11th & 12th, December 2025. Sustainable infrastructure is
              crucial for mitigating environmental challenges, such as climate
              change, resource depletion, and pollution.
            </p>
            <p className="text-gray-700 mb-4">
              The conference explores how materials innovation and emerging
              technologies can contribute to mitigating these challenges by
              reducing greenhouse gas emissions, minimizing waste generation,
              optimizing resource use, and enhancing the resilience of
              infrastructure. The conference aims to bring academicians,
              technocrats, engineers, researchers, and students to a common
              platform to share their experience and research results in the
              field of materials innovation and sustainable infrastructure.
            </p>
            <p className="text-gray-700 mb-6">
              As a result of globalization, there is an opportunity for
              all-round development by promoting the exchange of knowledge and
              technological advancements. We hope that our Conference will offer
              a unique opportunity for interesting and fruitful interactions to
              all participants, providing them with memorable and pleasant
              experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/call-for-papers"
                className="flex items-center text-conference-orange hover:text-conference-purple font-medium transition-colors"
              >
                View Conference Tracks <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/important-dates"
                className="flex items-center text-conference-orange hover:text-conference-purple font-medium transition-colors"
              >
                Important Dates <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="relative">
              <iframe
                width="100%"
                height="400px"
                src="https://www.youtube.com/embed/nAumUVsxwtc?si=VsHUys6rkjYqw5Ef"
                title="YouTube video player"
    
              ></iframe>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-conference-purple font-bold text-xl">
                  11-12
                </div>
                <div className="text-gray-700">December 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
