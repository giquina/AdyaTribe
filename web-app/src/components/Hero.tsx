'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary-200 rounded-full opacity-20 animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse animation-delay-200"></div>
      </div>

      <div className="container-width relative z-10 section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-600 shadow-lg border border-white/20"
            >
              <SparklesIcon className="h-4 w-4 text-primary-400" />
              Trusted by 1,000+ amazing women
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-display font-bold text-gray-900 leading-tight">
                Where Amazing{' '}
                <span className="gradient-text">Women</span>{' '}
                Connect
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Join the premier community for 30+ single & childfree women. Find your tribe, make meaningful friendships, and discover shared adventures.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <HeartIcon className="h-6 w-6 text-primary-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Safe & Verified</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <UsersIcon className="h-6 w-6 text-secondary-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">30+ Only</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <SparklesIcon className="h-6 w-6 text-primary-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">Real Connections</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary group text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Join the Tribe
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="btn-outline text-lg px-8 py-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                Learn More
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#ff6b6b' : '#4ecdc4',
                    }}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Sarah, Maya, Lisa</span> and{' '}
                <span className="font-semibold text-gray-800">997+ others</span> are already building meaningful friendships
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Main illustration placeholder - would be a beautiful illustration of diverse women */}
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-white/50 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Simulated app interface */}
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                      <HeartIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AdyaTribe</h3>
                      <p className="text-sm text-gray-500">Your community awaits</p>
                    </div>
                  </div>
                  
                  {/* Simulated activity feed */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-200 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Emma</span> joined the Book Club group
                        </p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary-200 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Maya</span> is organizing a hiking trip
                        </p>
                        <p className="text-xs text-gray-500">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-300 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold">Sarah</span> shared a recipe in Foodies
                        </p>
                        <p className="text-xs text-gray-500">12 minutes ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Activity indicators */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-400">1,247</p>
                      <p className="text-xs text-gray-500">Members</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary-400">42</p>
                      <p className="text-xs text-gray-500">Groups</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-400">156</p>
                      <p className="text-xs text-gray-500">Events</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-white/30"
              >
                <div className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">New Match!</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-white/30"
              >
                <div className="flex items-center gap-2">
                  <HeartIcon className="h-5 w-5 text-red-400" />
                  <span className="text-sm font-medium text-gray-700">Event RSVP</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}