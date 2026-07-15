import React from 'react';
import Goal1 from '@/assets/svgs/Goal1.svg';
import Goal2 from '@/assets/svgs/Goal2.svg';
import Goal3 from '@/assets/svgs/Goal3.svg';
import Goal4 from '@/assets/svgs/Goal4.svg';
import Goal5 from '@/assets/svgs/Goal5.svg';
import Goal6 from '@/assets/svgs/Goal6.svg';
import WeightIcon from '@/assets/svgs/weight.svg';
import SleepIcon from '@/assets/svgs/sleep.svg';
import MoodIcon from '@/assets/svgs/mood.svg';
import RecoveryIcon from '@/assets/svgs/heart.svg';
import HydrationIcon from '@/assets/svgs/water.svg';

export type Goal = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

export const GOALS: Goal[] = [
  {
    id: 'fat',
    title: 'Fat Loss',
    subtitle: 'Lean down, preserve muscle',
    icon: <Goal1 />,
  },
  {
    id: 'muscle',
    title: 'Muscle Growth',
    subtitle: 'Hypertrophy and strength',
    icon: <Goal2 />,
  },
  {
    id: 'recovery',
    title: 'Recovery & Healing',
    subtitle: 'Tissue repair',
    icon: <Goal3 />,
  },
  {
    id: 'sleep',
    title: 'Sleep Optimization',
    subtitle: 'Deep sleep',
    icon: <Goal4 />,
  },
  {
    id: 'energy',
    title: 'Energy & Focus',
    subtitle: 'Daytime cognition & drive',
    icon: <Goal5 />,
  },
  {
    id: 'longevity',
    title: 'Longevity & Wellness',
    subtitle: 'Health span optimization',
    icon: <Goal6 />,
  },
];

export const EXPERIENCES: Goal[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'First Cycle. Need guidance on basics',
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'A Few Cycles. Comfortable with dosing',
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Stacking, long term protocols',
  },
];

export const statusMsg = [
  'Analyzing your goals...',
  'Mapping baseline biomarkers..',
  'Optimizing dose schedule..',
  'Building personalized tracking system..',
];

export const promptTexts = [
  "What's your primary goal? I'll shape your protocol and tracking around it.",
  "How experienced are you? I'll calibrate dosing and detail level accordingly.",
  'A few baseline numbers help me personalize doses and trend analysis.',
  "Let's plan the rhythm. I'll keep reminders quiet but reliable.",
  'What should I pay closer attention to? Pick any categories.',
];

export const buttonLabels = [
  'Next : Choose your experience',
  'Next : Fill out your basic details',
  'Next : Set dosage frequency',
  'Next : Track priorities',
  'Activate your stack',
];

export type PriorityOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export const PRIORITY_OPTIONS: PriorityOption[] = [
  { id: 'weight', label: 'Weight', icon: <WeightIcon /> },
  { id: 'sleep', label: 'Sleep', icon: <SleepIcon /> },
  {
    id: 'sideEffects',
    label: 'Side Effects',
    icon: <WeightIcon />,
  },
  { id: 'mood', label: 'Mood', icon: <MoodIcon /> },
  { id: 'recovery', label: 'Recovery', icon: <RecoveryIcon /> },
  {
    id: 'hydration',
    label: 'Hydration',
    icon: <HydrationIcon />,
  },
];
