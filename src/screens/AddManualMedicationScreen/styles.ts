import { StyleSheet } from 'react-native';
import { theme } from '@/theme';

export default StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: theme.fontSize.md,
    fontWeight: '600',
    color: theme.colors.textSecondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  topCard: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  vialWrapper: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCardDetails: {
    flex: 1,
    marginLeft: 16,
  },
  topCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  refillColumn: {
    alignItems: 'flex-start',
  },
  refillButton: {
    marginTop: 4,
  },
  topCardLabel: {
    fontSize: 14,
    color: theme.colors.cardLabel,
    marginBottom: 2,
  },
  topCardValue: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.textSecondary
  },
  colorsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  colorBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBoxActive: {
    borderWidth: 2,
    borderColor: theme.colors.boxColor
  },
  formContainer: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 24,
  },
  formContainerCard: {
    backgroundColor: theme.colors.dashboardCardBg,
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  inputGroup: {
    flexDirection: 'column',
    gap: 8,
  },
  inputLabel: {
    fontSize: theme.fontSize.md,
    fontWeight: '400',
    color: theme.colors.textSecondary,
  },
  dropdownInput: {
    height: 52,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white
  },
  inputText: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },
  inputWithPrefix: {
    height: 52,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  prefixText: {
    fontSize: 15,
    color: theme.colors.cardSubText,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.textSecondary,
    height: '100%',
  },
  inputSimple: {
    height: 52,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
  },
  textInputSimple: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    height: '100%',
    width: '100%',
  },
});
