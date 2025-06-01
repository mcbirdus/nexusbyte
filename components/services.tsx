"use client"
import { Home, Building2, Code, Wrench, Network, Shield, Database, ArrowRight } from "lucide-react"
import { useEffect } from "react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential I.T. Support",
      description:
        "Comprehensive home technology support including device setup, home office setup, troubleshooting, and maintenance for all your personal devices.",
      features: ["Device Setup & Configuration", "Virus Removal", "Home Network Setup", "Data Backup Solutions"],
    },
    {
      icon: Building2,
      title: "Business I.T. Support",
      description:
        "Enterprise-grade I.T. solutions designed to keep your business running smoothly with minimal downtime and maximum efficiency.",
      features: ["24/7 Monitoring", "Help Desk Support", "System Maintenance", "Cloud Migration"],
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your specific business needs, from web applications to mobile apps and enterprise systems.",
      features: ["Web Development", "Mobile Apps", "Custom Software", "API Integration"],
    },
    {
      icon: Wrench,
      title: "Computer Repairs",
      description:
        "Expert hardware and software repair services for all types of computers, laptops, apple macbook, and mobile devices with quick turnaround times.",
      features: ["Hardware Diagnostics", "Component Replacement", "Performance Optimization", "Data Recovery"],
    },
    {
      icon: Network,
      title: "Networking & Cybersecurity",
      description:
        "Secure network infrastructure design and implementation with advanced cybersecurity measures to protect your digital assets.",
      features: ["Network Design", "Firewall Setup", "VPN Configuration", "Security Audits"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive cybersecurity solutions to protect against threats, including security assessments and incident response.",
      features: ["Threat Assessment", "Security Training", "Incident Response", "Compliance Audits"],
    },
    {
      icon: Database,
      title: "Data Management & Recovery",
      description:
        "Professional data management services including backup solutions, disaster recovery planning, and data restoration.",
      features: ["Data Backup", "Disaster Recovery", "Cloud Storage", "Data Migration"],
    },
  ]

  useEffect(() => {
    // Reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")
      const sequentialItems = document.querySelectorAll(".sequential-item")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })

      sequentialItems.forEach((item) => {
        const windowHeight = window.innerHeight
        const itemTop = item.getBoundingClientRect().top
        const revealPoint = 150

        if (itemTop < windowHeight - revealPoint) {
          item.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load with a short delay for page load animations
    setTimeout(() => {
      handleScroll()
    }, 50) // Reduced from 100ms to 50ms for faster initial animation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="services" className="min-h-screen relative bg-[#030c1f]">
      <div className="relative max-w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Comprehensive <span className="text-[#f85c04]">I.T. Services</span>
          </h2>
          <p className="text-gray-300">
            We offer specialized I.T. solutions for both business and residential clients throughout Sydney and
            surrounding areas. Our services are designed to keep you connected, secure, and operating efficiently.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto">
          {/* Business Services */}
          <div className="bg-[#001f3d]/40 rounded-2xl shadow-lg overflow-hidden reveal fade-right">
            <div className="bg-[#001f3d] p-6 flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full">
                <Building2 size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Business Services</h3>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-white/80 mb-6">
                Enterprise-grade I.T. solutions designed to enhance productivity, security, and reliability for
                businesses of all sizes in Sydney.
              </p>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <Link
                  href="/services/business/it-support"
                  className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="mt-1">
                    <Building2 className="text-[#f85c04] text-3xl h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#f85c04] transition-colors">
                      Business I.T. Support
                    </h4>
                    <p className="text-white/70 text-sm">
                      Enterprise-grade I.T. solutions designed to keep your business running smoothly with minimal
                      downtime.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/business/software-development"
                  className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="mt-1">
                    <Code className="text-[#f85c04] text-3xl h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#f85c04] transition-colors">
                      Software Development
                    </h4>
                    <p className="text-white/70 text-sm">
                      Custom software solutions tailored to your specific business needs, from web applications to
                      mobile apps.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/business/networking"
                  className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="mt-1">
                    <Network className="text-[#f85c04] text-3xl h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#f85c04] transition-colors">
                      Networking & Security
                    </h4>
                    <p className="text-white/70 text-sm">
                      Secure network infrastructure design and implementation with advanced security measures.
                    </p>
                  </div>
                </Link>
              </div>

              <Link
                href="/services/business"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#001f3d] text-white rounded-lg hover:bg-[#001f3d]/90 transition-colors group"
              >
                View All Business Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Home Services */}
          <div className="bg-[#001f3d]/40 rounded-2xl shadow-lg overflow-hidden reveal fade-left">
            <div className="bg-[#f85c04] p-6 flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full">
                <Home size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Home Services</h3>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-white/80 mb-6">
                Residential I.T. solutions that provide secure, reliable, and fast connections for your home in Sydney
                and surrounding areas.
              </p>

              <div className="grid grid-cols-1 gap-6 mb-8">
                <Link
                  href="/services/home/residential-support"
                  className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="mt-1">
                    <Home className="text-[#f85c04] text-3xl h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#f85c04] transition-colors">
                      Residential I.T. Support
                    </h4>
                    <p className="text-white/70 text-sm">
                      Comprehensive home technology support including device setup, home office setup, troubleshooting,
                      and maintenance.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/home/computer-repairs"
                  className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="mt-1">
                    <Wrench className="text-[#f85c04] text-3xl h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#f85c04] transition-colors">
                      Computer Repairs
                    </h4>
                    <p className="text-white/70 text-sm">
                      Expert hardware and software repair services for all types of computers, apple macbooks, and
                      mobile devices.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/services/home/data-recovery"
                  className="group flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5"
                >
                  <div className="mt-1">
                    <Database className="text-[#f85c04] text-3xl h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-white group-hover:text-[#f85c04] transition-colors">
                      Data Management & Recovery
                    </h4>
                    <p className="text-white/70 text-sm">
                      Professional data management services including backup solutions and data restoration.
                    </p>
                  </div>
                </Link>
              </div>

              <Link
                href="/services/home"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#f85c04] text-white rounded-lg hover:bg-[#f85c04]/90 transition-colors group"
              >
                View All Home Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
