import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  About <span className="gradient-text">AdyaTribe</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Where amazing women in London and across the UK build lasting friendships and create their chosen family.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AdyaTribe was born from a simple observation: incredible women in their 30s and beyond often struggle to form meaningful friendships as adults. Whether you're new to London, focusing on your career, or simply seeking like-minded connections, traditional ways of meeting people don't always work.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We created AdyaTribe specifically for single, childfree women 30+ who want to build genuine connections with others who share similar life experiences and values. Our community celebrates independence, ambition, and the power of female friendship.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From walking groups in Hampstead Heath to dinner parties in Shoreditch, from art gallery visits to weekend getaways across the UK – we're here to help you find your tribe and create the social life you've always wanted.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-600">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower women 30+ across London and the UK to build meaningful, lasting friendships through shared experiences, genuine connections, and a supportive community that celebrates every woman's unique journey.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary-600">Our Values</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Authenticity over perfection</li>
                    <li>• Quality connections over quantity</li>
                    <li>• Inclusivity and respect for all</li>
                    <li>• Safety and trust in every interaction</li>
                    <li>• Celebrating diverse paths and choices</li>
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