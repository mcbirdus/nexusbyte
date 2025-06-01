"use client"

import { CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function Features() {
  useEffect(() => {
    // Reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load with a short delay for page load animations
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Image */}
          <div className="reveal fade-right">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
                <img
                  src="/images/workspace-setup.jpg"
                  alt="Network Management"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge Top */}
              <div
                className="absolute -top-6 -right-6 bg-[#03203b] p-4 rounded-lg shadow-lg"
                style={{ animation: "bounce 3s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#f85c04]/20 p-2 rounded-full">
                    <CheckCircle size={24} className="text-[#f85c04]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">99.9%</p>
                    <p className="text-xs text-white">Uptime Guarantee</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge Bottom */}
              <div
                className="absolute -bottom-6 -left-6 bg-[#03203b] p-4 rounded-lg shadow-lg"
                style={{ animation: "bounce 3s ease-in-out infinite", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#f85c04]/20 p-2 rounded-full">
                    <CheckCircle size={24} className="text-[#f85c04]" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">24/7</p>
                    <p className="text-xs text-white">Technical Support</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[#f85c04] rounded-2xl"></div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full border-2 border-[#f85c04]/50 rounded-2xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="reveal fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why <span className="text-[#f85c04]">NexusByte</span> Is Sydney's Preferred I.T. Partner
            </h2>

            <p className="text-gray-300 mb-8">
              With years of experience serving the Sydney and surrounding communities, we've built a reputation for
              technical excellence, reliability, and exceptional customer service. Our approach combines cutting-edge
              technology with personalized solutions.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="bg-[#001f3d]/20 rounded-lg p-6 transform transition-transform duration-300 hover:translate-y-[-5px] border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white">
                  <span className="text-[#f85c04]">01</span> Expert Technicians
                </h3>
                <p className="text-gray-400">
                  Our team consists of certified I.T. professionals with extensive experience in both business and
                  residential environments throughout Sydney.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#001f3d]/20 rounded-lg p-6 transform transition-transform duration-300 hover:translate-y-[-5px] border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white">
                  <span className="text-[#f85c04]">02</span> Customized Solutions
                </h3>
                <p className="text-gray-400">
                  We design I.T. solutions specifically tailored to your unique requirements, ensuring optimal
                  performance and scalability for your needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#001f3d]/20 rounded-lg p-6 transform transition-transform duration-300 hover:translate-y-[-5px] border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white">
                  <span className="text-[#f85c04]">03</span> Proactive Monitoring
                </h3>
                <p className="text-gray-400">
                  We identify and resolve potential issues before they impact your systems, minimizing downtime and
                  disruptions to your technology operations.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#001f3d]/20 rounded-lg p-6 transform transition-transform duration-300 hover:translate-y-[-5px] border border-white/10">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-white">
                  <span className="text-[#f85c04]">04</span> Ongoing Support
                </h3>
                <p className="text-gray-400">
                  Our relationship doesn't end after installation. We provide continuous support and maintenance to
                  ensure your technology remains optimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
