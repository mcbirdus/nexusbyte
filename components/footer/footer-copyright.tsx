"use client"

export default function FooterCopyright() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"
  const currentYear = new Date().getFullYear()

  return (
    <div className="pt-8 text-center">
      <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
        © {currentYear} NexusByte. All Rights Reserved. Proudly serving Sydney and North Sydney.
      </p>
    </div>
  )
}
