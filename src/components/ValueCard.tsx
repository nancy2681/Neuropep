import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

type Props = {
  value: string;
  label: string;
  accent?: boolean;
};

const ValueCard: React.FC<Props> = ({ value, label, accent = false }) => {
  return (
    <View style={[styles.card, accent && styles.cardAccent]}>
      <Text style={[styles.value]}>{value}</Text>
      <Text style={[styles.label, accent && styles.labelAccent]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 105,
    minHeight: 100,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
    marginRight: 10,
  },
  cardAccent: {
    backgroundColor: theme.colors.white,
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.text,
  },
  label: {
    marginTop: theme.spacing.xs,
    fontSize: 14,
    color: theme.colors.subText,
    textAlign: 'center',
  },
  labelAccent: {
    color: theme.colors.text,
  },
});

export default React.memo(ValueCard);
