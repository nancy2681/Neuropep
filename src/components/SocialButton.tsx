import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { theme } from '@/theme';

interface SocialButtonProps {
  label: string;
  iconSource?: any;
  onPress: () => void;
  style?: ViewStyle;
}

const SocialButton: React.FC<SocialButtonProps> = ({ label, iconSource, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <View style={styles.content}>
        {iconSource && (
          <View style={styles.iconWrapper}>
            <Image source={iconSource} style={styles.icon} resizeMode="contain" />
          </View>
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.radius.m,
    alignItems: 'center',
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default React.memo(SocialButton);
