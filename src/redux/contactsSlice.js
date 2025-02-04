import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    ],
  },
};
const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    deleteContacts: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (items) => items.id !== action.payload
      );
    },
    addContacts: (state, action) => {
      state.contacts.items.push(action.payload);
    },
  },
});
export const { deleteContacts, addContacts } = slice.actions;
export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.contacts.items;
