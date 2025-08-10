'use client'

import { User } from '@/lib/auth'

export interface EventAttendee {
  id: string
  userId: string
  eventId: string
  name: string
  email: string
  profileImage?: string
  membershipTier: 'free' | 'core' | 'premium'
  joinedAt: string
  status: 'confirmed' | 'pending' | 'cancelled'
  checkInTime?: string
}

export interface WaitlistEntry {
  id: string
  userId: string
  eventId: string
  name: string
  email: string
  membershipTier: 'free' | 'core' | 'premium'
  joinedWaitlistAt: string
  position: number
  notified: boolean
}

export interface EventReview {
  id: string
  eventId: string
  userId: string
  reviewerName: string
  profileImage?: string
  rating: number // 1-5 stars
  comment: string
  createdAt: string
  helpful: number
  membershipTier: 'free' | 'core' | 'premium'
}

export interface EventPhoto {
  id: string
  eventId: string
  url: string
  caption?: string
  uploadedBy: string
  uploadedAt: string
  featured: boolean
}

export interface Event {
  id: string
  title: string
  description: string
  longDescription: string
  date: string
  time: string
  endTime: string
  location: string
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
  category: string
  subcategory?: string
  tags: string[]
  hostId: string
  hostName: string
  hostImage?: string
  hostBio?: string
  membershipRequired: 'free' | 'core' | 'premium'
  price: number // 0 for free events
  currency: string
  maxAttendees: number
  minAttendees?: number
  currentAttendees: number
  waitlistCount: number
  status: 'draft' | 'published' | 'cancelled' | 'completed'
  featured: boolean
  images: string[]
  photos: EventPhoto[]
  attendees: EventAttendee[]
  waitlist: WaitlistEntry[]
  reviews: EventReview[]
  averageRating: number
  totalReviews: number
  
  // Event details
  whatToBring?: string[]
  dresscode?: string
  ageRestriction?: string
  skillLevel?: 'beginner' | 'intermediate' | 'advanced' | 'all'
  accessibility?: string[]
  
  // Booking settings
  allowWaitlist: boolean
  requiresApproval: boolean
  refundPolicy?: string
  lastBookingTime: string // how long before event you can book
  
  // Metadata
  createdAt: string
  updatedAt: string
  createdBy: string
  isRecurring: boolean
  recurringPattern?: {
    frequency: 'weekly' | 'monthly' | 'custom'
    interval: number
    endDate?: string
    daysOfWeek?: number[]
  }
  
  // Analytics
  views: number
  favorites: number
  shares: number
  
  // Safety & Community
  communityGuidelines: boolean
  verifiedEvent: boolean
  reportCount: number
}

export interface EventFilters {
  category?: string
  subcategory?: string
  membershipLevel?: 'free' | 'core' | 'premium'
  dateRange?: {
    start: string
    end: string
  }
  location?: string
  priceRange?: {
    min: number
    max: number
  }
  skillLevel?: 'beginner' | 'intermediate' | 'advanced' | 'all'
  availability?: 'available' | 'waitlist' | 'all'
  featured?: boolean
  searchQuery?: string
  tags?: string[]
}

export interface EventSortOptions {
  field: 'date' | 'popularity' | 'rating' | 'price' | 'created' | 'alphabetical'
  direction: 'asc' | 'desc'
}

export interface RSVP {
  id: string
  eventId: string
  userId: string
  status: 'confirmed' | 'waitlist' | 'cancelled'
  createdAt: string
  notes?: string
  dietaryRequirements?: string[]
  emergencyContact?: {
    name: string
    phone: string
    relationship: string
  }
}

