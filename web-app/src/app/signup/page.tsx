'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import SocialLogin from '@/components/SocialLogin'
import { 
  HeartIcon, 
  CheckIcon, 
  ShieldCheckIcon, 
  UserGroupIcon,
  SparklesIcon,
  LockClosedIcon,
  CameraIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: ShieldCheckIcon,
    text: "Join 300+ verified women in London & UK",
    subtext: "Every member verified through our safety process"
  },
  {
    icon: UserGroupIcon,
    text: "Quality over quantity community",
    subtext: "Curated groups for meaningful connections"
  },
  {
    icon: SparklesIcon,
    text: "Exclusive events and experiences",
    subtext: "Member-only gatherings and activities"
  },
  {
    icon: LockClosedIcon,
    text: "Safe, women-only spaces",
    subtext: "Moderated environment with strict community guidelines"
  }
]

const trustSignals = [
  { icon: CameraIcon, text: "Selfie verification required" },
  { icon: ShieldCheckIcon, text: "Background checks available" },
  { icon: LockClosedIcon, text: "Your data stays private" },
  { icon: StarIcon, text: "4.9/5 member satisfaction" }
]

const testimonials = [
  {
    name: "Sarah C.",
    age: "34",
    location: "Clapham",
    quote: "Found my book club tribe through AdyaTribe. These friendships feel like chosen family.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ac?w=80&h=80&fit=crop&crop=face&auto=format"
  },
  {
    name: "Maya P.",
    age: "38",
    location: "Shoreditch", 
    quote: "The verification process made me feel safe from day one. Real women, real friendships.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format"
  }
]

export default function Signup() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to success page
      window.location.href = '/signup/success'
    }, 2000)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-12 sm:py-20 bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
          <div className="container-width px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Benefits */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-lg flex items-center justify-center shadow-lg">
                    <HeartIcon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">AdyaTribe</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Your Safe Space for <span className="gradient-text">Authentic Friendships</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  A carefully curated community of professional women 30+ in London & UK who value genuine connections over casual networking.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                        className="flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/70"
                      >
                        <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 block">{benefit.text}</span>
                          <span className="text-sm text-gray-600">{benefit.subtext}</span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {trustSignals.map((signal, index) => {
                    const IconComponent = signal.icon
                    return (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <IconComponent className="h-4 w-4 text-secondary-400" />
                        <span>{signal.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Quick Testimonials */}
                <div className="space-y-4 hidden lg:block">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80"
                    >
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 italic mb-1">"{testimonial.quote}"</p>
                        <p className="text-xs text-gray-500">
                          {testimonial.name}, {testimonial.age} • {testimonial.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Right side - Signup Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/50">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 text-primary-600 font-medium mb-4 text-sm">
                      <ShieldCheckIcon className="h-4 w-4" />
                      Invitation-Only Community
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Request Your Invitation</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Join our exclusive waitlist • Spots limited to 50 new members monthly</p>
                  </div>

                  {/* Social Login Options */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-center text-sm text-gray-500 mb-4">Quick signup with social media</p>
                    <SocialLogin mode="signup" />
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Simplified form - only essential fields */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Professional Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white/90 backdrop-blur-sm"
                        placeholder="sarah@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white/90 backdrop-blur-sm"
                        placeholder="Sarah"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="ageConfirmation" className="block text-sm font-medium text-gray-700 mb-2">
                        Age Confirmation
                      </label>
                      <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-white/90 backdrop-blur-sm">
                        <input
                          id="ageConfirmation"
                          name="ageConfirmation"
                          type="checkbox"
                          required
                          className="h-4 w-4 text-primary-400 focus:ring-primary-400 border-gray-300 rounded"
                        />
                        <label htmlFor="ageConfirmation" className="ml-3 text-sm text-gray-700">
                          I confirm I am 30 years old or older
                        </label>
                      </div>
                    </div>
                    
                    {/* What to expect section */}
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-xl border border-white/80">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">What happens next?</h3>
                      <div className="space-y-2 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <span>Download our mobile app for verification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <span>Complete selfie verification for safety</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-primary-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <span>Join your local London groups instantly</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <input
                        id="agree-terms"
                        name="agree-terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-primary-400 focus:ring-primary-400 border-gray-300 rounded mt-1 flex-shrink-0"
                      />
                      <label htmlFor="agree-terms" className="text-sm text-gray-700">
                        I agree to AdyaTribe's{' '}
                        <a href="/terms" className="text-primary-400 hover:text-primary-500 underline">Terms of Service</a>,{' '}
                        <a href="/privacy" className="text-primary-400 hover:text-primary-500 underline">Privacy Policy</a>, and{' '}
                        <a href="/community-guidelines" className="text-primary-400 hover:text-primary-500 underline">Community Guidelines</a>
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full text-lg py-4 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Securing Your Spot...
                        </span>
                      ) : (
                        'Request My Invitation →'
                      )}
                    </button>
                    
                    {/* Security footer */}
                    <div className="text-center pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-3">
                        🔒 Your information is encrypted and never shared with third parties
                      </p>
                      <p className="text-gray-600 text-sm">
                        Already a member?{' '}
                        <a href="/login" className="text-primary-400 hover:text-primary-500 font-medium">
                          Sign into your account
                        </a>
                      </p>
                    </div>
                  </form>
                </div>

                {/* Mobile testimonials */}
                <div className="mt-6 space-y-3 lg:hidden">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/80"
                    >
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 italic mb-1">"{testimonial.quote}"</p>
                        <p className="text-xs text-gray-500">
                          {testimonial.name}, {testimonial.age} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

