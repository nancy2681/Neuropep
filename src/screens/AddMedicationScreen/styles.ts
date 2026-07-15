import { StyleSheet, Platform } from 'react-native';
import { theme } from '@/theme';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  messageWrapper: {
    marginBottom: 24,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
  },
  agentRow: {
    justifyContent: 'flex-start',
  },
  userRow: {
    justifyContent: 'flex-end',
  },
  aiAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  userAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.avatar,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },
  bubble: {
    maxWidth: '88%',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexShrink: 1,
  },
  agentBubble: {
    backgroundColor: theme.colors.cardBg,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: theme.colors.dashboardCardBg,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 4,
  },
  bubbleText: {
    fontSize: 15,
    lineHeight: 22,
  },
  agentText: {
    color: theme.colors.avatar,
  },
  userText: {
    color: theme.colors.text,
  },
  cardContainer: {
    marginLeft: 32, // align with agent bubble start
    marginTop: 12,
    marginRight: 8,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.gradientStart,
    padding: 16,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  cardHeaderTitle: {
    fontSize: theme.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 15,
    color: theme.colors.cardSubText,
    width: '55%'
  },
  cardValue: {
    fontSize: 15,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  nextText: {
    fontSize: theme.fontSize.md,
    color: theme.colors.cardSubText,
    marginBottom: 12,
    paddingLeft: 32
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    paddingHorizontal: 32
  },
  actionBtn: {
    flex: 1,
    height: 99,
    width: 118,
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 21,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  actionBtnText: {
    fontSize: theme.fontSize.sm,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  bottomPanel: {
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.google,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 8,
  },
  panelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  panelTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  panelTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.text,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.gradientStart,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 12,
    minHeight: 107,
    marginHorizontal: 16
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    maxHeight: 80,
    paddingTop: 4,
    paddingBottom: 4,
  },
  sendButton: {
    alignSelf: "flex-end"
  },
  pillsContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 16,
    marginHorizontal: 16
  },
  pill: {
    backgroundColor: theme.colors.lightPink,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  pillText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  manualButton: {
    height: 52,
    borderWidth: 1,
    borderColor: theme.colors.shadow,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16
  },
  manualButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.textSecondary,
  },
});
