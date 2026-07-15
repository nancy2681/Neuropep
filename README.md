# Neuropep

Neuropep is a modern, high-performance React Native application built with TypeScript, Redux Toolkit, and React Navigation. Designed as a peptide and performance tracker, it provides a personalized, AI-driven protocol builder, smart morning briefs, adherence tracking, and interactive logging tools.

---

## Technical Stack & Libraries

- **Core**: React Native (v0.86.0), React (v19.2.3), TypeScript
- **State Management**: Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)
- **Navigation**: React Navigation Suite:
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
  - `@react-navigation/bottom-tabs`
- **User Interface & Styling**: 
  - `react-native-linear-gradient` (Vibrant gradient backdrops)
  - `react-native-svg` & `react-native-svg-transformer` (Scalable vector icons/assets)
  - `react-native-element-dropdown` (Sleek selection dropdowns)
  - Custom thematic stylesheet structure
- **Infrastructure**:
  - `react-native-gesture-handler` & `react-native-safe-area-context`
  - ESLint, Prettier, and TypeScript configurations

---

## Project Structure

```
Neuropep/
├── App.tsx                       # App bootstrapper with providers
├── src/
│   ├── assets/                   # SVG icons and static resources
│   ├── components/               # Highly reusable UI components
│   ├── data/                     # Seed and metadata content for screens
│   ├── navigation/               # App routing configs and tab navigators
│   ├── screens/                  # Feature screens structured in folders
│   ├── store/                    # Redux Toolkit configuration & slices
│   ├── theme.ts                  # Centralized theme tokens (Colors, Spacing, Radius, Fonts)
│   └── types/                    # Custom TypeScript declaration files
```

### Detailed Folder Breakdown

### 1. Components (`src/components/`)
A library of modular UI widgets styled dynamically using `src/theme.ts`:
- **`ScreenContainer`**: Standardized wrapper with Safe Area Handling.
- **`PrimaryButton`**: Highly interactive primary button with support for linear gradients and icons.
- **`GoalCard`**: Selection block designed to display primary goals (e.g., Fat Loss, Muscle Growth) with unique SVGs.
- **`SelectionCard`**: Selection blocks used in experience and baseline configuration.
- **`OptionPillGroup`**: Selectable horizontal pill groups for parameters like Biological Sex, Age, or Frequency.
- **`PriorityPill`**: Customizable toggle pill mapping tracking priorities (Sleep, Weight, Mood, etc.).
- **`LabeledTextInput`**: Premium text inputs featuring localized headers.
- **`NumberStepper`**: A step controller allowing easy incrementing and decrementing of numerical inputs.
- **`StepProgress`**: Horizontal progress bar illustrating builder steps.
- **`SparkleIconBadge`**: Sparkling animated loader badge for AI calculations.
- **`ValueCard`**: Card block for metric analytics (e.g. Weight, Sleep, Recovery).
- **`StatCard`**: General stats metrics display.
- **`SocialButton`**: Login/Authentication mock sign-in card.

### 2. Screens (`src/screens/`)
- **`LoginScreen`**: Welcome screen styled with a hero cover background, Neuropep logo SVG, and a "Continue with Google" action buttons flow.
- **`HomeScreen`**: Responsive dashboard with two distinct layouts controlled by Redux protocol state:
  - *Locked State*: Displays an locked morning brief and prompts the user to activate their peptide protocol with the Protocol Builder.
  - *Unlocked State*: Renders AI Morning Brief metrics, localized weight tracking alerts (dismissible), adherence percentage cards, today's protocol checklist with "Mark as done" functionality, priority metrics cards, and a floating AI chatbot button.
- **`BuilderScreen`**: A multi-step intelligent protocol builder wizard collecting:
  1. Primary Goal selection
  2. Experience levels
  3. Baseline profile parameters (Sex, Age, Weight, Height, Activity)
  4. Dosage frequency & custom reminder timing with a calendar date preview slider
  5. Multi-select tracking priorities
  6. AI generator loading sequence with simulated background checks that transitions into the active state.
- **`AddMedicationScreen`**: Interactive AI chat module allowing automated dosing calculations. Offers suggestions and prints calculated metrics (e.g., units per dose, vial concentration, recommended syringe type).
- **`AddManualMedicationScreen`**: Traditional form-based fallback screen to specify custom dosage, BAC water mixture, concentration, start date, syringe styles, and vial capacity.

### 3. Data (`src/data/`)
Static structures loaded by forms and screens for clean code organization:
- `addManualMedication.ts`: Syringe types, cycle periods, and medication names.
- `addMedication.ts`: Message configurations and suggestion pills.
- `builderScreen.tsx`: Selection data parameters, loading prompts, and button actions.
- `homeScreen.ts`: Checklist items and dosage schedules.

### 4. Navigation (`src/navigation/`)
- `AppNavigator.tsx`: Native stack managing the authorization boundaries and routing screens (`Login`, `Tabs`, `Builder`, `AddMedication`, `AddManualMedication`).
- `MainTabNavigator.tsx`: High-end custom bottom tab bar containing screens (Home, Track, Builder, Lifestyle, Profile) with a specialized central floating Action Modal (Quick Links grid popup).
- `types.ts`: TypeScript configurations for stack parameters (`RootStackParamList`, `RootTabParamList`).

### 5. Store (`src/store/`)
- `store.ts`: Redux Toolkit store registration.
- `hooks.ts`: Typed hooks wrapping `useSelector` and `useDispatch`.
- `slices/appSlice.ts`: Manages global application state including protocol activation (`isProtocolActivated`).

---

## Getting Started

### Prerequisites
- Node.js (>= 22.11.0)
- Watchman (optional, recommended for macOS)
- CocoaPods (for iOS builds)
- Android SDK / Xcode for simulation

### Local Installation & Startup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install iOS pods (macOS only):
   ```bash
   cd ios && pod install && cd ..
   ```

3. Start the Metro bundler:
   ```bash
   npm start
   ```

4. Launch the application:
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```
