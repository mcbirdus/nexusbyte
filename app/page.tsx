import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Features from "@/components/features"
import CTASection from "@/components/cta-section"
import DetailedServices from "@/components/detailed-services"
import Team from "@/components/team"

export const metadata: Metadata = {
  title: "NexusByte - Premium I.T. Services Sydney | Computer Repairs, Cybersecurity & Software Development",
  description:
    "Leading I.T. services company in Sydney providing residential & business support, software development, computer repairs, networking, cybersecurity, and data recovery. Serving Sydney CBD and 30km radius.",
  keywords:
    "IT services Sydney, computer repairs Sydney, cybersecurity Sydney, software development Sydney, business IT support, residential IT support, data recovery Sydney, networking Sydney",
  authors: [{ name: "NexusByte" }],
  creator: "NexusByte",
  publisher: "NexusByte",
  robots: "index, follow",
  openGraph: {
    title: "NexusByte - Premium I.T. Services Sydney",
    description:
      "Leading I.T. services company in Sydney providing comprehensive technology solutions for residential and business clients.",
    url: "https://www.nexusbyte.com.au",
    siteName: "NexusByte",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusByte - Premium I.T. Services Sydney",
    description: "Leading I.T. services company in Sydney providing comprehensive technology solutions.",
  },
  alternates: {
    canonical: "https://www.nexusbyte.com.au",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001f3d] via-[#002a5c] to-[#001f3d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NexusByte",
            description:
              "Leading I.T. services company providing residential and business support, software development, computer repairs, networking, cybersecurity, and data recovery.",
            url: "https://www.nexusbyte.com.au",
            telephone: "02 8959 7284",
            email: "info@nexusbyte.com.au",
            address: {
              "@type": "PostalAddress",
              streetAddress: "28 Blues Point Road",
              addressLocality: "McMahons Point",
              addressRegion: "NSW",
              postalCode: "2060",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -33.8434,
              longitude: 151.207,
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: -33.8688,
                longitude: 151.2093,
              },
              geoRadius: "30000",
            },
            serviceType: [
              "Residential I.T. Support",
              "Business I.T. Support",
              "Software Development",
              "Computer Repairs",
              "Networking & Cybersecurity",
              "Cybersecurity",
              "Data Management & Recovery",
            ],
            priceRange: "$$",
            openingHours: "Mo-Fr 09:00-17:00",
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <DetailedServices />
        <About />
        <Team />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
