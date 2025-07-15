import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "International Conference on Sustainable Energy and Advanced Manufacturing Systems, to be held from 11th–13th September 2025 at B V Raju Institute of Technology (BVRIT), Narsapur, Telangana, India.",
  keywords = "ICMISI, Conference, Sustainable Energy, Advanced Manufacturing, VIT, Engineering Conference",
  canonical
}) => {
  const siteTitle = title 
    ? `${title} | ICMISI-2025` 
    : "ICMISI-2025";

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;