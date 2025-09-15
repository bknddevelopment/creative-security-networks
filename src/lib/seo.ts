import { Metadata } from 'next'

const baseUrl = 'https://bknddevelopment.github.io/creative-security-networks'

interface PageSEOProps {
  title: string
  description: string
  path?: string
  images?: string[]
  noindex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  images = [],
  noindex = false,
}: PageSEOProps): Metadata {
  const url = `${baseUrl}${path}`
  const ogImages = images.length > 0
    ? images.map(img => ({
        url: img.startsWith('http') ? img : `${baseUrl}${img}`,
        width: 1200,
        height: 630,
        alt: title,
      }))
    : [{
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: title,
      }]

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: ogImages,
    },
    twitter: {
      title,
      description,
      images: ogImages.map(img => img.url),
    },
    alternates: {
      canonical: url,
    },
    robots: noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
    },
  }
}

// Common page metadata templates
export const pageMetadata = {
  home: generatePageMetadata({
    title: 'Home',
    description: 'Professional security camera installation and monitoring services. Protecting businesses and homes with cutting-edge technology and 24/7 support.',
  }),

  services: generatePageMetadata({
    title: 'Security Services',
    description: 'Comprehensive security solutions including CCTV installation, access control systems, alarm monitoring, and 24/7 surveillance services.',
    path: '/services',
  }),

  about: generatePageMetadata({
    title: 'About Us',
    description: 'Learn about Creative Security Networks - Your trusted partner in advanced security solutions since 2024. Professional, reliable, and innovative.',
    path: '/about',
  }),

  contact: generatePageMetadata({
    title: 'Contact Us',
    description: 'Get in touch with Creative Security Networks. Call 1-800-SECURE for a free consultation on your security needs.',
    path: '/contact',
  }),

  securityCameras: generatePageMetadata({
    title: 'Security Camera Installation',
    description: 'Professional security camera and CCTV installation services. High-definition cameras, night vision, remote viewing, and expert installation.',
    path: '/security-cameras',
  }),

  accessControl: generatePageMetadata({
    title: 'Access Control Systems',
    description: 'Advanced access control solutions for businesses. Key cards, biometric systems, and integrated security management.',
    path: '/access-control',
  }),

  monitoring: generatePageMetadata({
    title: '24/7 Security Monitoring',
    description: 'Round-the-clock professional monitoring services. Instant alerts, rapid response, and complete peace of mind for your property.',
    path: '/monitoring',
  }),
}