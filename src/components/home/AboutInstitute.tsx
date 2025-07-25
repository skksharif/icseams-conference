import React from "react";
import { Award, BookOpen, Users, Globe } from "lucide-react";

const AboutInstitute: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-pink-600" />,
      title: "Academic Excellence",
      description:
        "VITB is known for its academic rigor and excellence in engineering education.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-pink-600" />,
      title: "Research Focus",
      description:
        "Strong emphasis on research with state-of-the-art laboratories and facilities.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-600" />,
      title: "Industry Partnerships",
      description:
        "Collaborations with leading industry partners for practical exposure.",
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      title: "Global Connections",
      description:
        "International collaborations for a global perspective in education.",
    },
  ];

  return (
    <section className="py-8 bg-gray-100" id="about-institute">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" data-aos="fade-up">
            About Vishnu Institute of Technology (Autonomous)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="VITB Campus"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              A Premier Engineering Institution
            </h3>
            <p className="text-gray-700 mb-4">
              Vishnu Institute of Technology was established in 2008 by Sri
              Vishnu Educational Society (SVES), a leading educational trust to
              promote quality education, under the aegis of eminent
              philanthropist Padma Bhushan Dr. B.V. Raju (Late).
            </p>
            <p className="text-gray-700 mb-4">
              he institute is approved by AICTE and is permanently affiliated to
              JNTUK, Kakinada. Over a decade, this institute has witnessed
              significant growth and stands out as one of the best engineering
              colleges in AP. This institute is accredited by NAAC twice with
              'A++' grade (3.51/4) with its validity up to 2024. The institute
              has attained autonomous status for 10 years from the year 2019.
            </p>
            <p className="text-gray-700">
              Indian Merchant's Chamber (IMC) recognized the services of VITB
              with its Ramakrishna Bajaj National Quality award in education
              sector (2010, 2011, 2017) and Asia Pacific Quality Organization
              (APQO)-Best in class Award (2012, 2018).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
