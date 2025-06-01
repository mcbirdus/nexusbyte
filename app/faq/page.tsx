import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - NexusByte",
  description: "Find answers to common questions about NexusByte's IT services, support, and solutions in Sydney.",
}

export default function FAQPage() {
  return <FAQClientPage />
}