// Event categories and subcategories
export const EVENT_CATEGORIES = {
  'Books & Reading': {
    icon: 'BookOpen',
    subcategories: ['Book Clubs', 'Author Talks', 'Poetry', 'Writing Workshops']
  },
  'Wine & Dining': {
    icon: 'Wine',
    subcategories: ['Wine Tasting', 'Cooking Classes', 'Restaurant Visits', 'Food Tours']
  },
  'Fitness & Wellness': {
    icon: 'Dumbbell',
    subcategories: ['Yoga', 'Pilates', 'Running', 'Meditation', 'Wellness Workshops']
  },
  'Arts & Culture': {
    icon: 'Palette',
    subcategories: ['Gallery Visits', 'Museum Tours', 'Theatre', 'Art Classes', 'Cultural Events']
  },
  'Networking': {
    icon: 'Coffee',
    subcategories: ['Professional Meetups', 'Industry Events', 'Casual Networking', 'Workshops']
  },
  'Music & Entertainment': {
    icon: 'Music',
    subcategories: ['Live Music', 'Concerts', 'Dance Classes', 'Comedy Shows']
  },
  'Photography': {
    icon: 'Camera',
    subcategories: ['Photo Walks', 'Workshops', 'Exhibitions', 'Skills Classes']
  },
  'Travel & Adventures': {
    icon: 'Plane',
    subcategories: ['Day Trips', 'Weekend Getaways', 'Walking Tours', 'Adventure Sports']
  },
  'Lifestyle & Hobbies': {
    icon: 'Heart',
    subcategories: ['Craft Workshops', 'Gardening', 'Tech Meetups', 'Language Exchange']
  },
  'Seasonal & Special': {
    icon: 'Star',
    subcategories: ['Holiday Events', 'Seasonal Activities', 'Celebrations', 'Themed Parties']
  }
} as const

// Location areas in London
export const LONDON_AREAS = [
  'Central London',
  'Kensington',
  'Camden',
  'Greenwich',
  'Shoreditch',
  'Notting Hill',
  'Covent Garden',
  'Marylebone',
  'Fitzrovia',
  'South Bank',
  'Canary Wharf',
  'Clapham',
  'Brixton',
  'Hampstead',
  'Richmond',
  'Wimbledon',
  'Kingston',
  'Putney',
  'Chelsea',
  'Fulham'
] as const

// Skill levels
export const SKILL_LEVELS = [
  { value: 'all', label: 'All Levels', description: 'Perfect for everyone' },
  { value: 'beginner', label: 'Beginner', description: 'New to this activity' },
  { value: 'intermediate', label: 'Intermediate', description: 'Some experience required' },
  { value: 'advanced', label: 'Advanced', description: 'Experienced participants only' }
] as const

// Accessibility options
export const ACCESSIBILITY_OPTIONS = [
  'Wheelchair accessible',
  'Hearing loop available',
  'Sign language interpreter',
  'Large print materials',
  'Step-free access',
  'Accessible toilet facilities',
  'Assistance dog friendly',
  'Quiet space available'
] as const

// Event Management Service Class
export class EventService {
  private static instance: EventService
  private events: Event[] = []
  private rsvps: RSVP[] = []

  static getInstance(): EventService {
    if (!EventService.instance) {
      EventService.instance = new EventService()
    }
    return EventService.instance
  }

  constructor() {
    this.loadDummyData()
  }

