"use client"

import Link from "next/link"
import { Home, Shield, Wifi, ArrowRight } from "lucide-react"

export default function FooterHomeServices() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Home Services</h4>
      <ul className="space-y-3">
        <li>
          <Link
            href="/services/home/home-network-setup"
            className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
          >
            <Home size={16} className="text-[#f85c04]" />
            <span className="text-sm">Home Network Setup</span>
          </Link>
        </li>
        <li>
          <Link
            href="/services/home/virus-malware-removal"
            className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
          >
            <Shield size={16} className="text-[#f85c04]" />
            <span className="text-sm">Malware Removal</span>
          </Link>
        </li>
        <li>
          <Link
            href="/services/home/computer-repair"
            className="flex items-center gap-2 hover:text-[#f85c04] transition-colors duration-300 text-white"
          >
            <Wifi size={16} className="text-[#f85c04]" />
            <span className="text-sm">Computer Repair</span>
          </Link>
        </li>
        <li>
          <Link
            href="/services/home"
            className="flex items-center gap-2 text-[#f85c04] hover:underline transition-colors duration-300 mt-2"
          >
            <span className="text-sm">View All Home Services</span>
            <ArrowRight size={16} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
