# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AdyaTribe is a community platform for 30+ single & childfree women featuring interest-based groups, events, and safe verification. The project consists of a React Native mobile app and a Next.js web application.

## Development Commands

### Mobile App (React Native + Expo)
```bash
cd mobile-app
npm install          # Install dependencies
npm start           # Start Expo development server
npm run android     # Run on Android device/emulator
npm run ios         # Run on iOS device/simulator
npm run web         # Run web version in browser
```

### Web App (Next.js)
```bash
cd web-app
npm install         # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run export      # Build and export static site
```

### Testing
No testing framework is currently configured. When implementing tests, update this section.

### Type Checking (Web App)
```bash
cd web-app
npx tsc --noEmit  # Type check without emitting files
```

## Architecture Overview

### Project Structure
```
AdyaTribe/
├── mobile-app/          # React Native + Expo mobile application
│   ├── src/
│   │   ├── screens/     # App screens (onboarding, main app)
│   │   ├── constants/   # Design system and shared constants
│   │   └── components/  # Reusable UI components (future)
│   ├── App.js          # Main app entry point
│   └── package.json    # Mobile dependencies
├── web-app/            # Next.js landing page and web dashboard
│   ├── src/
│   │   ├── app/        # Next.js 14 app router structure
│   │   ├── components/ # React components (Hero, Features, etc.)
│   │   └── lib/        # Utility functions
│   └── package.json    # Web dependencies
└── docs/               # Project documentation
```

### Mobile App Architecture

**Current State (Phase 1 - Foundation Complete ✅):**
- **Onboarding Flow:** 7/7 steps implemented (100% COMPLETE!)
- **Design System:** Centralized in `src/constants/Styles.js`
- **Navigation:** Step-by-step flow managed in `OnboardingFlow.js`
- **Data Collection:** User data accumulated in parent component state
- **User Journey:** Complete signup to community entry flow
- **Authentication:** Selfie verification system for safety & authenticity

**Key Components:**
- `OnboardingFlow.js`: Main navigation controller for 7-step onboarding
- `FirstNameStep.js`: Collects and validates user's first name
- `DateOfBirthStep.js`: Date picker with 30+ age verification
- `EmailStep.js`: Email validation and collection
- `ProfilePictureStep.js`: Photo upload with camera/gallery selection
- `SelfieVerificationStep.js`: AI-powered identity verification
- `InterestTagsStep.js`: 48 interests across 6 categories for matching
- `WelcomeStep.js`: Celebration screen with community guidelines
- `Styles.js`: Complete design system with colors, typography, spacing

**Onboarding Steps:**
1. ✅ First Name Collection
2. ✅ Date of Birth + Age Verification (30+)  
3. ✅ Email Address + Validation
4. ✅ Profile Picture Upload (camera/gallery selection)
5. ✅ Live Selfie Verification (AI-powered safety)
6. ✅ Interest Tags Selection (48 interests, 6 categories)
7. ✅ Welcome Screen + Community Guidelines

### Web App Architecture

**Current State:**
- **Next.js 14** with app router and TypeScript
- **Tailwind CSS** with custom design system matching mobile app colors
- **Static export** configured for deployment (output: 'export' in next.config.js)
- **SEO optimized** with metadata and Open Graph tags
- **Complete Landing Page:** Hero, Features, Testimonials, CTA, Footer
- **Authentication Pages:** Login & Signup forms with social login options
- **Information Pages:** About, Contact, How It Works, Community, Pricing
- **Core Platform Features:** Dashboard, Chat, Directory, Events, Forums, Profiles
- **Advanced Components:** Profile management, messaging system, event creation

## Development Workflow

### Before Starting Work
```bash
git pull origin main  # Always pull latest changes
cd mobile-app        # Or cd web-app
npm install          # Ensure dependencies are current
```

### Development Guidelines

1. **Mobile App Development:**
   - Follow existing onboarding step pattern when adding new steps
   - Use centralized design system from `Styles.js`
   - Validate user input before allowing navigation
   - Update `OnboardingFlow.js` to include new steps
   - Test on both iOS and Android using Expo Go

2. **Web App Development:**
   - Use TypeScript for all new components
   - Follow Next.js 14 app router conventions
   - Maintain responsive design with Tailwind CSS
   - Test static export compatibility

3. **Commit Frequently:**
   ```bash
   git add .
   git commit -m "Descriptive commit message"
   git push origin main
   ```

### Current Development Priority

**Phase 2 - Membership Platform (Current Focus):**
1. **Dashboard Design:** User engagement features and activity feeds
2. **Membership Tiers:** Free, Core, and Premium subscription models  
3. **Community Chat:** Group-based messaging with moderation
4. **Safety Features:** Advanced moderation and reporting systems
5. **User Verification:** Enhanced selfie verification for authenticity
6. **GDPR Compliance:** UK regulatory framework implementation
7. **Payment Integration:** Stripe subscription management

## Technology Stack

