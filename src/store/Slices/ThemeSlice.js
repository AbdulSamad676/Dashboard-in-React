// import { createSlice } from '@reduxjs/toolkit';

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState: { darkMode: false },
//   reducers: {
//     toggleTheme: (state) => {
//       state.darkMode = !state.darkMode;
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { currentTheme: 'light' }, // Default theme is light
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload; // Set the current theme
    },
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark'; // Toggle between dark and light
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
