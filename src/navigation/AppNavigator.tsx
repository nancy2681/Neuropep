import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';
import BuilderScreen from '@/screens/BuilderScreen';
import AddMedicationScreen from '@/screens/AddMedicationScreen';
import AddManualMedicationScreen from '@/screens/AddManualMedicationScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tabs" component={MainTabNavigator} />
        <Stack.Screen name="Builder" component={BuilderScreen} />
        <Stack.Screen name="AddMedication" component={AddMedicationScreen} />
        <Stack.Screen name="AddManualMedication" component={AddManualMedicationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(AppNavigator);
