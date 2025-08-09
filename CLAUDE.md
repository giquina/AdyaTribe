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
- **Next.js 14** with app router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Static export** configured for deployment
- **SEO optimized** with metadata and Open Graph tags

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

**Next Immediate Steps:**
1. Complete Profile Picture Upload (Step 4 of onboarding)
2. Implement Live Selfie Verification (Step 5)
3. Add Interest Tags Selection (Step 6)
4. Create Welcome Screen (Step 7)
5. Set up Firebase backend integration

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
- `web-app/next.config.js`: Next.js configuration for static export
- `web-app/tailwind.config.js`: Tailwind CSS configuration

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

**Current Phase:** Phase 1 - Foundation Complete ✅
**Next Milestone:** Complete Onboarding Flow (Steps 4-7)
**Progress:** 3/7 onboarding steps implemented

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