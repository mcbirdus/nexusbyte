import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Data Management & Recovery Services | NexusByte Sydney",
  description:
    "Professional data management and recovery services in Sydney. Data backup, disaster recovery, migration, analytics, compliance, and optimization.",
  keywords:
    "data recovery Sydney, data backup, disaster recovery, data migration, data analytics, data compliance, database management",
}

export default function DataManagementPage() {
  const dataServices = [
    {
      id: "data-backup",
      title: "Data Backup Solutions",
      description:
        "Comprehensive backup strategies to protect your critical business data with automated, secure, and reliable backup systems.",
      image: "/placeholder.svg?height=400&width=600&text=Data+Backup",
      subservices: [
        {
          name: "Automated Backup Systems",
          description: "Set up automated daily, weekly, and monthly backup schedules.",
        },
        {
          name: "Cloud Backup Solutions",
          description: "Secure cloud-based backup with encryption and redundancy.",
        },
        {
          name: "Local Backup Systems",
          description: "On-premises backup solutions for immediate data access.",
        },
        {
          name: "Hybrid Backup Strategies",
          description: "Combine local and cloud backups for maximum protection.",
        },
      ],
    },
    {
      id: "disaster-recovery",
      title: "Disaster Recovery Planning",
      description:
        "Comprehensive disaster recovery plans and systems to ensure business continuity in case of data loss or system failures.",
      image: "/placeholder.svg?height=400&width=600&text=Disaster+Recovery",
      subservices: [
        {
          name: "Recovery Planning",
          description: "Develop comprehensive disaster recovery plans and procedures.",
        },
        {
          name: "Business Continuity",
          description: "Ensure minimal downtime with rapid recovery solutions.",
        },
        {
          name: "Testing & Validation",
          description: "Regular testing of recovery procedures to ensure effectiveness.",
        },
        {
          name: "Emergency Response",
          description: "24/7 emergency response for critical data recovery situations.",
        },
      ],
    },
    {
      id: "data-migration",
      title: "Data Migration Services",
      description:
        "Safe and efficient migration of data between systems, platforms, and storage solutions with minimal downtime.",
      image: "/placeholder.svg?height=400&width=600&text=Data+Migration",
      subservices: [
        {
          name: "System Migrations",
          description: "Migrate data between different operating systems and platforms.",
        },
        {
          name: "Cloud Migrations",
          description: "Move data from on-premises to cloud or between cloud providers.",
        },
        {
          name: "Database Migrations",
          description: "Transfer databases with data integrity and minimal downtime.",
        },
        {
          name: "Legacy System Upgrades",
          description: "Migrate data from outdated systems to modern platforms.",
        },
      ],
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Insights",
      description:
        "Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
      image: "/placeholder.svg?height=400&width=600&text=Data+Analytics",
      subservices: [
        {
          name: "Business Intelligence",
          description: "Create dashboards and reports for data-driven decision making.",
        },
        {
          name: "Data Visualization",
          description: "Transform complex data into easy-to-understand visual formats.",
        },
        {
          name: "Predictive Analytics",
          description: "Use machine learning to predict trends and outcomes.",
        },
        {
          name: "Custom Reporting",
          description: "Develop custom reports tailored to your business needs.",
        },
      ],
    },
    {
      id: "data-compliance",
      title: "Data Compliance & Governance",
      description:
        "Ensure your data management practices comply with regulations and implement proper data governance frameworks.",
      image: "/placeholder.svg?height=400&width=600&text=Data+Compliance",
      subservices: [
        {
          name: "GDPR Compliance",
          description: "Implement data protection measures for privacy compliance.",
        },
        {
          name: "Data Governance",
          description: "Establish policies and procedures for data management.",
        },
        {
          name: "Audit Preparation",
          description: "Prepare for data compliance audits and assessments.",
        },
        {
          name: "Data Classification",
          description: "Classify and categorize data based on sensitivity and importance.",
        },
      ],
    },
    {
      id: "data-optimization",
      title: "Database Optimization",
      description:
        "Optimize database performance, storage efficiency, and query speed for better application performance.",
      image: "/placeholder.svg?height=400&width=600&text=Database+Optimization",
      subservices: [
        {
          name: "Performance Tuning",
          description: "Optimize database queries and improve overall performance.",
        },
        {
          name: "Storage Optimization",
          description: "Reduce storage costs while maintaining data accessibility.",
        },
        {
          name: "Index Optimization",
          description: "Create and optimize database indexes for faster queries.",
        },
        {
          name: "Maintenance Planning",
          description: "Regular maintenance schedules to keep databases running smoothly.",
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
                Data Services
              </h5>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Management & <span className="text-[#f85c04]">Recovery</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Comprehensive data management services to protect, organize, and optimize your business data for better
                performance and compliance.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 group transition-colors duration-300"
                >
                  Data Assessment
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
                Comprehensive <span className="text-[#f85c04]">Data Management</span> Services
              </h2>

              <p className="text-gray-300">
                NexusByte provides end-to-end data management solutions to help your business protect, organize, and
                leverage data for competitive advantage.
              </p>
            </div>

            <div className="space-y-24">
              {dataServices.map((service, index) => (
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
                          <p className="font-semibold text-sm">Data Services</p>
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
                Why Choose <span className="text-[#f85c04]">NexusByte Data Services</span>
              </h2>

              <p className="text-gray-300">
                Our data management experts provide reliable, secure, and scalable solutions to help your business make
                the most of its data assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">01</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Data Expertise</h3>

                <p className="text-gray-300">
                  Our team has extensive experience with all types of data systems and management platforms.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">02</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Secure Solutions</h3>

                <p className="text-gray-300">
                  All data management solutions include enterprise-grade security and encryption protocols.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">03</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Scalable Systems</h3>

                <p className="text-gray-300">
                  Our solutions grow with your business, ensuring long-term data management success.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">04</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>

                <p className="text-gray-300">
                  Round-the-clock monitoring and support for critical data systems and recovery needs.
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
                Optimize Your <span className="text-[#f85c04]">Data Strategy</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Contact NexusByte today for a comprehensive data assessment and discover how we can improve your data
                management and recovery capabilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Data Assessment
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
