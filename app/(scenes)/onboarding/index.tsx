import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/ui/Button';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Chào mừng đến với Aiber',
      description: 'Ứng dụng đặt xe thông minh, nhanh chóng và an toàn',
      image: require('@/assets/images/onBoarding/step1.png'),
    },
    {
      title: 'Đặt xe dễ dàng',
      description: 'Chỉ cần vài thao tác đơn giản để đặt xe',
      image: require('@/assets/images/onBoarding/step2.png'),
    },
    {
      title: 'Theo dõi chuyến đi',
      description: 'Biết chính xác vị trí tài xế và thời gian đến',
      image: require('@/assets/images/onBoarding/step3.png'),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.replace('/(auth)/login');
    }
  };

  const handleSkip = () => {
    router.replace('/(auth)/login');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={steps[currentStep].image}
          style={styles.image}
          resizeMode="contain"
        />
        <ThemedText style={styles.title}>{steps[currentStep].title}</ThemedText>
        <ThemedText style={styles.description}>
          {steps[currentStep].description}
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <View style={styles.dots}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStep && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttons}>
          <Button
            title="Bỏ qua"
            onPress={handleSkip}
            variant="outline"
            style={styles.skipButton}
          />
          <Button
            title={currentStep === steps.length - 1 ? 'Bắt đầu' : 'Tiếp tục'}
            onPress={handleNext}
            style={styles.nextButton}
          />
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.text.secondary,
    marginBottom: 30,
  },
  footer: {
    paddingBottom: 40,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border.primary,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primary.main,
    width: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    flex: 1,
    marginLeft: 10,
  },
}); 