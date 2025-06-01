"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect } from "react"
import { submitConsultation } from "@/actions/submit-consultation"
import type { ConsultationFormData } from "@/actions/submit-consultation"

declare global {
  interface Window {
    google: any
  }
}

export default function CTASection() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    service: "home",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate form data on client side first
      if (
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.email.trim() ||
        !formData.phone.trim() ||
        !formData.address.trim() ||
        !formData.message.trim()
      ) {
        setSubmitStatus({
          success: false,
          message: "Please fill in all required fields.",
        })
        setIsSubmitting(false)
        return
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        setSubmitStatus({
          success: false,
          message: "Please enter a valid email address.",
        })
        setIsSubmitting(false)
        return
      }

      console.log("Submitting form data:", formData)

      // Call the server action to submit the form
      const result = await submitConsultation(formData)

      console.log("Server response:", result)

      setSubmitStatus(result)

      // Reset form if successful
      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          service: "home",
          message: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "There was an error submitting your request. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - CTA Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal fade-right">
              Ready to Transform Your <span className="text-[#f85c04]">I.T Experience</span>?
            </h2>

            <p className="text-gray-300 mb-8 text-lg">
              Whether you're a business looking to optimize your I.T infrastructure or a homeowner seeking better
              technology solutions, our team is ready to help. Contact us today for a free consultation and discover how
              NexusByte can elevate your technology experience.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#f85c04]/20 p-2 rounded-full">
                  <Phone size={20} className="text-[#f85c04]" />
                </div>
                <a href="tel:0289597284" className="hover:text-[#f85c04] transition-colors">
                  02 8959 7284
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#f85c04]/20 p-2 rounded-full">
                  <Mail size={20} className="text-[#f85c04]" />
                </div>
                <a href="mailto:info@nexusbyte.com.au" className="hover:text-[#f85c04] transition-colors">
                  info@nexusbyte.com.au
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#f85c04]/20 p-2 rounded-full mt-1">
                  <MapPin size={20} className="text-[#f85c04]" />
                </div>
                <span>28 Blues Point Road, McMahons Point NSW 2060</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90 text-white flex items-center justify-center gap-2 group"
              >
                <Link href="#contact">
                  Contact Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#001f3d]"
              >
                <Link href="#about">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-xl reveal fade-left relative">
            {/* Animated Free Quote Sticker */}
            <div className="absolute -top-6 -right-6 animate-pulse">
              <div className="relative">
                <div className="absolute inset-0 bg-[#f85c04] rounded-full blur-md opacity-50 animate-ping"></div>
                <div className="relative bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] text-white p-2 rounded-full shadow-lg border-2 border-white/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-1 animate-spin-slow" />
                  <span className="font-bold text-sm">FREE QUOTE</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Get a <span className="text-[#f85c04]">Free</span> Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white font-semibold">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white font-semibold">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white font-semibold">
                  Address *
                </Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
                  placeholder="Start typing your address..."
                  required
                  ref={(input) => {
                    // Initialize Google Places Autocomplete when the input is rendered
                    if (input && !input.getAttribute("data-places-initialized")) {
                      input.setAttribute("data-places-initialized", "true")

                      // Load Google Maps API script if not already loaded
                      if (!document.getElementById("google-maps-script")) {
                        const script = document.createElement("script")
                        script.id = "google-maps-script"
                        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDj6fNWwcEAh2i7wFfPksV6_fOorxpzyXQ&libraries=places`
                        script.async = true
                        script.defer = true
                        script.onload = () => {
                          // Initialize autocomplete after script loads
                          const autocomplete = new window.google.maps.places.Autocomplete(input, {
                            types: ["address"],
                            componentRestrictions: { country: "au" }, // Restrict to Australia
                          })

                          // Update form data when a place is selected
                          autocomplete.addListener("place_changed", () => {
                            const place = autocomplete.getPlace()
                            if (place.formatted_address) {
                              handleChange("address", place.formatted_address)
                            }
                          })
                        }
                        document.head.appendChild(script)
                      } else {
                        // If script already loaded, initialize autocomplete directly
                        const autocomplete = new window.google.maps.places.Autocomplete(input, {
                          types: ["address"],
                          componentRestrictions: { country: "au" }, // Restrict to Australia
                        })

                        autocomplete.addListener("place_changed", () => {
                          const place = autocomplete.getPlace()
                          if (place.formatted_address) {
                            handleChange("address", place.formatted_address)
                          }
                        })
                      }
                    }
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white font-semibold">Select Service Type *</Label>
                <RadioGroup
                  value={formData.service}
                  onValueChange={(value) => handleChange("service", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="home" id="home" className="border-[#f85c04]" />
                    <Label htmlFor="home" className="text-white">
                      Home Service
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" className="border-[#f85c04]" />
                    <Label htmlFor="business" className="text-white">
                      Business Service
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white font-semibold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04] min-h-[120px]"
                  placeholder="Tell us about your I.T needs and how we can help..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90 text-white font-semibold py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </Button>
              {submitStatus && (
                <div
                  className={`p-4 mt-6 rounded-lg ${submitStatus.success ? "bg-green-500/20 border border-green-500/50" : "bg-red-500/20 border border-red-500/50"}`}
                >
                  <p className={`text-sm ${submitStatus.success ? "text-green-300" : "text-red-300"}`}>
                    {submitStatus.success
                      ? "Thank you! Your consultation request has been submitted successfully. We'll contact you within 30 minutes."
                      : submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
