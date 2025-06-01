"use client"

import { Menu } from "lucide-react"

interface MobileMenuToggleProps {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export default function MobileMenuToggle({ isMobileMenuOpen, toggleMobileMenu }: MobileMenuToggleProps) {
  return (
    <button
      data-mobile-toggle
      className="block lg:hidden text-white p-2 z-50 rounded-lg bg-[#f85c04] hover:bg-[#f85c04]/90 transition-colors duration-300 shadow-md"
      onClick={toggleMobileMenu}
      aria-label="Toggle mobile menu"
    >
      <Menu size={28} />
    </button>
  )
}
