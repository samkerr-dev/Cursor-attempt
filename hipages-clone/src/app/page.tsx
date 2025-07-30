import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import TradieSection from '@/components/TradieSection'
import Testimonials from '@/components/Testimonials'
import Articles from '@/components/Articles'
import Categories from '@/components/Categories'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <TradieSection />
      <Testimonials />
      <Articles />
      <Categories />
      <Partners />
      <Footer />
    </main>
  )
}
