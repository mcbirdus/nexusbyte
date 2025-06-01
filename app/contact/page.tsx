"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { submitConsultation } from "@/actions/submit-consultation"
import type { ConsultationFormData } from "@/actions/submit-consultation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-r from-[#001f3d] to-black pt-20">
        {/* Header Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get In <span className="text-[#f85c04]">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Ready to transform your technology infrastructure? Contact our expert team for personalized IT solutions
                tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 relative bg-gradient-to-r from-[#001f3d] to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We're here to help you with all your IT needs. Reach out to us through any of the following
                    channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f85c04] p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                          <p className="text-gray-300">02 8959 7284</p>
                          <p className="text-gray-400 text-sm mt-1">Mon-Fri, 8:30am-5:30pm</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f85c04] p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                          <p className="text-gray-300">info@nexusbyte.com.au</p>
                          <p className="text-gray-400 text-sm mt-1">24/7 Online Support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f85c04] p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                          <p className="text-gray-300">28 Blues Point Road</p>
                          <p className="text-gray-400 text-sm mt-1">McMahons Point NSW 2060</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#f85c04] p-3 rounded-lg">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">Business Hours</h3>
                          <p className="text-gray-300">Monday-Friday: 8:30am-5:30pm</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-xl relative">
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
                        className={`p-4 mt-6 rounded-lg ${
                          submitStatus.success
                            ? "bg-green-500/20 border border-green-500/50"
                            : "bg-red-500/20 border border-red-500/50"
                        }`}
                      >
                        <p className={`text-sm ${submitStatus.success ? "text-green-300" : "text-red-300"}`}>
                          {submitStatus.success
                            ? "Thank you! Your consultation request has been submitted successfully. We'll contact you within 30 minutes."
                            : submitStatus.message}
                        </p>
                      </div>
                    )}
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact Section */}
        <section className="py-20 bg-gradient-to-r from-[#f85c04]/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Immediate Assistance?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              For urgent IT support or emergency services, don't hesitate to call us directly. Our team is ready to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#f85c04] hover:bg-[#e55304] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                <a href="tel:+61212345678" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
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
        </section>
      </main>
      <Footer />
    </>
  )
}
