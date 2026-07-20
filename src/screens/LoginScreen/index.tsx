import React, { useCallback } from 'react';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import NeuropepSvg from '@/assets/svgs/Neuropep.svg';
import ScreenContainer from '@/components/ScreenContainer';
import styles from './styles';

import { useAppDispatch } from '@/store/hooks';
import { loginWithGoogle } from '@/store/slices/appSlice';

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = useCallback(() => {
    dispatch(loginWithGoogle());
  }, [dispatch]);

  const phoneImage = require('@/assets/images/Rectangle 1.png');
  const notificationImage = require('@/assets/images/Notifications.png');
  const googleIcon = require('@/assets/images/Group.png');

  return (
    <ScreenContainer>
      <View style={styles.card}>
        <ImageBackground source={phoneImage} style={styles.heroImage}>
          <NeuropepSvg style={styles.neuropepSvg} />
        </ImageBackground>
        <Image source={notificationImage} style={styles.notification} resizeMode="contain" />
        <Text style={styles.heroTitle}>A smarter way to track peptides, recovery, and performance.</Text>
        <Pressable onPress={handleLogin} style={[styles.socialButton, styles.socialButtonShadow]}>
          <View style={styles.socialContent}>
            <View style={styles.socialIconWrapper}>
              <Image source={googleIcon} style={styles.socialIcon} resizeMode="contain" />
            </View>
            <Text style={styles.socialLabel}>Continue with Google</Text>
          </View>
        </Pressable>
        <Text style={styles.heroSubtitle}>
          By continuing, you agree to our{' '}
          <Text style={styles.heroLink}>Terms of Services</Text>{' '}
          and{' '}
          <Text style={styles.heroLink}>Privacy Policy</Text>
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default React.memo(LoginScreen);
