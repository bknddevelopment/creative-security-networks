export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Creative Security Networks",
    "image": "https://bknddevelopment.github.io/creative-security-networks/og-image.png",
    "@id": "https://bknddevelopment.github.io/creative-security-networks",
    "url": "https://bknddevelopment.github.io/creative-security-networks",
    "telephone": "1-800-SECURE",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://twitter.com/creativesecnet",
      "https://www.facebook.com/creativesecuritynetworks",
      "https://www.linkedin.com/company/creative-security-networks"
    ],
    "description": "Professional security camera installation and monitoring services. Creative Security Networks provides cutting-edge security solutions including CCTV systems, access control, alarm systems, and 24/7 monitoring for businesses and homes.",
    "foundingDate": "2024",
    "priceRange": "$$",
    "services": [
      {
        "@type": "Service",
        "name": "Security Camera Installation",
        "description": "Professional installation of high-definition security cameras and CCTV systems"
      },
      {
        "@type": "Service",
        "name": "24/7 Security Monitoring",
        "description": "Round-the-clock professional monitoring services for complete peace of mind"
      },
      {
        "@type": "Service",
        "name": "Access Control Systems",
        "description": "Advanced access control solutions for businesses and residential properties"
      },
      {
        "@type": "Service",
        "name": "Alarm Systems",
        "description": "State-of-the-art alarm systems with instant alert capabilities"
      },
      {
        "@type": "Service",
        "name": "Video Surveillance",
        "description": "Comprehensive video surveillance solutions with remote viewing capabilities"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}