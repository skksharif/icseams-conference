import React from "react";
import SEO from "../components/SEO";
import {
  MapPin,
  Landmark,
  Coffee,
  Wifi,
  Check,
  Navigation,
  Clock,
} from "lucide-react";

const VenuePage: React.FC = () => {
  const facilities = [
    {
      icon: <Landmark size={20} className="text-conference-purple" />,
      title: "Modern Conference Hall",
      description:
        "State-of-the-art auditorium with professional audio-visual equipment",
    },
    {
      icon: <Wifi size={20} className="text-conference-purple" />,
      title: "High-Speed Wi-Fi",
      description: "Campus-wide high-speed internet access for all attendees",
    },
    {
      icon: <Coffee size={20} className="text-conference-purple" />,
      title: "Dining Facilities",
      description:
        "On-campus cafeteria and dining areas for meals and refreshments",
    },
    {
      icon: <Clock size={20} className="text-conference-purple" />,
      title: "Multiple Session Rooms",
      description:
        "Parallel session rooms equipped with presentation facilities",
    },
  ];

  return (
    <>
      <SEO
        title="Venue"
        description="ICMISI-2025 will be held at Vishnu Institute of Technology (VIT), Bhimavaram, Andhra Pradesh, India from 11th–13th September 2025."
        canonical="/venue"
      />
      <div className="bg-gradient-to-r from-conference-orange/90 to-conference-purple/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Conference Venue
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90" data-aos="fade-up" data-aos-delay="200">
            Vishnu Institute of Technology (VIT), Bhimavaram, Andhra Pradesh, India
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div data-aos="fade-right">
              <img
                src="https://images.shiksha.com/mediadata/images/1553949156phpuckshs.png"
                alt="VIT Campus"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-conference-orange mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Venue Location
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                ICMISI-2025 will be held at the beautiful campus of Vishnu Institute of Technology (VIT), located in Bhimavaram, Andhra Pradesh, India.
              </p>
              <p className="text-gray-700 mb-4">
                The venue provides modern conference facilities, comfortable accommodations, and a serene environment perfect for academic discussions and networking.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Complete Address:
                </h3>
                <p className="text-gray-700">
                  Vishnu Institute of Technology (VIT)
                  <br />
                  Vishnupur, Bhimavaram
                  <br />
                  West Godavari District
                  <br />
                  Andhra Pradesh - 534202
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>


          <div className="mb-12" data-aos="fade-up">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.323448554813!2d81.51918351487606!3d16.56317588861967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d17e22a3f6d7%3A0x6e4a80dbf3ec930e!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1721049000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VIT Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Navigation size={20} className="mr-2 text-conference-orange" />
                  How to Reach
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">By Air</h4>
                    <p className="text-gray-700 mb-4">
                      The nearest airport is Rajahmundry Airport (RJA) which is about 85 km away. Alternatively, Vijayawada Airport (VGA) is around 120 km from the venue. Taxis and cab services are available.
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-2">By Train</h4>
                    <p className="text-gray-700">
                      Bhimavaram Town and Bhimavaram Junction are the nearest railway stations. Local transport and autos are easily available to reach the campus.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">By Road</h4>
                    <p className="text-gray-700 mb-4">
                      Vishnu Institute of Technology is well-connected by road. It is accessible from all major cities in Andhra Pradesh.
                    </p>

                    <h4 className="font-semibold text-gray-800 mb-2">Local Transportation</h4>
                    <p className="text-gray-700">
                      Auto-rickshaws and taxis are available for local transport within Bhimavaram. Shuttle services may be arranged for conference guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

     
        </div>
      </div>
    </>
  );
};

export default VenuePage;