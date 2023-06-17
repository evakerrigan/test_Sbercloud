import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  phone: string;
  email: string;
}

export interface IState {
  initialS: InitialState;
}

export const initialSlice = createSlice({
  name: 'initialS',
  initialState: {
    phone: '+7(931)3151738',
    email: 'evakerrigan@gmail.com',
    advantages: [
      '', '', ''
    ]
  },
  reducers: {},
});
// export const selectorInitial = (state: { phone: { value: string; }; }) => {
//   return state?.phone?.value;
// };
