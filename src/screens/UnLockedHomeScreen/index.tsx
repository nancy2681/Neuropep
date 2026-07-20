import BulbIcon from '@/assets/svgs/Bulb.svg';
import BulbAiIcon from '@/assets/svgs/Bulbai.svg';
import ArrowVectorIcon from '@/assets/svgs/Vector.svg';
import Goal1 from '@/assets/svgs/Goal1.svg';
import CheckboxIcon from '@/assets/svgs/checkbox.svg';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import FramenoIcon from '@/assets/svgs/frameno.svg';
import TellAiBtnIcon from '@/assets/svgs/tellaibtn.svg';
import { checklistData } from '@/data/homeScreen';
import React, { useState } from 'react';
import styles from './styles';
import ScreenContainer from '@/components/ScreenContainer';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NeuropepSvg from '@/assets/svgs/Neuropep.svg';
import FrameIcon from '@/assets/svgs/Frame.svg';
import { theme } from '@/theme';

const UnLockedHomeScreen = () => {
  const name = 'Alex';
  const [showAlert, setShowAlert] = useState(true);
  return (
    <ScreenContainer>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
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

        {/* Morning Brief Card (unlocked) */}
        <View style={styles.unlockedBriefCard}>
          <View style={styles.briefHeader}>
            <View style={styles.briefLabel}>
              <BulbAiIcon />
              <Text style={styles.unlockedBriefTitle}>Morning Brief</Text>
            </View>
            <TouchableOpacity style={styles.briefArrowTransparent}>
              <ArrowVectorIcon style={{ transform: [{ rotate: '360deg' }] }} />
            </TouchableOpacity>
          </View>
          <Text style={styles.unlockedBriefText}>
            Recovery is up <Text style={styles.boldText}>8%</Text> after last
            night's sleep. Your{' '}
            <Text style={styles.boldText}>BPC-157 cycle</Text> enters{' '}
            <Text style={styles.boldText}>week 3</Text>.
          </Text>
          <View style={styles.paginationRow}>
            <LinearGradient
              colors={[theme.colors.gradientStart, theme.colors.gradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.activeDotPill}
            />
            <View style={styles.inactiveDot} />
            <View style={styles.inactiveDot} />
          </View>
        </View>

        {/* Warning Banner */}
        {showAlert && (
          <View style={styles.alertBanner}>
            <View style={styles.alertHeaderRow}>
              <FramenoIcon />
              <Text style={styles.alertTitle}>
                You haven't logged weight in 3 days
              </Text>
            </View>
            <Text style={styles.alertBody}>
              Kindly log your weight to maintain your streak.
            </Text>
            <TouchableOpacity
              style={styles.dismissButton}
              onPress={() => setShowAlert(!showAlert)}
            >
              <Text style={styles.dismissText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Fat Loss Stack Stats */}
        <View style={styles.sectionHeaderRow}>
          <Goal1 width={20} height={20} stroke={theme.colors.gradientEnd} />
          <Text style={styles.sectionHeading}>Fat loss stack</Text>
        </View>

        <View style={styles.statsGridRow}>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>76%</Text>
            <Text style={styles.metricLabel}>Adherence</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>14</Text>
            <Text style={styles.metricLabel}>of 30 days</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>Peak</Text>
            <Text style={styles.metricLabel}>Phase</Text>
          </View>
        </View>

        {/* Today's Checklist */}
        <View style={styles.checklistCard}>
          <Text style={styles.blockHeading}>Today's Checklist</Text>

          {checklistData.map(item => (
            <View key={item.id} style={styles.checklistItemCard}>
              <View style={styles.checklistTextWrap}>
                <Text style={styles.checklistTitle}>{item.title}</Text>
                <View style={styles.checklistSubRow}>
                  <Text style={styles.checklistSubText}>{item.dose}</Text>
                  <View style={styles.bulletSeparator} />
                  <Text style={styles.checklistTimeText}>{item.time}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.markDoneButton}>
                <Text style={styles.markDoneText}>Mark as done</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Priority Metrices */}
        <View style={styles.sectionHeaderRow}>
          <CheckboxIcon width={16} height={16} />
          <Text style={styles.sectionHeading}>Priority Metrices</Text>
        </View>

        <View style={styles.statsGridRow}>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>72lbs</Text>
            <Text style={styles.metricLabel}>Weight</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>8h</Text>
            <Text style={styles.metricLabel}>of Sleep</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricValue}>78%</Text>
            <Text style={styles.metricLabel}>Recovery</Text>
          </View>
        </View>

        <TellAiBtnIcon style={{ alignSelf: 'flex-end', marginRight: -16 }} />
      </ScrollView>

      {/* FAB Button */}
      <TouchableOpacity style={styles.fabContainer}>
        <LinearGradient
          colors={[theme.colors.gradientStart, theme.colors.gradientEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.fabGradient}
        >
          <Svg width={18} height={18} viewBox="0 0 57 53" fill="none">
            <Path
              d="M23.1506 1.73714C24.6956 -0.745357 28.5394 -0.565357 29.7581 2.26589L35.1844 14.8734C35.3304 15.2127 35.4081 15.5774 35.4132 15.9468C35.4182 16.3161 35.3505 16.6829 35.2138 17.026C35.0771 17.3692 34.8742 17.6821 34.6166 17.9468C34.359 18.2116 34.0518 18.423 33.7125 18.569C33.3732 18.715 33.0085 18.7928 32.6391 18.7978C32.2697 18.8029 31.903 18.7351 31.5598 18.5985C31.2167 18.4618 30.9038 18.2589 30.639 18.0013C30.3743 17.7437 30.1629 17.4364 30.0169 17.0971L26.3119 8.49089L22.1381 18.2071C21.3806 19.9696 19.9706 21.3796 18.2081 22.1371L8.49562 26.3109L18.2081 30.4921C19.9706 31.2534 21.3806 32.6559 22.1381 34.4184L26.3119 44.1309L31.2319 32.7009L32.4694 29.7796C33.2613 27.917 34.5839 26.3285 36.2723 25.2122C37.9607 24.096 39.9403 23.5012 41.9644 23.5021H45.5494L41.9119 19.8646C41.3998 19.334 41.1166 18.6234 41.1234 17.886C41.1301 17.1485 41.4263 16.4432 41.948 15.922C42.4697 15.4008 43.1752 15.1054 43.9127 15.0993C44.6501 15.0932 45.3604 15.3771 45.8906 15.8896L56.3156 26.3146L45.8906 36.7396C45.3575 37.2364 44.6523 37.5069 43.9237 37.494C43.195 37.4812 42.4998 37.186 41.9845 36.6707C41.4692 36.1554 41.1741 35.4602 41.1612 34.7316C41.1484 34.003 41.4188 33.2978 41.9156 32.7646L45.5531 29.1271H41.9644C40.0856 29.1271 38.3869 30.2521 37.6519 31.9809L36.4031 34.9134L36.3994 34.9246L29.7619 50.3596C28.4569 53.3859 24.1744 53.3859 22.8694 50.3596L16.9706 36.6421C16.781 36.2009 16.4294 35.8492 15.9881 35.6596L2.26687 29.7571C-0.755625 28.4559 -0.755625 24.1696 2.26687 22.8684L15.9919 16.9696C16.4317 16.7793 16.7819 16.4277 16.9706 15.9871L22.8694 2.26589L23.1506 1.73714Z"
              fill="#FFF"
            />
          </Svg>
          <Text style={styles.fabText}>Tell AI what to do</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScreenContainer>
  );
};
export default React.memo(UnLockedHomeScreen);
