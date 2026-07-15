import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '@/theme';

type SelectionCardProps = {
  title: string;
  subtitle?: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  subtitle,
  selected = false,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, selected && styles.cardSelected, style]}
    >
      <View style={styles.row}>
        <View style={styles.textGroup}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
              {subtitle}
            </Text>
          ) : null}
        </View>
        <View style={[styles.radio, selected && styles.radioSelected]}>
          {selected ? (
            <LinearGradient
              colors={["#BD2BF2", "#8B5CF6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.radioDot}
            />
          ) : null}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.m,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },
  cardSelected: {
    borderColor: theme.colors.gradientEnd,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textGroup: {
    flex: 1,
    paddingRight: theme.spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.subText,
    lineHeight: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.shadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: theme.colors.gradientEnd,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default React.memo(SelectionCard);
