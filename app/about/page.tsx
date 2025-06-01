"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Clock, Shield, Target, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import { Home } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen relative bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>

          {/* New Hero Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <nav className="mb-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <a href="/" className="hover:text-[#f85c04] transition-colors duration-300 flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </a>
                <span>›</span>
                <span className="text-white">About Us</span>
              </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side Content */}
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  We are more than just <span className="text-[#f85c04]">IT</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  We are your trusted technology partner, delivering innovative solutions and reliable support to
                  businesses and individuals across Sydney.
                </p>
                {/* Add any additional content or call-to-action here */}
              </div>

              {/* Right Side Visual Element */}
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About Us Image"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
                {/* Floating Elements (Example) */}
                <div className="absolute top-1/4 left-1/4 bg-[#f85c04] rounded-full w-8 h-8 animate-pulse opacity-75"></div>
                <div className="absolute bottom-1/4 right-1/4 bg-[#f85c04] rounded-full w-6 h-6 animate-pulse opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Information Section */}
        <section className="relative py-12 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {/* Phone */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white/5 border-white/10 backdrop-blur-sm">
              <a href="tel:+61414082893" className="text-lg hover:text-[#f85c04] transition-colors duration-300">
                Phone: (02) 8123 4567
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white/5 border-white/10 backdrop-blur-sm">
              <a
                href="mailto:info@nexusbyte.com.au"
                className="text-lg hover:text-[#f85c04] transition-colors duration-300"
              >
                Email: info@nexusbyte.com.au
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="text-center">Address: 123 Main Street, Sydney, NSW 2000, Australia</div>
            </div>

            {/* Business Hours */}
            <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white/5 border-white/10 backdrop-blur-sm">
              <div className="text-center">Business Hours: Mon-Fri, 9am-5pm</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-8 h-8 text-[#f85c04] mr-3" />
                    <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To empower businesses and individuals across Sydney with cutting-edge IT solutions that drive
                    growth, enhance productivity, and secure digital assets. We believe technology should be accessible,
                    reliable, and transformative for everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Lightbulb className="w-8 h-8 text-[#f85c04] mr-3" />
                    <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be Sydney's most trusted IT partner, recognized for innovation, excellence, and unwavering
                    commitment to client success. We envision a future where technology seamlessly integrates with daily
                    life and business operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="relative py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From humble beginnings to becoming Sydney's premier IT service provider
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Clock className="w-6 h-6 text-[#f85c04] mr-3" />
                        <h3 className="text-2xl font-bold text-white">2014 - The Beginning</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        NexusByte was founded with a simple vision: to bridge the gap between complex technology and
                        everyday users. Starting as a small team of passionate IT professionals, we began serving local
                        businesses and residents in Sydney.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="NexusByte team in 2014"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Award className="w-6 h-6 text-[#f85c04] mr-3" />
                        <h3 className="text-2xl font-bold text-white">2018 - Expansion</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        As our reputation grew, so did our team and services. We expanded our offerings to include
                        cybersecurity, cloud solutions, and managed IT services, becoming a one-stop solution for all IT
                        needs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="NexusByte expanded office"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <Shield className="w-6 h-6 text-[#f85c04] mr-3" />
                        <h3 className="text-2xl font-bold text-white">2024 - Industry Leader</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Today, NexusByte stands as Sydney's premier IT service provider, trusted by hundreds of clients.
                        We continue to innovate and adapt to emerging technologies, ensuring our clients stay ahead of
                        the curve.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="NexusByte today"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-[#f85c04] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Reliability</h3>
                  <p className="text-gray-300">
                    We deliver consistent, dependable solutions that our clients can trust, ensuring their technology
                    works when they need it most.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <Lightbulb className="w-12 h-12 text-[#f85c04] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                  <p className="text-gray-300">
                    We stay at the forefront of technology trends, continuously learning and adapting to provide
                    cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <Heart className="w-12 h-12 text-[#f85c04] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Client-Centric</h3>
                  <p className="text-gray-300">
                    Every decision we make is guided by what's best for our clients. Your success is our success.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <Award className="w-12 h-12 text-[#f85c04] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                  <p className="text-gray-300">
                    We set high standards for ourselves and strive for perfection in every project we undertake.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-[#f85c04] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
                  <p className="text-gray-300">
                    We work closely with our clients as partners, understanding their unique needs and challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-[#f85c04] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                  <p className="text-gray-300">
                    We conduct business with honesty, transparency, and ethical practices in all our interactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose NexusByte?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover what sets us apart in Sydney's competitive IT landscape
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Sydney Expertise</h3>
                    <p className="text-gray-300">
                      Deep understanding of Sydney's business landscape and local IT challenges, with on-site support
                      available across the metropolitan area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Comprehensive Services</h3>
                    <p className="text-gray-300">
                      From basic computer repairs to complex network infrastructure, we offer a complete range of IT
                      services under one roof.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">
                      Round-the-clock monitoring and support ensures your systems stay operational when you need them
                      most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Certified Professionals</h3>
                    <p className="text-gray-300">
                      Our team holds industry certifications and stays current with the latest technologies and best
                      practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proactive Approach</h3>
                    <p className="text-gray-300">
                      We prevent problems before they occur through proactive monitoring, maintenance, and strategic
                      planning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                    <p className="text-gray-300">
                      Our solutions grow with your business, from startup to enterprise, ensuring long-term value and
                      flexibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Transparent Pricing</h3>
                    <p className="text-gray-300">
                      No hidden fees or surprise charges. We provide clear, upfront pricing so you know exactly what to
                      expect.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#f85c04] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">
                      Over 10 years of successful projects and satisfied clients across Sydney's residential and
                      business sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 bg-gradient-to-r from-[#001f3d] to-black">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your IT Experience?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied clients who trust NexusByte for their IT needs. Let's discuss how we can help
              your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#f85c04] hover:bg-[#e54d00] text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Get Your Free Consultation
              </a>
              <a
                href="tel:+61414082893"
                className="border-2 border-[#f85c04] text-[#f85c04] hover:bg-[#f85c04] hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                Call Now: (02) 8123 4567
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
