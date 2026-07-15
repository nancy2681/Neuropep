import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { Text, View, ScrollView, Animated, Easing } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenContainer from '@/components/ScreenContainer';
import PrimaryButton from '@/components/PrimaryButton';
import StepProgress from '@/components/StepProgress';
import GoalCard from '@/components/GoalCard';
import SelectionCard from '@/components/SelectionCard';
import LabeledTextInput from '@/components/LabeledTextInput';
import NumberStepper from '@/components/NumberStepper';
import OptionPillGroup from '@/components/OptionPillGroup';
import PriorityPill from '@/components/PriorityPill';
import ValueCard from '@/components/ValueCard';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '@/theme';
import { useAppDispatch } from '@/store/hooks';
import { activateProtocol } from '@/store/slices/appSlice';
import type { RootStackParamList } from '@/navigation/types';
import VectorIcon from '@/assets/svgs/Vector.svg';
import ChatIcon from '@/assets/svgs/chat.svg';
import CheckboxIcon from '@/assets/svgs/checkbox.svg';
import LoadingIcon from '@/assets/svgs/loading.svg';
import SparkleIconBadge from '@/components/SparkleIconBadge';
import { GOALS, EXPERIENCES, statusMsg, promptTexts, buttonLabels, PRIORITY_OPTIONS } from '@/data/builderScreen';
import styles from './styles';



const BuilderScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [step, setStep] = useState<number>(0);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedExp, setSelectedExp] = useState<string | null>(null);
  const [fullName, setFullName] = useState('');
  const [bioSex, setBioSex] = useState<string | null>(null);
  const [age, setAge] = useState<number>(32);
  const [weight, setWeight] = useState<number>(32);
  const [height, setHeight] = useState<number>(160);
  const [activity, setActivity] = useState<string | null>(null);
  const [frequency, setFrequency] = useState<string | null>('');
  const [reminderTime, setReminderTime] = useState<string | null>('');
  const [selectedPreviewDay, setSelectedPreviewDay] = useState<number>(0);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    '',
  ]);
  const [loadingIndex, setLoadingIndex] = useState(0);
  const spinValue = useRef(new Animated.Value(0)).current;

  const datePreviewItems = useMemo(() => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    return Array.from({ length: 5 }).map((_, offset) => {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + offset);
      return {
        id: nextDate.toISOString(),
        shortDay: dayNames[nextDate.getDay()],
        date: nextDate.getDate(),
      };
    });
  }, []);
  const promptText = promptTexts[step] || "Let's build your protocol.";

  const onNext = useCallback(() => {
    if (step === 0 && !selectedGoal) return; // require selection
    if (step === 1 && !selectedExp) return;
    if (step === 2 && (!fullName || !bioSex || !age || !weight || !height))
      return;

    if (step < 5) setStep(s => s + 1);
    else {
      // finish flow - navigate or save
      dispatch(activateProtocol());
      navigation.navigate('Tabs');
    }
  }, [
    step,
    selectedGoal,
    selectedExp,
    navigation,
    fullName,
    bioSex,
    age,
    weight,
    height,
    dispatch,
  ]);
  const onBack = useCallback(() => {
    if (step > 0) {
      setStep(s => s - 1);
    } else {
      navigation.goBack();
    }
  }, [step, navigation]);

  const buttonLabel = buttonLabels[step] || 'Next';

  useEffect(() => {
    if (step === 5) {
      spinValue.setValue(0);
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1200,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [step, spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let navigationTimeout: ReturnType<typeof setTimeout>;

    if (step === 5) {
      setLoadingIndex(0);
      interval = setInterval(() => {
        setLoadingIndex(prev => {
          if (prev < statusMsg.length) {
            const next = prev + 1;
            if (next === statusMsg.length) {
              navigationTimeout = setTimeout(() => {
                dispatch(activateProtocol());
                navigation.navigate('Tabs');
              }, 1200);
              clearInterval(interval);
            }
            return next;
          }
          clearInterval(interval);
          return prev;
        });
      }, 1500);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(navigationTimeout);
    };
  }, [step, navigation, dispatch]);

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <VectorIcon
            style={{ transform: [{ rotate: '220deg' }] }}
            onPress={onBack}
          />
          <Text style={styles.headerTitle}>Smart Protocol Builder</Text>
        </View>

        {step !== 5 && <StepProgress total={5} index={step} />}

        {step !== 5 && (
          <View style={styles.infoRow}>
            <ChatIcon />
            <View style={styles.infoCard}>
              <Text style={styles.infoText}>{promptText}</Text>
            </View>
          </View>
        )}

        {step === 0 && (
          <View>
            <Text style={styles.sectionTitle}>Choose your Goal</Text>
            <View style={styles.grid}>
              {GOALS.map(g => (
                <GoalCard
                  key={g.id}
                  title={g.title}
                  subtitle={g.subtitle}
                  selected={selectedGoal === g.id}
                  onPress={() => setSelectedGoal(g.id)}
                  icon={g.icon}
                />
              ))}
            </View>
          </View>
        )}

        {step === 1 && (
          <View>
            <Text style={styles.sectionTitle}>Your experience</Text>
            <View style={styles.selectionList}>
              {EXPERIENCES.map(e => (
                <SelectionCard
                  key={e.id}
                  title={e.title}
                  subtitle={e.subtitle}
                  selected={selectedExp === e.id}
                  onPress={() => setSelectedExp(e.id)}
                />
              ))}
            </View>
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={styles.sectionTitle}>
              A little Bit Baseline Profile
            </Text>
            <LabeledTextInput
              label="Your Full Name"
              value={fullName}
              onChangeText={setFullName}
              placeholder="eg: jamesanderson"
            />

            <Text style={[styles.smallLabel]}>Your Biological Sex</Text>
            <OptionPillGroup
              options={[
                { id: 'male', label: 'Male' },
                { id: 'female', label: 'Female' },
                { id: 'other', label: 'Others' },
              ]}
              selectedId={bioSex}
              onSelect={setBioSex}
            />

            <NumberStepper
              label="Age"
              value={age}
              onChange={setAge}
              min={10}
              max={120}
            />
            <NumberStepper
              label="Weight (lbs)"
              value={weight}
              onChange={setWeight}
              min={10}
              max={1000}
            />
            <NumberStepper
              label="Height (cm)"
              value={height}
              onChange={setHeight}
              min={50}
              max={250}
            />

            <Text style={[styles.smallLabel]}>Activity Level</Text>
            <OptionPillGroup
              options={[
                { id: 'beginner', label: 'Beginner' },
                { id: 'intermediate', label: 'Intermediate' },
                { id: 'athlete', label: 'Athlete' },
              ]}
              selectedId={activity}
              onSelect={setActivity}
            />
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.sectionTitle}>Dosage Frequency</Text>

            <Text style={styles.smallLabel}>Select frequency</Text>
            <OptionPillGroup
              options={[
                { id: 'daily', label: 'Daily' },
                { id: 'weekly', label: 'Weekly' },
                { id: '8-12', label: '8-12 Weeks' },
              ]}
              selectedId={frequency}
              onSelect={setFrequency}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: theme.spacing.xs,
                marginTop: theme.spacing.xs,
              }}
            >
              <Text style={styles.smallLabel}>Reminder time</Text>
              <Pressable
                onPress={() => {
                  /* navigate to custom time modal later */
                }}
              >
                <Text style={styles.link}>Set Custom time</Text>
              </Pressable>
            </View>

            <OptionPillGroup
              options={[
                { id: '7:00 PM', label: '7:00 PM' },
                { id: '8:00 PM', label: '8:00 PM' },
                { id: '9:00 PM', label: '9:00 PM' },
              ]}
              selectedId={reminderTime}
              onSelect={setReminderTime}
            />

            <View style={styles.scheduleCard}>
              <Text
                style={[styles.smallLabel, { marginBottom: theme.spacing.sm }]}
              >
                Schedule preview
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.previewRow}
              >
                {datePreviewItems.map((item, i) => {
                  const selected = i === selectedPreviewDay;
                  return (
                    <Pressable
                      key={item.id}
                      onPress={() => setSelectedPreviewDay(i)}
                      style={styles.dayWrap}
                    >
                      <Text style={styles.dayShort}>{item.shortDay}</Text>
                      {selected ? (
                        <LinearGradient
                          colors={[
                            theme.colors.gradientStart,
                            theme.colors.gradientEnd,
                          ]}
                          style={styles.daySelected}
                        >
                          <Text style={styles.dayLabelSelected}>
                            {item.date}
                          </Text>
                        </LinearGradient>
                      ) : (
                        <View style={styles.dayBox}>
                          <Text style={styles.dayLabel}>{item.date}</Text>
                        </View>
                      )}
                    </Pressable>
                  );
                })}
              </ScrollView>

              <Text
                style={[styles.smallLabel, { marginTop: theme.spacing.md }]}
              >
                Reminder time : {reminderTime}
              </Text>
            </View>
          </View>
        )}

        {step === 4 && (
          <View>
            <Text style={styles.sectionTitle}>
              Tracking priorities{' '}
              <Text style={styles.sectionHint}>(Select Multiple)</Text>
            </Text>

            <View style={styles.priorityGrid}>
              {PRIORITY_OPTIONS.map(option => {
                const selected = selectedPriorities.includes(option.id);
                const togglePriority = () => {
                  setSelectedPriorities(prev =>
                    prev.includes(option.id)
                      ? prev.filter(id => id !== option.id)
                      : [...prev, option.id],
                  );
                };

                return (
                  <PriorityPill
                    key={option.id}
                    label={option.label}
                    icon={option.icon}
                    selected={selected}
                    onPress={togglePriority}
                  />
                );
              })}
            </View>

            <View style={styles.dashboardCard}>
              <View style={styles.dashboardHeader}>
                <Text style={styles.dashboardPreview}>Dashboard Preview</Text>
                <View style={styles.checkboxRow}>
                  <CheckboxIcon />
                  <Text style={styles.dashboardCheckboxLabel}>
                    Priority Metrics
                  </Text>
                </View>
              </View>

              <View style={styles.statsRow}>
                <ValueCard value="72lbs" label="Weight" accent />
                <ValueCard value="8h" label="of Sleep" />
                <ValueCard value="78%" label="Recovery" />
              </View>
            </View>
          </View>
        )}

        {step === 5 && (
          <View
            style={{
              alignItems: 'center',
              gap: theme.spacing.m,
              marginTop: theme.spacing.md,
            }}
          >
            <SparkleIconBadge />
            <Text
              style={[
                styles.infoText,
                { fontWeight: '600', alignSelf: 'center' },
              ]}
            >
              Building your protocol
            </Text>
            <Text style={styles.subText}>
              Neuro pep is generating the protocol plan personalized to your
              goals.
            </Text>
            {statusMsg.map((txt, idx) => {
              const isActive = idx === loadingIndex;
              const isCompleted = idx < loadingIndex;
              const isPending = idx > loadingIndex;

              return (
                <View
                  key={idx}
                  style={[
                    styles.statusMsgCard,
                    isPending && { opacity: 0.5 },
                  ]}
                >
                  {isActive && (
                    <Animated.View
                      style={[
                        styles.statusIcon,
                        { transform: [{ rotate: spin }] },
                      ]}
                    >
                      <LoadingIcon width={22} height={22} />
                    </Animated.View>
                  )}
                  {isCompleted && (
                    <View style={styles.statusIcon}>
                      <CheckboxIcon width={22} height={22} />
                    </View>
                  )}
                  {isPending && (
                    <View style={[styles.statusIcon, styles.pendingCircle]} />
                  )}
                  <Text style={styles.statusText}>{txt}</Text>
                </View>
              );
            })}
          </View>
        )}

        {step !== 5 && <View style={styles.footer}>
          <PrimaryButton label={buttonLabel} onPress={onNext} />
        </View>}
      </View>
    </ScreenContainer>
  );
};

export default React.memo(BuilderScreen);
