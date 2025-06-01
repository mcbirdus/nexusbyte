import { CheckCircle, Award, Clock, Users, Shield, Zap } from "lucide-react"

export default function About() {
  const achievements = [
    { icon: Users, label: "920+ Active Clients", value: "920+", color: "from-blue-500 to-blue-600" },
    { icon: Award, label: "Industry Certified", value: "15+", color: "from-green-500 to-green-600" },
    { icon: Clock, label: "Years Experience", value: "11+", color: "from-purple-500 to-purple-600" },
    { icon: CheckCircle, label: "Success Rate", value: "99.9%", color: "from-[#f85c04] to-[#ff7a1a]" },
  ]

  const certifications = [
    "Microsoft Certified Solutions Expert",
    "Cisco Certified Network Associate",
    "CompTIA Security+",
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "VMware Certified Professional",
  ]

  const features = [
    {
      icon: Shield,
      title: "Expert Team",
      description:
        "Our certified professionals bring years of experience and industry-leading expertise to every project.",
    },
    {
      icon: Users,
      title: "Local Focus",
      description:
        "Based in McMahons Point, we provide personalized service to clients across Sydney and surrounding areas.",
    },
    {
      icon: Zap,
      title: "24/7 Support",
      description: "Round-the-clock emergency support ensures your technology is always running when you need it most.",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

      <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal fade-bottom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose <span className="text-[#f85c04]">NexusByte</span>?
          </h2>
          <p className="text-gray-300 text-lg">
            As Sydney's premier I.T services provider, NexusByte combines cutting-edge technology expertise with
            personalized service to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#001f3d]/20 rounded-2xl p-6 border border-white/10 hover:border-[#f85c04]/50 transition-all duration-300 hover:transform hover:scale-105 reveal fade-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#f85c04]/20 p-3 rounded-xl">
                    <feature.icon className="h-6 w-6 text-[#f85c04]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="bg-[#001f3d]/30 rounded-2xl p-6 border border-white/10 reveal fade-bottom">
              <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                <Award className="w-6 h-6 mr-3 text-[#f85c04]" />
                Industry Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <span className="text-sm font-medium text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Service Areas */}
          <div className="space-y-8">
            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-[#001f3d]/20 rounded-2xl p-6 text-center border border-white/10 hover:border-[#f85c04]/50 transition-all duration-300 hover:transform hover:scale-105 reveal fade-bottom"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-[#f85c04]/20 p-3 rounded-xl inline-flex items-center justify-center mb-4">
                    <achievement.icon className="h-6 w-6 text-[#f85c04]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.value}</h3>
                  <p className="text-gray-300 text-sm">{achievement.label}</p>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-[#001f3d]/20 rounded-2xl border border-white/10 overflow-hidden reveal fade-bottom">
              <div className="bg-[#f85c04]/20 p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Users className="w-6 h-6 mr-3 text-[#f85c04]" />
                  Service Areas
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  We proudly serve clients throughout Sydney and surrounding suburbs within a 30km radius of Sydney CBD,
                  including:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "North Sydney",
                    "Chatswood",
                    "Parramatta",
                    "Bondi",
                    "Manly",
                    "Sutherland",
                    "Penrith",
                    "Campbelltown",
                    "Liverpool",
                    "Bankstown",
                    "Hornsby",
                    "Cronulla",
                    "Randwick",
                    "Burwood",
                    "Hurstville",
                    "Miranda",
                    "Caringbah",
                    "Engadine",
                    "Castle Hill",
                    "Rouse Hill"
                    "Richmond",
                    "Blacktown",
                    "Mount Druitt",
                    "Emu Plains",
                    "Glenmore Park",
                    "Kingswood",
                    "Emu Heights",
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20 text-center hover:scale-110 hover:bg-white/20 hover:border-[#f85c04]/50 transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center">Serving Sydney & 30km radius</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
