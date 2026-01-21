import React from "react";
import SEO from "../components/SEO";
import { FileText, BookOpen, CheckCircle, ExternalLink, Download } from "lucide-react";

const PublicationPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Publication"
        description="Information about paper publication opportunities at ICMISI-2026, including indexed journals and conference proceedings."
        canonical="/publication"
      />
      <div className="bg-gradient-to-r from-conference-purple/90 to-conference-green/90 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
          >
            Publication Opportunities
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get your research published in reputed indexed journals and
            proceedings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Publication Partner Section */}
        <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-conference-purple">
              Publication Partner
            </h2>
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-full max-w-md">
                <img 
                  src="/matec.png" 
                  alt="MATEC Web of Conferences Logo" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 text-center">
                MATEC Web of Conferences
              </h3>
              
              <div className="flex items-start space-x-2 text-green-600">
                <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                <p className="text-lg font-medium">
                  Publication Confirmed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          {/* Conference Details Link */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <ExternalLink className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Conference Details
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              View the official conference listing and publication details on MATEC Web of Conferences
            </p>
            <a
              href="https://www.webofconferences.org/matec-web-of-conferences-forthcoming-conferences"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Visit Conference Page
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Publication Agreement Download */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Publication Agreement
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Download the publication agreement document for your reference
            </p>
            <a
              href="/downloads/publication-agreement.pdf"
              download
              className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Agreement
            </a>
          </div>
        </div>

        {/* About MATEC Section */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-conference-green mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                About MATEC Web of Conferences
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                MATEC Web of Conferences is an open access conference proceedings series covering materials science, engineering, and chemistry. All papers published in MATEC Web of Conferences are indexed in major databases ensuring wide visibility and impact.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Open Access</h4>
                    <p className="text-sm text-gray-600">Freely accessible to readers worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Indexed</h4>
                    <p className="text-sm text-gray-600">Included in major academic databases</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Peer Reviewed</h4>
                    <p className="text-sm text-gray-600">Rigorous review process maintained</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fast Publication</h4>
                    <p className="text-sm text-gray-600">Quick turnaround time for authors</p>
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

export default PublicationPage;
