"use client"

import Link from "next/link"
import { ArrowRight, Shield, Wifi, Clock, CheckCircle } from "lucide-react"
import { useEffect } from "react"

export default function Hero() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"

  useEffect(() => {
    // Immediately activate all animations in the hero section without waiting for scroll
    const heroElements = document.querySelectorAll(".hero-element")
    heroElements.forEach((element) => {
      element.classList.add("active")
    })

    // Trigger once on load immediately
    setTimeout(() => {
      const sequentialItems = document.querySelectorAll(".hero-sequential-item")
      sequentialItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("active")
        }, index * 100) // Stagger the animations by 100ms
      })
    }, 100)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background with overlay - Theme-aware */}
      <div
        className={`absolute inset-0 ${
          theme === "light"
            ? "bg-gradient-to-r from-gray-100 to-white"
            : "bg-gradient-to-r from-[#001f3d] to-[#030c1f] opacity-95"
        } z-0`}
      ></div>

      {/* Animated background blobs - Theme-aware */}
      <div
        className={`absolute top-20 left-20 w-64 h-64 rounded-full ${
          theme === "light" ? "bg-[#f85c04]/10" : "bg-[#f85c04]/20"
        } blob z-0`}
      ></div>
      <div
        className={`absolute bottom-20 right-20 w-80 h-80 rounded-full ${
          theme === "light" ? "bg-[#001f3d]/20" : "bg-[#001f3d]/30"
        } blob z-0`}
        style={{ animationDelay: "-10s" }}
      ></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7">
            <div className={`space-y-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
              <h5 className="inline-block px-4 py-1 bg-[#f85c04]/20 border border-[#f85c04]/30 rounded-full text-[#f85c04]">
                Sydney's Premier I.T. Services
              </h5>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-element">
                Premium <span className="text-[#f85c04]">I.T. Services</span> for Sydney
              </h1>

              <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-300"} max-w-2xl hero-element`}>
                Leading technology solutions provider delivering exceptional residential and business I.T. support,
                software development, and cybersecurity services across Sydney and surrounding areas.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="hero-sequential-item flex items-center gap-2 opacity-0 transform translate-y-4">
                  <CheckCircle size={20} className="text-[#f85c04]" />
                  <span>Expert Technicians</span>
                </div>
                <div className="hero-sequential-item flex items-center gap-2 opacity-0 transform translate-y-4">
                  <CheckCircle size={20} className="text-[#f85c04]" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="hero-sequential-item flex items-center gap-2 opacity-0 transform translate-y-4">
                  <CheckCircle size={20} className="text-[#f85c04]" />
                  <span>Custom Solutions</span>
                </div>
                <div className="hero-sequential-item flex items-center gap-2 opacity-0 transform translate-y-4">
                  <CheckCircle size={20} className="text-[#f85c04]" />
                  <span>Security Focused</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 hero-element">
                <Link
                  href="#contact"
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 group"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-[#f85c04] bg-[#f85c04]/10 backdrop-blur-sm text-[#f85c04] hover:bg-[#f85c04] hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="lg:col-span-5 hero-element">
            <div
              className={`${
                theme === "light"
                  ? "bg-white shadow-xl border border-gray-200"
                  : "bg-white/10 backdrop-blur-lg border border-white/20"
              } rounded-xl p-6 md:p-8 transform hover:scale-105 transition-transform duration-500`}
            >
              <div className="space-y-6">
                <div className="hero-sequential-item flex items-start gap-4 opacity-0 transform translate-y-4">
                  <div className="bg-[#f85c04]/20 p-3 rounded-lg">
                    <Shield size={28} className="text-[#f85c04]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"} mb-2`}>
                      Secure Networks
                    </h3>
                    <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                      Enterprise-grade security solutions for homes and businesses. Protect your data and privacy.
                    </p>
                  </div>
                </div>

                <div className="hero-sequential-item flex items-start gap-4 opacity-0 transform translate-y-4">
                  <div className="bg-[#f85c04]/20 p-3 rounded-lg">
                    <Wifi size={28} className="text-[#f85c04]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"} mb-2`}>
                      Reliable Performance
                    </h3>
                    <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                      Fast, stable systems designed for your specific needs. No more downtime or slow performance.
                    </p>
                  </div>
                </div>

                <div className="hero-sequential-item flex items-start gap-4 opacity-0 transform translate-y-4">
                  <div className="bg-[#f85c04]/20 p-3 rounded-lg">
                    <Clock size={28} className="text-[#f85c04]" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${theme === "light" ? "text-gray-800" : "text-white"} mb-2`}>
                      Rapid Response
                    </h3>
                    <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>
                      Quick resolution when issues arise. Our team responds promptly to keep you connected.
                    </p>
                  </div>
                </div>

                <Link
                  href="#services"
                  className={`block w-full py-3 text-center ${
                    theme === "light"
                      ? "bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800"
                      : "bg-white/10 hover:bg-white/20 border border-white/30 text-white"
                  } rounded-lg transition-colors duration-300 hero-sequential-item opacity-0 transform translate-y-4`}
                >
                  Explore Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
