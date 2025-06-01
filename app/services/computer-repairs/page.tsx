import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Computer Repairs Sydney | NexusByte",
  description:
    "Professional computer repair services in Sydney. Hardware repairs, software troubleshooting, virus removal, data recovery, and computer upgrades.",
  keywords:
    "computer repair Sydney, laptop repair, PC repair, virus removal, data recovery, hardware repair, software troubleshooting",
}

export default function ComputerRepairsPage() {
  const repairServices = [
    {
      id: "hardware-repairs",
      title: "Hardware Repairs & Replacement",
      description: "Expert diagnosis and repair of computer hardware issues, from broken screens to faulty components.",
      image: "/placeholder.svg?height=400&width=600&text=Hardware+Repairs",
      subservices: [
        {
          name: "Screen Replacement",
          description: "Laptop and desktop monitor screen repairs and replacements.",
        },
        {
          name: "Motherboard Repair",
          description: "Complex motherboard diagnostics and component-level repairs.",
        },
        {
          name: "Power Supply Issues",
          description: "Power supply testing, repair, and replacement services.",
        },
        {
          name: "Component Upgrades",
          description: "RAM, storage, and graphics card upgrades for better performance.",
        },
      ],
    },
    {
      id: "software-troubleshooting",
      title: "Software Troubleshooting",
      description: "Comprehensive software problem diagnosis and resolution for operating systems and applications.",
      image: "/placeholder.svg?height=400&width=600&text=Software+Troubleshooting",
      subservices: [
        {
          name: "Operating System Repair",
          description: "Windows, macOS, and Linux system repair and restoration.",
        },
        {
          name: "Application Issues",
          description: "Fix software crashes, compatibility issues, and installation problems.",
        },
        {
          name: "Driver Updates",
          description: "Update and install correct drivers for optimal hardware performance.",
        },
        {
          name: "System Optimization",
          description: "Clean up and optimize systems for better performance.",
        },
      ],
    },
    {
      id: "virus-malware-removal",
      title: "Virus & Malware Removal",
      description: "Complete removal of viruses, malware, spyware, and other security threats from your computer.",
      image: "/placeholder.svg?height=400&width=600&text=Virus+Removal",
      subservices: [
        {
          name: "Virus Scanning & Removal",
          description: "Thorough scanning and removal of all types of computer viruses.",
        },
        {
          name: "Malware Elimination",
          description: "Remove malware, spyware, adware, and potentially unwanted programs.",
        },
        {
          name: "Rootkit Detection",
          description: "Advanced detection and removal of hidden rootkits and trojans.",
        },
        {
          name: "Security Hardening",
          description: "Implement security measures to prevent future infections.",
        },
      ],
    },
    {
      id: "data-recovery",
      title: "Data Recovery Services",
      description:
        "Professional data recovery from failed hard drives, corrupted files, and accidentally deleted data.",
      image: "/placeholder.svg?height=400&width=600&text=Data+Recovery",
      subservices: [
        {
          name: "Hard Drive Recovery",
          description: "Recover data from failed mechanical and solid-state drives.",
        },
        {
          name: "File Recovery",
          description: "Restore accidentally deleted or corrupted files and documents.",
        },
        {
          name: "RAID Recovery",
          description: "Specialized recovery services for RAID arrays and server storage.",
        },
        {
          name: "Mobile Device Recovery",
          description: "Data recovery from smartphones and tablets.",
        },
      ],
    },
    {
      id: "computer-upgrades",
      title: "Computer Upgrades & Performance",
      description: "Upgrade your computer's performance with new components and optimization services.",
      image: "/placeholder.svg?height=400&width=600&text=Computer+Upgrades",
      subservices: [
        {
          name: "Memory (RAM) Upgrades",
          description: "Increase system memory for better multitasking and performance.",
        },
        {
          name: "Storage Upgrades",
          description: "Upgrade to faster SSDs or larger capacity storage drives.",
        },
        {
          name: "Graphics Card Upgrades",
          description: "Improve gaming and graphics performance with new video cards.",
        },
        {
          name: "Performance Tuning",
          description: "Optimize system settings for maximum performance.",
        },
      ],
    },
    {
      id: "maintenance-support",
      title: "Preventive Maintenance",
      description: "Regular maintenance services to keep your computer running smoothly and prevent future problems.",
      image: "/placeholder.svg?height=400&width=600&text=Computer+Maintenance",
      subservices: [
        {
          name: "System Cleaning",
          description: "Remove dust, clean components, and maintain optimal temperatures.",
        },
        {
          name: "Software Updates",
          description: "Keep operating system and software up to date with latest patches.",
        },
        {
          name: "Health Checks",
          description: "Regular diagnostics to identify potential issues before they occur.",
        },
        {
          name: "Backup Setup",
          description: "Configure automated backup systems to protect your data.",
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
                Repair Services
              </h5>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Computer <span className="text-[#f85c04]">Repairs</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Professional computer repair services in Sydney. From hardware failures to software issues, we fix all
                types of computer problems quickly and affordably.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 group transition-colors duration-300"
                >
                  Book Repair Service
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
                Comprehensive <span className="text-[#f85c04]">Computer Repair</span> Services
              </h2>

              <p className="text-gray-300">
                NexusByte provides expert computer repair services for all types of hardware and software issues,
                getting your devices back to optimal performance.
              </p>
            </div>

            <div className="space-y-24">
              {repairServices.map((service, index) => (
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
                          <p className="font-semibold text-sm">Repair Service</p>
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
                Why Choose <span className="text-[#f85c04]">NexusByte Repairs</span>
              </h2>

              <p className="text-gray-300">
                Our experienced technicians provide fast, reliable computer repair services with transparent pricing and
                quality guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">01</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Expert Technicians</h3>

                <p className="text-gray-300">
                  Our certified technicians have years of experience repairing all types of computers and devices.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">02</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Fast Turnaround</h3>

                <p className="text-gray-300">
                  Most repairs completed within 24-48 hours, with same-day service available for urgent issues.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">03</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Quality Guarantee</h3>

                <p className="text-gray-300">
                  All repairs come with a warranty and satisfaction guarantee for your peace of mind.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">04</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Fair Pricing</h3>

                <p className="text-gray-300">
                  Transparent, competitive pricing with no hidden fees or surprise charges.
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
                Need Your Computer <span className="text-[#f85c04]">Fixed Today</span>?
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Contact NexusByte for fast, professional computer repair services. We'll diagnose the problem and get
                your device working again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Book Repair Service
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
