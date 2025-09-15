interface FAQItem {
  question: string
  answer: string
}

interface FAQStructuredDataProps {
  items: FAQItem[]
}

export default function FAQStructuredData({ items }: FAQStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Example FAQ data for security services
export const securityFAQs: FAQItem[] = [
  {
    question: "How much does security camera installation cost?",
    answer: "Security camera installation costs vary based on the number of cameras, type of system, and property size. We offer free consultations to provide accurate quotes tailored to your specific needs."
  },
  {
    question: "Do you provide 24/7 monitoring services?",
    answer: "Yes, Creative Security Networks offers comprehensive 24/7 monitoring services with professional staff monitoring your property round-the-clock for complete peace of mind."
  },
  {
    question: "What types of security cameras do you install?",
    answer: "We install a wide range of security cameras including HD IP cameras, PTZ cameras, thermal cameras, and wireless systems from leading manufacturers."
  },
  {
    question: "Can I view my security cameras remotely?",
    answer: "Absolutely! All our security camera systems come with remote viewing capabilities, allowing you to monitor your property from anywhere using your smartphone, tablet, or computer."
  },
  {
    question: "Do you service both residential and commercial properties?",
    answer: "Yes, we provide comprehensive security solutions for both residential homes and commercial businesses of all sizes, with customized packages to meet specific requirements."
  },
  {
    question: "What areas do you service?",
    answer: "Creative Security Networks provides security installation and monitoring services throughout the United States. Contact us at 1-800-SECURE to check service availability in your area."
  },
  {
    question: "How long does installation typically take?",
    answer: "Installation time varies based on system complexity. Most residential installations are completed within 1-2 days, while larger commercial projects may take 3-5 days."
  },
  {
    question: "Do you offer maintenance and support?",
    answer: "Yes, we provide comprehensive maintenance packages and 24/7 technical support to ensure your security system operates at peak performance."
  }
]