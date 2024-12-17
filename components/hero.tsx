import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#1B4D3E] text-white overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay 
        loop 
        muted 
        playsInline
        poster="/images/hero-bg.jpg"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bespoke Tailoring & Premium Fabrics
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Experience the art of custom tailoring and discover our exquisite collection of fabrics at Roli&apos;s Boutique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#C5A572] hover:bg-[#B39362] text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Book Consultation</a>
            </Button>
            <Button
              variant="outline"
              className="border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

