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

  // Helper to generate className for dropdown links
  const getDropdownLinkClassName = (href: string) => {
    const isActive = pathname === href
    // Base classes for all dropdown links, including default text color and hover effects
    let classes = "block py-2 px-3 rounded-md transition-colors duration-300 relative text-gray-100 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-[#001f3d]/80 dark:hover:text-gray-100"
    // Note: dark:hover:bg-[#001f3d]/80 is a slightly more opaque hover than original /60 for better visibility on solid #001f3d

    if (isActive) {
      // Active state classes: specific background, text color, and font weight.
      // Also ensures active text color is maintained on hover.
      classes += " bg-gray-100 dark:bg-[#001f3d]/60 text-[#f85c04] font-medium hover:text-[#f85c04] dark:hover:text-[#f85c04]"
    }
    return classes
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

        {/* UPDATED: Dropdown background changed from bg-white dark:bg-[#001f3d] to bg-[#001f3d] */}
        <div className="absolute left-0 mt-2 w-80 bg-[#001f3d] rounded-md shadow-lg overflow-hidden transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-50">
          <div className="p-4">
            {/* UPDATED: className for links now uses getDropdownLinkClassName for consistent styling */}
            <Link
              href="/services/business"
              className={getDropdownLinkClassName("/services/business")}
            >
              <span>Business I.T Services</span>
            </Link>
            <Link
              href="/services/home"
              className={getDropdownLinkClassName("/services/home")}
            >
              <span>Home I.T Services</span>
            </Link>
            <Link
              href="/services/software-development"
              className={getDropdownLinkClassName("/services/software-development")}
            >
              <span>Software Development</span>
            </Link>
            <Link
              href="/services/computer-repairs"
              className={getDropdownLinkClassName("/services/computer-repairs")}
            >
              <span>Computer Repairs</span>
            </Link>
            <Link
              href="/services/networking-cybersecurity"
              className={getDropdownLinkClassName("/services/networking-cybersecurity")}
            >
              <span>Networking & Cybersecurity</span>
            </Link>
            <Link
              href="/services/data-management"
              className={getDropdownLinkClassName("/services/data-management")}
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
