'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  StarIcon,
  HeartIcon,
  ShareIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Event, EventReview, eventService } from '@/lib/events'
import { authService } from '@/lib/auth'

const ReviewCard = ({ review }: { review: EventReview }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold">
          {review.reviewerName[0]}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900">{review.reviewerName}</h4>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarSolidIcon
                  key={star}
                  className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 capitalize px-2 py-1 bg-gray-100 rounded-full">
              {review.membershipTier}
            </span>
          </div>
          
          <p className="text-gray-700 mb-2">{review.comment}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date(review.createdAt).toLocaleDateString('en-GB')}</span>
            {review.helpful > 0 && (
              <span className="flex items-center gap-1">
                <HeartIcon className="w-4 h-4" />
                {review.helpful} helpful
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const RSVPModal = ({
  isOpen,
  onClose,
  event,
  onRSVP
}: {
  isOpen: boolean
  onClose: () => void
  event: Event
  onRSVP: (status: 'going' | 'waitlist') => void
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notes, setNotes] = useState('')
  const [dietaryRequirements, setDietaryRequirements] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const spotsLeft = event.maxAttendees - event.currentAttendees
    const status = spotsLeft > 0 ? 'going' : 'waitlist'
    
    onRSVP(status)
    setIsSubmitting(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  RSVP to {event.title}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any questions or special requests..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dietary Requirements (Optional)
                    </label>
                    <input
                      type="text"
                      value={dietaryRequirements}
                      onChange={(e) => setDietaryRequirements(e.target.value)}
                      placeholder="e.g., Vegetarian, Gluten-free, Allergies..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                  </div>

                  {event.price > 0 && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <InformationCircleIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div className="text-sm text-yellow-800">
                          <p className="font-medium mb-1">Payment Required</p>
                          <p>You'll be charged £{event.price} upon confirmation. {event.refundPolicy}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? 'Processing...' : 'Confirm RSVP'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function EventDetailsPage() {
  const params = useParams()
  const eventId = params?.id as string
  
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showRSVPModal, setShowRSVPModal] = useState(false)
  const [userRSVP, setUserRSVP] = useState<'going' | 'waitlist' | null>(null)
  const [isFavorited, setIsFavorited] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    loadEvent()
  }, [eventId])

  const loadEvent = async () => {
    if (!eventId) return
    
    setLoading(true)
    try {
      const eventData = await eventService.getEventById(eventId)
      if (!eventData) {
        setError('Event not found')
        return
      }
      setEvent(eventData)
      
      // Check if user has already RSVP'd (mock for now)
      const currentUser = authService.getCurrentUser()
      if (currentUser) {
        // This would be a real API call
        const userRSVPs = await eventService.getUserRSVPs(currentUser.id)
        const existingRSVP = userRSVPs.find(rsvp => rsvp.eventId === eventId)
        if (existingRSVP) {
          setUserRSVP(existingRSVP.status === 'confirmed' ? 'going' : 'waitlist')
        }
      }
    } catch (err) {
      setError('Failed to load event')
      console.error('Error loading event:', err)
    }
    setLoading(false)
  }

  const handleRSVP = async (status: 'going' | 'waitlist') => {
    const currentUser = authService.getCurrentUser()
    if (!currentUser) {
      // Redirect to login
      window.location.href = '/login'
      return
    }

    try {
      const result = await eventService.rsvpToEvent(eventId, currentUser.id, currentUser)
      if (result.success) {
        setUserRSVP(result.status === 'confirmed' ? 'going' : 'waitlist')
        // Refresh event data to get updated attendance
        loadEvent()
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error('Error with RSVP:', error)
      alert('Failed to process RSVP. Please try again.')
    }
  }

  const handleCancelRSVP = async () => {
    const currentUser = authService.getCurrentUser()
    if (!currentUser) return

    try {
      const result = await eventService.cancelRSVP(eventId, currentUser.id)
      if (result.success) {
        setUserRSVP(null)
        loadEvent() // Refresh event data
      } else {
        alert(result.message)
      }
    } catch (error) {
      console.error('Error cancelling RSVP:', error)
      alert('Failed to cancel RSVP. Please try again.')
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading event details...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
            <p className="text-gray-600 mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <a
              href="/events"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Browse All Events
            </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const spotsLeft = event.maxAttendees - event.currentAttendees
  const isAlmostFull = spotsLeft <= 3 && spotsLeft > 0
  const isFull = spotsLeft <= 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          {/* Image Gallery */}
          <div className="relative h-96 bg-gradient-to-r from-primary-200 to-secondary-200">
            {event.images.length > 0 ? (
              <>
                <img 
                  src={event.images[currentImageIndex] || event.images[0]} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                
                {event.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => prev > 0 ? prev - 1 : event.images.length - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => prev < event.images.length - 1 ? prev + 1 : 0)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {event.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-8xl">
                🎉
              </div>
            )}
            
            {/* Overlay Actions */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                {isFavorited ? (
                  <HeartSolidIcon className="w-6 h-6 text-red-500" />
                ) : (
                  <HeartIcon className="w-6 h-6 text-gray-600" />
                )}
              </button>
              <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <ShareIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Status Badges */}
            <div className="absolute top-6 left-6 flex gap-2">
              {event.featured && (
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold px-3 py-1 rounded-full">
                  ⭐ FEATURED
                </span>
              )}
              {event.verifiedEvent && (
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  ✓ VERIFIED
                </span>
              )}
            </div>

            {/* Availability Status */}
            <div className="absolute bottom-6 left-6">
              {isFull ? (
                <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  FULL {event.allowWaitlist && '• WAITLIST AVAILABLE'}
                </span>
              ) : isAlmostFull ? (
                <span className="bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {spotsLeft} SPOT{spotsLeft === 1 ? '' : 'S'} LEFT
                </span>
              ) : (
                <span className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {spotsLeft} SPOTS AVAILABLE
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Basic Info */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h1>
                      <p className="text-lg text-gray-600">
                        {event.description}
                      </p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-primary-600 mb-1">
                        {event.price === 0 ? 'FREE' : `£${event.price}`}
                      </div>
                      {event.membershipRequired !== 'free' && (
                        <div className="text-sm text-gray-500 capitalize">
                          {event.membershipRequired}+ required
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Key Details */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{formatDate(event.date)}</div>
                        <div className="text-sm text-gray-500">Date</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                        <ClockIcon className="w-5 h-5 text-secondary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {formatTime(event.time)}{event.endTime && ` - ${formatTime(event.endTime)}`}
                        </div>
                        <div className="text-sm text-gray-500">Time</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{event.location}</div>
                        <div className="text-sm text-gray-500">{event.address}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <UserGroupIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{event.currentAttendees} / {event.maxAttendees}</div>
                        <div className="text-sm text-gray-500">Attendees</div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">About This Event</h2>
                  <div className="prose prose-gray max-w-none">
                    {event.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* What to Expect / Bring */}
                {(event.whatToExpected || event.whatToBring) && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Event Details</h2>
                    
                    {event.whatToExpected && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
                        <ul className="space-y-1">
                          {event.whatToExpected.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                              <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {event.whatToBring && (
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">What to Bring</h3>
                        <ul className="space-y-1">
                          {event.whatToBring.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                              <InformationCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Reviews */}
                {event.reviews && event.reviews.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Reviews</h2>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <StarSolidIcon
                              key={star}
                              className={`w-5 h-5 ${star <= Math.round(event.averageRating || 0) ? 'text-yellow-400' : 'text-gray-200'}`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">{event.averageRating}</span>
                        <span className="text-gray-500">({event.totalReviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {event.reviews.slice(0, 3).map((review) => (
                        <ReviewCard key={review.id} review={review} />
                      ))}
                    </div>

                    {event.reviews.length > 3 && (
                      <div className="text-center mt-6">
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          View all {event.totalReviews} reviews
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* RSVP Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Join This Event</h3>
                    
                    {userRSVP ? (
                      <div className="space-y-4">
                        <div className={`p-4 rounded-lg ${
                          userRSVP === 'going' ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'
                        }`}>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircleIcon className={`w-5 h-5 ${
                              userRSVP === 'going' ? 'text-green-600' : 'text-yellow-600'
                            }`} />
                            <span className={`font-medium ${
                              userRSVP === 'going' ? 'text-green-800' : 'text-yellow-800'
                            }`}>
                              {userRSVP === 'going' ? 'You\'re Going!' : 'You\'re on the Waitlist'}
                            </span>
                          </div>
                          <p className={`text-sm ${
                            userRSVP === 'going' ? 'text-green-700' : 'text-yellow-700'
                          }`}>
                            {userRSVP === 'going' 
                              ? 'We\'ll send you event updates and reminders.' 
                              : 'You\'ll be notified if a spot opens up.'}
                          </p>
                        </div>
                        
                        <button
                          onClick={handleCancelRSVP}
                          className="w-full px-4 py-3 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors font-medium"
                        >
                          Cancel RSVP
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {isFull && !event.allowWaitlist ? (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                              <span className="font-medium text-red-800">Event Full</span>
                            </div>
                            <p className="text-sm text-red-700">
                              This event has reached capacity and doesn't have a waitlist.
                            </p>
                          </div>
                        ) : (
                          <button
                            onClick={() => setShowRSVPModal(true)}
                            className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-4 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-lg"
                          >
                            {isFull ? 'Join Waitlist' : 'RSVP Now'}
                          </button>
                        )}

                        {event.price > 0 && (
                          <div className="text-center">
                            <p className="text-sm text-gray-600">
                              £{event.price} per person
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {event.refundPolicy}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Host Info */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Event Host</h3>
                    
                    <div className="flex items-center gap-3 mb-4">
                      {event.hostImage ? (
                        <img 
                          src={event.hostImage} 
                          alt={event.hostName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold">
                          {event.hostName.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-900">{event.hostName}</h4>
                        <p className="text-sm text-gray-600">Event Organizer</p>
                      </div>
                    </div>

                    {event.hostBio && (
                      <p className="text-sm text-gray-700 mb-4">{event.hostBio}</p>
                    )}

                    <button className="w-full border border-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      View Host Profile
                    </button>
                  </div>

                  {/* Event Stats */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Event Stats</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{event.views || 0}</div>
                        <div className="text-sm text-gray-600">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600">{event.favorites || 0}</div>
                        <div className="text-sm text-gray-600">Favorites</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{event.shares || 0}</div>
                        <div className="text-sm text-gray-600">Shares</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{event.currentAttendees}</div>
                        <div className="text-sm text-gray-600">Going</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Modal */}
        <RSVPModal
          isOpen={showRSVPModal}
          onClose={() => setShowRSVPModal(false)}
          event={event}
          onRSVP={handleRSVP}
        />
      </main>

      <Footer />
    </div>
  )
}