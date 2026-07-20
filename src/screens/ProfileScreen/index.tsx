import React, { useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native';
import ScreenContainer from '@/components/ScreenContainer';
import { useAppDispatch } from '@/store/hooks';
import { logoutUser } from '@/store/slices/appSlice';
import styles from './styles';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out of your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: () => {
            dispatch(logoutUser());
          },
        },
      ],
    );
  }, [dispatch]);

  return (
    <ScreenContainer>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Profile & Account</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <Text style={styles.userName}>Alex Johnson</Text>
          <Text style={styles.userEmail}>alex.johnson@gmail.com</Text>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
};

export default React.memo(ProfileScreen);
