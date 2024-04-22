import { configureStore } from '@reduxjs/toolkit';
import uniReducer from './Slices/UniversitiesSlice/UniversitiesSlice';
const Store = configureStore({
  reducer: uniReducer,
});

export default Store;
