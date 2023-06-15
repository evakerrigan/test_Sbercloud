import { createSlice } from '@reduxjs/toolkit'

export const initialSlice = createSlice({
  name: 'initialS',
  initialState: {
    phone: '+7(931)3151738',
    email: 'evakerrigan@gmail.com',
  },
  reducers: {
  }
})
export const selectorInitial = (state: { phone: { value: string; }; }) => {
  return state?.phone?.value;
};