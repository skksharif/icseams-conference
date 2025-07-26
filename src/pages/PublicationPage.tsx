import React from "react";
import SEO from "../components/SEO";
import { FileText, BookOpen, CheckCircle, ExternalLink } from "lucide-react";

const PublicationPage: React.FC = () => {
  const journals = [
    {
      name: "Journal of Clean Energy Technologies",
      indexing: "Scopus, Web of Science",
      impact: "3.2",
      publisher: "Elsevier",
      website: "#",
    },
    {
      name: "Advanced Manufacturing Technology",
      indexing: "Scopus, Web of Science",
      impact: "2.8",
      publisher: "Springer",
      website: "#",
    },
    {
      name: "Sustainable Energy Systems",
      indexing: "Scopus, Web of Science, SCI-E",
      impact: "3.5",
      publisher: "Taylor & Francis",
      website: "#",
    },
    {
      name: "Journal of Energy Engineering",
      indexing: "Scopus, Web of Science",
      impact: "2.6",
      publisher: "Wiley",
      website: "#",
    },
  ];

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

      <div className="w-full h-[30vh]">
        <p className="text-center text-3xl md:text-4xl font-bold mb-4 mt-10">
          Updated Soon
        </p>
      </div>
    </>
  );
};

export default PublicationPage;
