'use client'

export interface ChatRoom {
  id: string
  name: string
  description: string
  type: 'public' | 'private' | 'event-based'
  category: string
  membershipRequired: 'free' | 'core' | 'premium'
  members: ChatMember[]
  moderators: string[] // user IDs
  createdBy: string
  createdAt: string
  isArchived: boolean
  avatar?: string
  coverImage?: string
  rules: string[]
  tags: string[]
  maxMembers: number
  currentMembers: number
  lastMessage?: ChatMessage
  lastActivity: string
  isJoined?: boolean
  notifications: boolean
  pinned: boolean
}

export interface ChatMember {
  id: string
  userId: string
  name: string
  avatar?: string
  membershipTier: 'free' | 'core' | 'premium'
  role: 'member' | 'moderator' | 'admin'
  joinedAt: string
  lastSeen: string
  isOnline: boolean
  isMuted: boolean
  permissions: {
    canPost: boolean
    canReact: boolean
    canShareMedia: boolean
  }
}

export interface ChatMessage {
  id: string
  roomId: string
  userId: string
  userName: string
  userAvatar?: string
  membershipTier: 'free' | 'core' | 'premium'
  content: string
  type: 'text' | 'image' | 'file' | 'system' | 'event' | 'poll'
  timestamp: string
  edited?: boolean
  editedAt?: string
  reactions: MessageReaction[]
  replyTo?: string // message ID
  mentions: string[] // user IDs
  attachments: MessageAttachment[]
  isDeleted: boolean
  deletedAt?: string
  isPinned: boolean
  pinnedBy?: string
  pinnedAt?: string
}

export interface MessageReaction {
  id: string
  messageId: string
  userId: string
  userName: string
  emoji: string
  timestamp: string
}

export interface MessageAttachment {
  id: string
  type: 'image' | 'file' | 'link'
  url: string
  filename: string
  size?: number
  preview?: string
  metadata?: Record<string, any>
}

export interface ChatNotification {
  id: string
  userId: string
  roomId: string
  messageId: string
  type: 'mention' | 'reply' | 'new_message' | 'room_invite'
  title: string
  content: string
  isRead: boolean
  createdAt: string
}

export interface PollMessage {
  id: string
  question: string
  options: PollOption[]
  allowMultiple: boolean
  isAnonymous: boolean
  endsAt?: string
  totalVotes: number
}

export interface PollOption {
  id: string
  text: string
  votes: PollVote[]
  count: number
}

export interface PollVote {
  userId: string
  userName: string
  timestamp: string
}

// Chat room categories and types
export const CHAT_CATEGORIES = {
  'General': {
    icon: '💬',
    description: 'General discussions and casual chat',
    rooms: ['Welcome Lounge', 'Random Chat', 'Daily Check-in']
  },
  'Events & Meetups': {
    icon: '📅',
    description: 'Discuss upcoming events and plan meetups',
    rooms: ['Event Planning', 'Post-Event Chat', 'Weekend Plans']
  },
  'Interests & Hobbies': {
    icon: '🎨',
    description: 'Chat about your favorite activities',
    rooms: ['Books & Literature', 'Food & Wine', 'Fitness & Wellness', 'Arts & Crafts']
  },
  'Professional': {
    icon: '💼',
    description: 'Career, networking, and professional development',
    rooms: ['Career Chat', 'Networking', 'Freelancer Corner']
  },
  'Location-Based': {
    icon: '📍',
    description: 'Chat with women in your area',
    rooms: ['Central London', 'North London', 'South London', 'West London', 'East London']
  },
  'Support & Wellness': {
    icon: '🤗',
    description: 'Supportive discussions and wellness topics',
    rooms: ['Mental Health Support', 'Life Transitions', 'Self-Care Sunday']
  },
  'Premium': {
    icon: '👑',
    description: 'Exclusive rooms for premium members',
    rooms: ['VIP Lounge', 'Premium Events', 'Exclusive Opportunities']
  }
} as const

