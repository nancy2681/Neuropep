import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { theme } from '@/theme';

interface GoalCardProps {
  title: string;
  subtitle?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  icon?: React.ReactNode;
}

const GoalCard: React.FC<GoalCardProps> = ({ title, subtitle, selected = false, onPress, style, icon }) => {
  return (
    <View style={[styles.shadowWrapper, style as any]}>
      <Pressable onPress={onPress} style={[styles.container, selected && styles.selected]}>
        <View style={styles.contentInner}>
          <View style={[styles.iconWrap]}>{icon}</View>
          <Text style={[styles.title]} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
          {subtitle ? <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">{subtitle}</Text> : null}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowWrapper: {
    width: '47%',
    marginBottom: theme.spacing.lg,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.white ?? theme.colors.surface,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 6,
  },

  container: {
    height: 140,
    width: '100%',
    padding: 16,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.white ?? theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.inActive
  },
  selected: {
    borderWidth: 1.5,
    borderColor: theme.colors.gradientEnd,
    backgroundColor: theme.colors.lightPurple,
  },
  iconWrap: {
    alignSelf: 'center',
    marginBottom: theme.spacing.m,
  },
  contentInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: 13,
    color: theme.colors.subText,
    textAlign: 'center',
  },
});

export default React.memo(GoalCard);