  private loadDummyData() {
    this.events = [
      {
        id: 'event-1',
        title: 'Sunday Brunch & Book Club',
        description: 'Join our monthly book club for a delightful brunch and discussion of "The Seven Husbands of Evelyn Hugo"',
        longDescription: 'Our monthly book club combines the best of both worlds - delicious brunch and stimulating literary discussion. This month we\'re exploring Taylor Jenkins Reid\'s captivating novel "The Seven Husbands of Evelyn Hugo". Come hungry for both food and conversation!\n\nWe meet at the beautiful Ivy Chelsea Garden, known for its stunning interior and excellent brunch menu. The first hour is dedicated to socializing over mimosas and eggs benedict, followed by an engaging discussion about the book.\n\nWhether you\'re a seasoned book club member or new to literary discussions, you\'ll find a warm welcome. Our group of 8-12 women represents diverse backgrounds and perspectives, making for rich conversations.',
        date: '2024-01-28',
        time: '11:00',
        endTime: '13:00',
        location: 'The Ivy Chelsea Garden',
        address: '197 King\'s Road, Chelsea, London SW3 5EQ',
        coordinates: { lat: 51.4876, lng: -0.1697 },
        category: 'Books & Reading',
        subcategory: 'Book Clubs',
        tags: ['book club', 'brunch', 'Chelsea', 'discussion', 'literature'],
        hostId: 'host-sarah',
        hostName: 'Sarah Chen',
        hostImage: '/avatars/sarah-chen.jpg',
        hostBio: 'Literature enthusiast and event organizer with 5+ years running book clubs',
        membershipRequired: 'core',
        price: 35,
        currency: 'GBP',
        maxAttendees: 10,
        minAttendees: 4,
        currentAttendees: 6,
        waitlistCount: 2,
        status: 'published',
        featured: true,
        images: ['/events/book-club-brunch-1.jpg', '/events/ivy-chelsea.jpg'],
        photos: [],
        attendees: [
          { id: 'att-1', userId: 'user-1', eventId: 'event-1', name: 'Emma Johnson', email: 'emma@example.com', membershipTier: 'core', joinedAt: '2024-01-15T10:00:00Z', status: 'confirmed' },
          { id: 'att-2', userId: 'user-2', eventId: 'event-1', name: 'Lisa Wang', email: 'lisa@example.com', membershipTier: 'premium', joinedAt: '2024-01-16T14:30:00Z', status: 'confirmed' }
        ],
        waitlist: [
          { id: 'wait-1', userId: 'user-10', eventId: 'event-1', name: 'Hannah Green', email: 'hannah@example.com', membershipTier: 'core', joinedWaitlistAt: '2024-01-20T09:00:00Z', position: 1, notified: false }
        ],
        reviews: [
          { id: 'rev-1', eventId: 'event-1', userId: 'user-1', reviewerName: 'Emma J.', rating: 5, comment: 'Fantastic discussion and lovely venue! Already looking forward to next month.', createdAt: '2024-01-10T16:00:00Z', helpful: 3, membershipTier: 'core' }
        ],
        averageRating: 4.8,
        totalReviews: 8,
        whatToBring: ['The book (or detailed notes)', 'Appetite for delicious food'],
        dresscode: 'Smart casual',
        ageRestriction: '30+',
        skillLevel: 'all',
        accessibility: ['Step-free access', 'Accessible toilet facilities'],
        allowWaitlist: true,
        requiresApproval: false,
        refundPolicy: 'Full refund 48h+ in advance, 50% refund 24-48h before',
        lastBookingTime: '24',
        createdAt: '2024-01-01T10:00:00Z',
        updatedAt: '2024-01-20T15:30:00Z',
        createdBy: 'host-sarah',
        isRecurring: true,
        recurringPattern: { frequency: 'monthly', interval: 1, daysOfWeek: [0] },
        views: 234,
        favorites: 18,
        shares: 7,
        communityGuidelines: true,
        verifiedEvent: true,
        reportCount: 0
      },
      {
        id: 'event-2',
        title: 'Thames Path Walking Group',
        description: 'Scenic 5-mile walk from Westminster to Tower Bridge with coffee stop',
        longDescription: 'Join our friendly walking group for a beautiful 5-mile journey along the Thames Path. We\'ll start at Westminster Bridge and end at Tower Bridge, taking in some of London\'s most iconic sights along the way.\n\nThis is a moderate-paced walk suitable for all fitness levels. We make several stops for photos, rest, and conversation. The route includes stunning riverside views, historic landmarks, and plenty of opportunities to chat and get to know fellow walkers.\n\nAfter the walk, we typically grab coffee together (optional) to continue socializing. Our group has been meeting weekly for over a year and has built wonderful friendships along the way.',
        date: '2024-01-29',
        time: '10:00',
        endTime: '12:30',
        location: 'Westminster Bridge (South Side)',
        address: 'Westminster Bridge, London SE1 7PB',
        coordinates: { lat: 51.5007, lng: -0.1246 },
        category: 'Fitness & Wellness',
        subcategory: 'Running',
        tags: ['walking', 'Thames', 'exercise', 'sightseeing', 'outdoor'],
        hostId: 'host-rachel',
        hostName: 'Rachel Thompson',
        hostImage: '/avatars/rachel-thompson.jpg',
        hostBio: 'Fitness enthusiast and London walking expert',
        membershipRequired: 'free',
        price: 0,
        currency: 'GBP',
        maxAttendees: 15,
        currentAttendees: 8,
        waitlistCount: 0,
        status: 'published',
        featured: false,
        images: ['/events/thames-walk-1.jpg', '/events/tower-bridge.jpg'],
        photos: [],
        attendees: [
          { id: 'att-3', userId: 'user-3', eventId: 'event-2', name: 'Jenny Liu', email: 'jenny@example.com', membershipTier: 'free', joinedAt: '2024-01-22T09:00:00Z', status: 'confirmed' }
        ],
        waitlist: [],
        reviews: [
          { id: 'rev-2', eventId: 'event-2', userId: 'user-3', reviewerName: 'Jenny L.', rating: 4, comment: 'Great way to explore London and meet new people. Rachel is a wonderful guide!', createdAt: '2024-01-22T14:00:00Z', helpful: 2, membershipTier: 'free' }
        ],
        averageRating: 4.6,
        totalReviews: 12,
        whatToBring: ['Comfortable walking shoes', 'Weather-appropriate clothing', 'Water bottle'],
        skillLevel: 'all',
        accessibility: ['Step-free route available'],
        allowWaitlist: true,
        requiresApproval: false,
        lastBookingTime: '2',
        createdAt: '2024-01-15T08:00:00Z',
        updatedAt: '2024-01-25T12:00:00Z',
        createdBy: 'host-rachel',
        isRecurring: true,
        recurringPattern: { frequency: 'weekly', interval: 1, daysOfWeek: [1] },
        views: 156,
        favorites: 12,
        shares: 3,
        communityGuidelines: true,
        verifiedEvent: true,
        reportCount: 0
      },
      {
        id: 'event-3',
        title: 'Pottery Workshop & Wine Tasting',
        description: 'Create ceramic art while enjoying curated wines in a relaxed studio setting',
        longDescription: 'Combine creativity with relaxation in this unique pottery and wine experience. Spend 3 hours learning pottery basics while tasting carefully selected wines that complement the creative process.\n\nOur expert pottery instructor will guide you through creating your own ceramic piece - whether a bowl, mug, or decorative item. No experience needed! All materials, tools, glazing, and firing are included. Your finished piece will be ready for collection in 2-3 weeks.\n\nThroughout the session, our sommelier will introduce you to 4 different wines, explaining how each pairs with different stages of the creative process. Light cheese and fruit platters are also provided.',
        date: '2024-01-30',
        time: '18:30',
        endTime: '21:30',
        location: 'Turning Earth Pottery Studio',
        address: '11 Hoxton Square, London N1 6NU',
        coordinates: { lat: 51.5267, lng: -0.0823 },
        category: 'Arts & Culture',
        subcategory: 'Art Classes',
        tags: ['pottery', 'wine', 'creative', 'workshop', 'Hoxton'],
        hostId: 'host-isabella',
        hostName: 'Isabella Martinez',
        hostImage: '/avatars/isabella-martinez.jpg',
        hostBio: 'Professional ceramicist and wine enthusiast',
        membershipRequired: 'core',
        price: 75,
        currency: 'GBP',
        maxAttendees: 8,
        currentAttendees: 6,
        waitlistCount: 3,
        status: 'published',
        featured: true,
        images: ['/events/pottery-wine-1.jpg', '/events/ceramic-art.jpg'],
        photos: [],
        attendees: [
          { id: 'att-4', userId: 'user-4', eventId: 'event-3', name: 'Grace Park', email: 'grace@example.com', membershipTier: 'premium', joinedAt: '2024-01-18T15:00:00Z', status: 'confirmed' }
        ],
        waitlist: [
          { id: 'wait-2', userId: 'user-11', eventId: 'event-3', name: 'Sophie Brown', email: 'sophie@example.com', membershipTier: 'core', joinedWaitlistAt: '2024-01-23T11:00:00Z', position: 1, notified: false }
        ],
        reviews: [],
        averageRating: 4.9,
        totalReviews: 6,
        whatToBring: ['Old clothes or apron', 'Hair tie for long hair'],
        dresscode: 'Comfortable clothing that can get dirty',
        ageRestriction: '21+ (alcohol served)',
        skillLevel: 'beginner',
        accessibility: ['Step-free access', 'Assistance available for mobility needs'],
        allowWaitlist: true,
        requiresApproval: false,
        refundPolicy: 'Full refund 48h+ in advance, no refund within 48h due to wine ordering',
        lastBookingTime: '48',
        createdAt: '2024-01-05T14:00:00Z',
        updatedAt: '2024-01-24T10:00:00Z',
        createdBy: 'host-isabella',
        isRecurring: false,
        views: 189,
        favorites: 22,
        shares: 8,
        communityGuidelines: true,
        verifiedEvent: true,
        reportCount: 0
      }
    ]
    
    this.rsvps = [
      { id: 'rsvp-1', eventId: 'event-1', userId: 'user-1', status: 'confirmed', createdAt: '2024-01-15T10:00:00Z' },
      { id: 'rsvp-2', eventId: 'event-2', userId: 'user-3', status: 'confirmed', createdAt: '2024-01-22T09:00:00Z' },
      { id: 'rsvp-3', eventId: 'event-3', userId: 'user-4', status: 'confirmed', createdAt: '2024-01-18T15:00:00Z' }
    ]
  }

