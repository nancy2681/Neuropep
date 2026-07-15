import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/navigation/types';
import ScreenContainer from '@/components/ScreenContainer';
import PrimaryButton from '@/components/PrimaryButton';
import VectorIcon from '@/assets/svgs/Vector.svg';
import AddMedicationSvg from '@/assets/svgs/addmedication.svg';
import Svg, { Path } from 'react-native-svg';
import { Dropdown } from 'react-native-element-dropdown';
import { medNameData, cyclePeriodData, syringeTypeData } from '@/data/addManualMedication';
import styles from './styles';

const ChevronDownIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Path
      d="m6 9 6 6 6-6"
      stroke="#111827"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);


const AddManualMedicationScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [medName, setMedName] = useState('Thylosomin');
  const [cyclePeriod, setCyclePeriod] = useState(
    '21 May (on : 7 - Off : 7) - 1 June'
  );
  const [doseAmount, setDoseAmount] = useState('5');
  const [bacWater, setBacWater] = useState('5');
  const [concentration, setConcentration] = useState('5');
  const [startDate, setStartDate] = useState('12.5.2026');
  const [unitPerDose, setUnitPerDose] = useState('10 units');
  const [totalDose, setTotalDose] = useState('20 doses');
  const [vialUpto, setVialUpto] = useState('45 days');
  const [syringeType, setSyringeType] = useState('U - 199');

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <VectorIcon style={{ transform: [{ rotate: '220deg' }] }} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Medication</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Top visual card */}
          <View style={styles.topCard}>
            <View style={styles.vialWrapper}>
              <AddMedicationSvg />
            </View>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* Container 1: Name & Cycle */}
            <View style={styles.formContainerCard}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Medication name</Text>
                <Dropdown
                  style={styles.dropdownInput}
                  selectedTextStyle={styles.inputText}
                  placeholderStyle={styles.inputText}
                  itemTextStyle={styles.inputText}
                  data={medNameData}
                  labelField="label"
                  valueField="value"
                  value={medName}
                  onChange={item => setMedName(item.value)}
                  renderRightIcon={() => <ChevronDownIcon />}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Cycle Period</Text>
                <Dropdown
                  style={styles.dropdownInput}
                  selectedTextStyle={styles.inputText}
                  placeholderStyle={styles.inputText}
                  itemTextStyle={styles.inputText}
                  data={cyclePeriodData}
                  labelField="label"
                  valueField="value"
                  value={cyclePeriod}
                  onChange={item => setCyclePeriod(item.value)}
                  renderRightIcon={() => <ChevronDownIcon />}
                />
              </View>
            </View>

            {/* Container 2: Dose Amount & BAC Water */}
            <View style={styles.formContainerCard}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Dose Amount</Text>
                <View style={styles.inputWithPrefix}>
                  <Text style={styles.prefixText}>mcg</Text>
                  <TextInput
                    style={styles.textInput}
                    value={doseAmount}
                    onChangeText={setDoseAmount}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>BAC Water</Text>
                <View style={styles.inputWithPrefix}>
                  <Text style={styles.prefixText}>ml</Text>
                  <TextInput
                    style={styles.textInput}
                    value={bacWater}
                    onChangeText={setBacWater}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            {/* Container 3: Concentration, Start date, Unit per dose, Total dose, Vial upto */}
            <View style={styles.formContainerCard}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Concentration</Text>
                <View style={styles.inputWithPrefix}>
                  <Text style={styles.prefixText}>mg/ml</Text>
                  <TextInput
                    style={styles.textInput}
                    value={concentration}
                    onChangeText={setConcentration}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Start date</Text>
                <View style={styles.inputSimple}>
                  <TextInput
                    style={styles.textInputSimple}
                    value={startDate}
                    onChangeText={setStartDate}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Unit per dose</Text>
                <View style={styles.inputSimple}>
                  <TextInput
                    style={styles.textInputSimple}
                    value={unitPerDose}
                    onChangeText={setUnitPerDose}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Total dose in vial</Text>
                <View style={styles.inputSimple}>
                  <TextInput
                    style={styles.textInputSimple}
                    value={totalDose}
                    onChangeText={setTotalDose}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Vial Available upto</Text>
                <View style={styles.inputSimple}>
                  <TextInput
                    style={styles.textInputSimple}
                    value={vialUpto}
                    onChangeText={setVialUpto}
                  />
                </View>
              </View>
            </View>

            {/* Container 4: Recommended Syringe Type */}
            <View style={styles.formContainerCard}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Recommended Syringe Type</Text>
                <Dropdown
                  style={styles.dropdownInput}
                  selectedTextStyle={styles.inputText}
                  placeholderStyle={styles.inputText}
                  itemTextStyle={styles.inputText}
                  data={syringeTypeData}
                  labelField="label"
                  valueField="value"
                  value={syringeType}
                  onChange={item => setSyringeType(item.value)}
                  renderRightIcon={() => <ChevronDownIcon />}
                />
              </View>
            </View>
          </View>

          {/* Save Button */}
          <PrimaryButton
            label="Save Medication"
            onPress={() => navigation.navigate('Tabs')}
            style={{ minWidth: '100%' }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default AddManualMedicationScreen;