### Mobile App
- **React Native 0.76.1** with **Expo 52.0.0**
- **React Navigation 7** for navigation
- **Formik + Yup** for form handling and validation
- **React Native Paper** for UI components
- **Firebase 10.0.0** for backend (not yet connected)
- **Expo Camera** and **Image Picker** for photo features

### Web App
- **Next.js 14** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Headless UI** for accessible components
- **Lucide React** for icons

### Planned Backend
- **Firebase** (Authentication, Firestore, Storage, Functions)
- **Stripe** for payment processing

## Utility Libraries (Web App)

The web app includes several utility libraries in `src/lib/`:

- **`auth.ts`**: Authentication service and user management
- **`connections.ts`**: User connections and networking features
- **`directory.ts`**: Member directory and search functionality
- **`events.ts`**: Event management and RSVP system
- **`forums.ts`**: Discussion forums and topic management
- **`messaging.ts`**: Chat rooms and messaging system
- **`profile.ts`**: User profile management and completion tracking

These libraries provide TypeScript interfaces and mock data for development, ready to be connected to Firebase backend.

## Key Files to Understand

### Mobile App Critical Files
- `mobile-app/App.js`: Main app entry point, renders OnboardingFlow
- `mobile-app/src/screens/onboarding/OnboardingFlow.js`: Navigation controller for 7-step onboarding
- `mobile-app/src/constants/Styles.js`: Complete design system (Colors, Typography, Spacing, CommonStyles)
- `mobile-app/app.json`: Expo configuration
- `mobile-app/package.json`: Dependencies and scripts

### Web App Critical Files  
- `web-app/src/app/layout.tsx`: Root layout with metadata and font configuration
- `web-app/src/app/page.tsx`: Main landing page
- `web-app/src/components/Header.tsx`: Navigation with authentication links
- `web-app/src/components/Hero.tsx`: Landing page hero section
- `web-app/src/components/Features.tsx`: Platform features showcase
- `web-app/src/components/Testimonials.tsx`: User testimonials
- `web-app/src/components/CTA.tsx`: Call-to-action sections
- `web-app/src/components/Footer.tsx`: Site footer with links
- `web-app/next.config.js`: Next.js configuration for static export
- `web-app/tailwind.config.js`: Tailwind CSS configuration with AdyaTribe brand colors
- `web-app/tsconfig.json`: TypeScript configuration with path aliases (@/)

### Web App Page Structure
**Landing & Information Pages:**
- `web-app/src/app/page.tsx`: Main landing page with hero, features, testimonials
- `web-app/src/app/about/page.tsx`: About the platform
- `web-app/src/app/how-it-works/page.tsx`: Platform usage guide
- `web-app/src/app/community/page.tsx`: Community overview
- `web-app/src/app/contact/page.tsx`: Contact information
- `web-app/src/app/pricing/page.tsx`: Membership tiers and pricing

**Authentication Pages:**
- `web-app/src/app/login/page.tsx`: User login form
- `web-app/src/app/signup/page.tsx`: User registration form

**Platform Features (Phase 2):**
- `web-app/src/app/dashboard/page.tsx`: User dashboard and activity feed
- `web-app/src/app/chat/page.tsx`: Chat room directory
- `web-app/src/app/chat/[id]/page.tsx`: Individual chat room interface
- `web-app/src/app/directory/page.tsx`: Member directory
- `web-app/src/app/directory/member/[id]/page.tsx`: Individual member profile view
- `web-app/src/app/events/page.tsx`: Events directory
- `web-app/src/app/events/[id]/page.tsx`: Individual event details
- `web-app/src/app/events/create/page.tsx`: Event creation form
- `web-app/src/app/forums/page.tsx`: Discussion forums
- `web-app/src/app/forums/topic/[id]/page.tsx`: Individual forum topic
- `web-app/src/app/profiles/page.tsx`: Profile browsing
- `web-app/src/app/profile/[id]/page.tsx`: Public profile view
- `web-app/src/app/profile/edit/page.tsx`: Profile editing interface
- `web-app/src/app/admin/page.tsx`: Admin dashboard (restricted)

### Advanced Profile Components
The web app includes sophisticated profile management components in `src/components/profile/`:

- **`ProfileCard.tsx`**: Member profile card display
- **`ProfileHeader.tsx`**: Profile header with avatar and basic info
- **`ProfileEditForm.tsx`**: Comprehensive profile editing interface
- **`ProfileCompletion.tsx`**: Profile completion progress and gamification
- **`ProfileGallery.tsx`**: Photo gallery management
- **`ProfileBadges.tsx`**: Achievement and verification badges
- **`ProfileVerification.tsx`**: Identity verification status and controls
- **`ProfilePrivacy.tsx`**: Privacy settings and visibility controls
- **`ProfilePhotoManager.tsx`**: Photo upload and management system
- **`ConnectionButton.tsx`**: Connect/follow button with state management

## Design System

The mobile app uses a centralized design system in `src/constants/Styles.js`:

