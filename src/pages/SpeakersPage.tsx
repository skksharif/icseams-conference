import React from "react";
import SEO from "../components/SEO";
import { MapPin, Award, ExternalLink } from "lucide-react";

interface SpeakerProps {
  name: string;
  role: string;
  affiliation: string;
  country: string;
  image?: string;
  bio?: string;
  type: "plenary" | "keynote";
  website?: string;
  delay?: number;
}

const Speaker: React.FC<SpeakerProps> = ({
  name,
  role,
  affiliation,
  country,
  image,
  bio,
  type,
  website,
  delay = 0,
}) => {
  const getTypeClasses = () => {
    switch (type) {
      case "plenary":
        return "bg-conference-purple text-white";
      case "keynote":
        return "bg-conference-orange text-white";
      default:
        return "bg-gray-700 text-white";
    }
  };

  return (
    <div className="card card-hover overflow-hidden">
      <div className="relative h-56 mb-4 overflow-hidden rounded-t-lg -mx-6 -mt-6 bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        ) : (
          "No Image Available"
        )}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getTypeClasses()}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Speaker
        </div>
      </div>
      <div className="flex flex-col h-[calc(100%-14rem)]">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-conference-purple font-medium mb-2">{role}</p>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span>
            {affiliation}, {country}
          </span>
        </div>
        {bio && <p className="text-gray-700 text-sm mb-4 flex-grow">{bio}</p>}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-conference-orange hover:text-conference-purple flex items-center text-sm mt-auto transition-colors"
          >
            <span>View Profile</span>
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

const SpeakersPage: React.FC = () => {
  const plenaryPLACEHOLDER = [
    {
      name: "Prof. Suchi Torii",
      role: "Professor",
      affiliation: "Kurume Institute of Technology, Fukuoka",
      country: "Japan",
      image: "/speakers/1.jpg", // add image path
    },
    {
      name: "Edy Tonnizam Mohamad",
      role: "Professor",
      affiliation: "Universiti Teknologi Malaysia",
      country: "Malaysia",
      image: "/speakers/2.png",
    },
    {
      name: "Katta venkataramana",
      role: "Professor",
      affiliation: "AICTE Distinguished Professor",
      country: "India",
      image: "/speakers/3.jpg",
    },
    {
      name: "Deepak T J",
      role: "Professor",
      affiliation: "Universiti Teknologi MARA (UiTM)",
      country: "Malaysia",
      image: "/speakers/4.jpg",
    },

  ];

  const keynotePLACEHOLDER = [

    {
      name: "Daneti Saradhi Babu",
      role: "Director",
      affiliation: "Alliance Concrete Singapore Pte Ltd",
      country: "Singapore",
      image: "/speakers/6.png",
    },
            {
      name:"Prof. Dr. Ramesh Srikonda",
      role:"Director & Professor",
      affiliation:"School of Planning and Architecture, Vijayawada",
      country:"India",
      image:"/speakers/12.png",
    },
    {
      name: "Madhavi Latha G",
      role: "Professor",
      affiliation: "IISC Bangalore",
      country: "India",
      image: "/speakers/10.jpg",
    },
    {
      name: "Heeralal Mudavath",
      role: "Professor",
      affiliation: "NIT Warangal",
      country: "India",
      image: "/speakers/7.jpg",
    },
    {
      name: "Dr.C .Anil Kumar ",
      role: "Professor",
      affiliation: "School of Planning and Architecture, Vijayawada",
      country: "India",
      image: "/speakers/15.png",
    },
    {
      name: "Rakesh J Pillai",
      role: "Associate Professor",
      affiliation: "IIT Palakkad",
      country: "India",
      image: "/speakers/8.jpg",
    },
    {
      name: "Meena Murmu",
      role: "Associate Professor",
      affiliation: "NIT Raipur",
      country: "India",
      image: "/speakers/9.jpg",
    },

    {
      name: "Venkata Dilip Kumar Pasupuleti",
      role: "Associate Professor",
      affiliation: "Mahindra University",
      country: "India",
      image: "/speakers/11.webp",
    },

  ];

  return (
    <>
      <SEO
        title="Speakers"
        description="Meet the distinguished speakers of ICMISI-2026, including plenary and keynote speakers from around the world."
        canonical="/speakers"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-orange/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Conference Speakers
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Distinguished experts in materials, sustainable infrastructure,
            smart technologies, and resilient urban development
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-6">
              ICMISI-2026 will host distinguished speakers from academia and
              industry, offering insights into materials innovation, sustainable
              construction, smart infrastructure, and energy-efficient systems.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2">
              <button
                onClick={() =>
                  document
                    .getElementById("plenary-speakers")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-purple text-white cursor-pointer"
              >
                <Award size={14} className="mr-1" /> Plenary Speakers
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("keynote-speakers")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-orange text-white cursor-pointer"
              >
                <Award size={14} className="mr-1" /> Keynote Speakers
              </button>
            </div>
          </div>

          <div className="mb-16">
            <h2
              className="text-2xl font-bold text-gray-800 mb-8 text-center"
              id="plenary-speakers"
            >
              Plenary Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plenaryPLACEHOLDER.map((speaker, index) => (
                <Speaker
                  image={speaker.image}
                  key={speaker.name}
                  name={speaker.name}
                  role={speaker.role}
                  affiliation={speaker.affiliation}
                  country={speaker.country}
                  type="plenary"
                />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2
              className="text-2xl font-bold text-gray-800 mb-8 text-center"
              id="keynote-speakers"
            >
              Keynote Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keynotePLACEHOLDER.map((speaker, index) => (
                <Speaker
                  key={speaker.name}
                  name={speaker.name}
                  role={speaker.role}
                  affiliation={speaker.affiliation}
                  country={speaker.country}
                  image={speaker.image}
                  type="keynote"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersPage;
