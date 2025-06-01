"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function FooterContactInfo() {
  // Since we don't have a theme context, we'll default to dark theme
  const theme = "dark"

  return (
    <div>
      <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
      <ul className="space-y-3">
        <li>
          <div className="flex items-center">
            <Phone size={16} className="text-[#f85c04] mr-2 flex-shrink-0" />
            <div>
              <span className="text-sm text-white">02 8959 7284</span>
              <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                Mon-Fri, 8:30am-5:30pm
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <Mail size={16} className="text-[#f85c04] mr-2 flex-shrink-0" />
            <div>
              <span className="text-sm text-white">info@nexusbyte.com.au</span>
              <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>24/7 Online Support</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-start">
            <MapPin size={16} className="text-[#f85c04] mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-sm text-white">28 Blues Point Road</span>
              <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                McMahons Point NSW 2060
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <Clock size={16} className="text-[#f85c04] mr-2 flex-shrink-0" />
            <div>
              <span className="text-sm text-white">Business Hours</span>
              <p className={`text-xs ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                Monday-Friday: 8:30am-5:30pm
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