**Key Design Tokens:**
- **Primary Color:** `#FF6B6B` (warm coral)
- **Secondary Color:** `#4ECDC4` (calming teal)
- **Typography:** Hierarchical text styles (h1, h2, h3, body, caption)
- **Spacing:** Consistent spacing scale (xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48)
- **Components:** Reusable button, input, card, and container styles

**Usage:** Import and use the design system consistently:
```javascript
import { Colors, Spacing, Typography, CommonStyles } from '../../constants/Styles';
```

## Firebase Integration (Planned)

When implementing Firebase:
1. Create Firebase project
2. Configure authentication (email + additional verification)
3. Set up Firestore for user profiles and community data
4. Configure Firebase Storage for image uploads
5. Implement Firebase Functions for backend logic

## Development Status

**Current Phase:** Phase 2 - Membership Platform Development (Advanced Implementation) 🚧
**Previous Milestone:** Phase 1 - Foundation Complete ✅

**Recently Completed:**
- Core platform pages (Dashboard, Chat, Directory, Events, Forums)
- Advanced profile management system with 10 specialized components
- Utility libraries for all major platform features
- Enhanced authentication with social login
- Membership pricing page
- Admin dashboard structure

**Current Focus:** Backend integration and real-time functionality
**Next Priority:** Firebase integration for authentication and data persistence

## Upcoming Platform Features

### Membership & Community System
- **Membership Tiers:** Free (limited), Core (full access), Premium (exclusive features)
- **Community Chat:** Group-based messaging without 1:1 matching
- **Safety First:** Selfie verification, moderation system, women-only spaces
- **Engagement Hub:** User dashboard with activity feeds and group recommendations
- **Local & Interest Groups:** Location-based and topic-based communities
- **Event System:** Community events and expert sessions

### Technical Architecture Priorities
- **Real-time Chat:** WebSocket-based group messaging
- **Subscription Management:** Stripe integration with webhook handling
- **Content Moderation:** Automated filtering + human review queues
- **GDPR Compliance:** Data minimization and user rights management
- **Privacy by Design:** On-device verification, encrypted data storage

## Common Development Tasks

### Adding a New Onboarding Step
1. Create new step component in `src/screens/onboarding/`
2. Follow existing pattern from `EmailStep.js`
3. Add case to `OnboardingFlow.js` switch statement
4. Update userData state structure if needed
5. Test navigation flow thoroughly

### Modifying Design System
1. Edit values in `src/constants/Styles.js`
2. Changes automatically apply across entire app
3. Test on multiple screen sizes
4. Commit changes with descriptive message

### Debugging Common Issues
- **Metro bundler errors:** Clear cache with `npx expo start --clear`
- **Navigation issues:** Check step numbers and navigation logic
- **Styling issues:** Verify imports from Styles.js
- **Git sync issues:** Ensure you're in correct directory for commands

### Web App Development Notes
- **Path Aliases:** Use `@/` for imports from `src/` directory (configured in tsconfig.json)
- **Static Export:** App is configured for static export - avoid server-side features
- **TypeScript:** All new components should be TypeScript with proper interfaces
- **Design System:** Use Tailwind classes that match the mobile app color scheme
- **Component Structure:** Follow existing patterns in profile components for consistency

### Deployment Configuration
- **Next.js Config:** Static export with `output: 'export'` in next.config.js
- **Build Output:** Static files generated in `/out` directory
- **Asset Optimization:** Images set to unoptimized for static hosting
- **Base Path:** Currently empty, can be configured for subdomain deployment

## Claude AI Agent System

AdyaTribe uses a specialized AI agent system organized in `/claude/agents/` with category-based structure:

### Agent Categories

**💻 Development Team** (`/claude/agents/development/`)
- **UI Specialist** - Visual design and component interface expertise
- **UX Designer** - User experience and flow optimization  
- **React Native Expert** - Mobile development and Expo technical implementation
- **Testing Engineer** - Quality assurance and testing strategy

**🚀 Deployment Team** (`/claude/agents/deployment/`)
- **Vercel Deployment Specialist** - Web deployment with comprehensive issue resolution knowledge
- **DevOps Engineer** - Production deployment and infrastructure management

**📋 Management Team** (`/claude/agents/management/`)
- **Project Manager** - Timeline management and project coordination

**🛡️ Security Team** (`/claude/agents/security/`)
- **Security Consultant** - User safety, GDPR compliance, and security expertise

### Usage
Agents can be invoked using the `subagent_type` parameter in Claude Code's Task tool. Each agent contains specialized knowledge for their domain and can be used proactively when working on related features.

## 📊 **Current Project Metrics** 
*(Auto-updated: 2025-08-10)*

- **Claude Code Agents**: 8 specialized agents (organized by category)
- **Onboarding Steps**: 7/7 completed
- **Documentation Files**: Auto-synced with codebase
- **Git Status**: Clean (deployed to production)
- **Last Activity**: Comprehensive platform infrastructure deployment

