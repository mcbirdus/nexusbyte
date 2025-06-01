import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Networking & Cybersecurity Services | NexusByte Sydney",
  description:
    "Professional networking and cybersecurity services in Sydney. Network security, penetration testing, compliance, monitoring, and incident response.",
  keywords:
    "network security Sydney, cybersecurity services, penetration testing, security audit, compliance, incident response, security monitoring",
}

export default function NetworkingCybersecurityPage() {
  const securityServices = [
    {
      id: "network-security",
      title: "Network Security Solutions",
      description:
        "Comprehensive network security implementation to protect your business from cyber threats and unauthorized access.",
      image: "/placeholder.svg?height=400&width=600&text=Network+Security",
      subservices: [
        {
          name: "Firewall Configuration",
          description: "Advanced firewall setup and management for robust network protection.",
        },
        {
          name: "Intrusion Detection Systems",
          description: "Real-time monitoring and detection of suspicious network activities.",
        },
        {
          name: "VPN Implementation",
          description: "Secure remote access solutions for employees and partners.",
        },
        {
          name: "Network Segmentation",
          description: "Isolate critical systems and limit potential security breaches.",
        },
      ],
    },
    {
      id: "penetration-testing",
      title: "Penetration Testing & Security Audits",
      description:
        "Professional security assessments to identify vulnerabilities and strengthen your security posture.",
      image: "/placeholder.svg?height=400&width=600&text=Penetration+Testing",
      subservices: [
        {
          name: "Vulnerability Assessments",
          description: "Comprehensive scanning and identification of security weaknesses.",
        },
        {
          name: "Ethical Hacking",
          description: "Controlled attacks to test your defenses and identify gaps.",
        },
        {
          name: "Security Reporting",
          description: "Detailed reports with findings and remediation recommendations.",
        },
        {
          name: "Compliance Testing",
          description: "Ensure your systems meet industry security standards.",
        },
      ],
    },
    {
      id: "compliance-governance",
      title: "Compliance & Governance",
      description: "Help your organization meet regulatory requirements and implement security governance frameworks.",
      image: "/placeholder.svg?height=400&width=600&text=Compliance+Governance",
      subservices: [
        {
          name: "ISO 27001 Implementation",
          description: "Information security management system implementation and certification.",
        },
        {
          name: "GDPR Compliance",
          description: "Data protection and privacy compliance for Australian businesses.",
        },
        {
          name: "Risk Assessments",
          description: "Comprehensive risk analysis and mitigation strategies.",
        },
        {
          name: "Policy Development",
          description: "Create security policies and procedures for your organization.",
        },
      ],
    },
    {
      id: "security-monitoring",
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring and threat detection to protect your business around the clock.",
      image: "/placeholder.svg?height=400&width=600&text=Security+Monitoring",
      subservices: [
        {
          name: "SIEM Implementation",
          description: "Security Information and Event Management system setup and monitoring.",
        },
        {
          name: "Threat Intelligence",
          description: "Real-time threat intelligence feeds and analysis.",
        },
        {
          name: "Log Analysis",
          description: "Comprehensive log monitoring and analysis for security events.",
        },
        {
          name: "Alert Management",
          description: "Automated alerting and response to security incidents.",
        },
      ],
    },
    {
      id: "incident-response",
      title: "Incident Response & Recovery",
      description: "Rapid response to security incidents and comprehensive recovery planning.",
      image: "/placeholder.svg?height=400&width=600&text=Incident+Response",
      subservices: [
        {
          name: "Incident Response Planning",
          description: "Develop comprehensive incident response procedures and protocols.",
        },
        {
          name: "Forensic Analysis",
          description: "Digital forensics to understand the scope and impact of incidents.",
        },
        {
          name: "Breach Containment",
          description: "Rapid containment and mitigation of security breaches.",
        },
        {
          name: "Recovery Services",
          description: "Complete system recovery and business continuity support.",
        },
      ],
    },
    {
      id: "security-training",
      title: "Security Awareness Training",
      description: "Educate your team on cybersecurity best practices and threat awareness.",
      image: "/placeholder.svg?height=400&width=600&text=Security+Training",
      subservices: [
        {
          name: "Phishing Simulations",
          description: "Controlled phishing tests to assess and improve user awareness.",
        },
        {
          name: "Security Workshops",
          description: "Interactive training sessions on cybersecurity best practices.",
        },
        {
          name: "Policy Training",
          description: "Training on security policies and compliance requirements.",
        },
        {
          name: "Ongoing Education",
          description: "Regular updates and training on emerging threats and trends.",
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
                Security Services
              </h5>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Networking & <span className="text-[#f85c04]">Cybersecurity</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Comprehensive cybersecurity services to protect your Sydney business from evolving cyber threats and
                ensure regulatory compliance.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 group transition-colors duration-300"
                >
                  Security Assessment
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
                Comprehensive <span className="text-[#f85c04]">Cybersecurity</span> Services
              </h2>

              <p className="text-gray-300">
                NexusByte provides enterprise-grade cybersecurity solutions to protect your business from cyber threats
                and ensure compliance with industry standards.
              </p>
            </div>

            <div className="space-y-24">
              {securityServices.map((service, index) => (
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
                          <p className="font-semibold text-sm">Security</p>
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
                Why Choose <span className="text-[#f85c04]">NexusByte Security</span>
              </h2>

              <p className="text-gray-300">
                Our certified security professionals provide comprehensive cybersecurity solutions tailored to your
                business needs and risk profile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">01</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Certified Experts</h3>

                <p className="text-gray-300">
                  Our team holds industry certifications including CISSP, CEH, and other security credentials.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">02</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Proactive Approach</h3>

                <p className="text-gray-300">
                  We focus on preventing security incidents rather than just responding to them after they occur.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">03</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Compliance Ready</h3>

                <p className="text-gray-300">
                  We help ensure your security measures meet industry standards and regulatory requirements.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">04</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">24/7 Monitoring</h3>

                <p className="text-gray-300">
                  Round-the-clock security monitoring and incident response capabilities for your peace of mind.
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
                Secure Your Business <span className="text-[#f85c04]">Today</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Don't wait for a security incident. Contact NexusByte for a comprehensive security assessment and
                protect your business from cyber threats.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Security Assessment
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
