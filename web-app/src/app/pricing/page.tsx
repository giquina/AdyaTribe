'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { 
  CheckIcon, 
  XMarkIcon, 
  HeartIcon,
  StarIcon,
  UserIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  SparklesIcon,
  LockClosedIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import { 
  CheckIcon as CheckIconSolid,
  StarIcon as StarIconSolid
} from '@heroicons/react/24/solid'
import { Crown } from 'lucide-react'

interface PricingTier {
  name: string
  price: number
  originalPrice?: number
  description: string
  icon: React.ReactNode
  solidIcon: React.ReactNode
  features: string[]
  limitations: string[]
  highlighted: boolean
  buttonText: string
  buttonStyle: string
  badge?: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for exploring the community and getting started',
    icon: <UserIcon className="w-6 h-6" />,
    solidIcon: <UserIcon className="w-6 h-6" />,
    features: [
      'Access to select community events',
      'Basic profile and interests',
      'Limited event browsing',
      'Community guidelines access',
      'Basic safety features'
    ],
    limitations: [
      'Limited to 2 events per month',
      'No premium events access',
      'No priority support',
      'Basic community features only'
    ],
    highlighted: false,
    buttonText: 'Start Free',
    buttonStyle: 'btn-secondary'
  },
  {
    name: 'Core',
    price: 19,
    originalPrice: 25,
    description: 'Full access to the AdyaTribe community and events',
    icon: <StarIcon className="w-6 h-6" />,
    solidIcon: <StarIconSolid className="w-6 h-6" />,
    features: [
      'Unlimited community events',
      'Full profile customization',
      'Advanced matching & recommendations',
      'Community chat groups',
      'Priority event booking',
      'Interest-based group access',
      'Monthly virtual meetups',
      'Expert-led workshops',
      'Event favorites & calendar sync',
      'Enhanced safety verification'
    ],
    limitations: [
      'No exclusive premium events',
      'Standard support response time'
    ],
    highlighted: true,
    buttonText: 'Choose Core',
    buttonStyle: 'btn-primary',
    badge: 'Most Popular'
  },
  {
    name: 'Premium',
    price: 39,
    originalPrice: 49,
    description: 'Elite community experience with exclusive perks and access',
    icon: <Crown className="w-6 h-6" />,
    solidIcon: <Crown className="w-6 h-6" />,
    features: [
      'Everything in Core, plus:',
      'Exclusive premium-only events',
      'Private member directory',
      'Personal community concierge',
      'VIP event seating & perks',
      '1-on-1 community coaching',
      'Exclusive venue partnerships',
      'Priority customer support',
      'Early access to new features',
      'Monthly exclusive experiences',
      'Premium member badge',
      'Advanced privacy controls'
    ],
    limitations: [],
    highlighted: false,
    buttonText: 'Go Premium',
    buttonStyle: 'btn-primary bg-gradient-to-r from-purple-500 to-pink-500 border-transparent hover:from-purple-600 hover:to-pink-600'
  }
]

const features = [
  {
    icon: <HeartIcon className="w-5 h-5" />,
    title: 'Safe & Verified Community',
    description: 'All members go through our verification process for a secure environment'
  },
  {
    icon: <CalendarIcon className="w-5 h-5" />,
    title: 'Diverse Events & Activities',
    description: 'From wine tastings to book clubs, find activities that match your interests'
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
    title: 'Community Chat Groups',
    description: 'Connect with like-minded women in topic-based group conversations'
  },
  {
    icon: <ShieldCheckIcon className="w-5 h-5" />,
    title: 'Privacy First',
    description: 'Your data is protected with enterprise-grade security and GDPR compliance'
  },
  {
    icon: <SparklesIcon className="w-5 h-5" />,
    title: 'Curated Experiences',
    description: 'Hand-picked events and activities designed for meaningful connections'
  },
  {
    icon: <LockClosedIcon className="w-5 h-5" />,
    title: 'Women-Only Spaces',
    description: 'Exclusive community designed specifically for women 30+ who are single & childfree'
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const getDiscountedPrice = (price: number) => {
    return isAnnual ? Math.round(price * 10) : price // 10 months for price of 12
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Choose Your 
                <span className="text-gradient"> Membership</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join AdyaTribe and connect with an amazing community of single, childfree women 30+. 
                Choose the membership that fits your lifestyle.
              </p>
              
              {/* Annual/Monthly Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-primary-600 transition-transform ${
                      isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                  Annual
                  <span className="ml-1 text-green-600 font-semibold">(Save 20%)</span>
                </span>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 ${
                    tier.highlighted
                      ? 'bg-white border-2 border-primary-400 shadow-xl scale-105'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      tier.name === 'Free' ? 'bg-gray-100 text-gray-600' :
                      tier.name === 'Core' ? 'bg-primary-100 text-primary-600' :
                      'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600'
                    }`}>
                      {tier.highlighted ? tier.solidIcon : tier.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-6">{tier.description}</p>
                    
                    <div className="mb-6">
                      {tier.price === 0 ? (
                        <div className="text-4xl font-bold text-gray-900">Free</div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          {isAnnual && tier.originalPrice && (
                            <div className="text-lg text-gray-500 line-through">
                              £{tier.originalPrice * 12}
                            </div>
                          )}
                          <div className="text-4xl font-bold text-gray-900">
                            £{getDiscountedPrice(tier.price)}
                          </div>
                          <div className="text-gray-600">
                            /{isAnnual ? 'year' : 'month'}
                          </div>
                        </div>
                      )}
                      {isAnnual && tier.price > 0 && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          Save £{tier.price * 2} per year
                        </div>
                      )}
                    </div>

                    <button className={`w-full ${tier.buttonStyle} group`}>
                      {tier.buttonText}
                      <ArrowRightIcon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckIconSolid className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {tier.limitations.length > 0 && (
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        {tier.limitations.map((limitation, limitationIndex) => (
                          <div key={limitationIndex} className="flex items-start space-x-3 mb-2">
                            <XMarkIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose AdyaTribe?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                More than just a community - we're your support system for creating meaningful connections and experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: "Can I change my membership plan?",
                  answer: "Absolutely! You can upgrade or downgrade your membership at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
                },
                {
                  question: "What happens if I cancel my membership?",
                  answer: "You can cancel anytime. Your membership benefits continue until the end of your current billing cycle. After that, you'll have access to our free tier features."
                },
                {
                  question: "Are there any hidden fees?",
                  answer: "No hidden fees ever. What you see is what you pay. All prices are displayed in British Pounds and include VAT where applicable."
                },
                {
                  question: "How does the verification process work?",
                  answer: "Our verification includes age verification (30+), selfie verification for authenticity, and profile review. This ensures a safe, genuine community for all members."
                },
                {
                  question: "What if I'm not satisfied with my membership?",
                  answer: "We offer a 30-day satisfaction guarantee. If you're not happy with your membership within the first month, contact us for a full refund."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="container-width px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Your Tribe?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start with our free membership and discover what AdyaTribe is all about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                Start Free Today
              </a>
              <a href="/login" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Already a Member? Sign In
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}