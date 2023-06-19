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
  isOpenSuccessModal: boolean;
  isOpenErrorModal: boolean;
}
const initialState: FormValuesState = {
  isOpenSuccessModal: false,
  isOpenErrorModal: false,
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

const doOpenSuccessModal = (state: FormValuesState) => {
  state.isOpenSuccessModal = true;
};
const doCloseSuccessModal = (state: FormValuesState) => {
  state.isOpenSuccessModal = false;
};
const doOpenErrorModal = (state: FormValuesState) => {
  state.isOpenErrorModal = true;
};
const doCloseErrorModal = (state: FormValuesState) => {
  state.isOpenErrorModal = false;
};

export const selectorFormValues = (appState: { formValuesState: FormValuesState }) =>
  appState.formValuesState.formState || {};

export const selectorIsOpenSuccessModal = (appState: { formValuesState: FormValuesState }) =>
  appState.formValuesState.isOpenSuccessModal;

export const selectorIsOpenErrorModal = (appState: { formValuesState: FormValuesState }) =>
  appState.formValuesState.isOpenErrorModal;

export const formSlice = createSlice({
  name: 'formState',
  initialState,
  reducers: {
    setFormValues,
    updateFormValues,
    doOpenSuccessModal,
    doCloseSuccessModal,
    doOpenErrorModal,
    doCloseErrorModal,
  },
});
