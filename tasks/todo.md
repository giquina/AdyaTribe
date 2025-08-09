# AdyaTribe Onboarding Step 4: ProfilePictureStep Implementation

## Analysis
- ✅ Analyzed existing onboarding steps (FirstNameStep, DateOfBirthStep, EmailStep)
- ✅ Understood established patterns and component structure  
- ✅ Confirmed available dependencies (expo-camera: ~16.0.0, expo-image-picker: ~16.0.0)
- ✅ Reviewed design system and styling patterns from Styles.js
- 🎯 Goal: Implement Step 4 (ProfilePictureStep) with camera/gallery selection, image editing, and proper integration

## Todo Items

### Phase 1: Component Structure & Basic UI
- [ ] Create ProfilePictureStep.js component file following established patterns
- [ ] Implement basic component structure (header, step number "4 of 7", title, subtitle)
- [ ] Add photo selection options (Camera & Gallery buttons)
- [ ] Implement proper styling following design system patterns
- [ ] Add proper prop handling (onNext, onBack, profilePicture, setProfilePicture)

### Phase 2: Camera & Gallery Functionality
- [ ] Import and configure expo-image-picker for camera access
- [ ] Import and configure expo-image-picker for gallery access
- [ ] Implement permission handling for camera and media library
- [ ] Add camera capture functionality with proper error handling
- [ ] Add gallery selection functionality with proper error handling
- [ ] Add image quality/compression settings for optimal performance

### Phase 3: Image Preview & Editing
- [ ] Implement image preview component showing selected photo
- [ ] Add basic image editing options (crop, rotate if needed)
- [ ] Add photo guidelines display (recommended size, format, etc.)
- [ ] Implement photo validation (file size, format, dimensions)
- [ ] Add retake/reselect functionality

### Phase 4: User Experience & Validation
- [ ] Add loading states during image processing
- [ ] Implement proper error handling and user feedback
- [ ] Add accessibility features (screen reader support)
- [ ] Add photo guidelines and best practices display
- [ ] Implement validation before allowing Continue button activation

### Phase 5: Integration & Testing
- [ ] Update OnboardingFlow.js to include ProfilePictureStep in case 4
- [ ] Add import statement for ProfilePictureStep in OnboardingFlow.js
- [ ] Test step navigation (back to Step 3, forward to Step 5)
- [ ] Verify userData state management for profilePicture field
- [ ] Test on mobile devices for proper camera/gallery access

## Technical Requirements

### Component Props Structure
```javascript
const ProfilePictureStep = ({ 
  onNext, 
  onBack, 
  profilePicture, 
  setProfilePicture 
}) => {
  // Implementation
}
```

### Key Features to Implement
- **Photo Selection Options**: Camera capture and gallery selection buttons
- **Image Preview**: Show selected image with editing options
- **Validation**: File size, format, and quality checks
- **Guidelines**: Photo tips for best results
- **Accessibility**: Screen reader support and keyboard navigation
- **Error Handling**: Graceful failures with helpful messages

### Design System Compliance
- Follow exact styling patterns from existing steps
- Use Colors, Spacing, Typography from Styles.js
- Maintain consistent button and input styling
- Use CommonStyles.centerContainer for layout

## Success Criteria
- ✅ Component follows exact same structure as existing steps
- ✅ Camera and gallery selection work properly
- ✅ Image preview and basic editing functionality
- ✅ Proper validation and error handling
- ✅ Integrated into OnboardingFlow.js navigation
- ✅ Accessibility features implemented
- ✅ Step progress shows "4 of 7" correctly
- ✅ Smooth navigation between steps 3, 4, and 5

## Notes
- Must maintain consistency with existing FirstNameStep, DateOfBirthStep, EmailStep patterns
- Focus on 30+ women user experience - welcoming and confidence-building
- Use established prop patterns and state management
- Ensure mobile-first approach with proper responsive design