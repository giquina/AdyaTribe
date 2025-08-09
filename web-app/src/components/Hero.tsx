'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon, HeartIcon, UsersIcon, StarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentUser, setCurrentUser] = useState({ name: 'Amazing Woman', location: 'Your City' })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{
      background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,182,193,0.15), transparent 40%), linear-gradient(135deg, #fefefe 0%, #f8f9fa 50%, #f0f4f8 100%)`
    }}>
      {/* Background decorative elements with 3D effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotateX: [0, 5, 0],
            rotateY: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 via-purple-100 to-blue-100 rounded-full opacity-30"
          style={{ transform: 'preserve-3d' }}
        />
        <motion.div 
          animate={{ 
            rotateX: [0, -5, 0],
            rotateY: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-200 via-pink-100 to-purple-100 rounded-full opacity-25"
          style={{ transform: 'preserve-3d' }}
        />
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full opacity-20"
        />
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
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
            {/* AI-Personalized Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md rounded-2xl px-6 py-3 text-sm font-semibold text-gray-700 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                <span className="text-green-600 font-bold">VERIFIED</span>
              </div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <SparklesIcon className="h-4 w-4 text-yellow-500 group-hover:animate-pulse" />
                <span>Perfect match for {currentUser.name} in {currentUser.location}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight">
                WHERE{' '}
                <span className="block text-7xl sm:text-8xl lg:text-9xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse font-extrabold">
                  AMAZING
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800">
                  WOMEN CONNECT
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-2xl font-medium">
                Join the <span className="font-bold text-pink-600">premier AI-powered community</span> for 30+ single & childfree women. Find your tribe, make meaningful friendships, and discover shared adventures through <span className="font-bold text-purple-600">intelligent matching</span>.
              </p>
            </motion.div>

            {/* Enhanced Key Benefits with 3D hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {[
                { icon: HeartIcon, text: "AI-VERIFIED SAFETY", color: "from-red-400 to-pink-400", bgColor: "from-red-50 to-pink-50" },
                { icon: UsersIcon, text: "EXCLUSIVE 30+ CLUB", color: "from-blue-400 to-purple-400", bgColor: "from-blue-50 to-purple-50" },
                { icon: SparklesIcon, text: "REAL CONNECTIONS", color: "from-yellow-400 to-orange-400", bgColor: "from-yellow-50 to-orange-50" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    rotateX: 5,
                    z: 50
                  }}
                  className="flex items-center gap-4 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-lg rounded-2xl p-5 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`h-6 w-6 bg-gradient-to-r ${item.color} text-transparent bg-clip-text group-hover:animate-pulse`} style={{WebkitBackgroundClip: 'text', filter: 'none'}} />
                  </div>
                  <span className="text-sm font-bold text-gray-800 tracking-wide">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons with modern effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group text-xl font-bold px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  JOIN THE TRIBE
                  <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.9)"
                }}
                whileTap={{ scale: 0.95 }}
                className="text-xl font-bold px-10 py-5 bg-white/70 backdrop-blur-lg text-gray-800 border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:border-purple-300"
              >
                WATCH DEMO
              </motion.button>
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