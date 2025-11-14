"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zentrek" width={100} height={60} />
            {/* <span className="font-bold text-lg text-white hidden sm:inline">Zentrek</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-white hover:text-secondary transition">
              Home
            </a>
            <a href="#about" className="text-sm text-white hover:text-secondary transition">
              About
            </a>
            <a href="#tours" className="text-sm text-white hover:text-secondary transition">
              Tours
            </a>
            <a href="#gallery" className="text-sm text-white hover:text-secondary transition">
              Gallery
            </a>
            <a href="#contact" className="text-sm text-white hover:text-secondary transition">
              Contact
            </a>
            <button className="bg-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-slate-700/80 backdrop-blur-md">
            <a href="#home" className="block text-sm text-white hover:text-secondary py-2">
              Home
            </a>
            <a href="#about" className="block text-sm text-white hover:text-secondary py-2">
              About
            </a>
            <a href="#tours" className="block text-sm text-white hover:text-secondary py-2">
              Tours
            </a>
            <a href="#gallery" className="block text-sm text-white hover:text-secondary py-2">
              Gallery
            </a>
            <a href="#contact" className="block text-sm text-white hover:text-secondary py-2">
              Contact
            </a>
            <button className="w-full bg-secondary text-white px-6 py-2 rounded-lg text-sm font-semibold">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
