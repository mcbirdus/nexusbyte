import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Software Development Services | NexusByte Sydney",
  description:
    "Custom software development services in Sydney. Web applications, mobile apps, e-commerce solutions, and bespoke software for businesses.",
  keywords:
    "software development Sydney, custom software, web development, mobile app development, e-commerce development, API development",
}

export default function SoftwareDevelopmentPage() {
  const softwareServices = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description:
        "Bespoke software solutions tailored to your specific business requirements, built with modern technologies and best practices.",
      image: "/placeholder.svg?height=400&width=600&text=Custom+Software",
      subservices: [
        {
          name: "Business Process Automation",
          description: "Streamline operations with custom software that automates repetitive tasks and workflows.",
        },
        {
          name: "Database Solutions",
          description: "Design and implement robust database systems for efficient data management.",
        },
        {
          name: "Integration Solutions",
          description: "Connect different systems and applications for seamless data flow.",
        },
        {
          name: "Legacy System Modernization",
          description: "Update and modernize outdated systems with current technologies.",
        },
      ],
    },
    {
      id: "web-development",
      title: "Web Application Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      image: "/placeholder.svg?height=400&width=600&text=Web+Development",
      subservices: [
        {
          name: "Frontend Development",
          description: "Interactive user interfaces using React, Vue.js, and modern JavaScript frameworks.",
        },
        {
          name: "Backend Development",
          description: "Robust server-side applications with Node.js, Python, and other technologies.",
        },
        {
          name: "Progressive Web Apps",
          description: "Web applications that work like native apps across all devices.",
        },
        {
          name: "API Development",
          description: "RESTful and GraphQL APIs for seamless data exchange and integration.",
        },
      ],
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Development",
      subservices: [
        {
          name: "iOS App Development",
          description: "Native iOS applications built with Swift for optimal performance on Apple devices.",
        },
        {
          name: "Android App Development",
          description: "Native Android applications using Kotlin and Java for Google Play Store.",
        },
        {
          name: "Cross-Platform Development",
          description: "React Native and Flutter apps that work on both iOS and Android.",
        },
        {
          name: "App Store Optimization",
          description: "Optimize your app for better visibility and downloads in app stores.",
        },
      ],
    },
    {
      id: "ecommerce-development",
      title: "E-commerce Solutions",
      description:
        "Complete e-commerce platforms and online stores with payment integration, inventory management, and customer features.",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Development",
      subservices: [
        {
          name: "Online Store Development",
          description: "Custom e-commerce websites with shopping cart and checkout functionality.",
        },
        {
          name: "Payment Gateway Integration",
          description: "Secure payment processing with multiple payment options and gateways.",
        },
        {
          name: "Inventory Management",
          description: "Automated inventory tracking and management systems.",
        },
        {
          name: "Customer Portal Development",
          description: "User accounts, order history, and customer service features.",
        },
      ],
    },
    {
      id: "cms-development",
      title: "Content Management Systems",
      description:
        "Custom CMS solutions and website development using popular platforms like WordPress, Drupal, and headless CMS.",
      image: "/placeholder.svg?height=400&width=600&text=CMS+Development",
      subservices: [
        {
          name: "WordPress Development",
          description: "Custom WordPress themes, plugins, and website development.",
        },
        {
          name: "Headless CMS Solutions",
          description: "Modern content management with Strapi, Contentful, and other headless systems.",
        },
        {
          name: "Custom CMS Development",
          description: "Bespoke content management systems tailored to your workflow.",
        },
        {
          name: "Website Migration",
          description: "Seamless migration from existing platforms to new CMS solutions.",
        },
      ],
    },
    {
      id: "maintenance-support",
      title: "Software Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and support services to keep your software running smoothly and securely.",
      image: "/placeholder.svg?height=400&width=600&text=Software+Maintenance",
      subservices: [
        {
          name: "Bug Fixes & Updates",
          description: "Regular maintenance to fix issues and implement new features.",
        },
        {
          name: "Security Updates",
          description: "Keep your software secure with regular security patches and updates.",
        },
        {
          name: "Performance Optimization",
          description: "Ongoing optimization to ensure optimal performance and speed.",
        },
        {
          name: "Technical Support",
          description: "Dedicated support team for any technical issues or questions.",
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
                Development Services
              </h5>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Software <span className="text-[#f85c04]">Development</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                Custom software solutions for Sydney businesses. From web applications to mobile apps, we build
                technology that drives your business forward.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 group transition-colors duration-300"
                >
                  Start Your Project
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
                Comprehensive <span className="text-[#f85c04]">Software Development</span> Services
              </h2>

              <p className="text-gray-300">
                NexusByte delivers cutting-edge software solutions using modern technologies and development practices
                to help your business succeed.
              </p>
            </div>

            <div className="space-y-24">
              {softwareServices.map((service, index) => (
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
                          <p className="font-semibold text-sm">Development</p>
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
                Why Choose <span className="text-[#f85c04]">NexusByte Development</span>
              </h2>

              <p className="text-gray-300">
                Our experienced development team uses modern technologies and agile methodologies to deliver
                high-quality software solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reason 1 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">01</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Modern Technologies</h3>

                <p className="text-gray-300">
                  We use the latest technologies and frameworks to build scalable, maintainable software solutions.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">02</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Agile Development</h3>

                <p className="text-gray-300">
                  Our agile approach ensures regular communication, quick iterations, and timely delivery of your
                  project.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">03</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Quality Assurance</h3>

                <p className="text-gray-300">
                  Rigorous testing and quality assurance processes ensure your software is reliable and bug-free.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="bg-[#f85c04]/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#f85c04] font-bold text-xl">04</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">Ongoing Support</h3>

                <p className="text-gray-300">
                  We provide ongoing maintenance and support to keep your software updated and running smoothly.
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
                Ready to Build Your <span className="text-[#f85c04]">Software Solution</span>?
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Contact NexusByte today to discuss your software development needs and get a free project consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Start Your Project
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
