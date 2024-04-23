import { createSlice, nanoid } from '@reduxjs/toolkit';

// Step 1: create initail State
const initialState = {
  uniData: [
    {
      id: 1,
      cardLabel: 'Student Loan',
      labelBg: 'bg-orange-300',
      cardBorder: ' border-l-8 border-amber-500',
      date: '07/01/2021',
      name: 'Mukuba University',
    },
  ],
};

export const UniversitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {
    addUniversity: (state, action) => {
      console.log('action called');

      const uni = {
        id: nanoid(),
        cardLabel: action.payload.cardLabel,
        labelBg: action.payload.labelBg,
        cardBorder: action.payload.cardBorder,
        date: action.payload.date,
        name: action.payload.name,
      };
      state.uniData.push(uni);
    },
    removeUniversity: (state, action) => {
      state.uniData = state.uniData?.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

// exporting individual actions through which we can modify
export const { addUniversity, removeUniversity } = UniversitiesSlice.actions;

// Exporting all the reducers
export default UniversitiesSlice.reducer;
