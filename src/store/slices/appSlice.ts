import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IS_LOGGED_IN_KEY = '@neuropep_is_logged_in';

interface AppState {
  isProtocolActivated: boolean;
  isLoggedIn: boolean;
  isAuthLoading: boolean;
}

const initialState: AppState = {
  isProtocolActivated: false,
  isLoggedIn: false,
  isAuthLoading: true,
};

export const checkInitialAuth = createAsyncThunk(
  'app/checkInitialAuth',
  async () => {
    try {
      const value = await AsyncStorage.getItem(IS_LOGGED_IN_KEY);
      return value === 'true';
    } catch {
      return false;
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'app/loginWithGoogle',
  async () => {
    await AsyncStorage.setItem(IS_LOGGED_IN_KEY, 'true');
    return true;
  }
);

export const logoutUser = createAsyncThunk(
  'app/logoutUser',
  async () => {
    await AsyncStorage.removeItem(IS_LOGGED_IN_KEY);
    return false;
  }
);

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    activateProtocol: (state) => {
      state.isProtocolActivated = true;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkInitialAuth.pending, (state) => {
        state.isAuthLoading = true;
      })
      .addCase(checkInitialAuth.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(checkInitialAuth.rejected, (state) => {
        state.isLoggedIn = false;
        state.isAuthLoading = false;
      })
      .addCase(loginWithGoogle.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
      });
  },
});

export const { activateProtocol, setLoggedIn } = appSlice.actions;
export default appSlice.reducer;
export { appSlice };

