"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Linkedin, Mail, Award, Star } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Maia Parsenjk",
      role: "Sr. I.T Consultant",
      image: "/team/maia.png",
      description:
        "Expert in enterprise I.T solutions and strategic technology consulting for businesses across Sydney.",
      specialties: ["Enterprise Solutions", "Strategic Planning", "Technology Consulting"],
      experience: "6+ Years",
    },
    {
      name: "Laith Alawneh",
      role: "Sr. Full Stack Developer",
      image: "/team/laith.png",
      description: "Leading our development team with expertise in modern web technologies and software architecture.",
      specialties: ["Full Stack Development", "Software Architecture", "Team Leadership"],
      experience: "8+ Years",
    },
    {
      name: "Natalie Wagner",
      role: "Sr. Technical Support",
      image: "/team/natalie.png",
      description: "Providing professional and exceptional technical support and ensuring seamless I.T operations for our clients.",
      specialties: ["Technical Support", "System Administration", "Client Relations"],
      experience: "3+ Years",
    },
    {
      name: "Joseph Kelany",
      role: "Sr. ICT Manager",
      image: "/team/joseph.png",
      description: "Managing complex ICT infrastructure and ensuring optimal performance for enterprise clients.",
      specialties: ["ICT Management", "Infrastructure Design", "Network Security"],
      experience: "6+ Years",
    },
  ]

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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Meet Our <span className="text-[#f85c04]">Expert Team</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Our certified professionals bring years of experience and expertise to deliver exceptional I.T solutions
            for businesses and homes across Sydney.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative reveal fade-bottom"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Main Card */}
              <div className="bg-[#001f3d]/20 rounded-3xl p-6 border border-white/10 hover:border-[#f85c04]/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                {/* Profile Image Container */}
                <div className="relative mb-6">
                  <div className="relative w-32 h-32 mx-auto">
                    {/* Modern Floating Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f85c04]/20 to-[#ff7a1a]/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-[#f85c04]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#f85c04]/25">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001f3d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Modern Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] rounded-full p-2 shadow-lg group-hover:scale-110 transition-all duration-300 border-2 border-white/20">
                      <Star size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  {/* Name & Role */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#f85c04] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#f85c04] font-medium text-sm">{member.role}</p>
                  </div>

                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#f85c04]/20 px-3 py-1 rounded-full border border-[#f85c04]/30">
                    <Award size={14} className="text-[#f85c04]" />
                    <span className="text-[#f85c04] text-sm font-medium">{member.experience}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold text-sm">Specialties:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs border border-white/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                    <button className="bg-[#f85c04]/20 hover:bg-[#f85c04] p-2 rounded-lg transition-all duration-300 group/btn">
                      <Mail size={16} className="text-[#f85c04] group-hover/btn:text-white" />
                    </button>
                    <button className="bg-[#f85c04]/20 hover:bg-[#f85c04] p-2 rounded-lg transition-all duration-300 group/btn">
                      <Linkedin size={16} className="text-[#f85c04] group-hover/btn:text-white" />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#f85c04]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f85c04]/20 to-[#ff7a1a]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal fade-bottom max-w-4xl mx-auto">
          <div className="bg-[#001f3d]/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work with Our <span className="text-[#f85c04]">Expert Team</span>?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our experienced professionals are ready to provide you with exceptional I.T solutions tailored to your
              specific needs. Contact us today for a free consultation.
            </p>
            <button className="bg-gradient-to-r from-[#f85c04] to-[#ff7a1a] hover:from-[#f85c04]/90 hover:to-[#ff7a1a]/90 text-white py-3 px-8 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
