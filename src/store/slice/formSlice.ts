import { createSlice } from '@reduxjs/toolkit';

export interface FormState {
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
  formState: FormState;
}

export const initialSlice = createSlice({
  name: 'formState',
  initialState: {
    phone: '467876',
    email: 'dfghjk',
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
