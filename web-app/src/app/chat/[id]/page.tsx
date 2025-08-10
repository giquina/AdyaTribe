'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PaperAirplaneIcon,
  FaceSmileIcon,
  PaperClipIcon,
  UsersIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import Header from '@/components/Header'
import { ChatRoom, ChatMessage, messagingService } from '@/lib/messaging'
import { authService } from '@/lib/auth'

const MessageBubble = ({ 
  message, 
  isOwn, 
  showAvatar = true,
  onReact 
}: { 
  message: ChatMessage
  isOwn: boolean
  showAvatar?: boolean
  onReact: (messageId: string, emoji: string) => void
}) => {
  const [showReactions, setShowReactions] = useState(false)
  const [showActions, setShowActions] = useState(false)

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const getMembershipColor = (tier: string) => {
    switch (tier) {
      case 'premium': return 'text-purple-600'
      case 'core': return 'text-primary-600'
      default: return 'text-gray-600'
    }
  }

  const commonReactions = ['❤️', '👍', '😂', '😊', '🙌', '👏']

  const reactionCounts = message.reactions.reduce((acc, reaction) => {
    acc[reaction.emoji] = (acc[reaction.emoji] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-3 group ${isOwn ? 'flex-row-reverse' : 'flex-row'} relative`}
    >
      {/* Avatar */}
      {showAvatar && !isOwn && (
        <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {message.userAvatar ? (
            <img src={message.userAvatar} alt={message.userName} className="w-8 h-8 rounded-full object-cover" />
          ) : (
            message.userName[0]
          )}
        </div>
      )}
      {showAvatar && isOwn && <div className="w-8" />}
      {!showAvatar && <div className="w-11" />}

      <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} flex-1 max-w-[70%]`}>
        {/* Header */}
        {showAvatar && (
          <div className={`flex items-center gap-2 mb-1 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}>
            <span className="font-medium text-sm text-gray-900">{message.userName}</span>
            <span className={`text-xs capitalize px-1.5 py-0.5 rounded-full bg-opacity-20 ${getMembershipColor(message.membershipTier)}`}>
              {message.membershipTier}
            </span>
            <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
          </div>
        )}

        {/* Message content */}
        <div
          className={`relative px-4 py-2 rounded-2xl max-w-full break-words ${
            isOwn 
              ? 'bg-primary-500 text-white rounded-br-md' 
              : 'bg-gray-100 text-gray-900 rounded-bl-md'
          }`}
          onMouseEnter={() => setShowActions(true)}
          onMouseLeave={() => setShowActions(false)}
        >
          {/* Reply indicator */}
          {message.replyTo && (
            <div className={`text-xs mb-2 pb-2 border-b border-opacity-20 ${
              isOwn ? 'border-white text-primary-100' : 'border-gray-400 text-gray-500'
            }`}>
              Replying to message...
            </div>
          )}

          <p className="text-sm leading-relaxed">{message.content}</p>

          {/* Message actions */}
          <AnimatePresence>
            {showActions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className={`absolute top-1 ${isOwn ? 'left-1' : 'right-1'} flex gap-1`}
              >
                <button
                  onClick={() => setShowReactions(!showReactions)}
                  className="w-6 h-6 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <FaceSmileIcon className="w-3.5 h-3.5 text-gray-600" />
                </button>
                <button className="w-6 h-6 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChatBubbleLeftIcon className="w-3.5 h-3.5 text-gray-600" />
                </button>
                <button className="w-6 h-6 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <EllipsisVerticalIcon className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reaction picker */}
        <AnimatePresence>
          {showReactions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              className="absolute top-full mt-2 bg-white rounded-xl shadow-lg border p-2 flex gap-1 z-10"
            >
              {commonReactions.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => {
                    onReact(message.id, emoji)
                    setShowReactions(false)
                  }}
                  className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors text-lg"
                >
                  {emoji}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reactions display */}
        {Object.keys(reactionCounts).length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {Object.entries(reactionCounts).map(([emoji, count]) => (
              <button
                key={emoji}
                onClick={() => onReact(message.id, emoji)}
                className="bg-white border border-gray-200 rounded-full px-2 py-1 text-xs flex items-center gap-1 hover:bg-gray-50 transition-colors"
              >
                <span>{emoji}</span>
                <span className="text-gray-600">{count}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const MembersList = ({ 
  room, 
  isOpen, 
  onClose 
}: { 
  room: ChatRoom
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl z-50 lg:relative lg:shadow-none"
          >
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Room Members</h3>
                <button
                  onClick={onClose}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                {room.members.length > 0 ? room.members.map((member) => (
                  <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-bold">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          member.name[0]
                        )}
                      </div>
                      {member.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{member.name}</span>
                        {member.role !== 'member' && (
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full capitalize">
                            {member.role}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">
                        {member.membershipTier} member
                        {member.isOnline ? ' • Online' : ` • Last seen ${new Date(member.lastSeen).toLocaleDateString()}`}
                      </div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center text-gray-500 py-8">
                    <UsersIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                    <p>No members to show</p>
                  </div>
                )}
              </div>

              {/* Room info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Room Info</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium">Category:</span> {room.category}</p>
                  <p><span className="font-medium">Created:</span> {new Date(room.createdAt).toLocaleDateString()}</p>
                  <p><span className="font-medium">Members:</span> {room.currentMembers.toLocaleString()}</p>
                </div>
              </div>

              {/* Room rules */}
              {room.rules.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Room Rules</h4>
                  <div className="space-y-2">
                    {room.rules.map((rule, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="font-bold text-primary-500 mt-0.5">{index + 1}.</span>
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function ChatRoomPage() {
  const params = useParams()
  const roomId = params?.id as string
  
  const [room, setRoom] = useState<ChatRoom | null>(null)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showMembers, setShowMembers] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (roomId) {
      loadRoomData()
    }
  }, [roomId])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const loadRoomData = async () => {
    setLoading(true)
    try {
      const [roomData, messagesData] = await Promise.all([
        messagingService.getRoomById(roomId),
        messagingService.getMessages(roomId)
      ])
      
      if (!roomData) {
        setError('Chat room not found')
        return
      }
      
      setRoom(roomData)
      setMessages(messagesData)
    } catch (err) {
      setError('Failed to load chat room')
      console.error('Error loading room data:', err)
    }
    setLoading(false)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !room) return

    const currentUser = authService.getCurrentUser()
    if (!currentUser) {
      window.location.href = '/login'
      return
    }

    try {
      const result = await messagingService.sendMessage(
        roomId,
        currentUser.id,
        newMessage.trim(),
        currentUser
      )

      if (result.success && result.message) {
        setMessages(prev => [...prev, result.message!])
        setNewMessage('')
        inputRef.current?.focus()
      } else {
        alert(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const handleReaction = async (messageId: string, emoji: string) => {
    const currentUser = authService.getCurrentUser()
    if (!currentUser) return

    try {
      const result = await messagingService.addReaction(messageId, currentUser.id, emoji, currentUser.name)
      if (result.success) {
        // Refresh messages to show updated reactions
        const updatedMessages = await messagingService.getMessages(roomId)
        setMessages(updatedMessages)
      }
    } catch (error) {
      console.error('Error adding reaction:', error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e as any)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading chat room...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !room) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">💬</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Chat Room Not Found</h2>
            <p className="text-gray-600 mb-6">The chat room you're looking for doesn't exist or you don't have access to it.</p>
            <a
              href="/chat"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Browse Chat Rooms
            </a>
          </div>
        </div>
      </div>
    )
  }

  const currentUser = authService.getCurrentUser()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex flex-1 pt-16">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="/chat"
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
                </a>
                
                <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl flex items-center justify-center text-white font-bold">
                  {room.avatar ? (
                    <img src={room.avatar} alt={room.name} className="w-10 h-10 rounded-xl object-cover" />
                  ) : (
                    room.name[0]
                  )}
                </div>
                
                <div>
                  <h1 className="font-bold text-lg text-gray-900">{room.name}</h1>
                  <p className="text-sm text-gray-600">
                    {room.currentMembers.toLocaleString()} members
                    {room.type === 'private' && <span className="ml-2">• Private</span>}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowMembers(!showMembers)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <UsersIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <InformationCircleIcon className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No messages yet</h3>
                <p className="text-gray-600">Be the first to start the conversation!</p>
              </div>
            ) : (
              messages.map((message, index) => {
                const prevMessage = index > 0 ? messages[index - 1] : null
                const showAvatar = !prevMessage || 
                  prevMessage.userId !== message.userId || 
                  new Date(message.timestamp).getTime() - new Date(prevMessage.timestamp).getTime() > 5 * 60 * 1000 // 5 minutes

                return (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isOwn={message.userId === currentUser?.id}
                    showAvatar={showAvatar}
                    onReact={handleReaction}
                  />
                )
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex items-end gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={`Message ${room.name}...`}
                  rows={1}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent resize-none max-h-32"
                  style={{ minHeight: '48px' }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <button
                    type="button"
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <PaperClipIcon className="w-4 h-4 text-gray-500" />
                  </button>
                  <button
                    type="button"
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FaceSmileIcon className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="p-3 bg-primary-500 text-white rounded-2xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </form>

            {isTyping && (
              <div className="mt-2 text-sm text-gray-500">
                Someone is typing...
              </div>
            )}
          </div>
        </div>

        {/* Members Sidebar */}
        <MembersList
          room={room}
          isOpen={showMembers}
          onClose={() => setShowMembers(false)}
        />
      </div>
    </div>
  )
}