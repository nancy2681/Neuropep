import React, { type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '@/theme';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
  icon?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onPress, style, icon }) => {
  return (
    <Pressable onPress={onPress} style={[styles.pressable, style]}>
      <LinearGradient
        colors={[theme.colors.gradientStart, theme.colors.gradientEnd]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.button}
      >
        {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
     borderRadius: theme.radius.m,
    minHeight: 56,
    minWidth: 358,
  },
  button: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap:8,
    borderRadius: theme.radius.m,
    minHeight: 56,
    minWidth: 358,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default React.memo(PrimaryButton);
