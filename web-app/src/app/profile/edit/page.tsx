'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeftIcon, 
  UserCircleIcon,
  CameraIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import { authService, User } from '@/lib/auth'
import { UserProfile } from '@/lib/connections'
import { profileService, ProfileFormData, INTEREST_CATEGORIES, LONDON_AREAS } from '@/lib/profile'
import ProfileEditForm from '@/components/profile/ProfileEditForm'
import ProfilePhotoManager from '@/components/profile/ProfilePhotoManager'
import ProfileVerification from '@/components/profile/ProfileVerification'
import ProfilePrivacy from '@/components/profile/ProfilePrivacy'
import { toast } from 'react-hot-toast'

type EditTab = 'profile' | 'photos' | 'verification' | 'privacy'

export default function ProfileEditPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<EditTab>('profile')

  // Form data
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    bio: '',
    location: '',
    age: 30,
    interests: [],
    lookingFor: 'friendship',
    ageRange: { min: 28, max: 45 },
    preferredLocations: [],
    privacy: {
      showAge: true,
      showLocation: true,
      allowMessages: 'connections',
      profileVisibility: 'members_only'
    }
  })

  useEffect(() => {
    // Get tab from URL params
    const tab = searchParams.get('tab') as EditTab
    if (tab && ['profile', 'photos', 'verification', 'privacy'].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  useEffect(() => {
    loadProfileData()
  }, [])

  const loadProfileData = async () => {
    setLoading(true)
    
    try {
      const user = authService.getCurrentUser()
      if (!user) {
        router.push('/login')
        return
      }
      
      setCurrentUser(user)

      // Load profile data
      const profileData = await profileService.getProfile(user.id)
      setProfile(profileData)

      // Populate form data
      if (profileData) {
        setFormData({
          name: user.name,
          bio: profileData.bio,
          location: user.location,
          age: profileData.age,
          interests: user.interests,
          lookingFor: profileData.preferences.lookingFor,
          ageRange: profileData.preferences.ageRange,
          preferredLocations: profileData.preferences.location,
          privacy: profileData.privacy
        })
      } else {
        // Initialize with user data if no profile exists
        setFormData(prev => ({
          ...prev,
          name: user.name,
          location: user.location,
          interests: user.interests
        }))
      }
    } catch (error) {
      console.error('Error loading profile:', error)
      toast.error('Failed to load profile data')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!currentUser) return

    setSaving(true)
    
    try {
      const result = await profileService.updateProfile(currentUser.id, formData)
      
      if (result.success) {
        toast.success('Profile updated successfully!')
        router.push(`/profile/${currentUser.id}`)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.error('Error saving profile:', error)
      toast.error('Failed to save profile')
    } finally {
      setSaving(false)
    }
  }

  const handleFormChange = (field: keyof ProfileFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const tabs = [
    {
      id: 'profile' as EditTab,
      name: 'Profile Info',
      icon: <UserCircleIcon className="w-4 h-4" />,
      description: 'Basic information and interests'
    },
    {
      id: 'photos' as EditTab,
      name: 'Photos',
      icon: <PhotoIcon className="w-4 h-4" />,
      description: 'Profile pictures and gallery'
    },
    {
      id: 'verification' as EditTab,
      name: 'Verification',
      icon: <ShieldCheckIcon className="w-4 h-4" />,
      description: 'Account security and verification'
    },
    {
      id: 'privacy' as EditTab,
      name: 'Privacy',
      icon: <Cog6ToothIcon className="w-4 h-4" />,
      description: 'Privacy settings and preferences'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-width px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6B6B]"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-width px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p className="text-gray-600 mb-4">Please log in to edit your profile.</p>
            <button
              onClick={() => router.push('/login')}
              className="btn-primary"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push(`/profile/${currentUser.id}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Back to Profile</span>
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push(`/profile/${currentUser.id}`)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 bg-[#FF6B6B] text-white px-6 py-2 rounded-lg hover:bg-[#FF5252] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {saving && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>}
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Edit Profile</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#FF6B6B] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {tab.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{tab.name}</div>
                      <div className={`text-xs mt-1 ${
                        activeTab === tab.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {tab.description}
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                {activeTab === 'profile' && (
                  <ProfileEditForm
                    formData={formData}
                    onChange={handleFormChange}
                    interestCategories={INTEREST_CATEGORIES}
                    locations={LONDON_AREAS}
                  />
                )}
                
                {activeTab === 'photos' && (
                  <ProfilePhotoManager
                    currentUser={currentUser}
                    profile={profile}
                    onUpdate={loadProfileData}
                  />
                )}
                
                {activeTab === 'verification' && (
                  <ProfileVerification
                    profile={profile}
                    onUpdate={loadProfileData}
                  />
                )}
                
                {activeTab === 'privacy' && (
                  <ProfilePrivacy
                    privacy={formData.privacy}
                    onChange={(privacy) => handleFormChange('privacy', privacy)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}