// Mock chat rooms data
export const mockChatRooms: ChatRoom[] = [
  {
    id: 'room-1',
    name: 'Welcome Lounge',
    description: 'A warm welcome space for new members to introduce themselves and ask questions',
    type: 'public',
    category: 'General',
    membershipRequired: 'free',
    members: [],
    moderators: ['mod-1', 'mod-2'],
    createdBy: 'admin-1',
    createdAt: '2024-01-01T10:00:00Z',
    isArchived: false,
    avatar: '/chat-rooms/welcome.jpg',
    rules: [
      'Be kind and welcoming to new members',
      'Keep introductions positive and friendly',
      'No spam or promotional content',
      'Ask questions - we\'re here to help!'
    ],
    tags: ['welcome', 'introductions', 'newbies', 'friendly'],
    maxMembers: 500,
    currentMembers: 234,
    lastActivity: '2024-01-26T15:30:00Z',
    isJoined: true,
    notifications: true,
    pinned: true
  },
  {
    id: 'room-2',
    name: 'Book Club Central',
    description: 'Discuss current reads, share recommendations, and plan book-related events',
    type: 'public',
    category: 'Interests & Hobbies',
    membershipRequired: 'core',
    members: [],
    moderators: ['mod-3'],
    createdBy: 'host-sarah',
    createdAt: '2024-01-05T14:00:00Z',
    isArchived: false,
    avatar: '/chat-rooms/books.jpg',
    rules: [
      'No spoilers without warning tags',
      'Respect diverse reading preferences',
      'Share thoughtful reviews and recommendations',
      'Keep discussions book-related'
    ],
    tags: ['books', 'reading', 'literature', 'discussion'],
    maxMembers: 100,
    currentMembers: 67,
    lastActivity: '2024-01-26T14:20:00Z',
    isJoined: false,
    notifications: false,
    pinned: false
  },
  {
    id: 'room-3',
    name: 'Fitness Buddies',
    description: 'Share workout routines, find exercise partners, and motivate each other',
    type: 'public',
    category: 'Interests & Hobbies',
    membershipRequired: 'free',
    members: [],
    moderators: ['mod-4'],
    createdBy: 'host-rachel',
    createdAt: '2024-01-08T09:00:00Z',
    isArchived: false,
    avatar: '/chat-rooms/fitness.jpg',
    rules: [
      'Support and encourage all fitness levels',
      'Share workouts and healthy tips',
      'No body shaming or negative comments',
      'Celebrate everyone\'s progress'
    ],
    tags: ['fitness', 'workout', 'health', 'motivation'],
    maxMembers: 200,
    currentMembers: 145,
    lastActivity: '2024-01-26T16:45:00Z',
    isJoined: true,
    notifications: true,
    pinned: false
  },
  {
    id: 'room-4',
    name: 'Central London Meetups',
    description: 'Organize spontaneous meetups and find companions for Central London activities',
    type: 'public',
    category: 'Location-Based',
    membershipRequired: 'free',
    members: [],
    moderators: ['mod-5'],
    createdBy: 'admin-1',
    createdAt: '2024-01-10T11:00:00Z',
    isArchived: false,
    avatar: '/chat-rooms/london.jpg',
    rules: [
      'Keep meetup suggestions specific to Central London',
      'Always meet in public places',
      'Respect others\' availability and preferences',
      'Share photos from successful meetups!'
    ],
    tags: ['meetups', 'central-london', 'spontaneous', 'activities'],
    maxMembers: 150,
    currentMembers: 89,
    lastActivity: '2024-01-26T13:15:00Z',
    isJoined: false,
    notifications: false,
    pinned: false
  },
  {
    id: 'room-5',
    name: 'VIP Lounge',
    description: 'Exclusive space for premium members to connect and access special opportunities',
    type: 'private',
    category: 'Premium',
    membershipRequired: 'premium',
    members: [],
    moderators: ['mod-1'],
    createdBy: 'admin-1',
    createdAt: '2024-01-03T16:00:00Z',
    isArchived: false,
    avatar: '/chat-rooms/vip.jpg',
    rules: [
      'Premium members only',
      'Share exclusive opportunities and insights',
      'Maintain confidentiality when requested',
      'Support fellow premium members'
    ],
    tags: ['premium', 'exclusive', 'vip', 'opportunities'],
    maxMembers: 50,
    currentMembers: 23,
    lastActivity: '2024-01-26T12:30:00Z',
    isJoined: false,
    notifications: false,
    pinned: false
  }
]

