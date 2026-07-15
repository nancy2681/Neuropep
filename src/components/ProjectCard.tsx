import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';

interface ProjectCardProps {
  title: string;
  location: string;
  completion: string;
  progress: number;
  accent: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, location, completion, progress, accent }) => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, { backgroundColor: accent }]} />
      </View>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.completion}>{completion}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%`, backgroundColor: accent }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  title: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  location: {
    color: theme.colors.muted,
    marginTop: theme.spacing.xs,
  },
  completion: {
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.border,
    borderRadius: 4,
    marginTop: theme.spacing.sm,
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default React.memo(ProjectCard);
