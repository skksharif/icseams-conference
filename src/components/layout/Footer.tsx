import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, LightbulbIcon } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Conference Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LightbulbIcon className="w-6 h-6 text-pink-400" />
              <h2 className="text-xl font-bold">ICMISI-2026</h2>
            </div>
            <p className="text-gray-300 mb-4">
              International Conference on Materials Innovation and Sustainable Infrastructure
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Calendar size={16} />
              <span>1st & 2nd April 2026</span>
            </div>
            <div className="flex items-start gap-2 text-gray-300">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Vishnu Institute of Technology (Autonomous)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/call-for-papers", label: "Call for Papers" },
                { path: "/registration", label: "Registration" },
                { path: "/important-dates", label: "Important Dates" },
                { path: "/venue", label: "Venue" }
              ].map(({ path, label }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-300 hover:text-conference-orange transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-4 text-gray-300">

              {/* Conference Email */}
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>
                  <strong>Conference:</strong>{" "}
                  <a href="mailto:icmisi@vishnu.edu.in" className="hover:text-conference-orange transition-colors">
                    icmisi@vishnu.edu.in
                  </a>
                </span>
              </div>

              {/* Dr. Yeswanth */}
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>
                  <strong>Dr. V S J Yeswanth Paluri</strong><br />
                  Assoc. Professor, CIVIL<br />
                  <a href="tel:+919553314600" className="hover:text-conference-orange transition-colors">
                    +91 9553314600
                  </a>
                </span>
              </div>

              {/* Mr. Alisha */}
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>
                  <strong>Mr. SK.S. Alisha</strong><br />
                  Asst. Professor, CIVIL<br />
                  <a href="tel:+917660082181" className="hover:text-conference-orange transition-colors">
                    +91 7660082181
                  </a>
                </span>
              </div>

              {/* College Email */}
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>
                  <strong>College:</strong>{" "}
                  <a href="mailto:info@vishnu.edu.in" className="hover:text-conference-orange transition-colors">
                    info@vishnu.edu.in
                  </a>
                </span>
              </div>

              {/* College Address */}
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>
                  Vishnupur, Bhimavaram - 534202, Andhra Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} Vishnu Institute of Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
