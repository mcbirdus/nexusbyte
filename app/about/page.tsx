import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - NexusByte",
  description:
    "Learn about NexusByte, Sydney's leading IT service provider. Discover our mission, vision, and core values.",
}

export default function AboutPage() {
  return <AboutClientPage />
}
