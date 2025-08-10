import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HowItWorks() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                How AdyaTribe <span className="gradient-text">Works</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Join thousands of UK women 30+ who've found their tribe. Here's how simple it is to connect with amazing women in London and across the UK.
              </p>
              
              <div className="grid md:grid-cols-3 gap-12 mt-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Create Your Profile</h3>
                  <p className="text-gray-600">
                    Sign up with photo verification and tell us about your interests, lifestyle, and what kind of friendships you're seeking in London.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Get Matched</h3>
                  <p className="text-gray-600">
                    Our algorithm connects you with compatible women based on location, interests, and lifestyle preferences across London and the UK.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Meet & Connect</h3>
                  <p className="text-gray-600">
                    Join group activities, attend exclusive London events, or arrange one-on-one meetups. Build lasting friendships that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}