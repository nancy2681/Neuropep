import React, { useState } from 'react';
import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ScreenContainer from '@/components/ScreenContainer';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppSelector } from '@/store/hooks';
import { theme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
import NeuropepSvg from '@/assets/svgs/Neuropep.svg';
import FrameIcon from '@/assets/svgs/Frame.svg';
import BulbIcon from '@/assets/svgs/Bulb.svg';
import BulbAiIcon from '@/assets/svgs/Bulbai.svg';
import ArrowVectorIcon from '@/assets/svgs/Vector.svg';
import LockIcon from '@/assets/svgs/Lock.svg';
import VectorAiIcon from '@/assets/svgs/Vectorai.svg';
import PlusIcon from '@/assets/svgs/plus.svg';
import styles from './styles';
import UnLockedHomeScreen from '../UnLockedHomeScreen';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const name = 'Alex';
  const isProtocolActivated = useAppSelector(state => state.app.isProtocolActivated);


  if (isProtocolActivated) {
    return (
      <UnLockedHomeScreen/>
    );
  }

  return (
    <ScreenContainer>
      <ScrollView style={styles.container}>
        <View style={styles.topBar}>
          <NeuropepSvg />
          <View style={styles.actionGroup}>
            <Pressable style={styles.iconButton}>
              <BulbIcon />
            </Pressable>
            <Pressable style={styles.iconButton}>
              <FrameIcon />
            </Pressable>
          </View>
        </View>

        <Text style={styles.greeting}>Good Morning ! {name}</Text>
        <Text style={styles.subheading}>Thursday , May 16</Text>

        <View style={styles.briefCard}>
          <View style={styles.briefHeader}>
            <View style={styles.briefLabel}>
              <BulbAiIcon />
              <Text style={styles.briefTitle}>Morning Brief</Text>
            </View>
            <TouchableOpacity style={styles.briefArrow}>
              <ArrowVectorIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.lockWrapper}>
            <LockIcon />
          </View>
          <Text style={styles.briefDescription}>Create your peptide protocol to activate this brief</Text>
        </View>

        <View style={styles.builderSection}>
          <View style={styles.builderIconWrapper}>
            <VectorAiIcon />
          </View>
          <Text style={styles.builderHeading}>Built Your Peptide Protocol With Our Smart Protocol Builder</Text>
          <Text style={styles.builderText}>Set your goal, experience level, frequency preference and let our AI handle your stack</Text>
          <PrimaryButton
            label='Build your stack'
            onPress={() => ((navigation as any).getParent ? (navigation as any).getParent().navigate('Builder') : navigation.navigate('Builder'))}
            icon={<PlusIcon width={22} height={22} color={theme.colors.white} />}
            style={styles.buildButtonWrapper}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default React.memo(HomeScreen);
