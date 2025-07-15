import React from "react";
import SEO from "../components/SEO";
import {
  MapPin,
  Hotel,
  Utensils,
  Landmark,
  ShoppingBag,
  Plane,
  Train,
  Bus,
} from "lucide-react";

interface PlaceProps {
  name: string;
  description: string;
  distance: string;
  image: string;
  type: "attraction" | "hotel" | "restaurant" | "shopping";
  website?: string;
  delay?: number;
}

const Place: React.FC<PlaceProps> = ({
  name,
  description,
  distance,
  image,
  type,
  website,
  delay = 0,
}) => {
  const getIcon = () => {
    switch (type) {
      case "attraction":
        return <Landmark className="w-5 h-5 text-conference-purple" />;
      case "hotel":
        return <Hotel className="w-5 h-5 text-conference-orange" />;
      case "restaurant":
        return <Utensils className="w-5 h-5 text-conference-green" />;
      case "shopping":
        return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      default:
        return <MapPin className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
          <MapPin size={12} className="mr-1 text-conference-orange" />
          {distance}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="mr-2">{getIcon()}</div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-conference-orange hover:text-conference-purple text-sm font-medium transition-colors"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

const NearbyPlacesPage: React.FC = () => {
  const attractions = [
    {
      name: "Narsapur Forest",
      description:
        "A beautiful reserve forest area ideal for nature lovers and short hikes.",
      distance: "5 km",
      image:
        "https://imgs.search.brave.com/nAj1t9uac47oklv1iR7HLBLlqs-RaA7ezB9R4AVHrSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZWxhbmdhbmF0/b2RheS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDgv/TmFyc2FwdXItMS5q/cGc",
      type: "attraction" as const,
    },
    {
      name: "Medak Cathedral",
      description:
        "One of the largest churches in India with beautiful Gothic architecture.",
      distance: "35 km",
      image:
        "https://imgs.search.brave.com/TkysZbynD7zwXIv2859sZ6QXFUs6vBQ3ka-8ti2BTW0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGEvMmYvYWIvZWIv/bWVkYWstY2h1cmNo/LmpwZw",
      type: "attraction" as const,
    },
    {
      name: "Pocharam Wildlife Sanctuary",
      description:
        "Home to diverse flora and fauna, perfect for wildlife enthusiasts.",
      distance: "55 km",
      image:
        "https://imgs.search.brave.com/pmuEHY6RCGC1S5wEaSLrdUpyiCOC5vJf4sAfFf2v3qE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly94cGxv/cmluZ2Rlc3RpbmF0/aW9ucy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDcv/UG9jaGFyYW0tV2ls/ZGxpZmUtU2FuY3R1/YXJ5LVRpbWluZ3Mu/anBn",
      type: "attraction" as const,
    },
  ];

  const hotels = [
    {
      name: "Hotel Grand Sangareddy",
      description:
        "Comfortable rooms with modern amenities and conference facilities.",
      distance: "15 km",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "hotel" as const,
    },
    {
      name: "BVRIT Guest House",
      description:
        "On-campus accommodation with basic amenities for conference attendees.",
      distance: "0.5 km",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "hotel" as const,
    },
    {
      name: "Westside Residency",
      description: "Budget-friendly hotel with clean rooms and good service.",
      distance: "12 km",
      image:
        "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "hotel" as const,
    },
  ];

  const restaurants = [
    {
      name: "Spice Garden",
      description:
        "Authentic Indian cuisine with vegetarian and non-vegetarian options.",
      distance: "3 km",
      image:
        "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "restaurant" as const,
    },
    {
      name: "Campus Cafe",
      description: "On-campus dining with a variety of snacks and meals.",
      distance: "0.2 km",
      image:
        "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "restaurant" as const,
    },
    {
      name: "Royal Biryani House",
      description:
        "Famous for its authentic Hyderabadi biryani and other local specialties.",
      distance: "8 km",
      image:
        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      type: "restaurant" as const,
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Nearby Places
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore attractions, accommodations, and dining options around BVRIT
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="w-full h-[30vh]">
          <p className="text-center text-3xl md:text-4xl font-bold mb-4 mt-10">
            Updated Soon
          </p>
        </div>
      </div>
    </>
  );
};

export default NearbyPlacesPage;
