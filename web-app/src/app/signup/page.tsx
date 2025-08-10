import Header from '@/components/Header'
import SocialLogin from '@/components/SocialLogin'
import { HeartIcon, CheckIcon } from '@heroicons/react/24/outline'

const benefits = [
  "Join 1,200+ verified women in London & UK",
  "Access to 40+ groups and activities",
  "Attend exclusive member events",
  "Safe, moderated community",
  "Free to start, premium features available"
]

export default function Signup() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
          <div className="container-width px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Benefits */}
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">AdyaTribe</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Find Your <span className="gradient-text">Tribe</span> in London
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join the UK's premier community for amazing women 30+ who are single, childfree, and ready to build meaningful friendships.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side - Signup Form */}
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Join AdyaTribe</h2>
                    <p className="text-gray-600">Create your free account in under 2 minutes</p>
                  </div>

                  {/* Social Login Options */}
                  <div className="mb-8">
                    <SocialLogin mode="signup" />
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                          placeholder="Sarah"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                          placeholder="Chen"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        placeholder="sarah@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <select
                        id="age"
                        name="age"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                      >
                        <option value="">Select your age range</option>
                        <option value="30-34">30-34</option>
                        <option value="35-39">35-39</option>
                        <option value="40-44">40-44</option>
                        <option value="45-49">45-49</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Location in London/UK
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        placeholder="e.g., Clapham, Central London, Manchester"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Create Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        placeholder="Choose a secure password"
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="agree-terms"
                        name="agree-terms"
                        type="checkbox"
                        className="h-4 w-4 text-primary-400 focus:ring-primary-400 border-gray-300 rounded"
                      />
                      <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="/terms" className="text-primary-400 hover:text-primary-500">Terms of Service</a> and{' '}
                        <a href="/privacy" className="text-primary-400 hover:text-primary-500">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full text-lg py-4"
                    >
                      Create My Free Account
                    </button>
                    
                    <div className="text-center">
                      <p className="text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-primary-400 hover:text-primary-500 font-medium">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}