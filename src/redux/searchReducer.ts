import {createSlice} from '@reduxjs/toolkit'

type SearchType = {
    searchText: string;
}

const initialState: SearchType = {
    searchText: '',
  };

  const searchSlice = createSlice({
    name: 'searching',
    initialState,
    reducers: {
      updateSearchText(state, action) {
        state.searchText = action.payload.toLowerCase();
      },
    },
  });

  export const { updateSearchText } = searchSlice.actions;

  // Export default the slice reducer
  export default searchSlice.reducer;