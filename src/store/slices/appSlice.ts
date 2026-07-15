import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isProtocolActivated: boolean;
}

const initialState: AppState = {
  isProtocolActivated: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    activateProtocol: (state) => {
      state.isProtocolActivated = true;
    },
  },
});

export const { activateProtocol } = appSlice.actions;
export default appSlice.reducer;
export { appSlice };
