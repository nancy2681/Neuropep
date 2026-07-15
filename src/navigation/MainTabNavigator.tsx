import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '@/screens/HomeScreen';
import HomeIcon from '@/assets/svgs/home.svg';
import TrackIcon from '@/assets/svgs/track.svg';
import PlusIcon from '@/assets/svgs/plus.svg';
import LifestyleIcon from '@/assets/svgs/lifestyle.svg';
import ProfileIcon from '@/assets/svgs/profile.svg';
import PlusTabIcon from '@/assets/svgs/plustab.svg';
import WeightIcon from '@/assets/svgs/weight.svg';
import SmilyIcon from '@/assets/svgs/smilyemoji.svg';
import MedicationIcon from '@/assets/svgs/medication.svg';
import CalendarIcon from '@/assets/svgs/calendar.svg';
import CalculatorIcon from '@/assets/svgs/calculator.svg';
import { theme } from '@/theme';
import type { RootTabParamList } from './types';
const Tab = createBottomTabNavigator<RootTabParamList>();
const PlaceholderScreen: React.FC<{ label: string }> = ({ label }) => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderText}>{label}</Text>
  </View>
);
const iconForRoute = (
  routeName: keyof RootTabParamList,
  focused: boolean
) => {
  switch (routeName) {
    case 'Home':
      return <HomeIcon color={focused ? theme.colors.gradientEnd : theme.colors.textSecondary} />;
    case 'Track':
      return <TrackIcon color={focused ? theme.colors.gradientEnd : theme.colors.textSecondary} />;
    case 'Builder':
      return (
        <View style={{
          marginTop: 35,
          width: 50,
          height: 50,
          borderRadius: 12,
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#8B5CF6',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: theme.colors.shadow,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.6,
          shadowRadius: 4,
          elevation: 2,
        }}>
          <PlusIcon width={24} height={24} color={focused ? theme.colors.gradientEnd : theme.colors.textSecondary} />
        </View>
      );
    case 'Lifestyle':
      return <LifestyleIcon color={focused ? theme.colors.gradientEnd : theme.colors.textSecondary} />;
    case 'Profile':
      return <ProfileIcon color={focused ? theme.colors.gradientEnd : theme.colors.textSecondary} />;
    default:
      return null;
  }
};
const MainTabNavigator: React.FC = () => {
  const navigation = useNavigation();
  const [isQuickLinksVisible, setIsQuickLinksVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: theme.colors.gradientEnd,
          tabBarInactiveTintColor: theme.colors.textSecondary,
          tabBarIcon: ({ focused }) =>
            iconForRoute(route.name as keyof RootTabParamList, focused),
          tabBarIconStyle: styles.tabBarIcon,
          tabBarLabel: route.name === 'Builder' ? '' : route.name,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Track"
          component={() => <PlaceholderScreen label="Track" />}
        />
        <Tab.Screen
          name="Builder"
          component={() => null}
          options={{
            tabBarLabel: '',
            tabBarButton: (props) => (
              <TouchableOpacity
                {...(props as any)}
                onPress={() => setIsQuickLinksVisible(true)}
                style={(props as any).style}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lifestyle"
          component={() => <PlaceholderScreen label="Lifestyle" />}
        />
        <Tab.Screen
          name="Profile"
          component={() => <PlaceholderScreen label="Profile" />}
        />
      </Tab.Navigator>

      <Modal
        visible={isQuickLinksVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsQuickLinksVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setIsQuickLinksVisible(false)}
        >
          <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
            <Text style={styles.modalTitle}>Quick Links</Text>

            <View style={styles.grid}>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                  setIsQuickLinksVisible(false);
                  (navigation as any).navigate('AddMedication');
                }}
              >
                <View style={styles.iconContainer}>
                  <MedicationIcon width={22} height={22} />
                </View>
                <Text style={styles.gridLabel}>Add Medication</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridItem} onPress={() => setIsQuickLinksVisible(false)}>
                <View style={styles.iconContainer}>
                  <CalendarIcon width={22} height={22} />
                </View>
                <Text style={styles.gridLabel}>Add Schedule</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridItem} onPress={() => setIsQuickLinksVisible(false)}>
                <View style={styles.iconContainer}>
                  <PlusIcon width={22} height={22} />
                </View>
                <Text style={styles.gridLabel}>Log Dose</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridItem} onPress={() => setIsQuickLinksVisible(false)}>
                <View style={styles.iconContainer}>
                  <WeightIcon width={22} height={22} />
                </View>
                <Text style={styles.gridLabel}>Log Weight</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridItem} onPress={() => setIsQuickLinksVisible(false)}>
                <View style={styles.iconContainer}>
                  <SmilyIcon width={24} height={24} />
                </View>
                <Text style={styles.gridLabel}>Daily Check In</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.gridItem} onPress={() => setIsQuickLinksVisible(false)}>
                <View style={styles.iconContainer}>
                  <CalculatorIcon width={22} height={22} />
                </View>
                <Text style={styles.gridLabel}>Calculator</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 98,
    borderRadius: 22,
    backgroundColor: theme.colors.surface,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
    paddingBottom: 12,
    paddingTop: 12,
    paddingHorizontal: theme.spacing.md,
  },
  tabBarIcon: { marginBottom: 8 },
  tabLabel: { fontSize: 15, fontWeight: '500' },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSize.lg,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 110,
  },
  modalContent: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingTop: 24,
    paddingHorizontal: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 16,
    color: theme.colors.cardSubText,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48.5%',
    height: 104,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
});
export default React.memo(MainTabNavigator);
