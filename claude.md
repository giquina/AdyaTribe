# 🌟 AdyaTribe - Claude Assistant Project Context

*Complete context file for Claude assistants working on AdyaTribe development*

---

## 📍 **Project Overview**
**AdyaTribe** is a premium community platform for 30+ single & childfree women, featuring interest-based groups, events, and safe verification systems. Currently in development Phase 1 with foundation and onboarding flow.

## 🔗 **Essential Links**
- **GitHub Repository:** https://github.com/giquina/AdyaTribe
- **Local Development:** D:\AdyaTribe (External Drive)
- **Codespaces:** https://github.com/giquina/AdyaTribe → Code → Codespaces

## 🏗️ **Project Structure**
```
AdyaTribe/
├── 📱 mobile-app/              # React Native + Expo (main focus)
│   ├── src/
│   │   ├── screens/onboarding/ # Steps 1-7 signup flow
│   │   ├── constants/Styles.js # Complete design system
│   │   ├── components/         # Reusable UI components
│   │   └── services/           # Firebase integration
│   ├── App.js                  # Main app entry point
│   └── package.json            # Dependencies
├── 🌐 web-dashboard/           # Admin panel (future)
├── 🤖 claude-agents/           # AI specialist configurations
├── 📚 docs/                    # Project documentation
├── .devcontainer/              # Codespaces configuration
├── PROJECT_STATUS.md           # Development progress
├── DEVELOPMENT_INSTRUCTIONS.md # Step-by-step guide
└── README.md                   # Project overview
```

## 🎯 **Current Development Status**

### ✅ **Completed (Foundation)**
- **Project Setup:** Complete React Native + Expo structure
- **Design System:** Colors, typography, spacing in `Styles.js`
- **Onboarding Step 1:** First name collection with validation
- **Onboarding Step 2:** Date of birth with 30+ age verification
- **Development Environment:** Local + Codespaces sync configured
- **Documentation:** Comprehensive guides and instructions

### 🔄 **Currently Working On**
- **Onboarding Step 3:** Email validation and authentication
- **Form Enhancement:** Better error handling and user feedback
- **Navigation:** Smooth flow between onboarding steps

### 📋 **Immediate Next Steps**
1. Complete email validation step implementation
2. Design and build profile picture upload (Step 4)
3. Implement selfie verification system (Step 5)
4. Create interest selection interface (Step 6)
5. Build welcome screen (Step 7)

## 🛠️ **Technical Stack**

### **Mobile App:**
- **Framework:** React Native 0.76.1 + Expo ~52.0.0
- **Navigation:** @react-navigation/native
- **Forms:** Formik + Yup validation
- **UI Library:** react-native-paper
- **Camera:** expo-camera, expo-image-picker
- **State:** React hooks (useState, useEffect)

### **Backend (Planned):**
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Storage:** Firebase Storage
- **Functions:** Firebase Cloud Functions
- **Payments:** Stripe API

### **Development:**
- **Environment:** Windows 11 + External Drive (D:\AdyaTribe)
- **Cloud Development:** GitHub Codespaces
- **Version Control:** Git + GitHub

## 📱 **App Architecture & User Flow**

### **Target Users:**
- **Primary:** 30+ single & childfree women
- **Goals:** Find friends, join interest groups, attend events
- **Pain Points:** Unsafe dating apps, difficulty finding like-minded community

### **Core Features:**
1. **Safe Onboarding:** 7-step verification process
2. **Interest Groups:** 30+ categories (hiking, books, theater, etc.)
3. **Events:** RSVP system with Google Maps integration
4. **Premium Tiers:** Free vs paid membership benefits
5. **Safety Features:** Selfie verification, reporting, moderation

### **Onboarding Flow (7 Steps):**
```
Step 1: First Name ✅
Step 2: Date of Birth (30+ verification) ✅
Step 3: Email Address + Authentication 🔄
Step 4: Profile Picture Upload 📋
Step 5: Live Selfie Verification 📋
Step 6: Interest Tag Selection 📋
Step 7: Welcome + Community Guidelines 📋
```

## 🎨 **Design System**

### **Brand Colors:**
```javascript
Colors = {
  primary: '#FF6B6B',        // Warm coral - friendly, inviting
  primaryDark: '#FF5252',    // Interaction states
  primaryLight: '#FFB3BA',   // Light backgrounds
  secondary: '#4ECDC4',      // Calming teal - trustworthy
  background: '#FAFAFA',     // Clean app background
  surface: '#FFFFFF',        // Card backgrounds
  text: '#2C2C2C',          // Main text color
  success: '#4CAF50',        // Validation success
  error: '#F44336',         // Error states
}
```

