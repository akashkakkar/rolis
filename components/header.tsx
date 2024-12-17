'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/rolis/images/logo.png"
              alt="Roli's Boutique"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors">
              About
            </Link>
            <Link href="#gallery" className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#1B4D3E]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1B4D3E]" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 pb-6">
              <Link
                href="/"
                className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#gallery"
                className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-[#1B4D3E] hover:text-[#C5A572] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

