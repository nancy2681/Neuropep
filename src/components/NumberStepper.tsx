import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { theme } from '@/theme';

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

const NumberStepper: React.FC<Props> = ({ label, value, onChange, min = 0, max = 999, step = 1 }) => {
  const dec = () => onChange(Math.max(min, value - step));
  const inc = () => onChange(Math.min(max, value + step));

  return (
    <View style={styles.wrapper}>
     
      <View style={styles.row}>
        <View style={styles.box}>
            <View>
                 <Text style={styles.label}>{label}</Text>
            </View>
        <View style={styles.row}> 
          <Pressable onPress={dec} style={styles.control}><Text style={styles.controlText}>−</Text></Pressable>
          <Text style={styles.value}>{value}</Text>
          <Pressable onPress={inc} style={styles.control}><Text style={styles.controlText}>+</Text></Pressable>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: '100%', marginBottom: theme.spacing.md },
  label: { color: theme.colors.textSecondary, marginBottom: 8, fontWeight: '400', fontSize: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  box: {
    flex: 1,
    height: 56,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  control: { width: 36, height: 36, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  controlText: { fontSize: 14, color: theme.colors.text },
  value: { fontSize: 15, fontWeight: '600', color: theme.colors.text },
});

export default React.memo(NumberStepper);
