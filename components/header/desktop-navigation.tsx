"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

interface DesktopNavigationProps {
  toggleSubmenu: (menu: string) => void
}

export default function DesktopNavigation({ toggleSubmenu }: DesktopNavigationProps) {
  const pathname = usePathname()

  // Check if the current path starts with a certain prefix
  const isPathActive = (prefix: string) => {
    return pathname.startsWith(prefix)
  }

  // Check if the current path is exactly a certain path
  const isExactPathActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="hidden lg:flex items-center space-x-8 mr-8">
      <Link
        href="/"
        className={`text-${
          isExactPathActive("/") ? "[#f85c04]" : "white"
        } hover:text-[#f85c04] transition-colors duration-300 relative py-2 ${isExactPathActive("/") ? "font-medium" : ""}`}
      >
        Home
      </Link>

      {/* Services Dropdown */}
      <div className="relative group">
        <button
          className={`flex items-center ${
            isPathActive("/services") ? "text-[#f85c04] font-medium" : "text-white"
          } hover:text-[#f85c04] transition-colors duration-300 gap-1 py-2 relative`}
          onClick={() => toggleSubmenu("services")}
        >
          <span>Services</span>
          <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
        </button>

        <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-[#001f3d] rounded-md shadow-lg overflow-hidden transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-50">
          <div className="p-4">
            <Link
              href="/services/business"
              className={`block py-2 px-3 hover:bg-gray-100 dark:hover:bg-[#001f3d]/60 rounded-md transition-colors duration-300 relative ${
                pathname === "/services/business" ? "bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium" : ""
              }`}
            >
              <span>Business I.T Services</span>
            </Link>
            <Link
              href="/services/home"
              className={`block py-2 px-3 hover:bg-gray-100 dark:hover:bg-[#001f3d]/60 rounded-md transition-colors duration-300 relative ${
                pathname === "/services/home" ? "bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium" : ""
              }`}
            >
              <span>Home I.T Services</span>
            </Link>
            <Link
              href="/services/software-development"
              className={`block py-2 px-3 hover:bg-gray-100 dark:hover:bg-[#001f3d]/60 rounded-md transition-colors duration-300 relative ${
                pathname === "/services/software-development"
                  ? "bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium"
                  : ""
              }`}
            >
              <span>Software Development</span>
            </Link>
            <Link
              href="/services/computer-repairs"
              className={`block py-2 px-3 hover:bg-gray-100 dark:hover:bg-[#001f3d]/60 rounded-md transition-colors duration-300 relative ${
                pathname === "/services/computer-repairs"
                  ? "bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium"
                  : ""
              }`}
            >
              <span>Computer Repairs</span>
            </Link>
            <Link
              href="/services/networking-cybersecurity"
              className={`block py-2 px-3 hover:bg-gray-100 dark:hover:bg-[#001f3d]/60 rounded-md transition-colors duration-300 relative ${
                pathname === "/services/networking-cybersecurity"
                  ? "bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium"
                  : ""
              }`}
            >
              <span>Networking & Cybersecurity</span>
            </Link>
            <Link
              href="/services/data-management"
              className={`block py-2 px-3 hover:bg-gray-100 dark:hover:bg-[#001f3d]/60 rounded-md transition-colors duration-300 relative ${
                pathname === "/services/data-management"
                  ? "bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium"
                  : ""
              }`}
            >
              <span>Data Management & Recovery</span>
            </Link>
          </div>
        </div>
      </div>

      <Link
        href="/blog"
        className={`text-${
          isExactPathActive("/blog") ? "[#f85c04]" : "white"
        } hover:text-[#f85c04] transition-colors duration-300 relative py-2 ${
          isExactPathActive("/blog") ? "font-medium" : ""
        }`}
      >
        Blog
      </Link>

      <Link
        href="/faq"
        className={`text-${
          isExactPathActive("/faq") ? "[#f85c04]" : "white"
        } hover:text-[#f85c04] transition-colors duration-300 relative py-2 ${
          isExactPathActive("/faq") ? "font-medium" : ""
        }`}
      >
        FAQ
      </Link>

      <Link
        href="/about"
        className={`text-${
          isExactPathActive("/about") ? "[#f85c04]" : "white"
        } hover:text-[#f85c04] transition-colors duration-300 relative py-2 ${
          isExactPathActive("/about") ? "font-medium" : ""
        }`}
      >
        About Us
      </Link>

      <Link
        href="/contact"
        className={`text-${
          isExactPathActive("/contact") ? "[#f85c04]" : "white"
        } hover:text-[#f85c04] transition-colors duration-300 relative py-2 ${
          isExactPathActive("/contact") ? "font-medium" : ""
        }`}
      >
        Contact Us
      </Link>
    </nav>
  )
}
