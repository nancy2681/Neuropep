import React, { useState, useRef } from 'react';
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
import ScreenContainer from '@/components/ScreenContainer';
import VectorIcon from '@/assets/svgs/Vector.svg';
import VectorAiIcon from '@/assets/svgs/Vectorai.svg';
import CalendarIcon from '@/assets/svgs/calendar.svg';
import Svg, { Path } from 'react-native-svg';
import ChatAiIcon from '@/assets/svgs/chatai.svg';
import UserIcon from '@/assets/svgs/user.svg';
import ThumbsUpIcon from '@/assets/svgs/thumbsup.svg';
import ArrowUpIcon from '@/assets/svgs/arrowup.svg';
import { Message, initialMessages, suggestionPills } from '@/data/addMedication';
import styles from './styles';

const ChevronUpIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: [{ rotate: isExpanded ? '0deg' : '180deg' }] }}
  >
    <Path
      d="m18 15-6-6-6 6"
      stroke="#111827"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AddMedicationScreen: React.FC = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const handleSend = (textToSend = inputValue) => {
    const cleanText = textToSend.trim();
    if (!cleanText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: cleanText,
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // scroll to bottom
    setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);

    // Simulate Agent response
    setTimeout(() => {
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: "Got it! I am processing your request. I'll update your medication shortly.",
      };
      setMessages(prev => [...prev, agentMsg]);
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    }, 1000);
  };

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

        {/* Chat ScrollView */}
        <ScrollView
          ref={scrollViewRef}
          style={styles.chatContainer}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {messages.map(msg => {
            const isAgent = msg.sender === 'agent';
            return (
              <View key={msg.id} style={styles.messageWrapper}>
                <View
                  style={[
                    styles.messageRow,
                    isAgent ? styles.agentRow : styles.userRow,
                  ]}
                >
                  {isAgent && (
                    <View style={styles.aiAvatar}>
                      <ChatAiIcon />
                    </View>
                  )}

                  <View
                    style={[
                      styles.bubble,
                      isAgent ? styles.agentBubble : styles.userBubble,
                    ]}
                  >
                    <Text
                      style={[
                        styles.bubbleText,
                        isAgent ? styles.agentText : styles.userText,
                      ]}
                    >
                      {msg.text}
                    </Text>
                  </View>

                  {!isAgent && (
                    <View style={styles.userAvatar}>
                      <UserIcon />
                    </View>
                  )}
                </View>

                {/* Auto Calculated Card for agent messages with showCard: true */}
                {isAgent && msg.showCard && (
                  <View style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                      <VectorAiIcon width={22} height={22} />
                      <Text style={styles.cardHeaderTitle}>Auto Calculated</Text>
                    </View>

                    <View style={styles.cardRow}>
                      <Text style={styles.cardLabel}>Concentration</Text>
                      <Text style={styles.cardValue}>2.5mg/ml</Text>
                    </View>
                    <View style={styles.cardRow}>
                      <Text style={styles.cardLabel}>Unites per dose</Text>
                      <Text style={styles.cardValue}>10 Units</Text>
                    </View>
                    <View style={styles.cardRow}>
                      <Text style={styles.cardLabel}>Total doses in vial</Text>
                      <Text style={styles.cardValue}>20 doses</Text>
                    </View>
                    <View style={styles.cardRow}>
                      <Text style={styles.cardLabel}>
                        Recommended Syringe Type
                      </Text>
                      <Text style={styles.cardValue}>U 100</Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}

          {/* What do you want me do next */}
          <Text style={styles.nextText}>
            What do you want me do next
          </Text>
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => navigation.goBack()}
            >
              <CalendarIcon width={22} height={22} />
              <Text style={styles.actionBtnText}>
                Create a schedule
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionBtn}
              onPress={() => navigation.goBack()}
            >
              <ThumbsUpIcon />
              <Text style={styles.actionBtnText}>
                Save & go to preview
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Collapsible Bottom Panel */}
        <View style={styles.bottomPanel}>
          <TouchableOpacity
            style={styles.panelHeader}
            activeOpacity={0.8}
            onPress={() => setIsExpanded(!isExpanded)}
          >
            <View style={styles.panelTitleRow}>
              <VectorAiIcon width={22} height={22} />
              <Text style={styles.panelTitle}>Tell AI what to do</Text>
            </View>
            <ChevronUpIcon isExpanded={isExpanded} />
          </TouchableOpacity>

          {isExpanded && (
            <View>
              {/* Text Input area */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.textInput}
                  value={inputValue}
                  onChangeText={setInputValue}
                  placeholder="eg : Add 5mcg , 5 ml of BPC with the cycle of on for 7 days and off for 7 days"
                  placeholderTextColor="#8F8F8F"
                  multiline
                />
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={() => handleSend()}
                >
                  <ArrowUpIcon />
                </TouchableOpacity>
              </View>

              {/* Suggestion pills row */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.pillsContainer}
              >
                {suggestionPills.map((pill, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={styles.pill}
                    onPress={() => handleSend(pill.value)}
                  >
                    <Text style={styles.pillText}>{pill.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Add medication manually */}
              <TouchableOpacity
                style={styles.manualButton}
                onPress={() => (navigation as any).navigate('AddManualMedication')}
              >
                <Text style={styles.manualButtonText}>
                  Add medication manually
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default AddMedicationScreen;
