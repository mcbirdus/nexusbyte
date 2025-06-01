"use client"

import { Phone } from "lucide-react"

export default function DesktopActions() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"

  return (
    <div className="flex items-center space-x-5">
      <a
        href="tel:0289597284"
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full 
          transition-all duration-300 hover:scale-105
          bg-[#f85c04] text-white
          relative overflow-hidden group
        `}
      >
        <span className="absolute inset-0 bg-[#f85c04]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        <Phone size={18} className="animate-pulse relative z-10" />
        <span className="font-medium relative z-10">02 8959 7284</span>
      </a>
    </div>
  )
}
