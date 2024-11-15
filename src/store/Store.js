import { configureStore } from '@reduxjs/toolkit';
import uniReducer from './Slices/UniversitiesSlice/UniversitiesSlice';
import themeReducer from './Slices/ThemeSlice'; // Adjust path if necessary

const store = configureStore({
  reducer: {
    universities: uniReducer, // Key for the universities slice
    theme: themeReducer,      // Key for the theme slice
  },
});

export default store;
