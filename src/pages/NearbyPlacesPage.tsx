import React from "react";
import SEO from "../components/SEO";
import {
  MapPin,
  Hotel,
  Utensils,
  Landmark,
  ShoppingBag,
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
      <a href={website} target="_blank" rel="noopener noreferrer">
        <div className="relative h-48">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
            <MapPin size={12} className="mr-1 text-conference-orange" />
            {distance}
          </div>
        </div>
      </a>
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
            View on Google Maps
          </a>
        )}
      </div>
    </div>
  );
};

const NearbyPlacesPage: React.FC = () => {
  const hotels: PlaceProps[] = [
    {
      name: "Hotlines Falcons Nest Hotel",
      description:
        "Address: 172/5, Undi Rd, behind Coastal City Center, Balusumoodi, Bhimavaram, Andhra Pradesh 534202\nContact No: 096408 09123",
      distance: "2.5 km",
      image: "/hotels/falcon.png", // replace with your actual image path
      type: "hotel",
      website: "https://www.google.com/maps?q=Hotlines+Falcons+Nest+Hotel+Bhimavaram",
      delay: 100,
    },
    {
      name: "Hotel Grand Leela Krishna",
      description:
        "Address: Undi Rd, Balusumoodi, Bhimavaram, Andhra Pradesh 534202\nContact No: 088162 22201",
      distance: "2.0 km",
      image: "/hotels/leela.png",
      type: "hotel",
      website: "https://www.google.com/maps?q=Hotel+Grand+Leela+Krishna+Bhimavaram",
      delay: 200,
    },
    {
      name: "Ananda Inn Hotel",
      description:
        "Address: J.P Road, Juvvalapalem Rd, Sivaraopeta, Balusumoodi, Bhimavaram, Andhra Pradesh 534202\nContact No: 099856 33334",
      distance: "3.0 km",
      image: "/hotels/ananda.png",
      type: "hotel",
      website: "https://www.google.com/maps?q=Ananda+Inn+Hotel+Bhimavaram",
      delay: 300,
    },
  ];

  return (
    <>
      <SEO
        title="Nearby Places"
        description="Explore nearby hotels, restaurants, and attractions around Vishnu Institute of Technology"
        canonical="/nearby"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Nearby Hotels
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore attractions, accommodations, and dining options around VITB
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Place key={index} {...hotel} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NearbyPlacesPage;
