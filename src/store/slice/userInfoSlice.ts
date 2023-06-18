import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  phone: string;
  email: string;
}

export interface UserInfoState {
  userInfo: UserInfo;
}
const initialState: UserInfoState = {
  userInfo: {
    phone: '',
    email: '',
  },
};

const setUserInfo = (state: UserInfoState, action: PayloadAction<UserInfo>) => {
  state.userInfo = action.payload;
};

export const selectorUserInfo = (appState: { userInfoState: UserInfoState }): UserInfo =>
  appState.userInfoState.userInfo;

export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState,
  reducers: {
    setUserInfo,
  },
});
