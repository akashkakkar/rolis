import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1B4D3E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/rolis/images/logo-white.png"
              alt="Roli&apos;s Boutique"
              width={120}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-300">
              Premium tailoring services and exquisite fabrics in Jaipur
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-[#C5A572]">
                Home
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-[#C5A572]">
                Services
              </Link>
              <Link href="#about" className="block text-gray-300 hover:text-[#C5A572]">
                About
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-[#C5A572]">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#C5A572] mt-1" />
                <p className="text-gray-300">
                  E-80, Parsvnath Narayan City,<br />
                  Jaipur, Rajasthan 302029
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C5A572]" />
                <a href="tel:+917858873420" className="text-gray-300 hover:text-[#C5A572]">
                  +91 78508 73420
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#C5A572]" />
                <a href="mailto:contact@rolis.site" className="text-gray-300 hover:text-[#C5A572]">
                  contact@rolis.site
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rolisjaipurfashion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://business.facebook.com/settings/people/61570570773168"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A572] hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Roli&apos;s Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

