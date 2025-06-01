"use client"

import { useMobileMenu } from "@/hooks/use-mobile-menu"
import { useHeaderScroll } from "@/hooks/use-header-scroll"
import HeaderLogo from "@/components/header/header-logo"
import DesktopNavigation from "@/components/header/desktop-navigation"
import DesktopActions from "@/components/header/desktop-actions"
import MobileMenuToggle from "@/components/header/mobile-menu-toggle"
import MobileMenu from "@/components/header/mobile-menu"

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen, activeSubmenu, toggleSubmenu, toggleMobileMenu } = useMobileMenu()
  const { isScrolled } = useHeaderScroll()

  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
          theme === "light" ? "bg-white" : "bg-[#001f3d]"
        } shadow-md ${isMobileMenuOpen ? "lg:block hidden" : ""}`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <HeaderLogo />

            <div className="flex items-center gap-3">
              {/* Desktop Navigation */}
              <DesktopNavigation toggleSubmenu={toggleSubmenu} />

              {/* Desktop Actions (only visible on desktop) */}
              <div className="hidden lg:block">
                <DesktopActions />
              </div>

              {/* Mobile Menu Toggle */}
              <MobileMenuToggle isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        activeSubmenu={activeSubmenu}
        toggleSubmenu={toggleSubmenu}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </>
  )
}
