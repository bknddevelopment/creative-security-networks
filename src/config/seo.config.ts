export const seoConfig = {
  // Base configuration
  baseUrl: 'https://bknddevelopment.github.io/creative-security-networks',
  siteName: 'Creative Security Networks',
  siteDescription: 'Professional security camera installation and monitoring services. Protecting businesses and homes with cutting-edge technology and 24/7 support.',

  // Company information
  company: {
    name: 'Creative Security Networks',
    foundingYear: 2024,
    phone: '1-800-SECURE',
    email: 'info@creativesecuritynetworks.com',
    address: {
      country: 'United States',
    },
  },

  // Social media profiles
  social: {
    twitter: '@creativesecnet',
    facebook: 'https://www.facebook.com/creativesecuritynetworks',
    linkedin: 'https://www.linkedin.com/company/creative-security-networks',
    instagram: 'https://www.instagram.com/creativesecuritynetworks',
    youtube: 'https://www.youtube.com/c/creativesecuritynetworks',
  },

  // Default meta tags
  defaultMeta: {
    keywords: [
      'security cameras',
      'security systems',
      'surveillance',
      'monitoring',
      'access control',
      'alarm systems',
      'CCTV',
      'security installation',
      'business security',
      'home security',
      'video surveillance',
      '24/7 monitoring',
      'security solutions',
      'professional installation',
      'remote viewing',
    ],
    author: 'Creative Security Networks',
    creator: 'Creative Security Networks',
    publisher: 'Creative Security Networks',
    category: 'technology',
    themeColor: '#1a1a2e',
  },

  // Services offered (for structured data)
  services: [
    {
      name: 'Security Camera Installation',
      description: 'Professional installation of high-definition security cameras and CCTV systems',
      url: '/security-cameras',
    },
    {
      name: '24/7 Security Monitoring',
      description: 'Round-the-clock professional monitoring services for complete peace of mind',
      url: '/monitoring',
    },
    {
      name: 'Access Control Systems',
      description: 'Advanced access control solutions for businesses and residential properties',
      url: '/access-control',
    },
    {
      name: 'Alarm Systems',
      description: 'State-of-the-art alarm systems with instant alert capabilities',
      url: '/alarm-systems',
    },
    {
      name: 'Video Surveillance',
      description: 'Comprehensive video surveillance solutions with remote viewing capabilities',
      url: '/video-surveillance',
    },
  ],

  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Twitter Card defaults
  twitter: {
    cardType: 'summary_large_image',
    creator: '@creativesecnet',
    site: '@creativesecnet',
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },

  // Verification codes (replace with actual codes when available)
  verification: {
    google: '', // Add Google Search Console verification code
    bing: '', // Add Bing Webmaster Tools verification code
    yandex: '', // Add Yandex verification code
    pinterest: '', // Add Pinterest verification code
  },

  // Analytics and tracking (add when ready)
  analytics: {
    googleAnalyticsId: '', // Add GA4 measurement ID
    googleTagManagerId: '', // Add GTM container ID
    facebookPixelId: '', // Add Facebook Pixel ID
  },
}