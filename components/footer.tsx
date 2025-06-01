import FooterNewsletter from "@/components/footer/footer-newsletter"
import FooterContactInfo from "@/components/footer/footer-contact-info"
import FooterBusinessServices from "@/components/footer/footer-business-services"
import FooterHomeServices from "@/components/footer/footer-home-services"
import FooterQuickLinks from "@/components/footer/footer-quick-links"
import FooterCopyright from "@/components/footer/footer-copyright"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001f3d] to-black z-0"></div>

      <div className="relative max-w-full mx-auto p-4 sm:p-6 lg:p-8 z-10">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 lg:p-16">
            {/* Logo Section - First Section */}
            <div className="pb-8 border-b border-white/10 mb-8">
              <div className="col-span-1 w-full">
                <Link href="/">
                  <Image
                    src="/images/nexusbyte-logo.png"
                    alt="NexusByte Logo"
                    width={180}
                    height={60}
                    className="h-20 w-auto mb-4"
                  />
                </Link>
                {/* Full-width paragraph wrapper */}
                <div className="w-full px-4 md:px-8 lg:px-8 -mx-4 md:-mx-8 lg:-mx-8">
                  <p className="text-gray-300 mb-6 w-full">
                    NexusByte Networking provides comprehensive network solutions for homes and businesses in Sydney.
                    Our experienced technicians specialize in reliable Wi-Fi installations, seamless network setups, and
                    professional data cabling services. We prioritize delivering efficient and high-quality
                    connectivity, ensuring your network is optimized for performance and security.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#f85c04] hover:text-[#f85c04]/80 transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-[#f85c04] hover:text-[#f85c04]/80 transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-[#f85c04] hover:text-[#f85c04]/80 transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-[#f85c04] hover:text-[#f85c04]/80 transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <FooterNewsletter />

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 justify-items-center max-w-5xl mx-auto">
              {/* Contact Info */}
              <div>
                <FooterContactInfo />
              </div>

              {/* Business Services */}
              <div>
                <FooterBusinessServices />
              </div>

              {/* Home Services */}
              <div>
                <FooterHomeServices />
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
                    >
                      <ArrowRight size={16} className="text-[#f85c04]" />
                      <span className="text-sm">About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
                    >
                      <ArrowRight size={16} className="text-[#f85c04]" />
                      <span className="text-sm">Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
                    >
                      <ArrowRight size={16} className="text-[#f85c04]" />
                      <span className="text-sm">Contact Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
                    >
                      <ArrowRight size={16} className="text-[#f85c04]" />
                      <span className="text-sm">Privacy Policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
                    >
                      <ArrowRight size={16} className="text-[#f85c04]" />
                      <span className="text-sm">Terms of Service</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/developer"
                      className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
                    >
                      <ArrowRight size={16} className="text-[#f85c04]" />
                      <span className="text-sm">Developer</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 pt-8 border-t border-white/10 mt-8">
              <FooterQuickLinks />
            </div>

            {/* Copyright */}
            <FooterCopyright />
          </div>
        </div>
      </div>
    </footer>
  )
}