// Mock messages data
export const mockMessages: { [roomId: string]: ChatMessage[] } = {
  'room-1': [
    {
      id: 'msg-1',
      roomId: 'room-1',
      userId: 'user-1',
      userName: 'Emma Johnson',
      userAvatar: '/avatars/emma.jpg',
      membershipTier: 'core',
      content: 'Hi everyone! Just joined AdyaTribe and so excited to meet like-minded women in London! 👋',
      type: 'text',
      timestamp: '2024-01-26T10:30:00Z',
      reactions: [
        { id: 'react-1', messageId: 'msg-1', userId: 'user-2', userName: 'Lisa', emoji: '👋', timestamp: '2024-01-26T10:31:00Z' },
        { id: 'react-2', messageId: 'msg-1', userId: 'user-3', userName: 'Sarah', emoji: '❤️', timestamp: '2024-01-26T10:32:00Z' }
      ],
      replyTo: undefined,
      mentions: [],
      attachments: [],
      isDeleted: false,
      isPinned: false
    },
    {
      id: 'msg-2',
      roomId: 'room-1',
      userId: 'user-2',
      userName: 'Lisa Wang',
      userAvatar: '/avatars/lisa.jpg',
      membershipTier: 'premium',
      content: 'Welcome Emma! You\'ll love it here. What part of London are you in? Always great to connect with neighbors! 🏠',
      type: 'text',
      timestamp: '2024-01-26T10:35:00Z',
      reactions: [],
      replyTo: 'msg-1',
      mentions: ['user-1'],
      attachments: [],
      isDeleted: false,
      isPinned: false
    }
  ],
  'room-3': [
    {
      id: 'msg-3',
      roomId: 'room-3',
      userId: 'user-4',
      userName: 'Rachel Thompson',
      userAvatar: '/avatars/rachel.jpg',
      membershipTier: 'core',
      content: 'Just finished a great 5k run along the Thames! Anyone else running this weekend? 🏃‍♀️',
      type: 'text',
      timestamp: '2024-01-26T16:45:00Z',
      reactions: [
        { id: 'react-3', messageId: 'msg-3', userId: 'user-5', userName: 'Jenny', emoji: '💪', timestamp: '2024-01-26T16:46:00Z' }
      ],
      replyTo: undefined,
      mentions: [],
      attachments: [],
      isDeleted: false,
      isPinned: false
    }
  ]
}

// Messaging Service
export class MessagingService {
  private static instance: MessagingService
  private rooms: ChatRoom[] = []
  private messages: { [roomId: string]: ChatMessage[] } = {}
  private notifications: ChatNotification[] = []

  static getInstance(): MessagingService {
    if (!MessagingService.instance) {
      MessagingService.instance = new MessagingService()
    }
    return MessagingService.instance
  }

  constructor() {
    this.loadMockData()
  }

  private loadMockData() {
    this.rooms = [...mockChatRooms]
    this.messages = { ...mockMessages }
  }

