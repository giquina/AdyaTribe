import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppDownloadSection from '@/components/AppDownloadSection'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <AppDownloadSection />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}