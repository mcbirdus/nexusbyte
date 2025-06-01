import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | NexusByte Blog",
    default: "NexusByte Blog - Latest I.T. Insights & Technology News",
  },
  description:
    "Stay updated with the latest technology trends, I.T. tips, cybersecurity insights, and industry news from NexusByte's expert team in Sydney.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