  // Room management
  async getChatRooms(userId?: string, membershipTier?: 'free' | 'core' | 'premium'): Promise<ChatRoom[]> {
    let filteredRooms = [...this.rooms]
    
    if (membershipTier) {
      const tierLevels = { free: 0, core: 1, premium: 2 }
      const userLevel = tierLevels[membershipTier]
      filteredRooms = filteredRooms.filter(room => tierLevels[room.membershipRequired] <= userLevel)
    }
    
    // Sort by pinned first, then by last activity
    return filteredRooms.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1
      if (!a.pinned && b.pinned) return 1
      return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
    })
  }

  async getRoomById(roomId: string): Promise<ChatRoom | null> {
    return this.rooms.find(room => room.id === roomId) || null
  }

  async joinRoom(roomId: string, userId: string, userData: any): Promise<{ success: boolean; message: string }> {
    const room = await this.getRoomById(roomId)
    if (!room) {
      return { success: false, message: 'Room not found' }
    }

    // Check membership requirements
    const tierLevels = { free: 0, core: 1, premium: 2 }
    const userLevel = tierLevels[userData.membershipTier || 'free']
    const requiredLevel = tierLevels[room.membershipRequired]
    
    if (userLevel < requiredLevel) {
      return { success: false, message: 'Membership upgrade required' }
    }

    // Check if already a member
    if (room.members.some(m => m.userId === userId)) {
      return { success: false, message: 'Already a member of this room' }
    }

    // Check capacity
    if (room.currentMembers >= room.maxMembers) {
      return { success: false, message: 'Room is at capacity' }
    }

    // Add member
    const newMember: ChatMember = {
      id: `member-${Date.now()}`,
      userId,
      name: userData.name || 'Unknown User',
      avatar: userData.profileImage,
      membershipTier: userData.membershipTier || 'free',
      role: 'member',
      joinedAt: new Date().toISOString(),
      lastSeen: new Date().toISOString(),
      isOnline: true,
      isMuted: false,
      permissions: {
        canPost: true,
        canReact: true,
        canShareMedia: true
      }
    }

    room.members.push(newMember)
    room.currentMembers++
    room.isJoined = true

    return { success: true, message: 'Successfully joined the room' }
  }

  async leaveRoom(roomId: string, userId: string): Promise<{ success: boolean; message: string }> {
    const room = await this.getRoomById(roomId)
    if (!room) {
      return { success: false, message: 'Room not found' }
    }

    const memberIndex = room.members.findIndex(m => m.userId === userId)
    if (memberIndex === -1) {
      return { success: false, message: 'Not a member of this room' }
    }

    room.members.splice(memberIndex, 1)
    room.currentMembers--
    room.isJoined = false

    return { success: true, message: 'Successfully left the room' }
  }

  // Message management
  async getMessages(roomId: string, limit: number = 50, before?: string): Promise<ChatMessage[]> {
    const roomMessages = this.messages[roomId] || []
    
    let filteredMessages = roomMessages.filter(msg => !msg.isDeleted)
    
    if (before) {
      const beforeTimestamp = new Date(before).getTime()
      filteredMessages = filteredMessages.filter(msg => 
        new Date(msg.timestamp).getTime() < beforeTimestamp
      )
    }
    
    return filteredMessages
      .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      .slice(-limit)
  }

  async sendMessage(
    roomId: string, 
    userId: string, 
    content: string, 
    userData: any,
    replyTo?: string,
    attachments?: MessageAttachment[]
  ): Promise<{ success: boolean; message?: ChatMessage; error?: string }> {
    const room = await this.getRoomById(roomId)
    if (!room) {
      return { success: false, error: 'Room not found' }
    }

    // Check if user is a member
    const member = room.members.find(m => m.userId === userId)
    if (!member || !member.permissions.canPost) {
      return { success: false, error: 'Not authorized to post in this room' }
    }

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      roomId,
      userId,
      userName: userData.name || 'Unknown User',
      userAvatar: userData.profileImage,
      membershipTier: userData.membershipTier || 'free',
      content: content.trim(),
      type: 'text',
      timestamp: new Date().toISOString(),
      reactions: [],
      replyTo,
      mentions: this.extractMentions(content),
      attachments: attachments || [],
      isDeleted: false,
      isPinned: false
    }

    if (!this.messages[roomId]) {
      this.messages[roomId] = []
    }
    
    this.messages[roomId].push(newMessage)
    
    // Update room's last activity and message
    room.lastActivity = newMessage.timestamp
    room.lastMessage = newMessage

    return { success: true, message: newMessage }
  }

  async addReaction(messageId: string, userId: string, emoji: string, userName: string): Promise<{ success: boolean; message: string }> {
    // Find the message across all rooms
    let targetMessage: ChatMessage | null = null
    let roomId: string | null = null

    for (const [rId, messages] of Object.entries(this.messages)) {
      const message = messages.find(m => m.id === messageId)
      if (message) {
        targetMessage = message
        roomId = rId
        break
      }
    }

    if (!targetMessage || !roomId) {
      return { success: false, message: 'Message not found' }
    }

    // Check if user already reacted with this emoji
    const existingReaction = targetMessage.reactions.find(r => r.userId === userId && r.emoji === emoji)
    if (existingReaction) {
      // Remove reaction
      targetMessage.reactions = targetMessage.reactions.filter(r => r.id !== existingReaction.id)
      return { success: true, message: 'Reaction removed' }
    }

    // Add reaction
    const newReaction: MessageReaction = {
      id: `react-${Date.now()}`,
      messageId,
      userId,
      userName,
      emoji,
      timestamp: new Date().toISOString()
    }

    targetMessage.reactions.push(newReaction)
    return { success: true, message: 'Reaction added' }
  }

  private extractMentions(content: string): string[] {
    const mentionRegex = /@(\w+)/g
    const mentions: string[] = []
    let match

    while ((match = mentionRegex.exec(content)) !== null) {
      mentions.push(match[1])
    }

    return mentions
  }

  async getUserNotifications(userId: string): Promise<ChatNotification[]> {
    return this.notifications.filter(n => n.userId === userId && !n.isRead)
  }

  async markNotificationAsRead(notificationId: string): Promise<void> {
    const notification = this.notifications.find(n => n.id === notificationId)
    if (notification) {
      notification.isRead = true
    }
  }
}

export const messagingService = MessagingService.getInstance()