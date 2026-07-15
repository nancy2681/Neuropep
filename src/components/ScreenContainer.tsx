import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/theme';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => {
  return <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});

export default React.memo(ScreenContainer);