  // Event CRUD operations
  async getEvents(filters?: EventFilters, sort?: EventSortOptions): Promise<Event[]> {
    let filteredEvents = [...this.events]

    if (filters) {
      if (filters.category) {
        filteredEvents = filteredEvents.filter(e => e.category === filters.category)
      }
      if (filters.membershipLevel) {
        const tierLevels = { free: 0, core: 1, premium: 2 }
        const userLevel = tierLevels[filters.membershipLevel]
        filteredEvents = filteredEvents.filter(e => tierLevels[e.membershipRequired] <= userLevel)
      }
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase()
        filteredEvents = filteredEvents.filter(e => 
          e.title.toLowerCase().includes(query) ||
          e.description.toLowerCase().includes(query) ||
          e.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }
      if (filters.dateRange) {
        filteredEvents = filteredEvents.filter(e => {
          const eventDate = new Date(e.date)
          const start = new Date(filters.dateRange!.start)
          const end = new Date(filters.dateRange!.end)
          return eventDate >= start && eventDate <= end
        })
      }
      if (filters.availability) {
        if (filters.availability === 'available') {
          filteredEvents = filteredEvents.filter(e => e.currentAttendees < e.maxAttendees)
        } else if (filters.availability === 'waitlist') {
          filteredEvents = filteredEvents.filter(e => e.currentAttendees >= e.maxAttendees && e.allowWaitlist)
        }
      }
    }

    // Apply sorting
    if (sort) {
      filteredEvents.sort((a, b) => {
        let comparison = 0
        switch (sort.field) {
          case 'date':
            comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
            break
          case 'popularity':
            comparison = (b.currentAttendees + b.favorites) - (a.currentAttendees + a.favorites)
            break
          case 'rating':
            comparison = b.averageRating - a.averageRating
            break
          case 'price':
            comparison = a.price - b.price
            break
          case 'created':
            comparison = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            break
          case 'alphabetical':
            comparison = a.title.localeCompare(b.title)
            break
        }
        return sort.direction === 'desc' ? -comparison : comparison
      })
    }

    return filteredEvents
  }

