import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, FileText, Download } from "lucide-react";
import SEO from "../components/SEO";

interface TrackProps {
  title: string;
  topics: string[];
  isOpen?: boolean;
  toggleOpen: () => void;
}

const Track: React.FC<TrackProps> = ({
  title,
  topics,
  isOpen = false,
  toggleOpen,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden mb-4 shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-left focus:outline-none ${
          isOpen ? "bg-gray-50" : "bg-white"
        }`}
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t animate-fade-in">
          <ul className="space-y-2 text-gray-700">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-conference-orange rounded-full mt-2 mr-2"></span>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const CallForPapersPage: React.FC = () => {
  const [openTrack, setOpenTrack] = useState<number | null>(0);

  const tracks = [
    {
      title: "Smart Cities and Urban Development",
      topics: [
        "Internet of Things (IoT) in Infrastructure",
        "Application of artificial intelligence (AI)",
        "Smart sensing technologies",
        "Sustainable energy in urban areas",
        "Affordable housing & smart buildings",
        "Resilient infrastructure and climate adaptation",
        "Digital transformation in urban governance",
      ],
    },
    {
      title: "Structural Management",
      topics: [
        "Green concrete",
        "Sustainable materials and construction",
        "Utilisation of waste in concrete",
        "Composite and sandwiched structures",
        "Offshore structures",
        "Earthquake engineering and structural dynamics",
        "Forensic Engineering and Structural Health Monitoring",
        "Structural Reliability",
      ],
    },
    {
      title: "Construction Management",
      topics: [
        "Cost Effective construction technologies",
        "Innovative construction methods",
        "Construction planning and control",
        "Construction Safety",
        "Time and cost optimization in project management",
        "Risk and safety management",
        "Sustainable design and construction",
      ],
    },
    {
      title: "Transportation System",
      topics: [
        "Innovations in Recycled and reused materials for pavements",
        "Environmental issues in transportation",
        "Traffic safety and security",
        "Traffic flow theory, operation and facilities",
        "Intelligent transportation system",
        "Strategies to improve pedestrian and cyclist safety",
        "Transportation policy and planning",
        "Optimization in transport systems",
      ],
    },
    {
      title: "Hydraulics and Water Resources",
      topics: [
        "Water Resources Planning and Management",
        "Rainwater Harvesting Systems",
        "Sustainable Water Supply",
        "Geospatial Techniques (Remote Sensing and GIS)",
        "Groundwater Potential and Recharge",
        "Energy Harvesting Technologies",
        "Irrigation and drainage management",
      ],
    },
    {
      title: "Geotechnical Engineering",
      topics: [
        "Characterization of geomaterials and physical modeling",
        "Foundations, slope stability, and landslides",
        "Earthquake geotechnical engineering",
        "Ground improvement",
        "Geo-environmental engineering",
      ],
    },
    {
      title: "Environmental Management and Climate Issues",
      topics: [
        "Air Quality Monitoring and Management",
        "Aerosol and Air Quality Studies",
        "Water and Wastewater Treatment",
        "Solid and Hazardous Waste Management",
        "Low Carbon and Climate Issues",
      ],
    },
    {
      title: "Advanced Manufacturing and Processing",
      topics: [
        "Solid-state Processing and Corrosion Resistance",
        "Metallurgy and Welding",
        "Properties of Materials",
        "Microelectronics Packaging and Thermal Processing",
        "FEM Modelling of Materials",
        "Grain Boundary Engineering and Phase Transformation",
        "Nano-materials and Nano-technologies",
        "3D-Printing",
      ],
    },
  ];

  const cardColors = [
    "bg-conference-orange/10 border-conference-orange",
    "bg-conference-purple/10 border-conference-purple",
    "bg-conference-green/10 border-conference-green",
    "bg-blue-100 border-blue-400",
  ];

  const toggleTrack = (index: number) => {
    setOpenTrack(openTrack === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Call for Papers"
        description="Submit your research papers to ICMISI-2025 on topics related to sustainable energy and advanced manufacturing systems."
        canonical="/call-for-papers"
      />
      <div className="bg-gradient-to-r from-conference-green/90 to-conference-orange/90 text-white py-10">
        <div className="container mx-auto px-2 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Call for Papers
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Submit your research contributions to ICMISI-2025
          </p>
        </div>
      </div>

      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Conference Tracks
            </h2>
            <p className="text-gray-700 mb-6">
              ICMISI-2025 welcomes papers across a wide range of topics related
              to sustainable energy and advanced manufacturing systems. Click on
              each track to view detailed topics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className={`border rounded-lg shadow-md p-6 hover:shadow-lg transition ${
                    cardColors[index % cardColors.length]
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {track.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {track.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForPapersPage;
