"use client"

import { useEffect } from "react"

export default function DetailedServices() {
  const services = [
    {
      icon: "/icons/pc-tower.webp",
      title: "Apple Mac Computer Repairs",
      description:
        "Professional Apple Mac repair services in Sydney. Our certified technicians provide fast, reliable Mac computer repairs and support for all Apple devices:",
      features: [
        "MacOS troubleshooting and system repairs",
        "Mac performance optimization and speed improvements",
        "Mac SSD and RAM upgrade installations",
        "Mac system updates and software installations",
        "Mac virus removal and security setup",
        "Mac data recovery and backup solutions",
      ],
    },
    {
      icon: "/icons/pc-tower.webp",
      title: "Computer Repair Services",
      description:
        "Expert computer and laptop repair services in Sydney. We fix all computer issues quickly and affordably, getting your devices back to optimal performance:",
      features: [
        "Desktop and laptop computer repairs Sydney",
        "Virus removal and malware protection services",
        "Slow computer performance troubleshooting",
        "Computer won't start diagnostic and repair",
        "RAM, SSD, and hard drive upgrade services",
        "New computer setup and data transfer",
      ],
    },
    {
      icon: "/icons/hand-touching-tablet-screen.webp",
      title: "iPad and Tablet Repair",
      description:
        "Professional iPad and tablet repair services in Sydney. We service all major brands including Apple iPad, Samsung Galaxy tablets, and other Android devices:",
      features: [
        "iPad screen repair and replacement services",
        "Tablet software troubleshooting and updates",
        "WiFi connectivity and network setup",
        "Tablet performance optimization services",
        "App installation and configuration support",
        "Tablet data recovery and backup services",
      ],
    },
    {
      icon: "/icons/privacy.webp",
      title: "Data Backup and Recovery",
      description:
        "Comprehensive data backup and recovery services in Sydney. Protect your valuable business and personal data with our professional backup solutions:",
      features: [
        "Cloud backup setup - Google Drive, Dropbox, iCloud",
        "Automated data backup system installation",
        "Hard drive data recovery services Sydney",
        "Local network backup solutions",
        "Business data protection and compliance",
        "Emergency data recovery and restoration",
      ],
    },
    {
      icon: "/icons/printing.webp",
      title: "Printer Setup and Repair",
      description:
        "Professional printer and scanner setup services in Sydney. We install, configure, and repair all printer brands for home and business use:",
      features: [
        "Wireless printer setup and installation",
        "Network printer configuration for offices",
        "Printer driver installation and updates",
        "Scanner setup and document management",
        "Printer troubleshooting and repair services",
        "Multi-function printer optimization",
      ],
    },
    {
      icon: "/icons/privacy.webp",
      title: "Cybersecurity Services",
      description:
        "Advanced cybersecurity and privacy protection services in Sydney. Secure your devices and networks from cyber threats with our expert security solutions:",
      features: [
        "Antivirus software installation and management",
        "Network security assessment and hardening",
        "Privacy settings configuration and optimization",
        "Security software updates and monitoring",
        "Firewall setup and network protection",
        "Cybersecurity training and best practices",
      ],
    },
    {
      icon: "/icons/speedometer.webp",
      title: "WiFi Network Setup",
      description:
        "Professional WiFi and networking services in Sydney. Get fast, reliable internet connectivity for your home or business with our expert network solutions:",
      features: [
        "Home WiFi network setup and optimization",
        "Business network installation and configuration",
        "Slow internet troubleshooting and speed optimization",
        "WiFi range extension and signal boosting",
        "Network security and password protection",
        "Router setup and firmware updates",
      ],
    },
    {
      icon: "/icons/social-media.webp",
      title: "Photo and Media Management",
      description:
        "Professional photo and media management services in Sydney. Organize, backup, and share your digital memories safely across all your devices:",
      features: [
        "Cloud photo backup and synchronization",
        "Photo organization and album management",
        "Media sharing setup across devices",
        "Digital photo restoration services",
        "Video file management and storage",
        "Social media photo integration",
      ],
    },
    {
      icon: "/icons/speedometer.webp",
      title: "NBN Internet Setup",
      description:
        "Professional NBN and internet setup services in Sydney. Get connected with fast, reliable internet for your home or business with expert installation:",
      features: [
        "NBN installation and modem setup",
        "Business internet connection services",
        "Unlimited internet plan configuration",
        "VoIP phone system installation",
        "Internet speed testing and optimization",
        "Network troubleshooting and support",
      ],
    },
    {
      icon: "/icons/social-media.webp",
      title: "Email Setup and Support",
      description:
        "Professional email setup and management services in Sydney. Get your email working perfectly across all devices with our expert email solutions:",
      features: [
        "Business email setup and configuration",
        "Email client installation (Outlook, Gmail, Apple Mail)",
        "Email backup and recovery services",
        "New email account creation and migration",
        "Email security and spam protection",
        "Mobile email synchronization setup",
      ],
    },
    {
      icon: "/icons/tv-smart-home.webp",
      title: "Smart TV and Home Automation",
      description:
        "Professional smart TV and home automation services in Sydney. Transform your home with connected devices and smart technology solutions:",
      features: [
        "Smart TV setup and streaming configuration",
        "Google Home and Apple HomeKit installation",
        "Smart home device integration and automation",
        "Home security system setup and monitoring",
        "Voice assistant configuration and training",
        "Smart lighting and climate control installation",
      ],
    },
    {
      icon: "/icons/website.webp",
      title: "Website Design and Development",
      description:
        "Professional website design and development services in Sydney. Build a powerful online presence with our custom web solutions and digital marketing:",
      features: [
        "Custom responsive website design and development",
        "WordPress website creation and management",
        "SEO optimization and Google ranking improvement",
        "Website hosting and maintenance services",
        "E-commerce website development and setup",
        "Website security and performance optimization",
      ],
    },
  ]

  useEffect(() => {
    // Reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on load with a short delay for page load animations
    setTimeout(() => {
      handleScroll()
    }, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