  async getEventById(id: string): Promise<Event | null> {
    return this.events.find(e => e.id === id) || null
  }

  async createEvent(eventData: Partial<Event>, userId: string): Promise<Event> {
    const newEvent: Event = {
      id: `event-${Date.now()}`,
      title: eventData.title || '',
      description: eventData.description || '',
      longDescription: eventData.longDescription || eventData.description || '',
      date: eventData.date || '',
      time: eventData.time || '',
      endTime: eventData.endTime || '',
      location: eventData.location || '',
      address: eventData.address || '',
      category: eventData.category || '',
      subcategory: eventData.subcategory,
      tags: eventData.tags || [],
      hostId: userId,
      hostName: eventData.hostName || '',
      hostImage: eventData.hostImage,
      hostBio: eventData.hostBio,
      membershipRequired: eventData.membershipRequired || 'free',
      price: eventData.price || 0,
      currency: eventData.currency || 'GBP',
      maxAttendees: eventData.maxAttendees || 20,
      minAttendees: eventData.minAttendees,
      currentAttendees: 0,
      waitlistCount: 0,
      status: eventData.status || 'draft',
      featured: eventData.featured || false,
      images: eventData.images || [],
      photos: [],
      attendees: [],
      waitlist: [],
      reviews: [],
      averageRating: 0,
      totalReviews: 0,
      allowWaitlist: eventData.allowWaitlist ?? true,
      requiresApproval: eventData.requiresApproval ?? false,
      refundPolicy: eventData.refundPolicy,
      lastBookingTime: eventData.lastBookingTime || '24',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: userId,
      isRecurring: eventData.isRecurring ?? false,
      views: 0,
      favorites: 0,
      shares: 0,
      communityGuidelines: true,
      verifiedEvent: false,
      reportCount: 0,
      whatToBring: eventData.whatToBring,
      dresscode: eventData.dresscode,
      ageRestriction: eventData.ageRestriction,
      skillLevel: eventData.skillLevel,
      accessibility: eventData.accessibility
    }

    this.events.push(newEvent)
    return newEvent
  }

