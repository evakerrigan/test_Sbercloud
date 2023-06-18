import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FormValues {
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

export interface FormValuesState {
  formState: Partial<FormValues>;
}
const initialState: FormValuesState = {
  formState: {
    phone: '',
    email: '',
    nickname: '',
    name: '',
    surname: '',
    sex: '',
    advantages: ['a', 'b', 'c'],
    checked: ['', '', ''],
    picked: '',
    about: '',
  },
};

const setFormValues = (state: FormValuesState, action: PayloadAction<Partial<FormValues>>) => {
  state.formState = action.payload;
};

const updateFormValues = (state: FormValuesState, action: PayloadAction<Partial<FormValues>>) => {
  state.formState = { ...state.formState, ...action.payload };
};

export const formSlice = createSlice({
  name: 'formState',
  initialState,
  reducers: {
    setFormValues,
    updateFormValues,
  },
});
