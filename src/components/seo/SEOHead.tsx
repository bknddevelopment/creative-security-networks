// This component provides additional SEO meta tags that can be added to specific pages
// It's designed to work alongside Next.js 14's Metadata API

interface SEOHeadProps {
  jsonLd?: any
  canonicalUrl?: string
  alternateLanguages?: { lang: string; url: string }[]
}

export default function SEOHead({ jsonLd, canonicalUrl, alternateLanguages }: SEOHeadProps) {
  const baseUrl = 'https://bknddevelopment.github.io/creative-security-networks'

  return (
    <>
      {/* Additional structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Canonical URL */}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`} />
      )}

      {/* Alternate language versions */}
      {alternateLanguages?.map(({ lang, url }) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url.startsWith('http') ? url : `${baseUrl}${url}`}
        />
      ))}

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch for potential external resources */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </>
  )
}