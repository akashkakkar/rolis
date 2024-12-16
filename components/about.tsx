import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="/images/about-image.jpg"
              alt="Roli's Boutique Workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-6">
              About Roli's Boutique
            </h2>
            <p className="text-gray-600 mb-6">
              Roli's Boutique & Fabrics offers a delightful array of textiles and fashion items that cater to every style and occasion. With a keen eye for quality and detail, we curate a collection that features everything from luxurious silks and vibrant cotton prints to exquisite ready-to-wear pieces.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're looking to create your own masterpiece or find the perfect outfit, Roli's Boutique & Fabrics is a treasure trove waiting to be explored. Step inside and let your imagination run wild as you discover unique fabrics and stylish garments that speak to your individuality.
            </p>
            <Button
              className="bg-[#1B4D3E] hover:bg-[#C5A572] text-white"
              asChild
            >
              <a href="#contact">Visit Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

