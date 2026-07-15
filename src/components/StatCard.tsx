import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

interface StatCardProps {
  label: string;
  value: string;
  accent: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, accent }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.dot, { backgroundColor: accent }]} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: theme.spacing.sm,
  },
  label: {
    color: theme.colors.muted,
    fontSize: 13,
  },
  value: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: '700',
    marginTop: theme.spacing.xs,
  },
});

export default React.memo(StatCard);
