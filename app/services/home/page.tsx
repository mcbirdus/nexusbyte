import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Home I.T Services | NexusByte Sydney",
  description:
    "Professional home I.T services in Sydney. From home network setup to smart home integration, computer repairs, and tech support for residential clients.",
  keywords:
    "home IT services Sydney, residential computer repair, home network setup, smart home installation, tech support Sydney, home office setup",
}

export default function HomeServicesPage() {
  const homeServices = [
    {
      id: "home-network-setup",
      title: "Home Network Setup & Wi-Fi",
      description:
        "Professional home network installation and Wi-Fi setup for optimal coverage, speed, and security throughout your home.",
      image: "/placeholder.svg?height=400&width=600&text=Home+Network+Setup",
      subservices: [
        {
          name: "Wi-Fi Network Installation",
          description: "High-speed wireless networks with optimal coverage for your entire home.",
        },
        {
          name: "Mesh Network Systems",
          description: "Advanced mesh systems for seamless connectivity in large homes.",
        },
        {
          name: "Network Security Setup",
          description: "Secure your home network with proper encryption and access controls.",
        },
        {
          name: "Internet Optimization",
          description: "Maximize your internet speed and performance for all devices.",
        },
      ],
    },
    {
      id: "smart-home-integration",
      title: "Smart Home Integration",
      description:
        "Transform your home with smart technology integration, automation systems, and IoT device setup for modern living.",
      image: "/placeholder.svg?height=400&width=600&text=Smart+Home+Integration",
      subservices: [
        {
          name: "Smart Device Setup",
          description: "Installation and configuration of smart lights, thermostats, and security systems.",
        },
        {
          name: "Home Automation",
          description: "Create automated routines and scenes for enhanced convenience and energy efficiency.",
        },
        {
          name: "Voice Assistant Integration",
          description: "Setup and optimize Alexa, Google Home, and other voice control systems.",
        },
        {
          name: "Smart Security Systems",
          description: "Advanced home security with smart cameras, doorbells, and monitoring systems.",
        },
      ],
    },
    {
      id: "computer-setup",
      title: "Computer & Device Setup",
      description:
        "Complete setup and configuration of computers, laptops, tablets, and other devices for optimal performance.",
      image: "/placeholder.svg?height=400&width=600&text=Computer+Setup",
      subservices: [
        {
          name: "New Computer Setup",
          description: "Complete setup of new computers with software installation and data transfer.",
        },
        {
          name: "Software Installation",
          description: "Install and configure essential software, antivirus, and productivity tools.",
        },
        {
          name: "Data Transfer & Backup",
          description: "Safely transfer data from old devices and setup automated backup systems.",
        },
        {
          name: "Peripheral Setup",
          description: "Connect and configure printers, scanners, and other peripheral devices.",
        },
      ],
    },
    {
      id: "troubleshooting-support",
      title: "Troubleshooting & Tech Support",
      description: "Expert diagnosis and resolution of computer problems, slow performance, and technical issues.",
      image: "/placeholder.svg?height=400&width=600&text=Tech+Support",
      subservices: [
        {
          name: "Performance Optimization",
          description: "Speed up slow computers and optimize system performance.",
        },
        {
          name: "Virus & Malware Removal",
          description: "Complete removal of viruses, malware, and security threats.",
        },
        {
          name: "Hardware Diagnostics",
          description: "Identify and resolve hardware issues and component failures.",
        },
        {
          name: "Software Troubleshooting",
          description: "Fix software conflicts, crashes, and compatibility issues.",
        },
      ],
    },
    {
      id: "home-security",
      title: "Home Cybersecurity",
      description: "Protect your home network and devices from cyber threats with comprehensive security solutions.",
      image: "/placeholder.svg?height=400&width=600&text=Home+Security",
      subservices: [
        {
          name: "Network Security Audit",
          description: "Comprehensive assessment of your home network security vulnerabilities.",
        },
        {
          name: "Antivirus & Protection",
          description: "Install and configure advanced antivirus and anti-malware protection.",
        },
        {
          name: "Parental Controls",
          description: "Setup safe internet browsing and content filtering for children.",
        },
        {
          name: "Privacy Protection",
          description: "Secure personal data and protect against identity theft.",
        },
      ],
    },
    {
      id: "maintenance-support",
      title: "Ongoing Maintenance & Support",
      description: "Regular maintenance and support services to keep your home technology running smoothly.",
      image: "/placeholder.svg?height=400&width=600&text=Maintenance+Support",
      subservices: [
        {
          name: "Regular System Updates",
          description: "Keep all devices updated with latest security patches and features.",
        },
        {
          name: "Performance Monitoring",
          description: "Proactive monitoring to prevent issues before they occur.",
        },
        {
          name: "Remote Support",
          description: "Quick remote assistance for minor issues and questions.",
        },
        {
          name: "Annual Health Checks",
          description: "Comprehensive annual review and optimization of all home technology.",
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
                For Homes
              </h5>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Home I.T <span className="text-[#f85c04]">Services</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Professional I.T services for Sydney homes. From network setup to smart home integration, we help you
                get the most out of your home technology.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 group transition-colors duration-300"
                >
                  Book Home Visit
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
                Comprehensive <span className="text-[#f85c04]">Home I.T</span> Services
              </h2>

              <p className="text-gray-300">
                NexusByte provides professional I.T services for Sydney homes, ensuring your technology works seamlessly
                and securely for your family.
              </p>
            </div>

            <div className="space-y-24">
              {homeServices.map((service, index) => (
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
                          <p className="font-semibold text-sm">For Homes</p>
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
                Why Sydney Families <span className="text-[#f85c04]">Choose NexusByte</span>
              </h2>

              <p className="text-gray-300">
                Our friendly approach and technical expertise make us the preferred choice for home I.T services in
                Sydney.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">01</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Home Specialists</h3>

                <p className="text-gray-300">
                  We understand home technology needs and provide solutions that work for families and individuals.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">02</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Friendly Service</h3>

                <p className="text-gray-300">
                  Our technicians explain everything in simple terms and ensure you're comfortable with your technology.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">03</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Affordable Pricing</h3>

                <p className="text-gray-300">
                  Transparent, fair pricing with no hidden costs. We provide value for money on all home I.T services.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">04</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Local Support</h3>

                <p className="text-gray-300">
                  Based in Sydney, we provide prompt home visits and ongoing support when you need it most.
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
                Ready to Upgrade Your <span className="text-[#f85c04]">Home Technology</span>?
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Contact NexusByte today to schedule a home visit and discover how we can improve your home technology
                experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Book a Home Visit
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
