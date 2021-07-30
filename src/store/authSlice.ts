import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types/user';
import { RootState } from './root';

export interface UserState {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    }
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;

export default userSlice.reducer;
