import { configureStore } from '@reduxjs/toolkit';
import { formSlice } from './slice/formSlice';
import { userInfoSlice } from './slice/userInfoSlice';


export default configureStore({
  reducer: {
    formValuesState: formSlice.reducer,
    userInfoState: userInfoSlice.reducer,
  },
});
