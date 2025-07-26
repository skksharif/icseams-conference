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
    <div
      className="card card-hover overflow-hidden"
    >
      <div className="relative h-56 mb-4 overflow-hidden rounded-t-lg -mx-6 -mt-6 bg-gray-200 flex items-center justify-center text-gray-600 text-sm">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
      name: "Prof. Shuichi Tori",
      role: "Assistant Director and Professor",
      affiliation: "Kumamoto University",
      country: " Japan",
    },
    {
      name: "Edy Tonnizam Mohamad",
      role: "",
      affiliation: "Universiti Teknologi Malaysia",
      country: "Malaysia",
    },
    {
      name: "Trilok Nath Singh",
      role: "Director",
      affiliation: "Indian Institute of Technology Patna",
      country: "India",
    },
    {
      name: "Deepak T J",
      role: "",
      affiliation: "Universiti Teknologi MARA (UiTM)",
      country: "Malaysia",
    },
  ];

  const keynotePLACEHOLDER = [
    {
      name: "K Ganesh Babu",
      role: "",
      affiliation: "IIT Madras",
      country: "India",
    },
    {
      name: "Daneti Saradhi Babu",
      role: "",
      affiliation: "Alliance Concrete Singapore Pte Ltd",
      country: "Singapore",
    },

    {
      name: "Heeralal Mudavath",
      role: "",
      affiliation: "NIT Warangal",
      country: "India",
    },
    {
      name: "Rakesh J Pillai",
      role: "",
      affiliation: "IIT Palakkad",
      country: "India",
    },
    {
      name: "Meena Murmu",
      role: "",
      affiliation: "NIT Raipur",
      country: "India",
    },
    {
      name: "Madhavi Latha G",
      role: "",
      affiliation: " IISC Banglore",
      country: "India",
    },
    {
      name: "Venkata Dilip Kumar Pasupuleti",
      role: "",
      affiliation: "Mahindra University",
      country: "India",
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
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Conference Speakers
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            
          >
            Distinguished experts in sustainable energy, infrastructure, and
            smart systems
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8" >
            <p className="text-gray-700 mb-6">
              ICMISI-2026 will feature distinguished speakers from academia and
              industry, sharing insights on smart infrastructure, construction,
              and energy systems.
            </p>
            <div className="inline-flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-purple text-white">
                <Award size={14} className="mr-1" /> Plenary Speakers
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-conference-orange text-white">
                <Award size={14} className="mr-1" /> Keynote Speakers
              </span>
            </div>
          </div>

          <div className="mb-16">
            <h2
              className="text-2xl font-bold text-gray-800 mb-8 text-center"
            >
              Plenary Speakers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plenaryPLACEHOLDER.map((speaker, index) => (
                <Speaker
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
