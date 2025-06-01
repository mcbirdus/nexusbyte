import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About NexusByte | Leading IT Services Sydney Since 2014 | Expert IT Support",
  description:
    "Learn about NexusByte, Sydney's premier IT service provider since 2014. Discover our mission, values, and commitment to delivering exceptional residential and business IT solutions across Australia.",
  keywords: [
    "about NexusByte",
    "IT services Sydney history",
    "Sydney IT company since 2014",
    "professional IT support team",
    "managed IT services Sydney",
    "business IT solutions Sydney",
    "residential IT support",
    "cybersecurity services Sydney",
    "network infrastructure Sydney",
    "IT consulting Sydney",
    "computer repair Sydney",
    "cloud solutions Sydney",
    "IT support North Sydney",
    "McMahons Point IT services",
    "Sydney IT specialists",
    "enterprise IT solutions",
    "small business IT support",
    "IT maintenance Sydney",
    "technology consulting",
    "IT security services",
  ].join(", "),
  authors: [{ name: "NexusByte IT Services" }],
  creator: "NexusByte",
  publisher: "NexusByte",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://nexusbyte.com.au/about",
    title: "About NexusByte | Leading IT Services Sydney Since 2014",
    description:
      "Discover NexusByte's journey from a small IT startup to Sydney's most trusted technology partner. Learn about our mission, values, and decade of excellence in IT services.",
    siteName: "NexusByte IT Services",
    images: [
      {
        url: "/images/nexusbyte-about-og.jpg",
        width: 1200,
        height: 630,
        alt: "NexusByte IT Services Team - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NexusByte | Leading IT Services Sydney Since 2014",
    description:
      "Learn about NexusByte's decade of excellence in providing IT services to Sydney businesses and residents.",
    images: ["/images/nexusbyte-about-twitter.jpg"],
    creator: "@nexusbyte",
  },
  alternates: {
    canonical: "https://nexusbyte.com.au/about",
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Sydney",
    "geo.position": "-33.8688;151.2093",
    ICBM: "-33.8688, 151.2093",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NexusByte IT Services",
            description:
              "Leading IT service provider in Sydney since 2014, specializing in business and residential IT solutions, cybersecurity, and managed services.",
            url: "https://nexusbyte.com.au",
            logo: "https://nexusbyte.com.au/images/nexusbyte-logo.png",
            foundingDate: "2014",
            founder: {
              "@type": "Person",
              name: "NexusByte Founders",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Technology Street",
              addressLocality: "McMahons Point",
              addressRegion: "NSW",
              postalCode: "2060",
              addressCountry: "AU",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+61-2-8123-4567",
              contactType: "customer service",
              availableLanguage: "English",
              areaServed: "AU-NSW",
            },
            sameAs: [
              "https://www.facebook.com/nexusbyte",
              "https://www.linkedin.com/company/nexusbyte",
              "https://twitter.com/nexusbyte",
            ],
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: -33.8688,
                longitude: 151.2093,
              },
              geoRadius: "50000",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "IT Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Managed IT Services",
                    description: "Comprehensive IT management and support for businesses",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cybersecurity Services",
                    description: "Advanced security solutions to protect your digital assets",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Cloud Solutions",
                    description: "Cloud migration, management, and optimization services",
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  )
}
