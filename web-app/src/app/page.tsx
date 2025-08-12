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
      {/* SIMPLE HEADER FOR TESTING */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">AdyaTribe</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/events" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Events</a>
              <a href="/how-it-works" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">How It Works</a>
              <a href="/community" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Community</a>
              <a href="/about" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">About</a>
              <a href="/login" className="text-gray-700 hover:text-[#FF6B6B] transition-colors">Log In</a>
              <a href="/signup" className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">Join Free</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
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