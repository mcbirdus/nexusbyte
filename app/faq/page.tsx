"use client"

import { useState } from "react"
import { ChevronDown, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  icon: string // This icon is for category buttons, not the hero badge
  faqs: FAQItem[]
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqCategories: FAQCategory[] = [
    {
      title: "General Questions",
      icon: "❓", // This icon is for the "General Questions" category button
      faqs: [
        {
          question: "What areas do you service in Sydney?",
          answer:
            "We provide services across all of Sydney, including the CBD, North Shore, Eastern Suburbs, Western Sydney, and surrounding areas. We offer both on-site and remote support depending on your needs.",
        },
        {
          question: "Do you offer emergency IT support?",
          answer:
            "Yes, we provide emergency IT support for critical business issues. Our response times vary based on the severity of the issue and your service level agreement. Contact us immediately for urgent matters.",
        },
        {
          question: "How do I get a quote for services?",
          answer:
            "Simply contact us via phone, email, or our online form. We'll discuss your requirements and provide a free, no-obligation quote tailored to your specific needs. Every situation is unique, so we prefer to understand your requirements first.",
        },
        {
          question: "Do you work with both businesses and home users?",
          answer:
            "We provide comprehensive IT services for both business clients and residential customers. Our solutions are tailored to meet the specific needs of each client type.",
        },
        {
          question: "What are your operating hours?",
          answer:
            "Our standard business hours are Monday to Friday, 9 AM to 6 PM. However, we also offer after-hours support and emergency services for critical issues. Contact us to discuss your specific requirements.",
        },
      ],
    },
    {
      title: "Business I.T Services",
      icon: "🏢",
      faqs: [
        {
          question: "What business IT services do you offer?",
          answer:
            "We offer comprehensive business IT solutions including network setup and management, server installation, cloud migration, cybersecurity, IT consulting, managed services, and ongoing technical support.",
        },
        {
          question: "Can you help migrate our business to the cloud?",
          answer:
            "Yes, we specialize in cloud migration services. We'll assess your current infrastructure, recommend the best cloud solutions for your business, and handle the entire migration process with minimal downtime.",
        },
        {
          question: "Do you provide ongoing IT support for businesses?",
          answer:
            "We offer various managed IT service packages including proactive monitoring, regular maintenance, security updates, and help desk support. We can customize a support plan that fits your business needs and budget.",
        },
        {
          question: "How do you ensure our business data is secure?",
          answer:
            "We implement multi-layered security solutions including firewalls, antivirus protection, regular security updates, data encryption, backup solutions, and staff training. We also conduct security audits to identify potential vulnerabilities.",
        },
        {
          question: "Can you help with business network setup?",
          answer:
            "We design and implement business networks from small office setups to enterprise-level infrastructures. This includes wired and wireless networks, server rooms, and network security implementation.",
        },
      ],
    },
    {
      title: "Home I.T Services",
      icon: "🏠",
      faqs: [
        {
          question: "What home IT services do you provide?",
          answer:
            "We offer home computer repairs, virus removal, data recovery, home network setup, smart home installation, device setup and configuration, and general technical support for all your home technology needs.",
        },
        {
          question: "Can you set up a home network and Wi-Fi?",
          answer:
            "Yes, we can design and install home networks including Wi-Fi setup, range extenders, mesh networks, and smart home integration. We'll ensure optimal coverage and security for your home.",
        },
        {
          question: "Do you provide support for smart home devices?",
          answer:
            "We help with smart home device installation and configuration including smart TVs, security cameras, smart speakers, home automation systems, and IoT device integration.",
        },
        {
          question: "Can you help recover lost data from my personal computer?",
          answer:
            "We offer data recovery services for various scenarios including hard drive failures, accidental deletion, and corrupted files. We'll assess the situation and provide options for data recovery.",
        },
        {
          question: "Do you offer home visits for IT support?",
          answer:
            "Yes, we provide on-site home visits for installations, repairs, and technical support. Many issues can also be resolved remotely, which we'll determine during our initial consultation.",
        },
      ],
    },
    {
      title: "Software Development",
      icon: "💻",
      faqs: [
        {
          question: "What types of software do you develop?",
          answer:
            "We develop custom web applications, mobile apps, desktop software, e-commerce platforms, content management systems, and business automation tools. We work with various technologies to meet your specific requirements.",
        },
        {
          question: "Do you develop mobile apps for both iOS and Android?",
          answer:
            "Yes, we develop native apps for both iOS and Android platforms, as well as cross-platform solutions that work on both. We'll recommend the best approach based on your target audience and requirements.",
        },
        {
          question: "Can you help modernize our existing software?",
          answer:
            "We can assess your current software, identify areas for improvement, and help modernize your applications with updated technologies, improved user interfaces, and enhanced functionality.",
        },
        {
          question: "Do you provide ongoing maintenance for developed software?",
          answer:
            "Yes, we offer ongoing maintenance and support packages including bug fixes, security updates, feature enhancements, and technical support to ensure your software continues to perform optimally.",
        },
        {
          question: "How long does software development typically take?",
          answer:
            "Development timelines vary greatly depending on project complexity, features required, and scope. Simple applications might take a few weeks, while complex enterprise solutions can take several months. We'll provide a detailed timeline during project planning.",
        },
      ],
    },
    {
      title: "Computer Repairs",
      icon: "🔧",
      faqs: [
        {
          question: "What types of computer problems do you fix?",
          answer:
            "We repair hardware issues (motherboard, RAM, hard drives, power supplies), software problems, virus infections, slow performance, startup issues, blue screen errors, and peripheral connectivity problems.",
        },
        {
          question: "Do you repair both Windows and Mac computers?",
          answer:
            "Yes, our technicians are experienced with both Windows PCs and Mac computers. We can handle repairs, upgrades, and maintenance for all major computer brands and operating systems.",
        },
        {
          question: "Can you upgrade my computer's hardware?",
          answer:
            "We can upgrade RAM, hard drives to SSDs, graphics cards, processors (where possible), and other components to improve your computer's performance. We'll assess what upgrades are compatible and cost-effective.",
        },
        {
          question: "How long do computer repairs usually take?",
          answer:
            "Repair times depend on the issue complexity and parts availability. Simple software fixes might be completed the same day, while hardware repairs requiring parts could take 2-5 business days. We'll provide an estimated timeframe upfront.",
        },
        {
          question: "Do you offer a warranty on repairs?",
          answer:
            "Yes, we provide warranties on our repair work and any parts we install. The warranty period varies depending on the type of repair and components used. We'll explain the warranty terms before proceeding with any work.",
        },
      ],
    },
    {
      title: "Networking & Cybersecurity",
      icon: "🔒",
      faqs: [
        {
          question: "What networking services do you provide?",
          answer:
            "We offer network design and installation, Wi-Fi setup, network security implementation, VPN configuration, network monitoring and maintenance, and troubleshooting connectivity issues.",
        },
        {
          question: "How do you protect against cyber threats?",
          answer:
            "We implement comprehensive cybersecurity measures including firewalls, antivirus solutions, intrusion detection systems, regular security updates, employee training, and security audits to protect against various cyber threats.",
        },
        {
          question: "Can you help secure our business Wi-Fi network?",
          answer:
            "Yes, we can secure your business Wi-Fi with enterprise-grade encryption, guest network separation, access controls, and monitoring systems to prevent unauthorized access and protect sensitive data.",
        },
        {
          question: "Do you provide network monitoring services?",
          answer:
            "We offer 24/7 network monitoring services that detect issues before they impact your business, monitor performance, track security threats, and provide detailed reporting on network health and usage.",
        },
        {
          question: "Can you help with VPN setup for remote workers?",
          answer:
            "We can set up secure VPN solutions that allow your remote workers to safely access company resources from anywhere, ensuring data security and maintaining productivity.",
        },
      ],
    },
    {
      title: "Data Management & Recovery",
      icon: "💾",
      faqs: [
        {
          question: "What data recovery services do you offer?",
          answer:
            "We provide data recovery from failed hard drives, SSDs, USB drives, memory cards, and other storage devices. We handle various failure scenarios including physical damage, logical corruption, and accidental deletion.",
        },
        {
          question: "Can you recover data from a completely dead hard drive?",
          answer:
            "In many cases, yes. We have specialized tools and techniques for recovering data from failed drives. However, success depends on the type and extent of damage. We'll assess the drive and provide honest feedback about recovery possibilities.",
        },
        {
          question: "Do you help set up backup solutions?",
          answer:
            "Yes, we design and implement comprehensive backup strategies including local backups, cloud backups, and hybrid solutions. We'll ensure your data is protected and can be quickly restored when needed.",
        },
        {
          question: "How long does data recovery typically take?",
          answer:
            "Recovery times vary based on the storage device size, damage extent, and recovery complexity. Simple recoveries might take a few hours, while complex cases involving physical damage could take several days.",
        },
        {
          question: "What's the difference between backup and data recovery?",
          answer:
            "Backup is a preventive measure that creates copies of your data for protection. Data recovery is the process of retrieving lost or corrupted data after a failure. We recommend implementing robust backup solutions to minimize the need for data recovery.",
        },
      ],
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-r from-[#001f3d] to-black relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f85c04]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f85c04]/5 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          {/* Header section of the FAQ Page (Title, intro) */}
          <div className="pt-16 sm:pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#f85c04]/20 border border-[#f85c04]/30 rounded-full px-4 py-2 mb-6">
                {/* Question mark icon was here: <span className="text-2xl">❓</span> */}
                <span className="text-[#f85c04] font-medium">Frequently Asked Questions</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Got <span className="text-[#f85c04]">Questions?</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Find answers to common questions about our IT services. Can't find what you're looking for? Contact us for
                a free consultation and personalized quote.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-8 py-3 rounded-lg font-medium">
                  <a href="tel:0289597284" className="flex items-center gap-2">
                    <Phone size={20} />
                    Call Us
                  </a>
                </Button>

              <Button
                asChild
                className="bg-transparent border-2 border-green-500 text-white hover:bg-green-500/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <a
                  href="https://wa.me/61414082893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </Button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="px-4 sm:px-6 lg:px-8 pb-20">
            <div className="max-w-6xl mx-auto">
              {/* Category Navigation */}
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {faqCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-[#f85c04] text-white shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">{faqCategories[activeCategory].title}</h2>

                <div className="space-y-4">
                  {faqCategories[activeCategory].faqs.map((faq, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                      >
                        <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                        <ChevronDown
                          size={20}
                          className={`text-[#f85c04] transition-transform duration-300 flex-shrink-0 ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openFAQ === index && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-white/10 pt-4">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-16 text-center">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#f85c04]/20 p-3 rounded-full">
                      <MessageCircle size={32} className="text-[#f85c04]" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>

                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Our team is here to help! Contact us for personalized answers and a free quote tailored to your
                    specific IT needs. Every situation is unique, and we're happy to discuss your requirements.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-8 py-3 rounded-lg font-medium">
                      <a href="/contact" className="flex items-center gap-2">
                        Get Free Quote
                      </a>
                    </Button>

                    <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-medium">
                      <a href="tel:0289597284" className="flex items-center gap-2">
                        <Phone size={20} />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
