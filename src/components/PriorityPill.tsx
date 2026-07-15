import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { theme } from '@/theme';
import PlusIcon from '@/assets/svgs/plus.svg';
type Props = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

const PriorityPill: React.FC<Props> = ({ label, icon, selected = false, onPress, style }) => {
  const iconElement = React.isValidElement(icon)
    ? React.cloneElement(icon as React.ReactElement<any>, {
        color: selected ? theme.colors.gradientEnd : theme.colors.text,
        width: 20,
        height: 20,
      })
    : typeof icon === 'string'
    ? <Text style={[styles.iconText, selected ? styles.iconTextSelected : styles.iconTextUnselected]}>{icon}</Text>
    : icon;

  const content = (
    <View style={[styles.pill, selected ? styles.pillSelected : styles.pillUnselected, style]}>
      <View style={styles.leftIcon}>
        {iconElement}
      </View>
      <Text style={[styles.label, selected ? styles.labelSelected : styles.labelUnselected]}>
        {label}
      </Text>
      <PlusIcon
        color={selected ? theme.colors.gradientEnd : theme.colors.text}
        width={16}
        height={16}
        style={{ transform: [{ rotate: selected ? '225deg' : '0deg' }] }}
      />
    </View>
  );

  return (
    <Pressable onPress={onPress}>
      {content}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.md,
  },
  pillUnselected: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  pillSelected: {
    backgroundColor: theme.colors.pillBg,
    borderWidth: 1,
    borderColor: theme.colors.gradientEnd,
  },
  leftIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding:6
  },
  iconText: {
    fontSize: 16,
  },
  iconTextUnselected: {
    color: theme.colors.text,
  },
  iconTextSelected: {
    color: theme.colors.gradientEnd,
  },
  label: {
    fontWeight: '500',
    fontSize: 15,
    marginRight:8
  },
  labelUnselected: {
    color: theme.colors.text,
  },
  labelSelected: {
    color: theme.colors.gradientEnd,
  },
});

export default React.memo(PriorityPill);