### **Spacing System:**
```javascript
Spacing = {
  xs: 4,   sm: 8,   md: 16,   lg: 24,   xl: 32,   xxl: 48
}
```

### **Typography Scale:**
- **h1:** 32px bold (main headings)
- **h2:** 24px bold (section headings)
- **body:** 16px regular (main text)
- **caption:** 12px (helper text)

## 👩‍💻 **Developer Profile**

### **Experience Level:** Beginner
- Learning React Native and mobile development
- Comfortable with basic JavaScript and web concepts
- Needs step-by-step guidance with explanations
- Prefers visual feedback and incremental progress

### **Learning Preferences:**
- Clear instructions with "what" AND "why"
- Code examples with explanations
- Small, testable changes over large features
- Visual confirmation that changes work
- Analogies and metaphors for complex concepts

### **Development Environment:**
- **Local:** Windows 11, D:\AdyaTribe, VS Code
- **Cloud:** GitHub Codespaces with pre-configured environment
- **Testing:** Expo Go app on phone for real-device testing
- **Sync:** Git workflow between local and cloud environments

## 🤖 **AI Assistant Team**

Specialized Claude agents available in `/claude-agents/`:
1. **UI Specialist** - Visual design and components
2. **UX Designer** - User experience and flows
3. **Project Manager** - Planning and coordination
4. **React Native Expert** - Technical implementation
5. **Firebase Architect** - Backend and database
6. **Security Consultant** - Safety and privacy
7. **Testing Engineer** - Quality assurance
8. **DevOps Engineer** - Deployment and infrastructure

## 📋 **Current Code Examples**

### **Working Components:**
```javascript
// FirstNameStep.js - Complete with validation
const FirstNameStep = ({ onNext, firstName, setFirstName }) => {
  const handleNext = () => {
    if (firstName.trim().length < 2) {
      Alert.alert('Oops!', 'Please enter your first name (at least 2 characters)');
      return;
    }
    onNext();
  };
  // ... rest of implementation
};
```

### **Design System Usage:**
```javascript
// Consistent styling with design system
const styles = StyleSheet.create({
  button: {
    ...CommonStyles.button,
    backgroundColor: Colors.primary,
  },
  title: {
    ...Typography.h1,
    color: Colors.text,
  }
});
```

## 🎯 **Success Metrics & Goals**

### **Technical Goals:**
- All onboarding steps working smoothly
- App runs on both iOS and Android
- Clean, maintainable code structure
- Real-time Firebase integration
- Successful app store deployment

### **User Experience Goals:**
- High onboarding completion rate (>80%)
- Intuitive navigation and interactions
- Fast loading times and smooth animations
- Accessible to users with disabilities
- Trust and safety throughout experience

### **Learning Goals:**
- Master React Native fundamentals
- Understand mobile app architecture
- Implement real-time database features
- Deploy production-ready applications
- Build maintainable, scalable code

## ⚡ **Quick Commands Reference**

### **Development:**
```bash
# Start mobile app
cd mobile-app && npm start

# Install new package
npm install package-name

# Git workflow
git add . && git commit -m "message" && git push origin main
```

### **File Paths:**
- **Main App:** `D:\AdyaTribe\mobile-app\App.js`
- **Styles:** `D:\AdyaTribe\mobile-app\src\constants\Styles.js`
- **Onboarding:** `D:\AdyaTribe\mobile-app\src\screens\onboarding/`
- **Progress:** `D:\AdyaTribe\PROJECT_STATUS.md`

## 🚨 **Important Context for Assistants**

### **Always Remember:**
1. **User is learning** - Explain concepts clearly with examples
2. **Show AND tell** - Provide code plus explanation of why
3. **Test frequently** - Encourage testing after each small change
4. **Celebrate progress** - Acknowledge achievements and milestones
5. **Build incrementally** - Small working features over complex attempts

### **Communication Style:**
- Use encouraging, supportive tone
- Break complex tasks into smaller steps
- Provide concrete examples and code snippets
- Ask clarifying questions when requirements are unclear
- Reference existing project structure and patterns

### **Code Standards:**
- Follow existing component patterns in the project
- Use the established design system consistently
- Include proper error handling and user feedback
- Write descriptive variable names and comments
- Test on real device when possible

---

**🌟 AdyaTribe Mission: Building a safe, inclusive community platform that brings together amazing 30+ women through shared interests and meaningful connections!**

*Every feature we build helps someone find their tribe and build lasting friendships. Let's make it amazing! 💪*
