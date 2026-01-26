import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  CreditCard,
  HelpCircle,
  FileText,
  Calendar,
  InfoIcon,
} from "lucide-react";

const RegistrationPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Registration"
        description="Register for ICMISI-2026. Early bird and regular registration fees for academicians, industry professionals, students, and attendees."
        canonical="/registration"
      />
      <div className="bg-gradient-to-r from-conference-orange/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Conference Registration
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join us at ICMISI-2026 for an enriching experience
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Registration Information
            </h2>
            <p className="text-gray-700 mb-6">
              Registration for ICMISI-2026 includes access to all conference
              sessions, conference materials, coffee breaks, lunches during the
              conference days, and a certificate of participation.
            </p>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-8">
              <div className="bg-gray-50 p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <CreditCard
                    size={20}
                    className="mr-2 text-conference-orange"
                  />
                  Registration Fees
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                        Category
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                        Early Bird Discounted (up to 10 March 2026)
                      </th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700 border-b">
                        Till 23 March 2026
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b text-gray-800">
                        Academicians
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹12,500
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹13,500
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 border-b text-gray-800">
                        R&D / Industry / Corporate Executives
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹14,000
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">
                        ₹15,000
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b text-gray-800">
                        Foreign Delegates
                      </td>
                      <td className="py-3 px-4 border-b text-gray-800">$350</td>
                      <td className="py-3 px-4 border-b text-gray-800">$400</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-gray-800">Attendee</td>
                      <td className="py-3 px-4 text-gray-800">₹2000</td>
                      <td className="py-3 px-4 text-gray-800">₹2,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-700 text-sm mb-1">
                  <strong>Note:</strong> Each accepted paper must be registered
                  by at least one of its authors to be included in the
                  conference proceedings. The registration fee includes
                  publication charges. All registered participants will receive
                  a certificate of participation.
                </p>
                <p className="text-gray-700 text-sm">
                  All participants will receive a certificate of participation.
                </p>
              </div>
            </div>

            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Payment Details
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Bank Transfer Details
                </h3>
                <div className="flex justify-around flex-wrap gap-2 items-center">
                  <div>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">
                        Account Holder's Name:
                      </span>{" "}
                      The Principal, Vishnu Institute of Technology
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Account Number:</span>{" "}
                      0787318904
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Account Type:</span> Saving
                      Account
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">IFSC Code:</span>{" "}
                      IDIB000V089
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Bank Name:</span> Indian
                      Bank
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Branch:</span> Vishnupur,
                      Bhimavaram
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Address:</span> Indian Bank,
                      Vishnupur, Bhimavaram, Andhra Pradesh - 534202
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">MICR Code:</span> 534019013
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

export default RegistrationPage;
