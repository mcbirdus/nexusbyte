"use client"

import Link from "next/link"
import { Server, Wifi, Shield, ArrowRight } from "lucide-react"

export default function FooterBusinessServices() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Business Services</h4>
      <ul className="space-y-3">
        <li>
          <Link
            href="/services/business/managed-it"
            className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
          >
            <Server size={16} className="text-[#f85c04]" />
            <span className="text-sm">Managed IT Services</span>
          </Link>
        </li>
        <li>
          <Link
            href="/services/business/cloud-services"
            className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
          >
            <Wifi size={16} className="text-[#f85c04]" />
            <span className="text-sm">Cloud Services</span>
          </Link>
        </li>
        <li>
          <Link
            href="/services/business/cybersecurity"
            className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
          >
            <Shield size={16} className="text-[#f85c04]" />
            <span className="text-sm">Cybersecurity</span>
          </Link>
        </li>
        <li>
          <Link
            href="/services/business"
            className="flex items-center gap-2 text-[#f85c04] hover:underline transition-colors duration-300 mt-2"
          >
            <span className="text-sm">View All Business Services</span>
            <ArrowRight size={16} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
