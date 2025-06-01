"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { submitNewsletter } from "@/actions/submit-newsletter"

export default function FooterQuickLinks() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.trim())) {
        setSubmitStatus({
          success: false,
          message: "Please enter a valid email address.",
        })
        setIsSubmitting(false)
        return
      }

      // Call the server action to submit the newsletter subscription
      const result = await submitNewsletter({ email: email.trim() })

      setSubmitStatus(result)

      // Reset form if successful
      if (result.success) {
        setEmail("")
      }
    } catch (error) {
      console.error("Error submitting newsletter:", error)
      setSubmitStatus({
        success: false,
        message: "There was an error subscribing. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
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
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#f85c04] focus:ring-[#f85c04]"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#f85c04] hover:bg-[#f85c04]/90 text-white whitespace-nowrap px-6 py-2 sm:px-4"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {submitStatus && (
            <div
              className={`mt-4 p-3 rounded-lg ${submitStatus.success ? "bg-green-500/20 border border-green-500/50" : "bg-red-500/20 border border-red-500/50"}`}
            >
              <p className={`text-sm ${submitStatus.success ? "text-green-300" : "text-red-300"}`}>
                {submitStatus.message}
              </p>
            </div>
          )}
        </div>

        {/* Recognition of Traditional Lands */}
        <div
          className={`p-4 sm:p-6 rounded-lg border-2 border-[#f85c04]/50 text-center ${
            theme === "light" ? "bg-gray-50" : "bg-gray-800/50"
          }`}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">Recognition of Traditional Lands</h3>

          <div className="flex justify-center space-x-2 sm:space-x-4 mb-4">
            <Image
              src="/traditionallands/aboriginal-flag.png"
              alt="Aboriginal Flag"
              width={60}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto rounded-sm shadow-md"
            />
            <Image
              src="/traditionallands/torres-strait-island-flag.png"
              alt="Torres Strait Islander Flag"
              width={60}
              height={40}
              className="h-6 sm:h-8 md:h-10 w-auto rounded-sm shadow-md"
            />
          </div>

          <p
            className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-xs sm:text-sm md:text-base mx-auto leading-relaxed`}
          >
            NexusByte recognizes Aboriginal and Torres Strait Islander peoples as the Traditional Custodians of the land
            and extends its respect to their Elders, both past and present.
          </p>
        </div>
      </div>
    </div>
  )
}
