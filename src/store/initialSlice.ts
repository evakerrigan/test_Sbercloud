import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: string;
  advantages: string[];
  checkbox: string[];
  radio: string;
  about: string;
}

export interface IState {
  initialS: InitialState;
}

export const initialSlice = createSlice({
  name: 'initialS',
  initialState: {
    phone: '+7(931)3151738',
    email: 'evakerrigan@gmail.com',
    nickname: '',
    name: '',
    surname: '',
    sex: '',
    advantages: ['', '', ''],
    checkbox: [],
    radio: null,
    about: '',
  },
  reducers: {},
});
// export const selectorInitial = (state: { phone: { value: string; }; }) => {
//   return state?.phone?.value;
// };
