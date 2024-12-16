import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Roli's Boutique - Designer Tailoring & Fabrics",
  description: "Discover exquisite custom tailoring services and premium fabrics at Roli's Boutique in Jaipur. Expert craftsmanship meets elegant design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

