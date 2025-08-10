'use client'

import { motion } from 'framer-motion'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ProfileFormData } from '@/lib/profile'

interface ProfileEditFormProps {
  formData: ProfileFormData
  onChange: (field: keyof ProfileFormData, value: any) => void
  interestCategories: Record<string, string[]>
  locations: string[]
}

export default function ProfileEditForm({ 
  formData, 
  onChange, 
  interestCategories, 
  locations 
}: ProfileEditFormProps) {
  const handleInterestToggle = (interest: string) => {
    const newInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest]
    onChange('interests', newInterests)
  }

  const handleLocationToggle = (location: string) => {
    const newLocations = formData.preferredLocations.includes(location)
      ? formData.preferredLocations.filter(l => l !== location)
      : [...formData.preferredLocations, location]
    onChange('preferredLocations', newLocations)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Profile Information</h2>
        <p className="text-gray-600">
          Share information about yourself to help others connect with you.
        </p>
      </div>

      {/* Basic Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
            Age *
          </label>
          <input
            type="number"
            id="age"
            min="18"
            max="100"
            value={formData.age}
            onChange={(e) => onChange('age', parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Primary Location *
          </label>
          <select
            id="location"
            value={formData.location}
            onChange={(e) => onChange('location', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            required
          >
            <option value="">Select your area</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
            About Me *
          </label>
          <textarea
            id="bio"
            value={formData.bio}
            onChange={(e) => onChange('bio', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent resize-none"
            placeholder="Tell us about yourself, your interests, and what you're looking for in connections..."
            maxLength={500}
            required
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {formData.bio.length}/500 characters
          </div>
        </div>
      </motion.div>

      {/* Connection Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6"
      >
        <h3 className="text-lg font-semibold text-gray-900">Connection Preferences</h3>
        
        {/* Looking For */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What are you looking for? *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { value: 'friendship', label: 'Friendship', description: 'Casual friends and social connections' },
              { value: 'activity_partners', label: 'Activity Partners', description: 'People to join activities and events' },
              { value: 'networking', label: 'Networking', description: 'Professional and career connections' },
              { value: 'all', label: 'All of the Above', description: 'Open to all types of connections' }
            ].map((option) => (
              <label
                key={option.value}
                className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                  formData.lookingFor === option.value
                    ? 'border-[#FF6B6B] bg-red-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="radio"
                  name="lookingFor"
                  value={option.value}
                  checked={formData.lookingFor === option.value}
                  onChange={(e) => onChange('lookingFor', e.target.value)}
                  className="mt-1 text-[#FF6B6B] focus:ring-[#FF6B6B]"
                />
                <div>
                  <div className="font-medium text-sm text-gray-900">{option.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Age Range Preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Preferred Age Range for Connections
          </label>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Minimum Age</span>
                <span className="text-sm font-medium text-gray-900">{formData.ageRange.min}</span>
              </div>
              <input
                type="range"
                min="18"
                max="65"
                value={formData.ageRange.min}
                onChange={(e) => onChange('ageRange', { 
                  ...formData.ageRange, 
                  min: parseInt(e.target.value) 
                })}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Maximum Age</span>
                <span className="text-sm font-medium text-gray-900">{formData.ageRange.max}</span>
              </div>
              <input
                type="range"
                min="18"
                max="65"
                value={formData.ageRange.max}
                onChange={(e) => onChange('ageRange', { 
                  ...formData.ageRange, 
                  max: parseInt(e.target.value) 
                })}
                className="w-full"
              />
            </div>
            <div className="text-center text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              Looking to connect with women aged {formData.ageRange.min} - {formData.ageRange.max}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Interests</h3>
          <p className="text-sm text-gray-600 mt-1">
            Select at least 3 interests to help us match you with like-minded members.
            ({formData.interests.length} selected)
          </p>
        </div>

        {Object.entries(interestCategories).map(([category, interests]) => (
          <div key={category}>
            <h4 className="font-medium text-gray-900 mb-3">{category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    formData.interests.includes(interest)
                      ? 'bg-[#FF6B6B] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        ))}

        {formData.interests.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Selected Interests</h4>
            <div className="flex flex-wrap gap-2">
              {formData.interests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {interest}
                  <button
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Preferred Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Preferred Areas</h3>
          <p className="text-sm text-gray-600 mt-1">
            Select areas where you'd like to connect with members and attend events.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
          {locations.map((location) => (
            <label
              key={location}
              className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                formData.preferredLocations.includes(location)
                  ? 'border-[#FF6B6B] bg-red-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.preferredLocations.includes(location)}
                onChange={() => handleLocationToggle(location)}
                className="text-[#FF6B6B] focus:ring-[#FF6B6B] rounded"
              />
              <span className="text-sm text-gray-900">{location}</span>
            </label>
          ))}
        </div>

        {formData.preferredLocations.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-medium text-green-900 mb-2">Preferred Areas ({formData.preferredLocations.length})</h4>
            <div className="flex flex-wrap gap-2">
              {formData.preferredLocations.map((location) => (
                <span
                  key={location}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {location}
                  <button
                    type="button"
                    onClick={() => handleLocationToggle(location)}
                    className="hover:bg-green-200 rounded-full p-0.5 transition-colors"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Form Validation Messages */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Profile Completion Tips</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className={formData.name ? '✅' : '❌'} >
            {formData.name ? 'Name completed' : 'Add your full name'}
          </li>
          <li className={formData.bio.length >= 20 ? '✅' : '❌'}>
            {formData.bio.length >= 20 ? 'Bio completed' : `Write a bio (minimum 20 characters, ${20 - formData.bio.length} needed)`}
          </li>
          <li className={formData.interests.length >= 3 ? '✅' : '❌'}>
            {formData.interests.length >= 3 ? 'Interests completed' : `Select at least 3 interests (${3 - formData.interests.length} more needed)`}
          </li>
          <li className={formData.location ? '✅' : '❌'}>
            {formData.location ? 'Location completed' : 'Select your primary location'}
          </li>
        </ul>
      </div>
    </div>
  )
}