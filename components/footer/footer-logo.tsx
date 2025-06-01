"use client"
import { useState } from "react"

export default function FooterLogo() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"
  const [imageError, setImageError] = useState(false)

  // Using local images from the public folder with correct paths
  const darkThemeLogo = "/images/nexusbyte-logo.png"
  const lightThemeLogo = "/images/nexusbyte-logo.png"

  // Select the appropriate logo based on theme
  const logoSrc = theme === "dark" ? darkThemeLogo : lightThemeLogo

  return null
}
