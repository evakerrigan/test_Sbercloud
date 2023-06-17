import { configureStore } from '@reduxjs/toolkit';
import { initialSlice } from './initialSlice';
import { addAdvantSlice } from './addAdvantSlice';

export default configureStore({
  reducer: {
    initialS: initialSlice.reducer,
    addAdv: addAdvantSlice.reducer,
  },
});
