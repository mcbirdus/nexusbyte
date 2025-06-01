import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Business I.T Services | NexusByte Sydney",
  description:
    "Comprehensive networking solutions for Sydney businesses. From network design to security and cloud integration, our expert team ensures reliable, secure, and high-performance business networks.",
  keywords:
    "business networking Sydney, network installation North Sydney, corporate IT services, business Wi-Fi solutions, network security Sydney, cloud networking",
}

export default function BusinessServicesPage() {
  const businessServices = [
    {
      id: "network-design",
      title: "Network Design & Consulting",
      description:
        "Strategic network planning and architecture design tailored to your business requirements. Our experts assess your needs and design optimal network infrastructures.",
      image: "/placeholder.svg?height=400&width=600&text=Network+Design",
      subservices: [
        {
          name: "Network Architecture Design",
          description:
            "Custom network design tailored to your business processes, applications, and future growth plans.",
        },
        {
          name: "Capacity Planning",
          description: "Ensuring your network can handle current demands while scaling for future growth.",
        },
        {
          name: "Security Design",
          description: "Integrated security architecture that protects your sensitive data and network resources.",
        },
        {
          name: "Cloud Integration",
          description: "Seamless integration of cloud services into your existing network infrastructure.",
        },
      ],
    },
    {
      id: "network-installation",
      title: "Network Installation & Setup",
      description:
        "Professional implementation of network infrastructure, including cabling, hardware configuration, and testing to ensure reliable connectivity.",
      image: "/placeholder.svg?height=400&width=600&text=Network+Installation",
      subservices: [
        {
          name: "Wired Network Installation",
          description:
            "Structured cabling systems designed and installed to industry standards with minimal disruption.",
        },
        {
          name: "Wireless Network Setup",
          description: "Enterprise-grade Wi-Fi solutions with optimal coverage, capacity, and security.",
        },
        {
          name: "Server Room Setup",
          description: "Complete server room design and deployment, including rack systems, power, and cooling.",
        },
        {
          name: "Network Device Configuration",
          description: "Expert configuration of routers, switches, firewalls, and other networking equipment.",
        },
      ],
    },
    {
      id: "network-management",
      title: "Network Management & Monitoring",
      description:
        "Proactive monitoring and management services that ensure optimal network performance, early problem detection, and rapid resolution.",
      image: "/placeholder.svg?height=400&width=600&text=Network+Management",
      subservices: [
        {
          name: "Network Monitoring",
          description: "24/7 proactive monitoring to detect issues before they impact your business.",
        },
        {
          name: "Performance Optimization",
          description: "Continuous fine-tuning to ensure optimal network speed and reliability.",
        },
        {
          name: "Network Troubleshooting",
          description: "Rapid identification and resolution of network issues to minimize downtime.",
        },
        {
          name: "Network Reporting",
          description: "Detailed reporting on network performance, usage patterns, and security status.",
        },
      ],
    },
    {
      id: "network-security",
      title: "Network Security Services",
      description:
        "Comprehensive security solutions that protect your business data and infrastructure from threats while ensuring compliance with industry regulations.",
      image: "/placeholder.svg?height=400&width=600&text=Network+Security",
      subservices: [
        {
          name: "Firewall Installation & Management",
          description: "Advanced firewall solutions tailored to your security needs with ongoing management.",
        },
        {
          name: "Intrusion Detection/Prevention Systems",
          description: "Sophisticated IDS/IPS solutions that identify and block potential threats in real-time.",
        },
        {
          name: "VPN Setup & Management",
          description: "Secure remote access solutions for employees working from anywhere.",
        },
        {
          name: "Security Audits",
          description:
            "Comprehensive assessment of your network security posture and recommendations for improvements.",
        },
      ],
    },
    {
      id: "cloud-networking",
      title: "Cloud Networking",
      description:
        "Seamless integration of cloud services with your existing network infrastructure, enabling scalability, flexibility, and cost efficiency.",
      image: "/placeholder.svg?height=400&width=600&text=Cloud+Networking",
      subservices: [
        {
          name: "Cloud Solutions Integration",
          description: "Seamless integration of cloud services with your on-premises infrastructure.",
        },
        {
          name: "SD-WAN Implementation",
          description: "Software-defined wide area networking for enhanced performance and cost efficiency.",
        },
        {
          name: "Data Backup Solutions",
          description: "Reliable cloud backup systems that protect your critical business data.",
        },
      ],
    },
    {
      id: "voip-communications",
      title: "VoIP & Unified Communications",
      description:
        "State-of-the-art voice and communication solutions that enhance collaboration while reducing costs.",
      image: "/placeholder.svg?height=400&width=600&text=VoIP+Communications",
      subservices: [
        {
          name: "VoIP Setup",
          description: "Enterprise-grade voice over IP solutions tailored to your business needs.",
        },
        {
          name: "Unified Communication Systems",
          description: "Integrated platforms combining voice, video, messaging, and collaboration tools.",
        },
        {
          name: "Call Center Solutions",
          description: "Advanced call center systems designed for optimal customer service delivery.",
        },
      ],
    },
    {
      id: "network-support",
      title: "Network Support & Maintenance",
      description:
        "Ongoing technical support and maintenance services to ensure your network remains reliable, secure, and up-to-date.",
      image: "/placeholder.svg?height=400&width=600&text=Network+Support",
      subservices: [
        {
          name: "24/7 Help Desk Support",
          description: "Round-the-clock assistance from our expert team for immediate issue resolution.",
        },
        {
          name: "Routine Network Maintenance",
          description: "Scheduled maintenance to keep your network running optimally and prevent issues.",
        },
        {
          name: "Disaster Recovery Solutions",
          description: "Comprehensive plans and systems to protect your business from catastrophic events.",
        },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Header Banner */}
        <section className="pt-32 pb-16 relative bg-gradient-to-r from-[#001f3d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h5 className="inline-block px-4 py-1 bg-[#f85c04]/20 border border-[#f85c04]/30 rounded-full text-[#f85c04] mb-4">
                For Businesses
              </h5>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business I.T <span className="text-[#f85c04]">Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Enterprise-grade I.T services tailored for Sydney businesses. From SMEs to large corporations, our
                solutions ensure your business stays connected, secure, and productive.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 group transition-colors duration-300"
                >
                  Request Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="tel:0289597284"
                  className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Call Us: 02 8959 7284
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Comprehensive <span className="text-[#f85c04]">Business I.T</span> Services
              </h2>

              <p className="text-gray-300">
                NexusByte offers end-to-end I.T solutions designed specifically for Sydney businesses. Our services are
                built to enhance performance, security, and reliability while reducing operational costs.
              </p>
            </div>

            <div className="space-y-24">
              {businessServices.map((service, index) => (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
                  {/* Image - Alternating sides */}
                  <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative">
                      {/* Main Image with border frame */}
                      <div className="relative p-1 bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] rounded-3xl shadow-2xl">
                        <div className="rounded-3xl overflow-hidden bg-black">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Badge */}
                        <div className="absolute bottom-4 right-4 bg-[#f85c04] text-white py-2 px-6 rounded-xl shadow-lg">
                          <p className="font-semibold text-sm">For Businesses</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">{service.title}</h3>

                    <p className="text-gray-300 mb-8">{service.description}</p>

                    <div className="space-y-4 mb-8">
                      {service.subservices.map((subservice, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="mt-1 text-[#f85c04]">
                            <CheckCircle size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg text-white">{subservice.name}</h4>
                            <p className="text-gray-400">{subservice.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#f85c04] hover:underline font-medium group"
                    >
                      Learn More About {service.title}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Why Sydney Businesses <span className="text-[#f85c04]">Choose NexusByte</span>
              </h2>

              <p className="text-gray-300">
                Our client-focused approach and technical expertise set us apart in the Sydney I.T services market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">01</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Technical Expertise</h3>

                <p className="text-gray-300">
                  Our team consists of certified I.T specialists with deep knowledge of business requirements in the
                  Sydney market.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">02</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Tailored Solutions</h3>

                <p className="text-gray-300">
                  We design custom I.T solutions based on your specific business needs, industry requirements, and
                  future growth plans.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">03</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Proactive Support</h3>

                <p className="text-gray-300">
                  Our monitoring and maintenance services identify and resolve potential issues before they impact your
                  business operations.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">04</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Local Presence</h3>

                <p className="text-gray-300">
                  Based in Sydney, we provide rapid on-site support when needed, ensuring minimal downtime for your
                  business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-[#f85c04]">Business I.T</span>?
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Contact NexusByte today for a free consultation and discover how our I.T solutions can enhance your
                business operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Request a Consultation
                </Link>

                <a
                  href="tel:0289597284"
                  className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Call Us: 02 8959 7284
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
