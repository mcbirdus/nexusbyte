"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HeaderLogo() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"
  const [imageError, setImageError] = useState(false)

  // Using local images from the public folder with correct paths
  const darkThemeLogo = "/images/nexusbyte-logo.png"
  const lightThemeLogo = "/images/nexusbyte-logo.png"

  // Select the appropriate logo based on theme
  const logoSrc = theme === "dark" ? darkThemeLogo : lightThemeLogo

  return (
    <Link href="/" className="relative z-10">
      {!imageError ? (
        <Image
          src={logoSrc || "/placeholder.svg"}
          alt="NexusByte Logo"
          width={180}
          height={60}
          className="h-20 w-auto transition-all duration-300"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-2xl font-bold text-[#f85c04]">NexusByte</span>
      )}
    </Link>
  )
}
