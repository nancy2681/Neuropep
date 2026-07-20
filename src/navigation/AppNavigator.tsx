import React, { useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import BuilderScreen from '@/screens/BuilderScreen';
import AddMedicationScreen from '@/screens/AddMedicationScreen';
import AddManualMedicationScreen from '@/screens/AddManualMedicationScreen';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { checkInitialAuth } from '@/store/slices/appSlice';
import { theme } from '@/theme';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, isAuthLoading } = useAppSelector(state => state.app);

  useEffect(() => {
    dispatch(checkInitialAuth());
  }, [dispatch]);

  if (isAuthLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Tabs" component={MainTabNavigator} />
            <Stack.Screen name="Builder" component={BuilderScreen} />
            <Stack.Screen name="AddMedication" component={AddMedicationScreen} />
            <Stack.Screen name="AddManualMedication" component={AddManualMedicationScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
  },
});

export default React.memo(AppNavigator);

