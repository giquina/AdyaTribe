import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import onboarding steps
import FirstNameStep from './FirstNameStep';
import DateOfBirthStep from './DateOfBirthStep';
import EmailStep from './EmailStep';
import ProfilePictureStep from './ProfilePictureStep';
// TODO: Add other steps (SelfieVerification, InterestTags, Welcome)

import { CommonStyles } from '../../constants/Styles';

// 🌟 Main Onboarding Flow - The journey to join our amazing community
const OnboardingFlow = ({ onComplete }) => {
  // Current step in the onboarding process
  const [currentStep, setCurrentStep] = useState(1);
  
  // User data collected during onboarding
  const [userData, setUserData] = useState({
    firstName: '',
    dateOfBirth: null,
    email: '',
    profilePicture: null,
    selfieVerification: null,
    selectedInterests: [],
  });

  // Navigate to next step
  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      onComplete(userData);
    }
  };

  // Navigate to previous step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Update user data
  const updateUserData = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Render current step
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <FirstNameStep
            onNext={handleNext}
            firstName={userData.firstName}
            setFirstName={(value) => updateUserData('firstName', value)}
          />
        );
      
      case 2:
        return (
          <DateOfBirthStep
            onNext={handleNext}
            onBack={handleBack}
            dateOfBirth={userData.dateOfBirth}
            setDateOfBirth={(value) => updateUserData('dateOfBirth', value)}
          />
        );
      
      case 3:
        return (
          <EmailStep
            onNext={handleNext}
            onBack={handleBack}
            email={userData.email}
            setEmail={(value) => updateUserData('email', value)}
          />
        );

      case 4:
        return (
          <ProfilePictureStep
            onNext={handleNext}
            onBack={handleBack}
            profilePicture={userData.profilePicture}
            setProfilePicture={(value) => updateUserData('profilePicture', value)}
          />
        );
      
      // TODO: Add cases for steps 5-7
      default:
        return (
          <View style={CommonStyles.centerContainer}>
            <Text>Step {currentStep} - Coming Soon!</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderCurrentStep()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.container,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default OnboardingFlow;
