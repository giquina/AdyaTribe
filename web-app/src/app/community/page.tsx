import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Community() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Community</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Join over 1,200 verified women across London and the UK who are building meaningful connections every day.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚶‍♀️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Walking Groups</h3>
                  <p className="text-gray-600">Explore London's parks and hidden gems with like-minded women.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Wine & Dine</h3>
                  <p className="text-gray-600">Discover London's best restaurants and wine bars together.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎭</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Arts & Culture</h3>
                  <p className="text-gray-600">West End shows, galleries, and cultural events across London.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fitness & Wellness</h3>
                  <p className="text-gray-600">Yoga, pilates, and fitness classes with supportive women.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">UK Adventures</h3>
                  <p className="text-gray-600">Weekend getaways and day trips across beautiful Britain.</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <div className="w-16 h-16 bg-secondary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Book Clubs</h3>
                  <p className="text-gray-600">Literary discussions and cozy meetups in London's best cafes.</p>
                </div>
              </div>
              
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-semibold mb-6">Community Guidelines</h2>
                <div className="text-left max-w-3xl mx-auto">
                  <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">✓</span>
                      Be respectful and kind to all community members
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">✓</span>
                      Support each other's goals and celebrate successes
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">✓</span>
                      Maintain confidentiality and respect privacy
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">✓</span>
                      Show up when you commit to events and activities
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-400 mr-3">✓</span>
                      Embrace diversity and different perspectives
                    </li>
                  </ul>
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