"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function FooterQuickLinks() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter submission here
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <div className="pt-12 pb-8 border-b border-gray-300/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Newsletter Section */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Stay Connected</h3>
          <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} mb-6`}>
            Join our newsletter for the latest updates and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Button type="submit" className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Recognition of Traditional Lands */}
        <div
          className={`p-6 rounded-lg border-2 border-[#f85c04]/50 text-center ${
            theme === "light" ? "bg-gray-50" : "bg-gray-800/50"
          }`}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">Recognition of Traditional Lands</h3>

          <div className="flex justify-center space-x-4 mb-4">
            <Image
              src="/traditionallands/aboriginal-flag.png"
              alt="Aboriginal Flag"
              width={60}
              height={40}
              className="h-8 md:h-10 w-auto rounded-sm shadow-md"
            />
            <Image
              src="/traditionallands/torres-strait-island-flag.png"
              alt="Torres Strait Islander Flag"
              width={60}
              height={40}
              className="h-8 md:h-10 w-auto rounded-sm shadow-md"
            />
          </div>

          <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-sm md:text-base mx-auto`}>
            NexusByte recognizes Aboriginal and Torres Strait Islander peoples as the Traditional Custodians of the land
            and extends its respect to their Elders, both past and present.
          </p>
        </div>
      </div>
    </div>
  )
}
