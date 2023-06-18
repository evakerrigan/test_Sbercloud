import { configureStore } from '@reduxjs/toolkit';
import { initialSlice } from './slice/formSlice';
import { userInfoSlice } from './slice/userInfoSlice';


export default configureStore({
  reducer: {
    initialS: initialSlice.reducer,
    userInfoState: userInfoSlice.reducer,
  },
});
