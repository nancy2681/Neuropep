import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { theme } from '@/theme';

type Option = { id: string; label: string };
type Props = {
  options: Option[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  style?: any;
};

const OptionPillGroup: React.FC<Props> = ({ options, selectedId, onSelect, style }) => {
  return (
    <View style={[styles.row, style]}>
      {options.map(o => {
        const selected = selectedId === o.id;
        return (
          <Pressable key={o.id} onPress={() => onSelect && onSelect(o.id)} style={styles.pillWrap}>
            {selected ? (
              <View style={styles.pillGradient}>
                <Text style={[styles.pillText, styles.pillTextSelected]}>{o.label}</Text>
              </View>
            ) : (
              <View style={styles.pill}>
                <Text style={styles.pillText}>{o.label}</Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12, flexWrap: 'wrap', marginBottom: theme.spacing.md },
  pillWrap: { marginRight: 8 },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.white,
  },
  pillGradient: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gradientEnd,
    backgroundColor: theme.colors.pillBg,
  },
  pillText: { color: theme.colors.text, fontWeight: '500', fontSize: 14 },
  pillTextSelected: { color: theme.colors.gradientEnd },
});

export default React.memo(OptionPillGroup);
