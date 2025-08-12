import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import EventsShowcase from '@/components/EventsShowcase'
import SuccessStories from '@/components/SuccessStories'
import AppDownloadSection from '@/components/AppDownloadSection'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

// Force dynamic rendering to ensure Header appears
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* CRITICAL: Header component should be visible on deployment */}
      <Header />
      <div className="pt-16 w-full">
        <Hero />
        <Features />
        <EventsShowcase />
        <SuccessStories />
        <AppDownloadSection />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}