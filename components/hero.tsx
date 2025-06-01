"use client"

import Link from "next/link"
import {
  ArrowRight,
  Shield,
  Wifi,
  Clock,
  CheckCircle,
  ChevronLeft, // Added
  ChevronRight, // Added
} from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

// Image Slider Component
function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { src: "/images/workspace-setup.jpg", alt: "Professional IT workspace" },
    { src: "/images/slider/tech-infrastructure.jpg", alt: "Digital technology infrastructure" },
    { src: "/images/slider/keyboard-closeup.jpg", alt: "Professional keyboard setup" },
    { src: "/images/slider/gaming-pc-interior.jpg", alt: "High-performance computer build" },
    { src: "/images/slider/modern-workspace.jpg", alt: "Modern office workspace" },
    { src: "/images/slider/apple-tech-abstract.jpg", alt: "Modern technology solutions" },
    { src: "/images/slider/coding-setup.jpg", alt: "Software development environment" },
    { src: "/images/slider/purple-workspace.jpg", alt: "Creative workspace setup" },
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Autoplay interval

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
      {/* Main Image Container */}
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image.src} // Assuming image.src is unique and stable
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3d]/80 to-transparent"></div> {/* Image Overlay */}
          </div>
        ))}
      </div>

      {/* Prev/Next Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators (Addressing the Failing Elements) */}
      {/* Container for dots, styled to match parts of the error selector */}
      <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 z-10 p-2 bg-[#001f3d]/20"> {/* Matches 'div.bg-[#001f3d]/20' */}
        <div className="text-center"> {/* Matches 'div.text-center' */}
          <div className="flex justify-center items-center space-x-1.5 sm:space-x-2"> {/* Matches 'div.flex' */}
            {images.map((image, index) => (
              <button
                key={`dot-${index}-${image.src}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1} of ${images.length}${image.alt ? `: ${image.alt}` : ''}`}
                // Applying classes from the error report's button snippet for dot indicators
                className={`p-2 rounded-lg transition-all duration-300 
                            ${index === currentIndex ? 'bg-[#f85c04]' : 'bg-[#f85c04]/20 hover:bg-[#f85c04]/60'}
                            focus:outline-none focus:ring-2 focus:ring-[#f85c04] focus:ring-offset-2 focus:ring-offset-[#001f3d]`}
              >
                 {/* This button is intentionally empty visually, matching the reported HTML snippet.
                     Its accessible name is provided by aria-label.
                     The p-2 makes it a small, padded clickable area.
                 */}
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark" // This is hardcoded, consider dynamic theme context if applicable

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
    }, 100) // Small delay to ensure elements are mounted
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background with overlay - Theme-aware */}
      <div
        className={`absolute inset-0 ${
          theme === "light"
            ? "bg-gradient-to-r from-gray-100 to-white"
            : "bg-gradient-to-r from-[#001f3d] to-[#030c1f] opacity-95" // Ensure opacity doesn't hide content fully
        } z-0`}
      ></div>

      {/* Animated background blobs - Theme-aware (Placeholder if you have these) */}
      {/* <div className="absolute inset-0 overflow-hidden z-0"> ... </div> */}

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7">
            <div className={`space-y-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
              <div className="text-left">
                <h5 className="inline-block px-4 py-1 bg-[#f85c04]/20 border border-[#f85c04]/30 rounded-full text-[#f85c04] hero-sequential-item opacity-0 transform translate-y-4">
                  Sydney's Premier I.T Services
                </h5>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight hero-element text-left">
                Premium <span className="text-[#f85c04]">I.T Services</span> for Sydney
              </h1>

              <p
                className={`text-lg ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                } max-w-2xl hero-element text-left`}
              >
                Leading technology solutions provider delivering exceptional residential and business I.T support,
                software development, and cybersecurity services across Sydney and surrounding areas.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="hero-sequential-item flex items-center gap-2 opacity-0 transform translate-y-4">
                  <CheckCircle size={20} className="text-[#f85c04]" />
                  <span>Expert Engineers</span>
                </div>
                <div className="hero-sequential-item flex items-center gap-2 opacity-0 transform translate-y-4">
                  <CheckCircle size={20} className="text-[#f85c04]" />
                  <span>24/7 Support</span>
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
                  className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 group transition-transform duration-300 ease-out hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#001f3d] px-6 py-3 rounded-lg transition-all duration-300 text-center hover:scale-105"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          {/* Card for Desktop */}
          <div className="lg:col-span-5 hero-element hidden lg:block">
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

          {/* Image Slider for Mobile and Tablet */}
          <div className="lg:col-span-5 hero-element block lg:hidden">
            <div className="relative"> {/* This div is the direct parent of ImageSlider's content */}
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
