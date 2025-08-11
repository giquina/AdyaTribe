'use client'

import { getImageWithFallback } from '@/lib/profileImages'

// Dummy authentication system for testing
export interface User {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  membershipTier: 'free' | 'core' | 'premium'
  profileImage?: string
  joinedDate: string
  interests: string[]
  favoriteEvents: string[]
  location: string
}

// Dummy user database
const DUMMY_USERS: Record<string, User> = {
  'user@adyatribe.com': {
    id: '1',
    email: 'user@adyatribe.com',
    name: 'Sarah Johnson',
    role: 'user',
    membershipTier: 'core',
    profileImage: getImageWithFallback('emma-wilson'),
    joinedDate: '2024-01-15',
    interests: ['Books & Reading', 'Wine Tasting', 'Fitness & Wellness', 'Travel & Adventures'],
    favoriteEvents: ['book-club-jan', 'wine-tasting-feb', 'yoga-march'],
    location: 'Kensington, London'
  },
  'admin@adyatribe.com': {
    id: '2',
    email: 'admin@adyatribe.com', 
    name: 'Emma Williams',
    role: 'admin',
    membershipTier: 'premium',
    profileImage: getImageWithFallback('rachel-green'),
    joinedDate: '2023-06-01',
    interests: ['Community Management', 'Event Planning', 'Networking', 'Women Empowerment'],
    favoriteEvents: ['admin-meetup', 'community-feedback'],
    location: 'Central London'
  },
  'free@adyatribe.com': {
    id: '3',
    email: 'free@adyatribe.com',
    name: 'Jessica Brown',
    role: 'user', 
    membershipTier: 'free',
    profileImage: getImageWithFallback('chloe-brown'),
    joinedDate: '2024-03-01',
    interests: ['Arts & Culture', 'Food & Dining'],
    favoriteEvents: ['art-gallery-tour'],
    location: 'Camden, London'
  }
}

// Dummy credentials for login
const DUMMY_CREDENTIALS = {
  // Regular user account
  'user@adyatribe.com': 'user123',
  // Admin account  
  'admin@adyatribe.com': 'admin123',
  // Free tier user
  'free@adyatribe.com': 'free123'
}

export class AuthService {
  private static instance: AuthService
  private currentUser: User | null = null

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const expectedPassword = DUMMY_CREDENTIALS[email as keyof typeof DUMMY_CREDENTIALS]
    
    if (!expectedPassword) {
      return { success: false, error: 'User not found' }
    }

    if (expectedPassword !== password) {
      return { success: false, error: 'Invalid password' }
    }

    const user = DUMMY_USERS[email]
    this.currentUser = user
    
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('adyatribe_user', JSON.stringify(user))
    }

    return { success: true, user }
  }

  async logout(): Promise<void> {
    this.currentUser = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adyatribe_user')
    }
  }

  getCurrentUser(): User | null {
    if (this.currentUser) {
      return this.currentUser
    }

    // Try to restore from localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('adyatribe_user')
      if (stored) {
        try {
          this.currentUser = JSON.parse(stored)
          return this.currentUser
        } catch (e) {
          console.error('Error parsing stored user:', e)
        }
      }
    }

    return null
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser()
    return user?.role === 'admin'
  }

  async updateFavorites(eventId: string, action: 'add' | 'remove'): Promise<void> {
    const user = this.getCurrentUser()
    if (!user) return

    if (action === 'add' && !user.favoriteEvents.includes(eventId)) {
      user.favoriteEvents.push(eventId)
    } else if (action === 'remove') {
      user.favoriteEvents = user.favoriteEvents.filter(id => id !== eventId)
    }

    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('adyatribe_user', JSON.stringify(user))
    }
  }

  async updateProfile(updates: Partial<User>): Promise<void> {
    const user = this.getCurrentUser()
    if (!user) return

    Object.assign(user, updates)

    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('adyatribe_user', JSON.stringify(user))
    }
  }
}

// Export singleton instance
export const authService = AuthService.getInstance()

// Demo credentials for easy reference
export const DEMO_CREDENTIALS = {
  user: { email: 'user@adyatribe.com', password: 'user123', description: 'Regular Core Member' },
  admin: { email: 'admin@adyatribe.com', password: 'admin123', description: 'Admin with Premium Access' },
  free: { email: 'free@adyatribe.com', password: 'free123', description: 'Free Tier Member' }
}