  async rsvpToEvent(eventId: string, userId: string, userData: Partial<User>): Promise<{ success: boolean; status: 'confirmed' | 'waitlist'; message: string }> {
    const event = await this.getEventById(eventId)
    if (!event) {
      return { success: false, status: 'confirmed', message: 'Event not found' }
    }

    // Check if already RSVP'd
    const existingRSVP = this.rsvps.find(r => r.eventId === eventId && r.userId === userId)
    if (existingRSVP) {
      return { success: false, status: 'confirmed', message: 'Already registered for this event' }
    }

    // Check membership requirements
    if (!this.canAccessEvent(event.membershipRequired, userData.membershipTier || 'free')) {
      return { success: false, status: 'confirmed', message: 'Membership upgrade required' }
    }

    let status: 'confirmed' | 'waitlist' = 'confirmed'
    let message = 'Successfully registered for event!'

    // Check availability
    if (event.currentAttendees >= event.maxAttendees) {
      if (event.allowWaitlist) {
        status = 'waitlist'
        message = 'Added to waitlist - you\'ll be notified if a spot opens up!'
        
        // Add to waitlist
        const waitlistEntry: WaitlistEntry = {
          id: `wait-${Date.now()}`,
          userId,
          eventId,
          name: userData.name || '',
          email: userData.email || '',
          membershipTier: userData.membershipTier || 'free',
          joinedWaitlistAt: new Date().toISOString(),
          position: event.waitlist.length + 1,
          notified: false
        }
        event.waitlist.push(waitlistEntry)
        event.waitlistCount++
      } else {
        return { success: false, status: 'confirmed', message: 'Event is full and waitlist is not available' }
      }
    } else {
      // Add to attendees
      const attendee: EventAttendee = {
        id: `attendee-${Date.now()}`,
        userId,
        eventId,
        name: userData.name || '',
        email: userData.email || '',
        profileImage: userData.profileImage,
        membershipTier: userData.membershipTier || 'free',
        joinedAt: new Date().toISOString(),
        status: 'confirmed'
      }
      event.attendees.push(attendee)
      event.currentAttendees++
    }

    // Create RSVP record
    const rsvp: RSVP = {
      id: `rsvp-${Date.now()}`,
      eventId,
      userId,
      status,
      createdAt: new Date().toISOString()
    }
    this.rsvps.push(rsvp)

    return { success: true, status, message }
  }

