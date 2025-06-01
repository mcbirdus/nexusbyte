"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeaderLogo from "./header-logo"
import { Phone } from "lucide-react"

interface MobileMenuProps {
  isMobileMenuOpen: boolean
  activeSubmenu: string | null
  toggleSubmenu: (menu: string) => void
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export default function MobileMenu({
  isMobileMenuOpen,
  activeSubmenu,
  toggleSubmenu,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  const pathname = usePathname()

  // Check if the current path includes a service
  const isServiceActive = (path: string) => {
    return pathname.includes(path)
  }

  // Check if the current path is exactly a certain path
  const isExactPathActive = (path: string) => {
    return pathname === path
  }

  return (
    <div
      data-mobile-menu
      className={`
        fixed inset-0 bg-[#001f3d] z-40 lg:hidden
        overflow-y-auto transition-transform duration-300 shadow-lg
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, height: "100vh" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center border-b border-white/10 mb-4">
        <HeaderLogo />
        <div className="flex items-center gap-3">
          <button
            data-mobile-toggle
            className="text-white p-2 rounded-lg bg-[#f85c04] hover:bg-[#f85c04]/90 transition-colors duration-300 shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-2">
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`text-${
            isExactPathActive("/") ? "[#f85c04]" : "white"
          } py-3 px-5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-xl relative ${
            isExactPathActive("/") ? "font-semibold" : ""
          }`}
        >
          Home
        </Link>

        <div className="rounded-lg overflow-hidden">
          <button
            className={`flex items-center justify-between w-full ${
              isServiceActive("/services") ? "text-[#f85c04] font-semibold" : "text-white"
            } py-3 px-5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-xl relative`}
            onClick={() => toggleSubmenu("services")}
          >
            <div className="relative w-full flex justify-between items-center">
              <span>Services</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${activeSubmenu === "services" ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {activeSubmenu === "services" && (
            <div className="pl-5 mt-2 space-y-2 border-l-2 border-white/20 ml-5 py-2">
              <Link
                href="/services/business"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 ${
                  isServiceActive("/services/business") ? "text-[#f85c04] font-semibold" : "text-white"
                } hover:bg-white/10 rounded-lg transition-colors duration-300 text-lg relative`}
              >
                Business I.T Services
              </Link>
              <Link
                href="/services/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 ${
                  isServiceActive("/services/home") ? "text-[#f85c04] font-semibold" : "text-white"
                } hover:bg-white/10 rounded-lg transition-colors duration-300 text-lg relative`}
              >
                Home I.T Services
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/blog"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`text-${
            isExactPathActive("/blog") ? "[#f85c04]" : "white"
          } py-3 px-5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-xl relative ${
            isExactPathActive("/blog") ? "font-semibold" : ""
          }`}
        >
          Blog
        </Link>

        <Link
          href="/faq"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`text-${
            isExactPathActive("/faq") ? "[#f85c04]" : "white"
          } py-3 px-5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-xl relative ${
            isExactPathActive("/faq") ? "font-semibold" : ""
          }`}
        >
          FAQ
        </Link>

        <Link
          href="/about"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`text-${
            isExactPathActive("/about") ? "[#f85c04]" : "white"
          } py-3 px-5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-xl relative ${
            isExactPathActive("/about") ? "font-semibold" : ""
          }`}
        >
          About Us
        </Link>

        <Link
          href="/contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`text-${
            isExactPathActive("/contact") ? "[#f85c04]" : "white"
          } py-3 px-5 rounded-lg hover:bg-white/10 transition-colors duration-300 text-xl relative ${
            isExactPathActive("/contact") ? "font-semibold" : ""
          }`}
        >
          Contact Us
        </Link>

        <div className="pt-4 mt-2 border-t border-white/20">
          <Button className="w-full flex justify-center py-4 rounded-lg bg-[#f85c04] hover:bg-[#f85c04]/90 text-white">
            <a href="tel:0289597284" className="flex items-center gap-2">
              <Phone className="animate-pulse" size={20} />
              <span>02 8959 7284</span>
            </a>
          </Button>
        </div>
      </nav>
    </div>
  )
}
