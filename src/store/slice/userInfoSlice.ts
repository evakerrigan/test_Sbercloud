import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: string;
  advantages: string[];
  checked: string[];
  picked: string;
  about: string;
}

export interface UserInfoState {
  userInfo: UserInfo;
}
const initialState: UserInfoState = {
  userInfo: {
    phone: '',
    email: '',
    nickname: '',
    name: '',
    surname: '',
    sex: '',
    advantages: [],
    checked: [],
    picked: '',
    about: '',
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
