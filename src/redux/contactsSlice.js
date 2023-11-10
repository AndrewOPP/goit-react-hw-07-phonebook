import { addContactPost, contactsFetch, deleteContactAPI } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  //   reducers: {
  //     addContact: {
  //       reducer(state, action) {
  //         state.push(action.payload);
  //       },
  //     },
  //     deleteContact: {
  //       reducer(state, action) {
  //         return state.filter(elem => elem.id !== action.payload);
  //       },
  //     },
  //   },
  extraReducers: {
    [contactsFetch.pending](state) {
      state.isLoading = true;
    },
    [contactsFetch.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [contactsFetch.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContactPost.pending](state) {
      state.isLoading = true;
    },
    [addContactPost.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts.push(action.payload);
      state.error = null;
    },
    [addContactPost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactAPI.pending](state) {
      state.isLoading = true;
    },
    [deleteContactAPI.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        elem => elem.id !== action.payload.id
      );
      state.error = null;
    },
    [deleteContactAPI.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

export const { addContact, deleteContact, contactNameFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
