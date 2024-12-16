'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormStatus('submitted')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for consultations, appointments, or any inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#1B4D3E] mb-4">Visit Our Store</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#C5A572] mt-1" />
                  <p className="text-gray-600">
                    E-80, Parsvnath Narayan City,<br />
                    Jaipur, Rajasthan 302029
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#C5A572]" />
                  <a href="tel:+917858873420" className="text-gray-600 hover:text-[#C5A572]">
                    +91 78508 73420
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#C5A572]" />
                  <a href="mailto:contact@rolis.site" className="text-gray-600 hover:text-[#C5A572]">
                    contact@rolis.site
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#1B4D3E] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/rolisjaipurfashion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A572] hover:text-[#1B4D3E]"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://business.facebook.com/settings/people/61570570773168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A572] hover:text-[#1B4D3E]"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                required
                className="border-[#1B4D3E]/20 focus:border-[#C5A572]"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                required
                className="border-[#1B4D3E]/20 focus:border-[#C5A572]"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Your Phone"
                required
                className="border-[#1B4D3E]/20 focus:border-[#C5A572]"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                required
                className="border-[#1B4D3E]/20 focus:border-[#C5A572] min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1B4D3E] hover:bg-[#C5A572] text-white"
              disabled={formStatus !== 'idle'}
            >
              {formStatus === 'idle' && 'Send Message'}
              {formStatus === 'submitting' && 'Sending...'}
              {formStatus === 'submitted' && 'Message Sent!'}
            </Button>
          </form>
        </div>

        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2907923872544!2d75.7518287!3d26.9241199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5196574939f%3A0x4e7a04b9df6a2a99!2sParsvnath%20Narayan%20City!5e0!3m2!1sen!2sin!4v1639913645167!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