  async cancelRSVP(eventId: string, userId: string): Promise<{ success: boolean; message: string }> {
    const event = await this.getEventById(eventId)
    if (!event) {
      return { success: false, message: 'Event not found' }
    }

    const rsvpIndex = this.rsvps.findIndex(r => r.eventId === eventId && r.userId === userId)
    if (rsvpIndex === -1) {
      return { success: false, message: 'RSVP not found' }
    }

    const rsvp = this.rsvps[rsvpIndex]
    
    if (rsvp.status === 'confirmed') {
      // Remove from attendees
      event.attendees = event.attendees.filter(a => a.userId !== userId)
      event.currentAttendees--

      // Promote from waitlist if available
      if (event.waitlist.length > 0) {
        const nextInLine = event.waitlist.shift()!
        const attendee: EventAttendee = {
          id: `attendee-${Date.now()}`,
          userId: nextInLine.userId,
          eventId,
          name: nextInLine.name,
          email: nextInLine.email,
          membershipTier: nextInLine.membershipTier,
          joinedAt: new Date().toISOString(),
          status: 'confirmed'
        }
        event.attendees.push(attendee)
        event.currentAttendees++
        event.waitlistCount--

        // Update RSVP status for promoted user
        const promotedRSVP = this.rsvps.find(r => r.eventId === eventId && r.userId === nextInLine.userId)
        if (promotedRSVP) {
          promotedRSVP.status = 'confirmed'
        }
      }
    } else if (rsvp.status === 'waitlist') {
      // Remove from waitlist and update positions
      event.waitlist = event.waitlist.filter(w => w.userId !== userId)
      event.waitlistCount--
      
      // Update positions for remaining waitlist entries
      event.waitlist.forEach((entry, index) => {
        entry.position = index + 1
      })
    }

    // Remove RSVP
    this.rsvps.splice(rsvpIndex, 1)

    return { success: true, message: 'RSVP cancelled successfully' }
  }

  async addReview(eventId: string, userId: string, reviewData: { rating: number; comment: string; reviewerName: string; membershipTier: string }): Promise<{ success: boolean; message: string }> {
    const event = await this.getEventById(eventId)
    if (!event) {
      return { success: false, message: 'Event not found' }
    }

    // Check if user attended the event
    const attended = event.attendees.some(a => a.userId === userId && a.status === 'confirmed')
    if (!attended) {
      return { success: false, message: 'You must attend an event to review it' }
    }

    // Check if already reviewed
    const existingReview = event.reviews.find(r => r.userId === userId)
    if (existingReview) {
      return { success: false, message: 'You have already reviewed this event' }
    }

    const review: EventReview = {
      id: `review-${Date.now()}`,
      eventId,
      userId,
      reviewerName: reviewData.reviewerName,
      rating: reviewData.rating,
      comment: reviewData.comment,
      createdAt: new Date().toISOString(),
      helpful: 0,
      membershipTier: reviewData.membershipTier as 'free' | 'core' | 'premium'
    }

    event.reviews.push(review)
    event.totalReviews++
    
    // Recalculate average rating
    const totalRating = event.reviews.reduce((sum, r) => sum + r.rating, 0)
    event.averageRating = Math.round((totalRating / event.reviews.length) * 10) / 10

    return { success: true, message: 'Review added successfully' }
  }

  private canAccessEvent(eventRequirement: string, userTier: string): boolean {
    const tierLevels = { free: 0, core: 1, premium: 2 }
    return tierLevels[userTier as keyof typeof tierLevels] >= tierLevels[eventRequirement as keyof typeof tierLevels]
  }

  async getUserRSVPs(userId: string): Promise<RSVP[]> {
    return this.rsvps.filter(r => r.userId === userId)
  }

  async getUserEvents(userId: string): Promise<Event[]> {
    return this.events.filter(e => e.hostId === userId)
  }
}

// Export singleton instance
export const eventService = EventService.getInstance()