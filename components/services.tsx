import { Scissors, FactoryIcon as Fabric, ShoppingBag } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      title: "Custom Tailoring",
      description: "Expert tailoring services for all your fashion needs, from formal wear to casual attire.",
      icon: Scissors,
    },
    {
      title: "Premium Fabrics",
      description: "Discover our curated collection of high-quality fabrics from around the world.",
      icon: Fabric,
    },
    {
      title: "Fashion Accessories",
      description: "Complete your look with our selection of carefully chosen fashion accessories.",
      icon: ShoppingBag,
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D3E] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium services designed to bring your fashion vision to life
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-[#1B4D3E]/10 hover:border-[#C5A572] transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 text-[#C5A572] mb-4" />
                <CardTitle className="text-xl text-[#1B4D3E]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

