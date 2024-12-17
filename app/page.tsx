
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import Contact from '@/components/contact'
import { Gallery } from '@/components/gallery'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <div className="flex justify-center space-x-4 my-8">
      
      </div>
    </div>
  )
}

