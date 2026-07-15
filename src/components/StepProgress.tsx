import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '@/theme';

interface StepProgressProps {
  total: number;
  index: number; 
}

const StepProgress: React.FC<StepProgressProps> = ({ total, index }) => {
  const items = Array.from({ length: total });
  return (
    <View style={styles.container}>
      {items.map((_, i) => {
        const isActive = i < index;
        return isActive ? (
          <LinearGradient
            key={i}
            colors={[theme.colors.gradientEnd, theme.colors.gradientStart]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.dot]}
          />
        ) : (
          <View key={i} style={[styles.dot, styles.inactive]} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
    justifyContent: 'space-evenly'
  },
  dot: {
    flex: 1,
    height: 6,
    borderRadius: 12,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  inactive: {
    backgroundColor: theme.colors.inActive,
  },
});

export default React.memo(StepProgress);
