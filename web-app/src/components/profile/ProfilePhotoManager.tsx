'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PlusIcon, 
  XMarkIcon, 
  CameraIcon,
  PhotoIcon,
  StarIcon,
  ArrowUpTrayIcon
} from '@heroicons/react/24/outline'
import { User } from '@/lib/auth'
import { UserProfile, ProfilePhoto } from '@/lib/connections'
import { profileService, PhotoUpload } from '@/lib/profile'
import { toast } from 'react-hot-toast'

interface ProfilePhotoManagerProps {
  currentUser: User
  profile: UserProfile | null
  onUpdate: () => void
}

export default function ProfilePhotoManager({ currentUser, profile, onUpdate }: ProfilePhotoManagerProps) {
  const [uploads, setUploads] = useState<PhotoUpload[]>([])
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const photos = profile?.photos || []
  const profilePicture = photos.find(p => p.isProfilePicture)

  const handleFileSelect = async (files: FileList | null) => {
    if (!files) return

    const newUploads: PhotoUpload[] = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const validation = profileService.validateImage(file)
      
      if (!validation.valid) {
        toast.error(`${file.name}: ${validation.error}`)
        continue
      }

      try {
        // Compress the image
        const compressedFile = await profileService.compressImage(file)
        
        // Create upload object
        const upload = profileService.createPhotoUpload(compressedFile, photos.length === 0)
        newUploads.push(upload)
      } catch (error) {
        toast.error(`Failed to process ${file.name}`)
      }
    }

    if (newUploads.length > 0) {
      setUploads(prev => [...prev, ...newUploads])
      // Start uploading
      for (const upload of newUploads) {
        uploadPhoto(upload)
      }
    }
  }

  const uploadPhoto = async (upload: PhotoUpload) => {
    try {
      setUploads(prev => prev.map(u => 
        u.id === upload.id 
          ? { ...u, status: 'uploading' as const }
          : u
      ))

      const result = await profileService.uploadPhoto(upload, (progress) => {
        setUploads(prev => prev.map(u => 
          u.id === upload.id 
            ? { ...u, uploadProgress: progress }
            : u
        ))
      })

      if (result.success) {
        setUploads(prev => prev.map(u => 
          u.id === upload.id 
            ? { ...u, status: 'completed' as const, uploadProgress: 100 }
            : u
        ))
        
        toast.success('Photo uploaded successfully!')
        
        // Remove from uploads after delay
        setTimeout(() => {
          setUploads(prev => prev.filter(u => u.id !== upload.id))
          onUpdate()
        }, 2000)
      } else {
        setUploads(prev => prev.map(u => 
          u.id === upload.id 
            ? { ...u, status: 'error' as const }
            : u
        ))
        toast.error('Failed to upload photo')
      }
    } catch (error) {
      setUploads(prev => prev.map(u => 
        u.id === upload.id 
          ? { ...u, status: 'error' as const }
          : u
      ))
      toast.error('Upload failed')
    }
  }

  const handleSetProfilePicture = async (photoId: string) => {
    try {
      // TODO: Implement set profile picture API call
      toast.success('Profile picture updated!')
      onUpdate()
    } catch (error) {
      toast.error('Failed to update profile picture')
    }
  }

  const handleDeletePhoto = async (photoId: string) => {
    if (!window.confirm('Are you sure you want to delete this photo?')) {
      return
    }

    try {
      // TODO: Implement delete photo API call
      toast.success('Photo deleted')
      onUpdate()
    } catch (error) {
      toast.error('Failed to delete photo')
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleFileSelect(e.dataTransfer.files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = () => {
    setDragOver(false)
  }

  const removeUpload = (uploadId: string) => {
    setUploads(prev => prev.filter(u => u.id !== uploadId))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Photo Gallery</h2>
        <p className="text-gray-600">
          Add photos to showcase your personality and interests. Your first photo will be your profile picture.
        </p>
      </div>

      {/* Current Profile Picture */}
      {profilePicture && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#FF6B6B]/10 to-[#4ECDC4]/10 rounded-xl p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            Current Profile Picture
          </h3>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-white shadow-lg">
              <img
                src={profilePicture.url}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                This is how other members see you in their feed and search results.
              </p>
              <p className="text-sm text-gray-500">
                Uploaded {new Date(profilePicture.uploadedAt).toLocaleDateString('en-GB', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            dragOver
              ? 'border-[#FF6B6B] bg-[#FF6B6B]/5'
              : 'border-gray-300 hover:border-[#FF6B6B] hover:bg-gray-50'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div className="flex flex-col items-center gap-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              dragOver ? 'bg-[#FF6B6B] text-white' : 'bg-gray-100 text-gray-400'
            }`}>
              <ArrowUpTrayIcon className="w-8 h-8" />
            </div>
            
            <div>
              <p className={`text-lg font-medium ${
                dragOver ? 'text-[#FF6B6B]' : 'text-gray-900'
              }`}>
                {dragOver ? 'Drop your photos here!' : 'Upload Photos'}
              </p>
              <p className="text-gray-600 mt-1">
                Drag and drop photos here, or{' '}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[#FF6B6B] hover:text-[#FF5252] font-medium"
                >
                  browse files
                </button>
              </p>
            </div>

            <div className="text-sm text-gray-500 space-y-1">
              <p>• Maximum file size: 5MB</p>
              <p>• Supported formats: JPG, PNG, WebP</p>
              <p>• Recommended: Clear, well-lit photos that show your face</p>
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </motion.div>

      {/* Upload Progress */}
      {uploads.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-gray-900">Uploading Photos</h3>
          {uploads.map((upload) => (
            <div
              key={upload.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={upload.preview}
                  alt="Upload preview"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    {upload.file.name}
                  </span>
                  <button
                    onClick={() => removeUpload(upload.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      upload.status === 'completed' 
                        ? 'bg-green-500' 
                        : upload.status === 'error'
                        ? 'bg-red-500'
                        : 'bg-[#FF6B6B]'
                    }`}
                    style={{ width: `${upload.uploadProgress}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-600">
                    {upload.status === 'completed' && '✅ Upload complete'}
                    {upload.status === 'error' && '❌ Upload failed'}
                    {upload.status === 'uploading' && `Uploading... ${upload.uploadProgress}%`}
                  </span>
                  {upload.isProfilePicture && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      Profile Picture
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Current Photos */}
      {photos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Your Photos ({photos.length})
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                className="relative group aspect-square bg-gray-200 rounded-xl overflow-hidden"
              >
                <img
                  src={photo.url}
                  alt={photo.caption || `Photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Profile Picture Badge */}
                {photo.isProfilePicture && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                    <StarIcon className="w-3 h-3" />
                    Profile
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    {!photo.isProfilePicture && (
                      <button
                        onClick={() => handleSetProfilePicture(photo.id)}
                        className="flex items-center gap-1 bg-yellow-500 text-white text-xs px-3 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                      >
                        <StarIcon className="w-3 h-3" />
                        Set as Profile
                      </button>
                    )}
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="absolute bottom-2 left-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center justify-between">
                  <span>{photo.likes} likes</span>
                  <span>{photo.comments.length} comments</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Photo Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 border border-blue-200 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
          <PhotoIcon className="w-5 h-5" />
          Photo Tips for Better Connections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-2">✅ What to Include:</h4>
            <ul className="space-y-1">
              <li>• Clear, well-lit photos of your face</li>
              <li>• Photos showing your interests & hobbies</li>
              <li>• Recent photos (within the last year)</li>
              <li>• Natural, smiling expressions</li>
              <li>• 3-5 photos for best results</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">❌ What to Avoid:</h4>
            <ul className="space-y-1">
              <li>• Group photos where you're hard to identify</li>
              <li>• Heavily filtered or edited photos</li>
              <li>• Photos with inappropriate content</li>
              <li>• Blurry or dark images</li>
              <li>• Photos with other people's faces visible</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}